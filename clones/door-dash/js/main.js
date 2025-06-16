
const topChains = [
    "Dunkin'", "Subway®", "Chick-fil-A", "McDonald's", "Starbucks",
    "Wingstop", "Burger King", "Walgreens", "Dollar General", "7-Eleven",
    "Wendy's", "Popeyes Louisiana Kitchen", "Taco Bell", "Chipotle Mexican Grill", "Panda Express"
];

const topCities = [
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
const defaultLink = document.querySelector('.default-link')

franchiseLinks.forEach(link => {

    link.addEventListener('click', (e) => {
        const clickedLink = Array.from(franchiseLinks)
            .filter(link => link.innerText !== e.target.innerText);
        clickedLink.forEach(link => {
            link.classList.remove('clicked-style')
        })

        e.target.classList.add('clicked-style');
        e.target.style.color = 'black'

        let renderedList;

        if (e.target.innerText === "Top Cuisines") {
            renderedList = '';
            topCuisines.forEach(data => {
                renderedList += `<li>${data}</li>`
            });
        }

        else if (e.target.innerText === "Top Cities") {
            renderedList = '';
            topCities.forEach(data => {
                renderedList += `<li>${data}</li>`
            });

        }

        else {
            renderedList = '';
            topChains.forEach(data => {
                renderedList += `<li>${data}</li>`
            });
        }

        franchiseData.innerHTML = renderedList
    })
})

window.addEventListener('load', () => {
    defaultLink.click();
})



