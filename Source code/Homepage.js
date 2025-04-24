function inverseArrow() {
  const departure = document.getElementById("Ville de départ");
  const arrival = document.getElementById("Ville d'arrivée");
  const temp = departure.value;
  departure.value = arrival.value;
  arrival.value = temp;
}

function validateForm() {
  const form = document.getElementById("submit");
  const dateDeparture = document.getElementById("Date").value;
  const dateArrival = document.getElementById("DateArrivee").value;
  const departure = document.getElementById("Ville de départ").value;
  const arrival = document.getElementById("Ville d'arrivée").value;
  const numberOfPassengers = document.getElementById("Nombre de passagers").value;

  if (!dateDeparture || !dateArrival || !departure || !arrival || !numberOfPassengers) {
    return false;
  }

  const dateDepartureDate = new Date(dateDeparture);
  const dateArrivalDate = new Date(dateArrival);

  if (dateDepartureDate > dateArrivalDate) {
    alert("La date de depart ne peut pas etre apres la date d'arrivee");
    console.log("Form validation: false - invalid dates");
    return false;
  }

  if (departure === arrival) {
    alert("La ville de depart ne peut pas etre la meme que la ville d'arrivee");
    console.log("Form validation: false - same city");
    return false;
  }

  if (numberOfPassengers < 1 || numberOfPassengers > 5) {
    alert("Le nombre de passagers doit etre compris entre 1 et 5");
    console.log("Form validation: false - invalid number of passengers");
    return false;
  }

  console.log("Form validation: true");
  localStorage.setItem("search", JSON.stringify({
    dateDeparture,
    dateArrival,
    departure,
    arrival,
    numberOfPassengers
  }));
  return true;
}

document.getElementById("submit").addEventListener("click", function(event) {
  event.preventDefault();
  if (validateForm()) {
    window.open("Resultat.html", "_top");
  }
});

