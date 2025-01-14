console.log('%c HI', 'color: firebrick')
let breeds = []

document.addEventListener("DOMContentLoaded", function() {
  loadImages();
  loadBreeds();
})

function loadImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

  return fetch(imgUrl)
    .then(resp => resp.json())
    .then(results => {
      results.message.forEach(image => addImage(image))
    });
}

function addImage(picUrl) {
  const container = document.getElementById("dog-image-container");
  const newImage = document.createElement('img');
  newImage.src = picUrl;
  container.appendChild(newImage);
}

function loadBreeds() {
  return fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(results => {
      breeds = Object.keys(results.message);
      console.log(breeds)
      populatingListItems(breeds);
    //   addBreeds(breeds);
      addBreedsEventListener();
    });
}

// function addBreeds(breeds) {
//   const ul = document.getElementById("dog-breeds");

// }

function populatingListItems(breeds) {
    console.log('Im here')
    const ul = document.getElementById("dog-breeds");
    // delete html elements children
    deleteBreeds(ul); 
    breeds.forEach(breed => {
    const li = document.createElement("li");
    li.innerText = breed;
    ul.appendChild(li);
    li.addEventListener("click", function(event) {
      event.target.style.color = "blue";
    });
  });
}

// 
function addFilteredBreeds(letter) {
    populatingListItems(breeds.filter(breed => breed.startsWith(letter)))
    // .startsWith('Sat'));
}

function addBreedsEventListener() {
    let dropDown = document.getElementById('breed-dropdown');
    dropDown.addEventListener("change", function(event) {
        console.log(event.target.value)
        addFilteredBreeds(event.target.value)
    })
}

function deleteBreeds(htmlElement) {
    let child = htmlElement.lastElementChild;
    console.log(child)
    
    while (htmlElement.parentNode) {
        htmlElement.parentNode.removeChild(htmlElement);
        console.log(htmlElement);
    }
}

// associate variable with DOM element with id breed-dropdown
// let dropDown = document.findElementById('breed-dropdown');
// add change event listener to the variable 
// dropDown.addEventListener('change', function(event) {
// addFilteredBreeds(event.target.value)
// })