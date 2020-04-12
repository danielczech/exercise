// MIT licence (see licence.txt). D Czech 2020.
// Settings for recall. 

function runTest(){
  window.location.href = "memtest.html"
}

function setAlphaNum(check){
  state = check.checked;
  localStorage.setItem("alphaNum", JSON.stringify(state));
}

function setReversed(check){
  state = check.checked;
  localStorage.setItem("reversed", JSON.stringify(state));
}

function lenDigits(output){
  // Ensure that output number has spaces
  // prepended to it for consistency
  if(output < 10){
    outputString = "0" + output.toString();
  }
  else{
    outputString = output.toString();
  }
  return outputString;
}

function defaults(){
  // Default settings on load.
  // Timer:
  defaultTimer = 4000;
  localStorage.setItem("timer", JSON.stringify(defaultTimer));
  showTimer = document.getElementById("showTimer");
  showTimer.innerHTML = lenDigits(defaultTimer/1000.0);
  // Number of characters:
  defaultLen = 9;
  localStorage.setItem("len", JSON.stringify(defaultLen));
  showLen = document.getElementById("showLen");
  showLen.innerHTML = lenDigits(defaultLen);
  // Alphanumeric? 
  alphaNumState = false;
  localStorage.setItem("alphaNum", JSON.stringify(alphaNumState));
  alphaNumCheck = document.getElementById("alphaNumCheck");
  alphaNumCheck.checked = false;
  // Reversed?
  reversedState = false;
  localStorage.setItem("alphaNum", JSON.stringify(reversedState));
  reversedCheck = document.getElementById("reversedCheck");
  reversedCheck.checked = false;
}

function changeTimer(sign){
  // Increment or decrement timer (seconds).
  // Min value 1 second.
  t = JSON.parse(localStorage.getItem("timer"));
  if(sign == "+"){
    t = t + 1000;
  }
  else if(sign == "-" && t > 1000) {
    t = t - 1000;
  }
  localStorage.setItem("timer", JSON.stringify(t));
  showTimer = document.getElementById("showTimer");
  showTimer.innerHTML = lenDigits(t/1000.0);
}

function changeLen(sign){
  // Increment or decrement length.
  // Min length 3 characters.
  len = JSON.parse(localStorage.getItem("len"));
  if(sign == "+"){
    len = len + 1;
  }
  else if(sign == "-" && len > 3) {
    len = len - 1;
  }
  localStorage.setItem("len", JSON.stringify(len));
  showLen = document.getElementById("showLen");
  showLen.innerHTML = lenDigits(len);
}