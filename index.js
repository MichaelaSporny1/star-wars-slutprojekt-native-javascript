let rightBtn = document.querySelector(".right-btn")
let nameContainer = document.querySelector(".name-container")
let previousButton  = document.querySelector(".previous-class");
let detailContainer = document.querySelector(".mid")
let planetDetails = document.querySelector(".lower2");
let currentPage = document.querySelector(".current-page")
let leftBtn = document.querySelector(".left-btn")
let nextButton = document.querySelector(".right-btn")
let characterNames = document.querySelector(".name-container")

let pageCounter = 1;



window.addEventListener("load", loadFirstPage);
nextButton.addEventListener("click", loadNextPage)
leftBtn.addEventListener("click", loadPrevPage)



async function loadFirstPage() {
    currentPage.innerText=pageCounter;
    characterNames.innerHTML = "";
    showLoaderName()
    const response = await fetch("https://swapi.dev/api/people/?page=1") 
    const data = await response.json()
    hideLoader()
    renderName(data.results)
    buttonStatus()
    
    // displayInfo(data.results);

}


async function loadNextPage() {
    pageCounter++; 
    currentPage.innerText=pageCounter;
    characterNames.innerHTML = ""; 
    showLoader()
    const response = await fetch("https://swapi.dev/api/people/?page=" + pageCounter) 
    const data = await response.json()
    hideLoader() 
    renderName(data.results)
    buttonStatus()
    
}

async function loadPrevPage() {
    pageCounter--; 
    currentPage.innerText=pageCounter;
    characterNames.innerHTML = ""; 
    showLoader()
    const response = await fetch("https://swapi.dev/api/people/?page=" + pageCounter) 
    const data = await response.json()
    hideLoader()
    renderName(data.results)
    buttonStatus()
}


function buttonStatus(){
    nextButton.disabled  = (pageCounter == 9) ? true : false; 
    leftBtn.disabled  = (pageCounter == 1) ? true : false; 
}

function showLoader(){
    planetDetails.innerHTML = `
    <div class="load-container">
    <div class="loading"><div>
    </div>
    `   
     detailContainer.innerHTML = `
      <div class="load-container">
      <div class="loading"><div>
      </div>     
    `   
}
function showLoaderName(){
    nameContainer.innerHTML = `
    <div class="load-container">
      <div class="loading"><div>
      </div>
    `   
}

function hideLoader(){
    planetDetails.innerHTML = ``   
    detailContainer.innerHTML = ``   
    nameContainer.innerHTML = ``
}


function renderName(data){
    for (let user of data) {
        let buttons = document.createElement("button")     
        buttons.classList.add("name-btn")
        buttons.innerText = user.name;
        characterNames.append(buttons)
        buttons.addEventListener("click", function(){
            printCharacter(user)
            // loadHomeworld(user)
            loadspecies(user)
        })
    }
}



function printCharacter(user) {
    
        let userDetails = document.querySelector(".mid");
        userDetails.innerHTML = `
          <h3>${user.name}</h3>
        <p>Height: ${user.height}</p>
        <p>Mass: ${user.mass}</p>
        <p>Hair color: ${user.hair_color}</p>
        <p>Skin color: ${user.skin_color}</p>
        <p>Eye color: ${user.eye_color}</p>
        <p>Birth year: ${user.birth_year}</p>
        <p>Gender: ${user.gender}</p>
        `              
    }
    async function loadHomeworld(user) {
    
        const homeworld = await fetch(user.homeworld)
        const homeworldData = await homeworld.json()
    
        planetDetails.innerHTML = `
          <h3>${homeworldData.name}</h3>
        <p>Rotation period: ${homeworldData.rotation_period}</p>
        <p>Orbital period: ${homeworldData.orbital_period}</p>
        <p>Diameter: ${homeworldData.diameter}</p>
        <p>Climate: ${homeworldData.climate}</p>
        <p>Gravity: ${homeworldData.gravity}</p>
        <p>Terrain: ${homeworldData.terrain}</p>
        ` 
    }

    async function loadspecies(user) {
     try{
        const species = await fetch(user.species)
        const speciesData = await species.json()
        
        planetDetails.innerHTML = `
          <h3>${speciesData.name}</h3>
        <p>Classification: ${speciesData.classification}</p>
        <p>Designation: ${speciesData.designation}</p>
        <p>Average height: ${speciesData.average_height}</p>
        <p>Skin colors: ${speciesData.skin_colors}</p>
        <p>Hair colors: ${speciesData.hair_colors}</p>
        <p>Eye colors: ${speciesData.eye_colors}</p>
        <p>Average lifespan: ${speciesData.average_lifespan}</p>
        <p>Homeworld: ${speciesData.homeworld}</p>
        <p>Language: ${speciesData.language}</p>
        `  
    } catch(error){
        planetDetails.innerHTML = `
      IT'S A FUCKING HUMAN
      `  
        }  
    }

    async function loadVehicles(user) {
        const vehicles = await fetch(user.vehicles)
        const vehiclesData = await vehicles.json()
        
    
        planetDetails.innerHTML = `
          <h3>${vehiclesData.name}</h3>
        <p>Model: ${vehiclesData.model}</p>
        <p>Manufacturer: ${vehiclesData.manufacturer}</p>
        <p>Cost in credits: ${vehiclesData.cost_in_credits}</p>
        <p>Length: ${vehiclesData.length}</p>
        <p>Max atmosphering speed: ${vehiclesData.max_atmosphering_speed}</p>
        <p>Crew: ${vehiclesData.crew}</p>
        <p>Passengers: ${vehiclesData.passengers}</p>
        <p>cargo capacity: ${vehiclesData.cargo_capacity}</p>
        <p>Consumables: ${vehiclesData.consumables}</p>
        <p>Vehicle class: ${vehiclesData.vehicle_class}</p>
        <p>Pilots: ${vehiclesData.pilots}</p>
        `  
    }


    async function loadStarships(user) {
        const starships = await fetch(user.starships)
        const starshipsData = await starships.json()
        
    
        planetDetails.innerHTML = `
          <h3>${starshipsData.name}</h3>
        <p>Model: ${starshipsData.model}</p>
        <p>Manufacturer: ${starshipsData.manufacturer}</p>
        <p>Cost in credits: ${starshipsData.cost_in_credits}</p>
        <p>Length: ${starshipsData.length}</p>
        <p>Max atmosphering speed: ${starshipsData.max_atmosphering_speed}</p>
        <p>Crew: ${starshipsData.crew}</p>
        <p>Passengers: ${starshipsData.passengers}</p>
        <p>cargo capacity: ${starshipsData.cargo_capacity}</p>
        <p>Consumables: ${starshipsData.consumables}</p>
        <p>Hyperdrive rating: ${starshipsData.hyperdrive_rating}</p>
        <p>MGLT: ${starshipsData.mglt}</p>
        <p>Starship class: ${starshipsData.starship_class}</p>
        <p>Pilots: ${starshipsData.pilots}</p>
        `  
    }