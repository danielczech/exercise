// Display randomised string for set length of time.
// Accept user input after set length of time.
// Immediately display matched up results.
// Button for re-run.

function displayTimed(delay){
  // Display selected string for time length given 
  // by delay.
  testSequence = JSON.parse(localStorage.getItem("testSequence"));
  testLen = JSON.parse(localStorage.getItem("testSequence"));

  dispSequence = document.getElementById("testSequence");
  dispSequence.innerHTML = testSequence;

}