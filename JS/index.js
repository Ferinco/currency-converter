const apiKey = 'kMXxXFD5oM9NNjAclnnBEgiB6WmGCPN8aWPf8ymi';
const apiUrl = `https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Handle the API response
    console.log(data);
  })
  .catch(error => {
    // Handle any errors
    console.error('Error:', error);
  });
