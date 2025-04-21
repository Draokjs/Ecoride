window.onload = function() {
  var searchValue = localStorage.getItem("search");
  if (searchValue) {
    document.getElementById("Value").innerHTML = searchValue;
  }
}
