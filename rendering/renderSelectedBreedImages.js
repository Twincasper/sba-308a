import { getBreedImages } from "../api-interaction/getBreedImages.js";

export const renderSelectedBreedImages = async () => {
  const dropdown = document.getElementById("breed-dropdown");
  const images = document.querySelectorAll(".row img");
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