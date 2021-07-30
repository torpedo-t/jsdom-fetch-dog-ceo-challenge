console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
    fetchImages()
})

function fetchImages() {
    return fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => {
        // console.log(json)
        renderImages(json.message)
    })
}

function renderImages(images) {
    // console.log(images)
const imageContainer = document.getElementById('dog-image-container')
images.forEach(image => {
    // console.log(image)
    const img = document.createElement('img')
    img.src = image
    imageContainer.appendChild(img)
})}
// on page load
// fetch the images using the the url below
// parse the responses as JSON
// add image elements to the DOM for each image in the array
// const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function fetchDogs() {
    return fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(json => {
        // console.log(json)
        // renderBreeds(json)
    })
}

function renderBreeds(breeds)
const list = document.getElementById('dog-breeds')
breeds.forEach(breed => {
    console.log(breed)
    const listItem = document.createElement('li')

})
// on page load
// fetch all the dog breeds using the url below
// add the breeds to the page in an <ul> 


// once all of the breeds are rendered in the <ul>
//  add javascript so that the font color of a particular <li> changes on click.

// add javascript so that the user can filter breeds that start with a particular letter using a drop down
