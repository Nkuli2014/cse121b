// 🔍 Part 1 error
const userName = "Moroni";
console.log(`let versus const: ${userName}`);
userName = "Moronihah"; // This line will cause an error because userName is declared with const
console.log(`let versus const: ${userName}`);

// 🔍 Part 2 error
const currentDateAndTime = new Date(); // Fixed the assignment by using new Date()
console.log(`It is now ${currentDateAndTime}`);

// 🔍 Part 3 error. The following statement calls a function named total that accepts any number of arguments and returns the sum. The returned value is stored in a variable named theTotal. 1-10 are the arguments.

let theTotal = total(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(`The total is ${theTotal}`);

// 'total' function declaration
function total(...theNumbers) {
	return theNumbers.reduce((sum, aNumber) => sum + aNumber, 0);
  }





