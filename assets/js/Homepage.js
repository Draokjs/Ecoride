document.addEventListener('DOMContentLoaded', () => {
  const arrowBtn = document.getElementById("arrow");
  const departure = document.getElementById("search_Ville_depart");
  const arrival = document.getElementById("search_Ville_arrivee");
  const searchForm = document.getElementById("search");

  if (arrowBtn && departure && arrival) {
    arrowBtn.addEventListener("click", () => {
      const temp = departure.value;
      departure.value = arrival.value;
      arrival.value = temp;
      console.log("Swapped:", departure.value, "<>", arrival.value);
    });
    console.log("Listener attached");
  } else {
    console.log("Input(s) not found:", {
      arrowBtnExists: !!arrowBtn,
      departureId: departure ? departure.id : null,
      arrivalId: arrival ? arrival.id : null,
    });
  }

  function showError(inputId, message) {
    const errorSpan = document.getElementById(`error-${inputId}`);
    if (errorSpan) errorSpan.textContent = message;
  }

  function validateForm() {
    document.querySelectorAll(".error-message").forEach(s => s.textContent = "");

    const dateDep = document.getElementById("dateDepart");
    const dateArr = document.getElementById("dateArrivee");
    const pass = document.getElementById("passengers");

    const depVal = departure ? departure.value.trim() : "";
    const arrVal = arrival ? arrival.value.trim() : "";
    const dDep = dateDep ? dateDep.value.trim() : "";
    const dArr = dateArr ? dateArr.value.trim() : "";
    const nb = pass ? parseInt(pass.value, 10) : NaN;

    let valid = true;

    if (!depVal) { showError("villeDepart", "Entrez une ville de départ."); valid = false; }
    if (!arrVal) { showError("villeArrivee", "Entrez une ville d'arrivée."); valid = false; }

    return valid;
  }

  if (searchForm) {
    searchForm.addEventListener("submit", event => {
      if (!validateForm()) {
        event.preventDefault();
      } else {
        console.log("Departure:", departure?.value);
        console.log("Arrival:", arrival?.value);
      }
    });
  }
});

