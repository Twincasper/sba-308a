import getRandomImages from '../api-interaction/getRandomImages.js';
import postVote from '../api-interaction/postVote.js';
import postFavorite from '../api-interaction/postFavorites.js';

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

      const imageContainer = images[index].parentElement;
      const favoriteButton = imageContainer.querySelector('.favorite-tag');
      const upvoteButton = imageContainer.querySelector('.upvote-tag');
      const downvoteButton = imageContainer.querySelector('.downvote-tag');

      // Clone nodes to avoid attaching multiple event listeners
      favoriteButton.replaceWith(favoriteButton.cloneNode(true));
      upvoteButton.replaceWith(upvoteButton.cloneNode(true));
      downvoteButton.replaceWith(downvoteButton.cloneNode(true));

      const newFavoriteButton = imageContainer.querySelector('.favorite-tag');
      const newUpvoteButton = imageContainer.querySelector('.upvote-tag');
      const newDownvoteButton = imageContainer.querySelector('.downvote-tag');

      newFavoriteButton.addEventListener('click', () => postFavorite(breed.id));
      newUpvoteButton.addEventListener('click', () => postVote(breed.id, 1));
      newDownvoteButton.addEventListener('click', () => postVote(breed.id, -1));
    }
  });
};

export default renderRandomImages;