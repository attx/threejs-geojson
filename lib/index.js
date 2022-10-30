"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeoJsonPreview = void 0;
const three_1 = require("three");
class GeoJsonPreview {
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
                    polygonGeometries.push(this.createPolygonGeometry(innerCoordinates));
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
        const points = coordinates.map((node) => {
            const v = new three_1.Vector3(node[0], node[1], 0);
            return v;
        });
        const closedSpline = new three_1.CatmullRomCurve3(points);
        const shapePoints = [];
        const count = 4;
        const extrudeRotation = 1;
        const extrudeSettings = {
            steps: this.lineStringSteps,
            bevelEnabled: false,
            extrudePath: closedSpline,
        };
        for (let i = 0; i < count; i++) {
            const a = ((2 * i + extrudeRotation) / count) * Math.PI;
            shapePoints.push(new three_1.Vector2(Math.cos(a) * this.lineStringHeight, Math.sin(a) * this.lineStringWidth));
        }
        const shape = new three_1.Shape(shapePoints);
        return new three_1.ExtrudeGeometry(shape, extrudeSettings);
    }
    createPolygonGeometry(coordinates) {
        const extrudeSettings = {
            steps: 3,
            depth: this.polygonHeight,
            bevelEnabled: false,
        };
        const shape = new three_1.Shape();
        coordinates.forEach((cord, index) => {
            if (!index)
                shape.moveTo(cord[0], cord[1]);
            else
                shape.lineTo(cord[0], cord[1]);
        });
        return new three_1.ExtrudeGeometry(shape, extrudeSettings);
    }
}
exports.GeoJsonPreview = GeoJsonPreview;
