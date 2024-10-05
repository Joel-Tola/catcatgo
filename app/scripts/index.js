//change the limit to however many images to use
//keep your api_key secure!
(async function fetchCatImages() {
    const url = "https://api.thecatapi.com/v1/images/search?limit=14";
    const api_key = "live_YcR47n5JJYmlr6BxQ28vbpSo1YA76GuV3A25lSHK5Ky52sxXp4K0P7ZtTTQAoEJH";
  
    const grid = document.getElementById('grid');
    
    if(grid.children){
      grid.innerHTML = ''; // Clear previous content
    }
  
    try {
        const response = await fetch(url, {
            headers: { 'x-api-key': api_key }
        });
  
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const imagesData = await response.json();
  
        imagesData.forEach(imageData => {
            const image = document.createElement('img');
            image.src = imageData.url;
            image.alt = imageData.url;
            image.onclick = function () {
              fetchCatImages();
            }
  
            const gridCell = document.createElement('div');
            gridCell.appendChild(image);
  
            document.getElementById('grid').appendChild(gridCell);
        });
    } catch (error) {
        console.error('Error fetching cat images:', error);
        const grid = document.getElementById('grid');
        grid.textContent = 'Failed to load cat images. Please try again later.';
    }
  })();

  function learnMore() {
    // Alerts can be intrusive and are generally discouraged in modern web development.
    // For user Experience is better redirecting to a section of the page or displaying content dynamically.
      window.location.href = 'about.html';
    }