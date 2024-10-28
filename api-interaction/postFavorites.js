import fetchData from "./fetching.js";

const postFavorite = async (imageId) => {
  try {
    const [data, error] = await fetchData('https://api.thedogapi.com/v1/favourites', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'live_r4fgoCfYYtM7C7GDwB1r6FhOWoXofw3eQAStnt3oO3ITPGB3TBM30YoAStGlKXoi'
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
