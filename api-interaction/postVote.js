import fetchData from "./fetching.js";

const postVote = async (imageId, value) => {
  try {
    const [data, error] = await fetchData('https://api.thedogapi.com/v1/votes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'live_r4fgoCfYYtM7C7GDwB1r6FhOWoXofw3eQAStnt3oO3ITPGB3TBM30YoAStGlKXoi'
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