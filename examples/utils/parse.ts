import { polygon, lineString, bboxClip, BBox, Feature, Position, Geometry, Properties } from "@turf/turf";

interface ParseParams {
  width?: number;
  height?: number;
  size: number;
  lon: number;
  lat: number;
}

export function clip(features: Feature[], width: number, height: number) {
  const hW = width / 2;
  const hH = height / 2;
  const boundaries: BBox = [-hH, -hW, hH, hW]

  return features.map((feature) => clipGeoJsonToBoundaries(feature, boundaries))
}

function clipGeoJsonToBoundaries(feature: Feature, boundaries: BBox) {
  if (feature.geometry.type === 'Polygon') {
    const cords = polygon(feature.geometry.coordinates as Position[][])
    return bboxClip(cords, boundaries)
  }
  else if (feature.geometry.type === 'LineString') {
    const cords = lineString(feature.geometry.coordinates as Position[])
    return bboxClip(cords, boundaries)
  }
  return feature
}

export function parse(features: Feature<Geometry, Properties>[], params: ParseParams): Feature<Geometry, Properties>[] {
  return features.map((feature: Feature<Geometry, Properties>) => parseFeature(feature, params))
}

function parseFeature(feature: Feature<Geometry, Properties>, params: ParseParams) {
  if (feature.geometry.type === 'Polygon') {
    feature.geometry.coordinates[0] = mapCoordinates(feature.geometry.coordinates[0] as Position[], params)
  }
  else if (feature.geometry.type === 'LineString') {
    feature.geometry.coordinates = mapCoordinates(feature.geometry.coordinates as Position[], params)
  }
  return feature
}

function getMapDimensions(size: number, lat: number) {
  const earthRadius = 6378;
  const distance = 0.165 / size

  const newLon = (distance / earthRadius) * (180 / Math.PI)
  const newLat = (distance / earthRadius) * (180 / Math.PI) / Math.cos(lat * Math.PI / 180)

  return {
    height: newLon * 2,
    width: newLat * 2,
  }
}

function mapCoordinates(coordinates: Position[], params: ParseParams): number[][] {
  const mapSize = getMapDimensions(params.size, params.lat)
  const boundaries = getMapBoundaries(params.lat, params.lon, mapSize.width, mapSize.height);

  return coordinates.map((c) => {
    return [
      (c[0] - boundaries[0]) / mapSize.width - 0.5,
      (c[1] - boundaries[1]) / mapSize.height - 0.5,
    ]
  })
}

function getMapBoundaries(lat: number, lon: number, mapWidth: number, mapSize: number): BBox {
  return [
    lon - (mapWidth / 2),
    lat - (mapSize / 2),
    lon + (mapWidth / 2),
    lat + (mapSize / 2),
  ]
}
