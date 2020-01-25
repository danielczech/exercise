// MIT licence (see licence.txt). D Czech 2020.
// Display and testing for arithmetic problems
// 1. Choose operator at random
// 2. If multiply or divide: select A and B and display
// 3. If add or subtract: select A repeatedly N times
// 4. Input and test output.

function onLoad(){
	op = getOp();
	A = JSON.parse(localStorage.getItem("A"));
    B = JSON.parse(localStorage.getItem("B"));
	N = JSON.parse(localStorage.getItem("N"));
    buildProblem(op, A, B, N);
}

function getOp(){
  // Randomly select operator
  operators = '+-*/';
  selectedOp = operators.charAt(Math.floor(Math.random()*operators.length));
  return selectedOp;
}

function getNum(digits){
  // Get a random number of n digits
  var min = Math.pow(10, (digits - 1));
  var range = Math.pow(10, (digits)) - min;
  num = Math.floor(Math.random()*range) + min;
  return num;
}

function displayProblem(numbers, operator){
  disp = "";
  for(i = 0; i < numbers.length; i++){
    disp = disp + numbers[i].toString();
    if(i < numbers.length - 1){
    	disp = disp + operator;
    }
  }
  testProblem = document.getElementById("testProblem");
  testProblem.innerHTML = disp;
}

function buildProblem(operator, A, B, N){
  switch(operator){
  	case '*':
      numA = getNum(A);
      numB = getNum(B);
      ans = numA*numB;
      numbers = [numA, numB];
      localStorage.setItem("Ans", JSON.stringify(ans));
      displayProblem(numbers, operator);
      // put input here
  	case '/':
      numA = getNum(A);
      numB = getNum(B);
      ans = numA/numB;
      numbers = [numA, numB];
      localStorage.setItem("Ans", JSON.stringify(ans));
      displayProblem(numbers, operator);
      // put input here
  	case '+':
      ans = 0;
  	  numbers = []
  	  for(i = 0; i < N; i++){
  	  	num_i = getNum(A);
        numbers.push(num_i);
        ans = ans + num_i;  
  	  }
      localStorage.setItem("Ans", JSON.stringify(ans));
      displayProblem(numbers, operator);
  	case '-':
      ans = 0;
  	  numbers = []
  	  for(i = 0; i < N; i++){
  	  	num_i = getNum(A);
        numbers.push(num_i);
        ans = ans - num_i;  
  	  }
      localStorage.setItem("Ans", JSON.stringify(ans));
      displayProblem(numbers, operator);
  }
}


