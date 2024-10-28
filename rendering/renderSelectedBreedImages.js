import getBreedImages from '../api-interaction/getBreedImages.js';
import postVote from '../api-interaction/postVote.js';

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
      console.log("Each images id",image.id);

      const upvoteButton = images[index].nextElementSibling;
      const downvoteButton = upvoteButton.nextElementSibling;

      // Had to use this from stack overflow to avoid the event listener attaching multiple times, should look into this further.
      upvoteButton.replaceWith(upvoteButton.cloneNode(true));
      downvoteButton.replaceWith(downvoteButton.cloneNode(true));

      const newUpvoteButton = images[index].nextElementSibling;
      const newDownvoteButton = newUpvoteButton.nextElementSibling;

      newUpvoteButton.addEventListener('click', () => postVote(image.id, 1));
      newDownvoteButton.addEventListener('click', () => postVote(image.id, -1));
    }
  });
};

export default renderSelectedBreedImages;