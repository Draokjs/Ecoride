// === Arrow Inversion ===
document.getElementById("arrow").addEventListener("click", () => {
  const departure = document.getElementById("departure-city");
  const arrival = document.getElementById("arrival-city");

  const temp = departure.value;
  departure.value = arrival.value;
  arrival.value = temp;
});

// === Form Validation ===
function validateForm() {
  const departure = document.getElementById("departure-city");
  const arrival = document.getElementById("arrival-city");
  const dateDeparture = document.getElementById("DepartureDate").value;
  const dateArrival = document.getElementById("ArrivalDate").value;
  const passengers = parseInt(document.getElementById("Passengers").value, 10);

  if (!dateDeparture || !dateArrival || !departure.value || !arrival.value || !passengers) {
    alert("Veuillez remplir tous les champs.");
    document.getElementById("Passengers").focus();
    return false;
  }

  const depDate = new Date(dateDeparture);
  const arrDate = new Date(dateArrival);

  if (depDate > arrDate) {
    alert("La date de départ ne peut pas être après la date d'arrivée.");
    return false;
  }

  if (departure.value === arrival.value) {
    alert("La ville de départ et d'arrivée ne peuvent pas être identiques.");
    return false;
  }

  if (passengers < 1 || passengers > 5) {
    alert("Le nombre de passagers doit être entre 1 et 5.");
    return false;
  }

  // Save search data
  localStorage.setItem("search", JSON.stringify({
    dateDeparture,
    dateArrival,
    departure: departure.value,
    arrival: arrival.value,
    numberOfPassengers: passengers
  }));

  return true;
}

if (!departure.value.trim() || !arrival.value.trim()) {
  alert("Les champs de ville ne peuvent pas être vides.");
  return false;
}


// === Handle form submission ===
document.getElementById("search").addEventListener("submit", (event) => {
  event.preventDefault();
  if (validateForm()) {
    document.getElementById("search").reset();
    window.open("Resultat.html", "_top");
  }
});
