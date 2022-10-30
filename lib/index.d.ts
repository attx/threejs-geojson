import { Feature } from "@turf/turf";
import { ExtrudeGeometry } from "three";
export interface BuildOpts {
    polygonHeight: number;
    lineStringWidth: number;
    lineStringHeight: number;
    lineStringSteps: number;
}
export declare class GeoJsonPreview {
    private polygonHeight;
    private lineStringWidth;
    private lineStringHeight;
    private lineStringSteps;
    constructor();
    build(features: Feature[], opts: BuildOpts): {
        lineStringGeometries: ExtrudeGeometry[];
        polygonGeometries: ExtrudeGeometry[];
    };
    private createEntities;
    private createLineStringGeometry;
    private createPolygonGeometry;
}
