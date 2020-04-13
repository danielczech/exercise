// MIT licence (see licence.txt). D Czech 2020.

// Display randomised string for set length of time.
// Accept user input after set length of time.
// Immediately display matched up results.
// Button for re-run.

function randomString(len, alphanum){
  // Randomised set of characters of length len
  // if alphanum == True, include approx 50% letters
  alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  num = '0123456789';
  if(alphanum){
    charitems = alpha + num.repeat(5);
    // Need full keyboard if alphanumeric input
    document.getElementById('ansInput').type = 'text';
  }
  else{
    charitems = num;
    // Can rely on numeric keypad if numeric input only
    document.getElementById('ansInput').type = 'number';
  } 
  items = [];
  for(i = 0; i < len; i++){
    item = charitems.charAt(Math.floor(Math.random()*charitems.length));
    items.push(item);
  }
  return items;
}

function again(){
  window.location.href = "memtest.html"
}

function settings(){
  window.location.href = "memsettings.html"
}

function home(){
  window.location.href = "index.html"
}

function displayTimed(){
  // Get delay:
  delay = JSON.parse(localStorage.getItem("timer"));
  // Calculate sequence based on settings:
  length = JSON.parse(localStorage.getItem("len"));
  alphanum = JSON.parse(localStorage.getItem("alphaNum"));
  testSequence = randomString(length, alphanum);
  localStorage.setItem("testSequence", JSON.stringify(testSequence));
  // Display selected string for time length given 
  // by delay.
  testLen = JSON.parse(localStorage.getItem("testSequence"));
  dispSequence = document.getElementById("testSequence");
  dispSequence.innerHTML = testSequence.join("");
  setTimeout(clearSequence, delay);
  setTimeout(dispForm, delay);
}

function checkAns(){
  // Display correct elements.
  dispForm = document.getElementById("ansForm");
  dispForm.style.display = "none"; 
  check = document.getElementById("check");
  check.style.display = "none"; 
  ansDisp = document.getElementById("ansDisp");
  ansDisp.style.display = "block";
  // Get test sequence and user input.
	ansInput = document.getElementById("ansInput").value;
  testSequence = JSON.parse(localStorage.getItem("testSequence"));
  // Check if should be reversed.
  reversed = JSON.parse(localStorage.getItem("reversed"));
  if(reversed){
    testSequence = testSequence.reverse();
  }
  ansSequence = "";
  for(i = 0; i < testSequence.length; i++){
    // Case insensitive comparisons
    if(i >= ansInput.length){
      //Handle incorrect length:
      ansSequence = ansSequence + " ";
    }
    else if(testSequence[i].toUpperCase() === ansInput[i].toUpperCase()){
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
  ansInput.click();
}





