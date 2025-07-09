document.addEventListener('DOMContentLoaded', () => {
  // --- Load and display search data ---
  const searchData = JSON.parse(localStorage.getItem("search") || '{}');

  if (searchData.departure && searchData.arrival) {
    const valDep = document.getElementById("valuedeparture");
    const dateDep = document.getElementById("datedeparture");
    if (valDep) valDep.innerHTML = `${searchData.departure} -> ${searchData.arrival}`;
    if (dateDep) dateDep.innerHTML = new Date(searchData.dateDeparture)
      .toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })
      .replace(/^\w/, c => c.toUpperCase()) + ` , passagers: ${searchData.numberOfPassengers}`;
  }

  // --- Generate next 5 day buttons ---
  const tripDateContainer = document.getElementById("tripresultdate");
  if (tripDateContainer && searchData.dateDeparture) {
    tripDateContainer.innerHTML = Array.from({ length: 5 }, (_, i) => {
      const date = new Date(Date.parse(searchData.dateDeparture) + (i + 1) * 24 * 60 * 60 * 1000);
      return `<button class="btn btn-outline-info me-2">${date.toLocaleDateString('fr-FR', { weekday: 'long' }).replace(/^\w/, c => c.toUpperCase())} ${date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</button>`;
    }).join('');
  }

  // --- Generate random trip start/end ---
  const tripStartEl = document.getElementById("tripstart");
  const tripEndEl = document.getElementById("tripend");

  const randomStreet = () => ["Champs-Élysées", "Boulevard Saint-Germain", "Rue de Rivoli", "Avenue Montaigne", "Rue de la Paix"][Math.floor(Math.random() * 5)];

  if (tripStartEl) {
    tripStartEl.innerHTML = `<b>${String(Math.floor(Math.random() * 24)).padStart(2,'0')}h ${String(Math.floor(Math.random() * 60)).padStart(2,'0')}</b> Paris, ${randomStreet()}`;
  }
  if (tripEndEl) {
    tripEndEl.innerHTML = `<b>${String(Math.floor(Math.random() * 24)).padStart(2,'0')}h ${String(Math.floor(Math.random() * 60)).padStart(2,'0')}</b> Marseille, ${randomStreet()}`;
  }

  // --- Calculate and display trip length ---
  const tripLengthEl = document.getElementById("triplength");
  if (tripStartEl && tripEndEl && tripLengthEl) {
    const startMatch = tripStartEl.innerHTML.match(/\d{2}h \d{2}/);
    const endMatch = tripEndEl.innerHTML.match(/\d{2}h \d{2}/);
    if (startMatch && endMatch) {
      const [startHours, startMinutes] = startMatch[0].split('h ').map(Number);
      const [endHours, endMinutes] = endMatch[0].split('h ').map(Number);
      let hours = (endHours - startHours + 24) % 24;
      let minutes = endMinutes - startMinutes;
      if (minutes < 0) {
        minutes += 60;
        hours = (hours -1 + 24) % 24;
      }
      tripLengthEl.innerHTML = `Direct: ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    }
  }

  // --- Handle form toggle ---
  const myButton = document.getElementById("modifybutton");
  const myForm = document.querySelector(".form");

  if (myButton && myForm) {
    myForm.style.display = "none";

    myButton.addEventListener("click", () => {
      if (myForm.style.display === "none") {
        myForm.style.display = "block";
        myForm.style.background = "white";
      } else {
        myForm.style.display = "none";
        myForm.style.background = "transparent";
      }
    });

    myForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (getComputedStyle(myForm).display === "none") return;

      alert("Form submitted!");
    });
  }
});
