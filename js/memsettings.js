function randomString(len, alphanum){
  // Randomised set of characters of length len
  // if alphanum == True, include approx 50% letters
  alphanum = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  num = '0123456789';
  if(alphanum){
    charitems = alphanum + num.repeat(5);
  }
  else{
    charitems = num;
  } 
  items = [];
  for(i = 0; i <= len; i++){
    item = charitems.charAt(Math.floor(Math.random()*len));
    items.push(item);
  }
  return items;
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

function changeLen(sign){
  // Increment or decrement length.
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