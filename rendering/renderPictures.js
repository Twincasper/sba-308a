import { getBreeds } from "../api-interaction/getBreeds.js";
import { getRandomImages } from "../api-interaction/getRandomImages.js";
import { getBreedImages } from "../api-interaction/getBreedImages.js";
import { renderRandomImages } from "./renderRandomImages.js";

export const renderPictures = async () => {
  const dropdown = document.getElementById("breed-dropdown");
  const images = document.querySelectorAll(".row img");
  const fetch = document.querySelector('#fetch');
  
  renderRandomImages();

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
  fetch.addEventListener("click", renderRandomImages);
};