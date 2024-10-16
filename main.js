const headers = new Headers({
  "Content-Type": "application/json",
  "x-api-key": "live_r4fgoCfYYtM7C7GDwB1r6FhOWoXofw3eQAStnt3oO3ITPGB3TBM30YoAStGlKXoi"
});

var requestOptions = {
  method: 'GET',
  headers: headers,
  redirect: 'follow'
};

fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error)); 