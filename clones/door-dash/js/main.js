
const topChains = [
    "Dunkin'", "Subway®", "Chick-fil-A", "McDonald's", "Starbucks",
    "Wingstop", "Burger King", "Walgreens", "Dollar General", "7-Eleven",
    "Wendy's", "Popeyes Louisiana Kitchen", "Taco Bell", "Chipotle Mexican Grill", "Panda Express"
];

const topCities = [
    "New York", "Houston", "San Francisco", "Vancouver, BC", "Bend", "Salt Lake City", "Birmingham", "Victoria", "Christchurch", "Huntsville",
    "Los Angeles", "Brooklyn", "Seattle", "Miami", "Kamloops"
];

const topCitiesRemaining = [
    "New York", "Houston", "San Francisco", "Vancouver, BC", "Bend", "Salt Lake City", "Birmingham", "Victoria", "Christchurch", "Huntsville",
    "Los Angeles", "Brooklyn", "Seattle", "Miami", "Kamloops", "Jacksonville", "New Orleans", "Columbia", "Milwaukee", "Des Moines",
    "Toronto", "San Diego", "Atlanta", "San Antonio", "Tulsa", "Colorado Springs", "Lexington", "Scottsdale", "Pittsburgh", "Quebec City",
    "Chicago", "Las Vegas", "Queens", "Tallahassee", "Austin", "Wilmington", "Orlando", "Augusta", "Ft. Worth", "All Cities"
];
const topCuisines = [
    "Pizza", "Cafe", "Seafood", "Burgers", "Vegan Food",
    "Chinese Food", "Thai Food", "Indian Food", "Asian Food", "Sandwiches",
    "Sushi", "Lunch", "Dessert", "Italian Food", "Restaurants"
];



const franchiseLinks = document.querySelectorAll('#franchise-links');
const franchiseData = document.querySelector('.franchise-data');
const defaultLink = document.querySelector('.default-link');

let seeMoreButton = document.querySelector('.see-more-button');
let seeLessButton = document.querySelector('.see-less-button');
let seeMoreContainer = document.querySelector('.see-more-container ');
let seeLessContainer = document.querySelector('.see-less-container ');

let renderedList;

franchiseLinks.forEach(link => {

    link.addEventListener('click', (e) => {
        const clickedLink = Array.from(franchiseLinks)
            .filter(link => link.innerText !== e.target.innerText);
        clickedLink.forEach(link => {
            link.classList.remove('clicked-style')
        })

        e.target.classList.add('clicked-style');
        e.target.style.color = 'black'

        if (e.target.innerText === "Top Cuisines") {
            renderedList = '';
            topCuisines.forEach(data => {
                renderedList += `<li>${data}</li>`
            });
            seeLessContainer.style.display = "none";
            seeMoreContainer.style.display = "none";
        }

        else if (e.target.innerText === "Top Cities") {

            renderedList = '';
            topCities.forEach(data => {
                renderedList += `<li>${data}</li>`
            });
            seeMoreContainer.style.display = "flex";
        }

        else {
            renderedList = '';
            topChains.forEach(data => {
                renderedList += `<li>${data}</li>`
            });
            seeLessContainer.style.display = "none";
            seeMoreContainer.style.display = "none";
        }

        franchiseData.innerHTML = renderedList
    })
})


seeMoreButton.addEventListener('click', () => {
    console.log('cl')
    renderedList = '';
    topCitiesRemaining.forEach(data => {
        renderedList += `<li>${data}</li>`
    });
    franchiseData.innerHTML = renderedList;

    seeLessContainer.style.display = "flex";
    seeMoreContainer.style.display = "none";
})

seeLessButton.addEventListener('click', () => {
    renderedList = '';
    topCities.forEach(data => {
        renderedList += `<li>${data}</li>`
    });
    franchiseData.innerHTML = renderedList;

    seeLessContainer.style.display = "none";
    seeMoreContainer.style.display = "flex";
})


window.addEventListener('load', () => {
    defaultLink.click();
})
