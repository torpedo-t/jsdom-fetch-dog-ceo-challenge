// console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
    fetchImages()
    fetchBreeds()
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
    const imageContainer = document.getElementById("dog-image-container")
    images.forEach(image => {
    // console.log(image)
    const img = document.createElement('img')
    img.src = image
    imageContainer.appendChild(img)
})}

function fetchBreeds() {
    return fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(json => {
        console.log(json)
        const breeds = Object.keys(json.message)
        renderBreeds(breeds)
    })
}

function renderBreeds(breeds) {
    const ul = document.getElementById("dog-breeds")
    breeds.forEach(breed => {
    // console.log(breed)
    const li = document.createElement('li')
    li.innerText = breed
    ul.appendChild(li)
    li.addEventListener("click", function(event) {
        event.target.style.color = "blue"
    })
})
}
// on page load
// fetch all the dog breeds using the url below
// add the breeds to the page in an <ul> 


// once all of the breeds are rendered in the <ul>
//  add javascript so that the font color of a particular <li> changes on click.

// add javascript so that the user can filter breeds that start with a particular letter using a drop down
