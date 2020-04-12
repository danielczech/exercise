// MIT licence (see licence.txt). D Czech 2020.
// Display and testing for arithmetic
// 1. Choose operator at random
// 2. If multiply or divide: select A and B and display
// 3. If add or subtract: select A repeatedly N times
// 4. Input and test output.

function onLoad(){
	A = JSON.parse(localStorage.getItem("A"));
	N = JSON.parse(localStorage.getItem("N"));
  addOnly = JSON.parse(localStorage.getItem("addOnly"));
  if(addOnly){
    operators = '+-'
  }
  else{
    operators = '+-*/'
  }
  ops = getOps(N, operators);
  buildProblem(ops, A, N);
}

function getOps(N, operators){
  // Randomly select operators
  opArr = [];
  for(i = 0; i < (N-1); i++){
    selectedOp = operators.charAt(Math.floor(Math.random()*operators.length));
    opArr.push(selectedOp);
  }
  return opArr;
}

function getNum(digits){
  // Get a random number of n digits
  var min = Math.pow(10, (digits - 1));
  var range = Math.pow(10, (digits)) - min;
  num = Math.floor(Math.random()*range) + min;
  return num;
}

function displayProblem(numbers, operators){
  // Display the problem onscreen
  disp = "";
  for(i = 0; i < numbers.length; i++){
    disp = disp + numbers[i].toString();
    if(i < numbers.length - 1){
    	disp = disp + operators[i];
    }
  }
  testProblem = document.getElementById("testProblem");
  testProblem.innerHTML = disp;
}

function inputForm(){
  // Input form
  inputForm = document.getElementById("ansForm");
  inputForm.style.display = "block"; 
  check = document.getElementById("check");
  check.style.display = "block"; 
  ansInput= document.getElementById("ansInput");
  ansInput.focus();
  ansInput.select();
}

function checkAns(){
  // Display correct elements.
  dispForm = document.getElementById("ansForm");
  dispForm.style.display = "none"; 
  check = document.getElementById("check");
  check.style.display = "none"; 
  ansDisp = document.getElementById("ansDisp");
  ansDisp.style.display = "block";
  // Get inputs
  ans = JSON.parse(localStorage.getItem("ans")); // correct answer
  ansInput = document.getElementById("ansInput").value; // get user input
  correctAns = document.getElementById("correctAns"); // display answer
  userAns = document.getElementById("userAns"); // display user answer
  correctAns.innerHTML = ans;
  if(ans == ansInput){
    userAns.innerHTML = ansInput.fontcolor("#2AA834"); // green for correct
  }
  else{
    userAns.innerHTML = ansInput.fontcolor("#EB4034"); // red for incorrect
  }
}

function buildProblem(operators, A, N){
  // Build the problem based on the randomly selected operator
  // and selected parameters. 
  ans = getNum(A); // Initialise ans
  numbers = [ans];
  for(i = 0; i < (N - 1); i++){
    num_i = getNum(A);
    numbers.push(num_i);
    switch(operators[i]){
      case '*':
        ans = ans * num_i;
        break;
      case '/':  
        ans = ans / num_i;  
        break;
      case '+':
        ans = ans + num_i;
        break;
      case '-':  
        ans = ans - num_i;
        break;  
    }  
  }
  localStorage.setItem("ans", JSON.stringify(ans));
  displayProblem(numbers, operators);
  inputForm();
}

function again(){
  window.location.href = "mtest.html"
}

function settings(){
  window.location.href = "msettings.html"
}

