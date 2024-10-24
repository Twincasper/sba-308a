// https://api.thedogapi.com/v1/breeds
import { fetchData } from "./fetching.js"


export const getBreeds = async () => {
  const [breeds, error] = await fetchData(`https://api.thecatapi.com/v1/breeds`);
  console.log(breeds);

  if (error) {
    throw error;
  }

  return breeds;
}