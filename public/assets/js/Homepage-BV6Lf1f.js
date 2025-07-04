const departure = document.getElementById("departure-city");
const arrival = document.getElementById("arrival-city");

// === Arrow Inversion ===
document.getElementById("arrow").addEventListener("click", () => {
  const temp = departure.value;
  departure.value = arrival.value;
  arrival.value = temp;
});

// === Form Validation ===
function validateForm() {
  // Configurable passenger limits
  const minPassengers = 1;
  const maxPassengers = 5;

  // Clear previous error messages
  document.querySelectorAll(".error-message").forEach(span => span.textContent = "");

  const dateDeparture = document.getElementById("DepartureDate").value.trim();
  const dateArrival = document.getElementById("ArrivalDate").value.trim();
  const passengersInput = document.getElementById("Passengers");
  const passengers = parseInt(passengersInput.value, 10);

  let valid = true;

  if (!departure.value.trim()) {
    showError("departure-city", "Veuillez entrer une ville de départ.");
    valid = false;
  }

  if (!arrival.value.trim()) {
    showError("arrival-city", "Veuillez entrer une ville d'arrivée.");
    valid = false;
  }

  if (!dateDeparture) {
    showError("DepartureDate", "Veuillez sélectionner une date de départ.");
    valid = false;
  }

  if (!dateArrival) {
    showError("ArrivalDate", "Veuillez sélectionner une date d'arrivée.");
    valid = false;
  }

  if (departure.value.trim() && arrival.value.trim() && departure.value.trim() === arrival.value.trim()) {
    showError("arrival-city", "La ville de départ et d'arrivée ne peuvent pas être identiques.");
    valid = false;
  }

  if (dateDeparture && dateArrival) {
    const depDate = new Date(dateDeparture);
    const arrDate = new Date(dateArrival);
    if (depDate > arrDate) {
      showError("DepartureDate", "La date de départ ne peut pas être après la date d'arrivée.");
      valid = false;
    }
  }

  if (isNaN(passengers) || passengers < minPassengers || passengers > maxPassengers) {
    showError("Passengers", `Le nombre de passagers doit être entre ${minPassengers} et ${maxPassengers}.`);
    valid = false;
  }

  // Explicit check: block submission if any field empty
  if (
    !departure.value.trim() ||
    !arrival.value.trim() ||
    !dateDeparture ||
    !dateArrival ||
    isNaN(passengers)
  ) {
    valid = false;
  }

  if (!valid) return false;

  // Save search data
  localStorage.setItem("search", JSON.stringify({
    dateDeparture,
    dateArrival,
    departure: departure.value.trim(),
    arrival: arrival.value.trim(),
    numberOfPassengers: passengers
  }));

  return true;
}

// Show inline error
function showError(inputId, message) {
  const errorSpan = document.getElementById(`error-${inputId}`);
  if (errorSpan) {
    errorSpan.textContent = message;
  }
}

// === Handle form submission ===
document.getElementById("search").addEventListener("submit", (event) => {
  event.preventDefault();
  if (validateForm()) {
    document.getElementById("search").reset();
    window.open("Resultat.html", "_top");
  }
});

// === Autocomplete ===
document.querySelectorAll('.autocomplete').forEach(input => {
  input.addEventListener('input', function() {
    const type = this.dataset.type;  // 'depart' or 'arrivee'
    const query = this.value;
    if (query.length < 2) {
      document.getElementById('suggestions-' + type).innerHTML = '';
      return;
    }
    fetch(`/trip/autocomplete?q=${encodeURIComponent(query)}&type=${type}`)
      .then(response => response.json())
      .then(data => {
        const suggestionsList = document.getElementById('suggestions-' + type);
        suggestionsList.innerHTML = '';
        if (data.length === 0) {
          const li = document.createElement('li');
          li.textContent = 'Aucune ville trouvée';
          suggestionsList.appendChild(li);
          return;
        }
        data.forEach(city => {
          const li = document.createElement('li');
          li.textContent = city;
          li.addEventListener('click', () => {
            input.value = city;
            suggestionsList.innerHTML = '';
          });
          suggestionsList.appendChild(li);
        });
      });
  });

  // Optionally close suggestions when clicking outside
  document.addEventListener('click', (e) => {
    const suggestionsList = document.getElementById('suggestions-' + input.dataset.type);
    if (!suggestionsList.contains(e.target) && e.target !== input) {
      suggestionsList.innerHTML = '';
    }
  });
});

