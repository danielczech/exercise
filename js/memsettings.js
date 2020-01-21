// MIT licence (see licence.txt). D Czech 2020.
// Settings for memory test. 

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

function defaults(){
  // Default settings on load.
  // Timer:
  defaultTimer = 10000;
  localStorage.setItem("timer", JSON.stringify(defaultTimer));
  showTimer = document.getElementById("showTimer");
  showTimer.innerHTML = defaultTimer/1000.0;
  // Number of characters:
  defaultLen = 8;
  localStorage.setItem("len", JSON.stringify(defaultLen));
  showLen = document.getElementById("showLen");
  showLen.innerHTML = defaultLen;
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
  showTimer.innerHTML = t/1000.0;
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
  showLen.innerHTML = len;
}