# threejs-geojson

![Preview](https://github.com/attx/three-geojson/blob/main/preview.png?raw=true)

#### Example
```typescript
const roadMaterial = new MeshLambertMaterial({ color: 'lightgreen', emissive: '#000' });
const buildingMaterial = new MeshLambertMaterial({ color: 'lightblue', emissive: '#000' });

const preview = new GeoJsonPreview();
const { lineStringGeometries, polygonGeometries } = preview.build(features, {
  polygonHeight: 1,
  lineStringWidth: 0.25,
  lineStringHeight: 0.1,
  lineStringSteps: 96,
});

const roads = lineStringGeometries.map((feature) => new Mesh(feature, roadMaterial));
const buildings = polygonGeometries.map((feature) => new Mesh(feature, buildingMaterial));

scene.add(...roads, ...buildings);
```