window.onload = function() {
  // Display cities of departure and arrival from searchform
  const searchData = JSON.parse(localStorage.getItem("search"));
  document.getElementById("Valuedeparture").innerHTML = searchData.departure + " -> " + searchData.arrival;
  document.getElementById("Datedeparture").innerHTML = new Date(searchData.dateDeparture).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' }).replace(/^\w/, c => c.toUpperCase())
    + " , passagers: " + searchData.numberOfPassengers;

  // Generate 5 buttons with the next 5 days, starting from the first day of the trip
  document.getElementById("Tripresultdate").innerHTML = Array.from({ length: 5 }, (_, i) => {
    const date = new Date(Date.parse(searchData.dateDeparture) + (i + 1) * 24 * 60 * 60 * 1000); // add i+1 days to today
    return `<button class="btn btn-outline-info me-2">${date.toLocaleDateString('fr-FR', { weekday: 'long' }).replace(/^\w/, c => c.toUpperCase())} ${date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</button>`;
  }).join('');

  // Show tripstart and tripend with random values max 24H and 60min AND random city
  document.getElementById("Tripstart").innerHTML = 
    `<b>${`${Math.floor(Math.random() * 24)}`.padStart(2, '0')}h ${`${Math.floor(Math.random() * 60)}`.padStart(2, '0')}</b>
     Paris, ${["Champs-Élysées", "Boulevard Saint-Germain", "Rue de Rivoli", "Avenue Montaigne", "Rue de la Paix"][Math.floor(Math.random() * 5)]}`;

  document.getElementById("Tripend").innerHTML = 
    `<b>${`${Math.floor(Math.random() * 24)}`.padStart(2, '0')}h ${`${Math.floor(Math.random() * 60)}`.padStart(2, '0')}</b>
     Marseille, ${["Champs-Élysées", "Boulevard Saint-Germain", "Rue de Rivoli", "Avenue Montaigne", "Rue de la Paix"][Math.floor(Math.random() * 5)]}`;

  //  Display price logo
  document.getElementById("TripPrice").innerHTML = `${Math.floor(Math.random() * 100)} <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-coin" viewBox="0 0 16 16">
  <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z"/>
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12"/>
  </svg>`;
}

// Generate random price start and end
const tripStart = document.getElementById("Tripstart").innerHTML.match(/\d{2}h \d{2}/)?.[0];
const tripEnd = document.getElementById("Tripend").innerHTML.match(/\d{2}h \d{2}/)?.[0];

// Generate random trip duration
const [startHours, startMinutes] = tripStart ? tripStart.split('h ').map(Number) : [0, 0];
const [endHours, endMinutes] = tripEnd ? tripEnd.split('h ').map(Number) : [0, 0];

let tripDurationHours = (endHours - startHours + 24) % 24;
let tripDurationMinutes = endMinutes - startMinutes;

if (tripDurationMinutes < 0) {
  tripDurationMinutes += 60;
  tripDurationHours = (tripDurationHours - 1 + 24) % 24;
}

// Addition tirplength and display result
const tripDuration = `Direct: ${tripDurationHours.toString().padStart(2, '0')}:${tripDurationMinutes.toString().padStart(2, '0')}`;
document.getElementById("Triplength").innerHTML = tripDuration;

// Button to change trip path
const myButton = document.getElementById("modifyButton")
const myForm  = document.querySelector(".form")

myForm.style.display = "none";

myButton.addEventListener("click",event => {
  if (myForm.style.display === "none"){
      myForm.style.display = "block";
      myForm.style.background = "white";
  } else {
    myForm.style.display = "none";
    myForm.style.background = "transparent";
  }
});

myForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const isVisible = getComputedStyle(myForm).display === "block";
  if (!isVisible) {
    console.log("Form is hidden — skipping submission.");
    return;
  }

  // Example validation - check inputs inside myForm
  const departureInput = myForm.querySelector("#departure-city");
  const arrivalInput = myForm.querySelector("#arrival-city");
  const dateDepartureInput = myForm.querySelector("#DepartureDate");
  const dateArrivalInput = myForm.querySelector("#ArrivalDate");
  const passengersInput = myForm.querySelector("#Passengers");

  // Empty check:
  if (
    !departureInput.value.trim() ||
    !arrivalInput.value.trim() ||
    !dateDepartureInput.value.trim() ||
    !dateArrivalInput.value.trim() ||
    !passengersInput.value.trim()
  ) {
    alert("Veuillez remplir tous les champs.");
    return;
  }

  alert("Form submitted!");
});


