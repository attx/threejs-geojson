import { CatmullRomCurve3, ExtrudeGeometry, Shape, Vector2, Vector3 } from "three";
export class GeoJsonPreview {
    constructor() {
        return this;
    }
    build(features, opts) {
        this.polygonHeight = opts.polygonHeight;
        this.lineStringWidth = opts.lineStringWidth;
        this.lineStringHeight = opts.lineStringHeight;
        this.lineStringSteps = opts.lineStringSteps;
        return this.createEntities(features);
    }
    createEntities(features) {
        const lineStringGeometries = [];
        const polygonGeometries = [];
        features.forEach((feature) => {
            if (feature.geometry.type === 'Polygon') {
                const { coordinates } = feature.geometry;
                coordinates.forEach((innerCoordinates) => {
                    polygonGeometries.push(this.createPolygonGeometry(innerCoordinates, feature.properties));
                });
            }
            if (feature.geometry.type === 'LineString') {
                const { coordinates } = feature.geometry;
                lineStringGeometries.push(this.createLineStringGeometry(coordinates));
            }
        });
        return { lineStringGeometries, polygonGeometries };
    }
    createLineStringGeometry(coordinates) {
        const count = 4;
        const extrudeRotation = 1;
        const shapePoints = [];
        for (let i = 0; i < count; i++) {
            const a = ((2 * i + extrudeRotation) / count) * Math.PI;
            shapePoints.push(new Vector2(Math.cos(a) * (this.lineStringHeight * 0.7), Math.sin(a) * this.lineStringWidth));
        }
        const points = coordinates.map((node) => new Vector3(node[0], node[1], this.lineStringHeight / 2));
        const extrudeSettings = {
            steps: this.lineStringSteps,
            bevelEnabled: false,
            extrudePath: new CatmullRomCurve3(points),
        };
        const shape = new Shape(shapePoints);
        return new ExtrudeGeometry(shape, extrudeSettings);
    }
    createPolygonGeometry(coordinates, properties) {
        let height = this.polygonHeight;
        console.log(properties);
        if (properties) {
            const levels = properties['building:levels'] || 0;
            height += levels * (this.polygonHeight / 2);
            const roofLevels = properties['roof:levels'] || 0;
            height += roofLevels * (this.polygonHeight / 2);
        }
        const extrudeSettings = {
            steps: 3,
            depth: height,
            bevelEnabled: false,
        };
        const shape = new Shape();
        coordinates.forEach((cord, index) => {
            if (!index)
                shape.moveTo(cord[0], cord[1]);
            else
                shape.lineTo(cord[0], cord[1]);
        });
        return new ExtrudeGeometry(shape, extrudeSettings);
    }
}
