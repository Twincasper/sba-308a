import getRandomImages from '../api-interaction/getRandomImages.js';

const renderRandomImages = async () => {
  const randomImages = await getRandomImages();
  const randomBreeds = randomImages.sort(() => 0.5 - Math.random()).slice(0, 6);
  const images = document.querySelectorAll('.row img');
  console.log('Random Breeds: ', randomBreeds);

  randomBreeds.forEach((breed, index) => {
    if (images[index]) {
      images[index].src = breed.url;
      images[index].alt = breed.name;
      images[index].dataset.breedId = breed.id;
      console.log("image id: ", images[index].dataset.breedId);
    }
  });
};

export default renderRandomImages;