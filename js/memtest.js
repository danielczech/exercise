// MIT licence (see licence.txt). D Czech 2020.

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
  dispForm = document.getElementById("ansForm");
  dispForm.style.display = "none"; 
  check = document.getElementById("check");
  check.style.display = "none"; 
  ansDisp = document.getElementById("ansDisp");
  ansDisp.style.display = "block";
  // Red for incorrect char, green for correct.
	ansInput = document.getElementById("ansInput").value;
	testSequence = JSON.parse(localStorage.getItem("testSequence"));
  ansSequence = "";
  for(i = 0; i < testSequence.length; i++){
    // Case insensitive comparisons
    // To Do: Need to handle incorrect length
    if(testSequence[i].toUpperCase() === ansInput[i].toUpperCase()){
      ansSequence = ansSequence + ansInput[i].fontcolor("#2AA834"); // Green
    }
    else{
      ansSequence = ansSequence + ansInput[i].fontcolor("#EB4034"); // Red
    }
  } 
  correctSeq = document.getElementById("correctSeq");
  correctSeq.innerHTML = testSequence.join("");
  userSeq = document.getElementById("userSeq");
  userSeq.innerHTML = ansSequence;
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





