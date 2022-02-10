// Get the modal
let taxModal = document.getElementById("taxResultModal");

// Get the button that opens the modal
let taxBtn = document.getElementById("calculateButton");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("closeModal")[0];

// When the user clicks the button, open the modal 
taxBtn.onclick = function() {
  taxModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  taxModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == taxModal) {
    taxModal.style.display = "none";
  }
}


