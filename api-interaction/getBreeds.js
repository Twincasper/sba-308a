import fetchData from './fetching.js';

const getBreeds = async () => {
  const [breeds, error] = await fetchData(
    `https://api.thedogapi.com/v1/breeds`
  );
  console.log(breeds);

  if (error) {
    throw error;
  }

  return breeds;
};

export default getBreeds;