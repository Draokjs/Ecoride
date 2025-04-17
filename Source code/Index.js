function inverseArrow() {
  const departure = document.getElementById("Ville de départ");
  const arrival = document.getElementById("Ville d'arrivée");
  const temp = departure.value;
  departure.value = arrival.value;
  arrival.value = temp;
}
