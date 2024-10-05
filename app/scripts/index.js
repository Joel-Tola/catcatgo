// Function to fetch cat images from thecatapi.com
// The function runs immediately using an IIFE (Immediately Invoked Function Expression)
// which runs the function as soon as the script is loaded. 
// This is a common pattern when we want to execute code immediately without calling the function explicitly elsewhere.
(async function fetchCatImages() {
    
  // API endpoint to fetch 14 cat images
  const url = "https://api.thecatapi.com/v1/images/search?limit=14";
  
  // Secret API key for authentication (should be kept secure)
  const api_key = "live_YcR47n5JJYmlr6BxQ28vbpSo1YA76GuV3A25lSHK5Ky52sxXp4K0P7ZtTTQAoEJH";

  // Select the HTML element where the images will be displayed
  const grid = document.getElementById('grid');
  
  // Clear previous content in the grid before loading new images
  if(grid.children) {
      grid.innerHTML = ''; // Clear the grid content to prevent duplicate images
  }

  try {
      // Fetch data from the API, using the API key in the headers
      const response = await fetch(url, {
          headers: { 'x-api-key': api_key }  // Provide API key in the request header for authentication
      });

      // Check if the response is successful (status code 200-299)
      if (!response.ok) {
          // If response is not OK, throw an error with the status code
          throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Parse the response as JSON to extract the image data
      const imagesData = await response.json();

      // Loop through the array of image data and create image elements dynamically
      imagesData.forEach(imageData => {
          const image = document.createElement('img');  // Create an <img> element
          image.src = imageData.url;  // Set the image URL
          image.alt = imageData.url;  // Set the alt text to the image URL (for accessibility)
          
          // Add an event listener to each image to allow fetching more images on click
          image.onclick = function () {
              fetchCatImages();  // When an image is clicked, fetch new cat images
          }

          // Create a container div for each image (could be styled as a grid cell)
          const gridCell = document.createElement('div');
          gridCell.appendChild(image);  // Append the image to the div

          // Append the div (grid cell) to the grid
          document.getElementById('grid').appendChild(gridCell);
      });
  } catch (error) {
      // If there's an error during the fetch process, log it in the console
      console.error('Error fetching cat images:', error);

      // Display an error message on the page if images fail to load
      const grid = document.getElementById('grid');
      grid.textContent = 'Failed to load cat images. Please try again later.';
  }
})();

// Function to navigate to the 'about' page when the user clicks 'Learn More'
function learnMore() {
  // Using window.location.href to redirect the user to the 'about.html' page
  // Alerts can be intrusive; it's better to use a dynamic approach
  window.location.href = 'about.html';
}
