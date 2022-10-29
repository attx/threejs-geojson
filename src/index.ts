import { Feature, Polygon, LineString } from "@turf/turf";
import { CatmullRomCurve3, ExtrudeGeometry, Shape, Vector2, Vector3 } from "three"

export interface BuildOpts {
  polygonHeight: number
  lineStringWidth: number
  lineStringHeight: number
  lineStringSteps: number
}

export class GeoJsonPreview {
  private polygonHeight!: number
  private lineStringWidth!: number
  private lineStringHeight!: number
  private lineStringSteps!: number

  private features: Feature[] | undefined

  constructor() {
    return this
  }

  public setFeatures(features: unknown) {
    this.features = features as Feature[]
    return this
  }

  public build(features: Feature[], opts: BuildOpts) {
    this.polygonHeight = opts.polygonHeight;
    this.lineStringWidth = opts.lineStringWidth;
    this.lineStringHeight = opts.lineStringHeight;
    this.lineStringSteps = opts.lineStringSteps

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
            this.createPolygonGeometry(innerCoordinates)
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
    const points = coordinates.map((node) => {
      const v = new Vector3(node[0], node[1], 0)
      return v
    })

    const closedSpline = new CatmullRomCurve3(points)
    const shapePoints: Vector2[] = []
    const count = 4
    const extrudeRotation = 1
    const extrudeSettings = {
      steps: this.lineStringSteps,
      bevelEnabled: false,
      extrudePath: closedSpline,
    }
  
    for (let i = 0; i < count; i++) {
      const a = ((2 * i + extrudeRotation) / count) * Math.PI
      shapePoints.push(new Vector2(Math.cos(a) * this.lineStringHeight, Math.sin(a) * this.lineStringWidth))
    }
  
    const shape = new Shape(shapePoints)

    return new ExtrudeGeometry(shape, extrudeSettings)
  }

  private createPolygonGeometry(coordinates: number[][]) {
    const extrudeSettings = {
      steps: 3,
      depth: this.polygonHeight,
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