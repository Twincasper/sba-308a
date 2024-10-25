import { fetchData } from "./fetching.js";

export const getRandomImages = async () => {
  const [data, error] = await fetchData(`https://api.thedogapi.com/v1/images/search?limit=10`);
  if (error) {
    console.error(`Failed to fetch random images: ${error.message}`);
    return [];
  }
  return data;
}