import { Group, Material } from "three";
export declare class GeoJsonPreview {
    private polygonGeometries;
    private lineStringGeometries;
    private lineStringWidth;
    private polygonMaterial;
    private lineStringMaterial;
    private features;
    constructor();
    getPolygonGroup(): Group;
    getLineStringGroup(): Group;
    setPolygonMaterial(material: Material): void;
    setLineStringMaterial(material: Material): void;
    setFeatures(features: unknown): void;
    buildEntities(): void;
    private clearEntities;
    private addLineString;
    private addPolygon;
}
