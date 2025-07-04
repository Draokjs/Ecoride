"use strict";

document.getElementById("Valuedeparture").innerHTML = localStorage.getItem("departure") + " -> " + localStorage.getItem("arrival");
document.getElementById("Datedeparture").innerHTML = new Date(localStorage.getItem("dateDeparture")).toLocaleDateString('fr-FR', {
  weekday: 'long',
  day: 'numeric',
  month: 'long'
}).replace(/^\w/, function (c) {
  return c.toUpperCase();
}) + " , passagers: " + localStorage.getItem("numberOfPassengers"); // generate 5 buttons with the next 5 days, starting from today

document.getElementById("Tripresultdate").innerHTML = Array.from({
  length: 5
}, function (_, i) {
  var date = new Date(Date.parse(localStorage.getItem("dateDeparture")) + (i + 1) * 24 * 60 * 60 * 1000); // add i+1 days to today

  return "<button class=\"btn btn-outline-info me-2\">".concat(date.toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }), "</button>");
}).join('');
document.getElementById("Tripstart").innerHTML = "<b>".concat("".concat(Math.floor(Math.random() * 24)).padStart(2, '0'), "h ").concat("".concat(Math.floor(Math.random() * 60) + 2).padStart(2, '0'), "</b>\n   Paris, ").concat(["Champs-Élysées", "Boulevard Saint-Germain", "Rue de Rivoli", "Avenue Montaigne", "Rue de la Paix"][Math.floor(Math.random() * 5)]);
document.getElementById("Tripend").innerHTML = "<b>".concat("".concat(Math.floor(Math.random() * 24)).padStart(2, '0'), "h ").concat("".concat(Math.floor(Math.random() * 60) + 2).padStart(2, '0'), "</b>\n   Marseille, ").concat(["Champs-Élysées", "Boulevard Saint-Germain", "Rue de Rivoli", "Avenue Montaigne", "Rue de la Paix"][Math.floor(Math.random() * 5)]);
document.getElementById("TripPrice").innerHTML = "".concat(Math.floor(Math.random() * 100), " <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"22\" height=\"22\" fill=\"currentColor\" class=\"bi bi-coin\" viewBox=\"0 0 16 16\">\n<path d=\"M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z\"/>\n<path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16\"/>\n<path d=\"M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12\"/>\n</svg>");
var tripStart = document.getElementById("Tripstart").innerHTML.match(/\d{2}h \d{2}/)[0];
var tripEnd = document.getElementById("Tripend").innerHTML.match(/\d{2}h \d{2}/)[0];
var startHours = parseInt(tripStart.match(/\d{2}/)[0], 10);
var startMinutes = parseInt(tripStart.match(/\d{2}/)[1], 10);
var endHours = parseInt(tripEnd.match(/\d{2}/)[0], 10);
var endMinutes = parseInt(tripEnd.match(/\d{2}/)[1], 10);
var tripDurationHours = (endHours - startHours + 24) % 24;
var tripDurationMinutes = endMinutes - startMinutes;

if (tripDurationMinutes < 0) {
  tripDurationMinutes += 60;
  tripDurationHours = (tripDurationHours - 1 + 24) % 24;
}

var tripDuration = "".concat(tripDurationHours.toString().padStart(2, '0'), ":").concat(tripDurationMinutes.toString().padStart(2, '0'));
document.getElementById("Triplength").innerHTML = tripDuration;