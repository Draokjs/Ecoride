document.addEventListener('DOMContentLoaded', () => {
  const departure = document.getElementById("villeDepart");
  const arrival = document.getElementById("villeArrivee");

  // // Vérification basique pour éviter erreurs si les éléments sont absents
  // if (!departure || !arrival) {
  //   console.error("Les champs de ville sont introuvables !");
  //   return;
  // }

  // === Arrow Inversion ===
  const arrowBtn = document.getElementById("arrow");
  if (arrowBtn) {
    arrowBtn.addEventListener("click", () => {
      const temp = departure.value;
      departure.value = arrival.value;
      arrival.value = temp;
    });
  }

  // Affiche le message d’erreur dans un span correspondant
  function showError(inputId, message) {
    const errorSpan = document.getElementById(`error-${inputId}`);
    if (errorSpan) {
      errorSpan.textContent = message;
    }
  }

  // === Form Validation ===
  function validateForm() {
    const minPassengers = 1;
    const maxPassengers = 5;

    // Effacer les messages d’erreur précédents
    document.querySelectorAll(".error-message").forEach(span => span.textContent = "");

    const dateDepartureInput = document.getElementById("dateDepart");
    const dateArrivalInput = document.getElementById("dateArrivee");
    const passengersInput = document.getElementById("passengers");

    const dateDeparture = dateDepartureInput ? dateDepartureInput.value.trim() : "";
    const dateArrival = dateArrivalInput ? dateArrivalInput.value.trim() : "";
    const passengers = passengersInput ? parseInt(passengersInput.value, 10) : NaN;

    let valid = true;

    if (!departure.value.trim()) {
      showError("villeDepart", "Veuillez entrer une ville de départ.");
      valid = false;
    }

    if (!arrival.value.trim()) {
      showError("villeArrivee", "Veuillez entrer une ville d'arrivée.");
      valid = false;
    }

    if (!dateDeparture) {
      showError("dateDepart", "Veuillez sélectionner une date de départ.");
      valid = false;
    }

    if (!dateArrival) {
      showError("dateArrivee", "Veuillez sélectionner une date d'arrivée.");
      valid = false;
    }

    if (
      departure.value.trim() &&
      arrival.value.trim() &&
      departure.value.trim() === arrival.value.trim()
    ) {
      showError("villeArrivee", "La ville de départ et d'arrivée ne peuvent pas être identiques.");
      valid = false;
    }

    if (dateDeparture && dateArrival) {
      const depDate = new Date(dateDeparture);
      const arrDate = new Date(dateArrival);
      if (depDate > arrDate) {
        showError("dateDepart", "La date de départ ne peut pas être après la date d'arrivée.");
        valid = false;
      }
    }

    if (isNaN(passengers) || passengers < minPassengers || passengers > maxPassengers) {
      showError("passengers", `Le nombre de passagers doit être entre ${minPassengers} et ${maxPassengers}.`);
      valid = false;
    }

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

    // Sauvegarde dans localStorage
    localStorage.setItem("search", JSON.stringify({
      dateDeparture,
      dateArrival,
      departure: departure.value.trim(),
      arrival: arrival.value.trim(),
      numberOfPassengers: passengers
    }));

    return true;
  }

  // Gestion soumission formulaire
  const searchForm = document.getElementById("search");
  if (searchForm) {
    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (validateForm()) {
        searchForm.reset();
        window.open("Resultat.html", "_top");
      }
    });
  }
});
