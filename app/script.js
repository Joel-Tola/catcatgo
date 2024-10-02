//change the limit to however many images to use
//keep your api_key secure!
const url = "https://api.thecatapi.com/v1/images/search?limit=20";
const api_key = "live_YcR47n5JJYmlr6BxQ28vbpSo1YA76GuV3A25lSHK5Ky52sxXp4K0P7ZtTTQAoEJH"

function init() {
  fetch(url, {
    headers: {
      'x-api-key': api_key
    }
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let imagesData = data;
      imagesData.map(function (imageData) {
  
        let image = document.createElement('img');
        //use the url from the image object
        image.src = `${imageData.url}`;
  
        let gridCell = document.createElement('div');
        gridCell.classList.add('col');
        gridCell.classList.add('col-lg');
        gridCell.appendChild(image)
  
        document.getElementById('grid').appendChild(gridCell);
  
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  
    function learnMore() {
      alert("Stay tuned! More exciting content is on the way.");
  }
}

init();

// Burger Menu Toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('nav-active');

    // Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
 
    // Burger Animation
    burger.classList.toggle('toggle');
});
