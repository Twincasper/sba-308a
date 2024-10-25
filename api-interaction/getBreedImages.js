import fetchData from './fetching.js';

const getBreedImages = async (selectedBreedId) => {
  const [data, error] = await fetchData(
    `https://api.thedogapi.com/v1/images/search?limit=6&breed_ids=${selectedBreedId}`
  );
  if (error) {
    console.error(`Failed to fetch breed images: ${error.message}`);
    return [];
  }
  return data;
};

export default getBreedImages;