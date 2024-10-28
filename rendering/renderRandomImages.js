import getRandomImages from '../api-interaction/getRandomImages.js';
import postVote from '../api-interaction/postVote.js';

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

      const upvoteButton = images[index].nextElementSibling;
      const downvoteButton = upvoteButton.nextElementSibling;

      // Had to use this from stack overflow to avoid the event listener attaching multiple times, should look into this further.
      upvoteButton.replaceWith(upvoteButton.cloneNode(true));
      downvoteButton.replaceWith(downvoteButton.cloneNode(true));

      const newUpvoteButton = images[index].nextElementSibling;
      const newDownvoteButton = newUpvoteButton.nextElementSibling;

      newUpvoteButton.addEventListener('click', () => postVote(breed.id, 1));
      newDownvoteButton.addEventListener('click', () => postVote(breed.id, -1));
    }
  });
};

export default renderRandomImages;