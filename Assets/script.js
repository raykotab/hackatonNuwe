
let modal = document.getElementById("contactWindow");
let button = document.getElementById("contact");
let span = document.getElementsByClassName("close")[0];

button.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}