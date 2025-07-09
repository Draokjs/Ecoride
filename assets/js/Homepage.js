document.addEventListener('DOMContentLoaded', () => {
  const departure = document.getElementById("search_ville_depart");
  const arrival   = document.getElementById("search_ville_arrivee");
  const arrowBtn  = document.getElementById("arrow");
  const searchForm = document.getElementById("search");

  console.log('departure:', departure);
  console.log('arrival:', arrival);

  if (arrowBtn && departure && arrival) {
    arrowBtn.addEventListener("click", () => {
      const temp = departure.value;
      departure.value = arrival.value;
      arrival.value = temp;
    });
  }

  function showError(inputName, message) {
    const errorSpan = document.getElementById(`error-${inputName}`);
    if (errorSpan) errorSpan.textContent = message;
  }

  function validateForm() {
    const minP = 1, maxP = 5;
    document.querySelectorAll(".error-message").forEach(s => s.textContent = "");

    const dateDep = document.getElementById("search_date_depart");
    const dateArr = document.getElementById("search_date_arrivee");
    const pass    = document.getElementById("search_nombre_passagers");

    const depVal = departure ? departure.value.trim() : "";
    const arrVal = arrival   ? arrival.value.trim() : "";
    const dDep   = dateDep && dateDep.value.trim();
    const dArr   = dateArr && dateArr.value.trim();
    const nb     = pass ? parseInt(pass.value, 10) : NaN;

    let valid = true;

    if (!depVal) { showError("search_ville_depart", "Entrez une ville de départ."); valid = false; }
    if (!arrVal) { showError("search_ville_arrivee", "Entrez une ville d'arrivée."); valid = false; }
    // ...continue your checks similarly...

    return valid;
  }

  if (searchForm) {
    searchForm.addEventListener("submit", event => {
      if (!validateForm()) event.preventDefault();
    });
  }
});
