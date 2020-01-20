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
  dispSequence.innerHTML = testSequence.join("");
  setTimeout(clearSequence, delay);
  setTimeout(dispForm, delay);
}

function checkAns(){
	ansInput = document.getElementById("ansInput");
	alert(ansInput.value);
}

function clearSequence(){
  dispSequence = document.getElementById("seqDiv");
  dispSequence.style.display = "none"; 
}

function dispForm(){
  dispForm = document.getElementById("ansForm");
  dispForm.style.display = "block"; 
  check = document.getElementById("check");
  check.style.display = "block"; 
  ansInput= document.getElementById("ansInput");
  ansInput.focus();
  ansInput.select();
}





