console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {

})

function fetchImages() {
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => {
        // renderImages(json)
    })
}

function renderImages(images)
const imageContainer = document.querySelectory('#dog-image-container')
images.forEach(image => {
    const 
})
// on page load
// fetch the images using the the url below
// parse the responses as JSON
// add image elements to the DOM for each image in the array
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function fetchDogs() {
    return fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => {
        // renderBreeds(json)
    })
}

// on page load
// fetch all the dog breeds using the url below
// add the breeds to the page in an <ul> 
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

// once all of the breeds are rendered in the <ul>
//  add javascript so that the font color of a particular <li> changes on click.

// add javascript so that the user can filter breeds that start with a particular letter using a drop down
