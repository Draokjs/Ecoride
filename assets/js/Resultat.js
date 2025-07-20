document.addEventListener('DOMContentLoaded', () => {
  // --- Load and display search data ---
  const rawSearch = localStorage.getItem("search");
  const searchData = rawSearch && rawSearch !== "null" ? JSON.parse(rawSearch) : {};

  const valDep = document.getElementById("valuedeparture");
  if (valDep && searchData.departure && searchData.arrival) {
    valDep.innerHTML = `${searchData.departure} → ${searchData.arrival}`;
  }

  const dateDep = document.getElementById("datedeparture");
  if (dateDep && searchData.dateDeparture && searchData.numberOfPassengers !== undefined) {
    const formattedDate = new Date(searchData.dateDeparture)
      .toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })
      .replace(/^\w/, c => c.toUpperCase());
    dateDep.innerHTML = `${formattedDate}, passagers : ${searchData.numberOfPassengers}`;
  }

  // --- Generate next 5 day buttons ---
  const tripDateContainer = document.getElementById("tripresultdate");
  if (tripDateContainer && searchData.dateDeparture) {
    try {
      tripDateContainer.innerHTML = Array.from({ length: 5 }, (_, i) => {
        const date = new Date(Date.parse(searchData.dateDeparture) + (i + 1) * 86400000);
        const jour = date.toLocaleDateString('fr-FR', { weekday: 'long' }).replace(/^\w/, c => c.toUpperCase());
        const dateStr = date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
        return `<button class="btn btn-outline-info me-2">${jour} ${dateStr}</button>`;
      }).join('');
    } catch (e) {
      console.error("Erreur de génération des boutons de dates :", e);
    }
  }

  // --- Generate random trip start/end ---
  const tripStartEl = document.getElementById("tripstart");
  const tripEndEl = document.getElementById("tripend");

  const randomStreet = () => [
    "Champs-Élysées", "Boulevard Saint-Germain",
    "Rue de Rivoli", "Avenue Montaigne", "Rue de la Paix"
  ][Math.floor(Math.random() * 5)];

  if (tripStartEl) {
    const h = String(Math.floor(Math.random() * 24)).padStart(2, '0');
    const m = String(Math.floor(Math.random() * 60)).padStart(2, '0');
    tripStartEl.innerHTML = `<b>${h}h ${m}</b> Paris, ${randomStreet()}`;
  }

  if (tripEndEl) {
    const h = String(Math.floor(Math.random() * 24)).padStart(2, '0');
    const m = String(Math.floor(Math.random() * 60)).padStart(2, '0');
    tripEndEl.innerHTML = `<b>${h}h ${m}</b> Marseille, ${randomStreet()}`;
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
        hours = (hours - 1 + 24) % 24;
      }

      tripLengthEl.innerHTML = `Direct : ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    }
  }
});
