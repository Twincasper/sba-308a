import getBreeds from '../api-interaction/getBreeds.js';

const renderNames = async () => {
  const breeds = await getBreeds();
  const dropdown = document.getElementById('breed-dropdown');
  for (const breed of breeds) {
    const option = document.createElement('option');
    option.value = breed.id;
    option.textContent = breed.name;
    dropdown.appendChild(option);
  }
};

export default renderNames;