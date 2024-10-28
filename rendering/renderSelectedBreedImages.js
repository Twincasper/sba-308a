import getBreedImages from '../api-interaction/getBreedImages.js';
import postVote from '../api-interaction/postVote.js';
import postFavorite from '../api-interaction/postFavorites.js';

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
      console.log("Each images id", image.id);

      const imageContainer = images[index].parentElement;
      const favoriteButton = imageContainer.querySelector('.favorite-tag');
      const upvoteButton = imageContainer.querySelector('.upvote-tag');
      const downvoteButton = imageContainer.querySelector('.downvote-tag');

      console.log("What favorite is grabbing", favoriteButton);
      console.log("What upvote is grabbing", upvoteButton);
      console.log("What downvote is grabbing", downvoteButton);

      // Clone nodes to avoid attaching multiple event listeners
      favoriteButton.replaceWith(favoriteButton.cloneNode(true));
      upvoteButton.replaceWith(upvoteButton.cloneNode(true));
      downvoteButton.replaceWith(downvoteButton.cloneNode(true));

      const newFavoriteButton = imageContainer.querySelector('.favorite-tag');
      const newUpvoteButton = imageContainer.querySelector('.upvote-tag');
      const newDownvoteButton = imageContainer.querySelector('.downvote-tag');

      console.log("What new favorite is grabbing", newFavoriteButton);
      console.log("What new upvote is grabbing", newUpvoteButton);
      console.log("What new downvote is grabbing", newDownvoteButton);

      newFavoriteButton.addEventListener('click', () => postFavorite(image.id));
      newUpvoteButton.addEventListener('click', () => postVote(image.id, 1));
      newDownvoteButton.addEventListener('click', () => postVote(image.id, -1));
    }
  });
};

export default renderSelectedBreedImages;