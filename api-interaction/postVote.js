import fetchData from "./fetching.js";

const postVote = async (imageId, value) => {
  try {
    const response = await fetchData('https://api.thecatapi.com/v1/votes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'YOUR_API_KEY'
      },
      body: JSON.stringify({
        image_id: imageId,
        sub_id: 'twincasper',
        value: value
      })
    });

    if (response.ok) {
      console.log('Vote successful');
    } else {
      console.error('Failed to vote');
    }
  } catch (error) {
    console.error('Error voting:', error);
  }
};

export default postVote;