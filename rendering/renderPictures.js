import { getBreeds } from "../api-interaction/getBreeds.js";
import { getBreedImages } from "../api-interaction/getBreedImages.js";

export const renderPictures = async () => {
  const breeds = await getBreeds();
  const dropdown = document.getElementById("breed-dropdown");
  const images = document.querySelectorAll(".row img");

  const renderRandomImages = () => {
    const randomBreeds = breeds.sort(() => 0.5 - Math.random()).slice(0, 6);

    randomBreeds.forEach((breed, index) => {
      if (images[index]) {
        images[index].src = breed.url;
        images[index].alt = breed.name;
      }
    });
  };

  const renderSelectedBreedImages = async () => {
    const selectedBreedId = dropdown.value;
    const breedImages = await getBreedImages(selectedBreedId);
    console.log(breedImages);

    breedImages.forEach((image, index) => {
      if (images[index]) {
        images[index].src = image.url;
        images[index].alt = image.name || "Cat Image";
      }
    });
  };

  if (dropdown.value !== 'placeholder') {
    await renderSelectedBreedImages();
  } else {
    renderRandomImages();
  }

  dropdown.addEventListener("change", renderSelectedBreedImages);
};