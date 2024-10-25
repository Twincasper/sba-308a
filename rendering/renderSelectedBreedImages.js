import getBreedImages from '../api-interaction/getBreedImages.js';

const renderSelectedBreedImages = async () => {
  const dropdown = document.getElementById('breed-dropdown');
  const images = document.querySelectorAll('.row img');
  const selectedBreedId = dropdown.value;
  const breedImages = await getBreedImages(selectedBreedId);
  console.log(breedImages);

  breedImages.forEach((image, index) => {
    if (images[index]) {
      images[index].src = image.url;
      images[index].alt = image.name || `Image of ${image.name}`;
      images[index].dataset.breedId = image.id;
      console.log("image id for selectedBreed: ", images[index].dataset.breedId);
    }
  });
};

export default renderSelectedBreedImages;