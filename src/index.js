console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


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
        renderBreeds(breeds)
    })
}

function renderBreeds(breeds) {
    // console.log(breeds)
    updateBreeds(breeds)
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
    console.log(dropDown)
    dropDown.addEventListener("change", function(event) {
        filterBreeds(event.target.value)
    })
}

// associate a constant with the array of dog breeds
function filterBreeds(letter) { 
    return fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => {
        const breeds = Object.keys(json.message)
    const breedStartsWith = breeds.filter(breed => breed.startswith(letter))
    updateBreeds(breedStartsWith)
})
}

// renderFilteredBreeds()

// call on renderFilteredBreeds()