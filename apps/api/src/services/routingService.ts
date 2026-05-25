import axios from 'axios';

export async function getWalkingDistance(
  start: [number, number],
  end: [number, number]
) {
  const apiKey = process.env.ORS_API_KEY;

  const response = await axios.post(
    'https://api.openrouteservice.org/v2/directions/foot-walking',
    {
      coordinates: [start, end]
    },
    {
      headers: {
        Authorization: apiKey,
        'Content-Type': 'application/json'
      }
    }
  );

  return response.data;
}