import type { Feature, Position } from "@turf/turf"
import { CatmullRomCurve3, ExtrudeGeometry, Group, Material, Mesh, Shape, Vector2, Vector3 } from "three"

export class GeoJsonPreview {
  private polygonGeometries = new Group()
  private lineStringGeometries = new Group()
  private lineStringWidth = 0.1
  private polygonMaterial: Material | undefined
  private lineStringMaterial: Material | undefined

  private features: Feature[] | undefined

  constructor() {
    return this
  }

  public getPolygonGroup() {
    return this.polygonGeometries
  }

  public getLineStringGroup() {
    return this.lineStringGeometries
  }

  public setPolygonMaterial(material: Material) {
    this.polygonMaterial = material
  }

  public setLineStringMaterial(material: Material) {
    this.lineStringMaterial = material
  }

  public setFeatures(features: unknown) {
    this.features = features as Feature[]
  }

  public buildEntities() {
    this.clearEntities()
    if (!this.features) return

    this.features.forEach((feature) => {
      if (feature.geometry.type === 'Polygon') {
        const { coordinates } = feature.geometry
        coordinates.forEach((innerCoordinates) => {
          this.addPolygon(innerCoordinates as Position[])
        })
      } else if (feature.geometry.type === 'LineString') {
        const { coordinates } = feature.geometry
        this.addLineString(coordinates as Position[])
      }
    })
  }

  private clearEntities() {
    this.lineStringGeometries.clear()
    this.polygonGeometries.clear()
  }

  private addLineString(coordinates: number[][]) {
    const points = coordinates.map((node) => {
      const v = new Vector3(node[0], node[1], 0)
      return v
    })

    const closedSpline = new CatmullRomCurve3(points)
    const stepsPerLine = 38
    const shapePoints: Vector2[] = []
    const count = 4
    const extrudeRotation = 1
    const extrudeSettings = {
      steps: stepsPerLine,
      bevelEnabled: false,
      extrudePath: closedSpline,
    }
  
    for (let i = 0; i < count; i++) {
      const a = ((2 * i + extrudeRotation) / count) * Math.PI
  
      shapePoints.push(new Vector2(Math.cos(a) * this.lineStringWidth, Math.sin(a) * this.lineStringWidth))
    }
  
    const shape = new Shape(shapePoints)
    const geometry = new ExtrudeGeometry(shape, extrudeSettings)
    const mesh = new Mesh(geometry, this.lineStringMaterial)
    mesh.geometry.computeBoundingBox()

    this.lineStringGeometries.add(mesh)
  }

  private addPolygon(coordinates: number[][]) {
    const extrudeSettings = {
      steps: 3,
      depth: 1,
      bevelEnabled: false,
    }

    const shape = new Shape()
    coordinates.forEach((cord, index) => {
      if (!index) shape.moveTo(cord[0], cord[1])
      else shape.lineTo(cord[0], cord[1])
    })

    const geometry = new ExtrudeGeometry(shape, extrudeSettings)
    const mesh = new Mesh(geometry, this.polygonMaterial)
    mesh.castShadow = true

    this.polygonGeometries.add(mesh)
  }
}
