import axios from 'axios';

export async function searchRestaurants(overpassQuery: string) {
  const response = await axios.post(
    'https://overpass-api.de/api/interpreter',
    overpassQuery,
    {
      headers: {
        'Content-Type': 'text/plain'
      }
    }
  );

  return response.data;
}