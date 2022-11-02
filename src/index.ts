import { Feature, Polygon, LineString, Properties } from "@turf/turf";
import { CatmullRomCurve3, ExtrudeGeometry, Shape, Vector2, Vector3 } from "three"

export interface BuildOpts {
  lineStringWidth: number
  lineStringHeight: number
  lineStringSteps: number

  polygonMinHeight: number
  polygonMaxHeight: number
  polygonHeightPerLevel: number
}

export class GeoJsonPreview {
  private lineStringWidth!: number
  private lineStringHeight!: number
  private lineStringSteps!: number

  private polygonMinHeight!: number
  private polygonMaxHeight!: number
  private polygonHeightPerLevel!: number

  constructor() {
    return this
  }

  public build(features: Feature[], opts: BuildOpts) {
    this.polygonMinHeight = opts.polygonMinHeight;
    this.lineStringWidth = opts.lineStringWidth;
    this.lineStringHeight = opts.lineStringHeight;
    this.lineStringSteps = opts.lineStringSteps

    this.polygonMinHeight = opts.polygonMinHeight
    this.polygonMaxHeight = opts.polygonMaxHeight
    this.polygonHeightPerLevel = opts.polygonHeightPerLevel

    return this.createEntities(features);
  }

  private createEntities(features: Feature[]) {
    const lineStringGeometries: ExtrudeGeometry[] = [];
    const polygonGeometries: ExtrudeGeometry[] = [];

    features.forEach((feature) => {
      if (feature.geometry.type === 'Polygon') {
        const { coordinates } = feature.geometry as Polygon
        coordinates.forEach((innerCoordinates) => {
          polygonGeometries.push(
            this.createPolygonGeometry(innerCoordinates, feature.properties)
          );
        })
      }
      
      if (feature.geometry.type === 'LineString') {
        const { coordinates } = feature.geometry as LineString
        lineStringGeometries.push(
          this.createLineStringGeometry(coordinates)
        );
      }
    })

    return { lineStringGeometries, polygonGeometries }
  }
  
  private createLineStringGeometry(coordinates: number[][]) {  
    const count = 4
    const extrudeRotation = 1
    const shapePoints: Vector2[] = []

    for (let i = 0; i < count; i++) {
      const a = ((2 * i + extrudeRotation) / count) * Math.PI
      shapePoints.push(
        new Vector2(Math.cos(a) * (this.lineStringHeight * 0.7),
        Math.sin(a) * this.lineStringWidth)
      )
    }
  
    const points = coordinates.map((node) => new Vector3(node[0], node[1], this.lineStringHeight / 2))
    const extrudeSettings = {
      steps: this.lineStringSteps,
      bevelEnabled: false,
      extrudePath: new CatmullRomCurve3(points),
    }

    const shape = new Shape(shapePoints)
    return new ExtrudeGeometry(shape, extrudeSettings)
  }

  private getHeightFromProperties(properties: Properties) {
    let height = this.polygonMinHeight;

    if (properties && properties['building:levels']) {
      height += this.polygonHeightPerLevel * properties['building:levels'];
    }

    if (height > this.polygonMaxHeight) return this.polygonMaxHeight;
    return height;
  }

  private createPolygonGeometry(coordinates: number[][], properties: Properties) {
    const extrudeSettings = {
      steps: 3,
      depth: this.getHeightFromProperties(properties),
      bevelEnabled: false,
    }

    const shape = new Shape()
    coordinates.forEach((cord, index) => {
      if (!index) shape.moveTo(cord[0], cord[1])
      else shape.lineTo(cord[0], cord[1])
    })

    return new ExtrudeGeometry(shape, extrudeSettings)
  }
}