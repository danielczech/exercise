// MIT licence (see licence.txt). D Czech 2020.
// Settings for arithmetic problems.

function defaults(){
  // Default settings on load.
  // N digits:
  defaultA = 2;
  localStorage.setItem("A", JSON.stringify(defaultA));
  showA = document.getElementById("showA");
  showA.innerHTML = lenDigits(defaultA);
  // N items for add/subtract:
  defaultN = 2;
  localStorage.setItem("N", JSON.stringify(defaultN));
  showN = document.getElementById("showN");
  showN.innerHTML = lenDigits(defaultN);
}

function runTest(){
  window.location.href = "mtest.html"
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

function change(sign, name){
  // Increment or decrement length.
  // Min length 3 characters.
  len = JSON.parse(localStorage.getItem(name));
  if(sign == "+"){
    len = len + 1;
  }
  else if(sign == "-" && len > 2) {
    len = len - 1;
  }
  localStorage.setItem(name, JSON.stringify(len));
  showLen = document.getElementById("show" + name);
  showLen.innerHTML = lenDigits(len);
}