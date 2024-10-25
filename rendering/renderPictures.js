import { renderRandomImages } from "./renderRandomImages.js";
import { renderSelectedBreedImages } from "./renderSelectedBreedImages.js";

export const renderPictures = async () => {
  const dropdown = document.getElementById("breed-dropdown");
  const fetch = document.querySelector('#fetch');
  
  renderRandomImages();

  renderSelectedBreedImages();

  if (dropdown.value !== 'placeholder') {
    await renderSelectedBreedImages();
  } else {
    renderRandomImages();
  }

  dropdown.addEventListener("change", renderSelectedBreedImages);
  fetch.addEventListener("click", renderRandomImages);
};