import fetchData from "./fetching.js";
import { API_KEY, BASE_URL } from "../config.js";

const postVote = async (imageId, value) => {
  try {
    const [data, error] = await fetchData(`${BASE_URL}/votes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY
      },
      body: JSON.stringify({
        image_id: imageId,
        sub_id: 'twincasper',
        value: value
      })
    });

    if (error) {
      console.error('Failed to vote:', error.message);
    } else {
      console.log('Vote successful:', data);
    }
  } catch (error) {
    console.error('Error voting:', error);
  }
};

export default postVote;