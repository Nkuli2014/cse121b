// Function Declaration - Addition Feature
function add(number1, number2) {
  return number1 + number2;
}

// Check Your Understanding
function addNumbers() {
  var add1 = Number(document.getElementById("add1").value);
  var add2 = Number(document.getElementById("add2").value);
  var sum = add(add1, add2);
  document.getElementById("sum").textContent = sum;
}

// Event Listener
document.getElementById("addNumbers").addEventListener("click", addNumbers);

// Function Expression - Subtraction Feature
var subtract = function(number1, number2) {
  return number1 - number2;
};

// Subtraction Numbers
var subtractNumbers = function() {
  var subtract1 = Number(document.getElementById("subtract1").value);
  var subtract2 = Number(document.getElementById("subtract2").value);
  var difference = subtract(subtract1, subtract2);
  document.getElementById("difference").textContent = difference;
};

// Event Listener
document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);

// Arrow Functions - Multiplication Feature
var multiply = (number1, number2) => number1 * number2;

// Multiply Numbers
var multiplyNumbers = () => {
  var factor1 = Number(document.getElementById("factor1").value);
  var factor2 = Number(document.getElementById("factor2").value);
  var product = multiply(factor1, factor2);
  document.getElementById("product").textContent = product;
};

// Event Listener
document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);

// Your Choice - Division Feature
function divide(number1, number2) {
  return number1 / number2;
}

// Divide Numbers
function divideNumbers() {
  var dividend = Number(document.getElementById("dividend").value);
  var divisor = Number(document.getElementById("divisor").value);
  var quotient = divide(dividend, divisor);
  document.getElementById("quotient").textContent = quotient;
}

// Event Listener
document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

// Decision Structures / Program Branching
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
document.getElementById("year").textContent = currentYear;

// Array Methods - Functional Programming
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.getElementById("array").textContent = array.join(", ");

var odds = array.filter((number) => number % 2 === 1);
document.getElementById("odds").textContent = odds.join(", ");

var evens = array.filter((number) => number % 2 === 0);
document.getElementById("evens").textContent = evens.join(", ");

var sumOfArray = array.reduce((accumulator, number) => accumulator + number, 0);
document.getElementById("sumOfArray").textContent = sumOfArray;

var multiplied = array.map((number) => number * 2);
document.getElementById("multiplied").textContent = multiplied.join(", ");

var sumOfMultiplied = multiplied.reduce(
  (accumulator, number) => accumulator + number,
  0
);
document.getElementById("sumOfMultiplied").textContent = sumOfMultiplied;
