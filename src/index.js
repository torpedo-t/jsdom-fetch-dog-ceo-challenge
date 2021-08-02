console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const breedDropDown = document.getElementById("breed-dropdown")
let breeds = []


document.addEventListener("DOMContentLoaded", function() {
    fetchImages()
    fetchBreeds()
})

function fetchImages() {
    return fetch(imgUrl)
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
    return fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => {
        // console.log(json)
        const breeds = Object.keys(json.message)
        updateBreeds(breeds)
        renderFilteredBreeds()
    })
}
 
function updateBreeds(breeds) {
    const ul = document.getElementById("dog-breeds")
    breeds.forEach(breed => {
        const li = document.createElement('li')
        li.innerText = breed
        ul.appendChild(li)
        li.addEventListener("click", function(event) {
            event.target.style.color = "blue"
        })
    })
}

function renderFilteredBreeds() {
    let dropDown = document.getElementById("breed-dropdown")
    console.log(document)
    dropDown.addEventListener("change", function(event) {
        fetchFilteredBreeds(event.target.value)
    })
}

// associate a constant with the array of dog breeds
function fetchFilteredBreeds(letter) { 
    updateBreeds(breeds.filter(breed => breed.startswith(letter)))
}

// call on renderFilteredBreeds()