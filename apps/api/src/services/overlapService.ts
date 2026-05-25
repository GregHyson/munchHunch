import * as turf from '@turf/turf';

export function createOverlapArea(
  userA: { lat: number; lng: number; radiusKm: number },
  userB: { lat: number; lng: number; radiusKm: number }
) {
  const circleA = turf.circle(
    [userA.lng, userA.lat],
    userA.radiusKm,
    { units: 'kilometers' }
  );

  const circleB = turf.circle(
    [userB.lng, userB.lat],
    userB.radiusKm,
    { units: 'kilometers' }
  );

  return turf.intersect(
    turf.featureCollection([circleA, circleB])
  );
}