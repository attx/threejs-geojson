"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeoJsonPreview = void 0;
const three_1 = require("three");
class GeoJsonPreview {
    constructor() {
        this.polygonGeometries = new three_1.Group();
        this.lineStringGeometries = new three_1.Group();
        this.lineStringWidth = 0.1;
        return this;
    }
    getPolygonGroup() {
        return this.polygonGeometries;
    }
    getLineStringGroup() {
        return this.lineStringGeometries;
    }
    setPolygonMaterial(material) {
        this.polygonMaterial = material;
    }
    setLineStringMaterial(material) {
        this.lineStringMaterial = material;
    }
    setFeatures(features) {
        this.features = features;
    }
    buildEntities() {
        this.clearEntities();
        if (!this.features)
            return;
        this.features.forEach((feature) => {
            if (feature.geometry.type === 'Polygon') {
                const { coordinates } = feature.geometry;
                coordinates.forEach((innerCoordinates) => {
                    this.addPolygon(innerCoordinates);
                });
            }
            else if (feature.geometry.type === 'LineString') {
                const { coordinates } = feature.geometry;
                this.addLineString(coordinates);
            }
        });
    }
    clearEntities() {
        this.lineStringGeometries.clear();
        this.polygonGeometries.clear();
    }
    addLineString(coordinates) {
        const points = coordinates.map((node) => {
            const v = new three_1.Vector3(node[0], node[1], 0);
            return v;
        });
        const closedSpline = new three_1.CatmullRomCurve3(points);
        const stepsPerLine = 38;
        const shapePoints = [];
        const count = 4;
        const extrudeRotation = 1;
        const extrudeSettings = {
            steps: stepsPerLine,
            bevelEnabled: false,
            extrudePath: closedSpline,
        };
        for (let i = 0; i < count; i++) {
            const a = ((2 * i + extrudeRotation) / count) * Math.PI;
            shapePoints.push(new three_1.Vector2(Math.cos(a) * this.lineStringWidth, Math.sin(a) * this.lineStringWidth));
        }
        const shape = new three_1.Shape(shapePoints);
        const geometry = new three_1.ExtrudeGeometry(shape, extrudeSettings);
        const mesh = new three_1.Mesh(geometry, this.lineStringMaterial);
        mesh.geometry.computeBoundingBox();
        this.lineStringGeometries.add(mesh);
    }
    addPolygon(coordinates) {
        const extrudeSettings = {
            steps: 3,
            depth: 1,
            bevelEnabled: false,
        };
        const shape = new three_1.Shape();
        coordinates.forEach((cord, index) => {
            if (!index)
                shape.moveTo(cord[0], cord[1]);
            else
                shape.lineTo(cord[0], cord[1]);
        });
        const geometry = new three_1.ExtrudeGeometry(shape, extrudeSettings);
        const mesh = new three_1.Mesh(geometry, this.polygonMaterial);
        mesh.castShadow = true;
        this.polygonGeometries.add(mesh);
    }
}
exports.GeoJsonPreview = GeoJsonPreview;
