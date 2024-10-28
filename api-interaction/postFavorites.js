import fetchData from "./fetching.js";
import { API_KEY, BASE_URL } from "../config.js";

const postFavorite = async (imageId) => {
  try {
    const [data, error] = await fetchData(`${BASE_URL}/favourites`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY
      },
      body: JSON.stringify({
        image_id: imageId,
        sub_id: 'twincasper'
      })
    });

    if (error) {
      console.error('Failed to favorite:', error.message);
    } else {
      console.log('Doggo has been added to your favorites:', data);
    }
  } catch (error) {
    console.error('Error favoriting:', error);
  }
};

export default postFavorite;
