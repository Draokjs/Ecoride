"use strict";

function inverseArrow() {
  var departure = document.getElementById("Ville de départ");
  var arrival = document.getElementById("Ville d'arrivée");
  var temp = departure.value;
  departure.value = arrival.value;
  arrival.value = temp;
}