import { getRandomImages } from "../api-interaction/getRandomImages.js";

export const renderRandomImages = async () => {
  const randomImages = await getRandomImages();
  const randomBreeds = randomImages.sort(() => 0.5 - Math.random()).slice(0, 6);
  const images = document.querySelectorAll(".row img");
  console.log("Random Breeds: ", randomBreeds);

  randomBreeds.forEach((breed, index) => {
    if (images[index]) {
      images[index].src = breed.url;
      images[index].alt = breed.name;
    }
  });
};