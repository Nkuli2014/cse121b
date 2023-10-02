// Declare and instantiate a variable to hold your name
const fullName = "Nonkululeko Shezi";

// Declare and instantiate a variable to hold the current year
const currentYear = new Date().getFullYear();

// Declare and instantiate a variable to hold the file path of the profile picture
const profilePicture = 'images/sbonga.png';

// Set the HTML element variables
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

// Adding Content to the Document
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

// Arrays
// Declare an array variable to hold your favorite foods
const favoriteFoods = ["Cookies", "Pap and Wors", "Chocolate"];

// Append the favorite foods array to the HTML element
foodElement.innerHTML = favoriteFoods.join("<br>");

// Declare and instantiate a variable to hold another single favorite food item
const newFavoriteFood = "Ice Cream";

// Add the new favorite food item to the favorite foods array
favoriteFoods.push(newFavoriteFood);

// Append the modified favorite foods array to the HTML element
foodElement.innerHTML += "<br>" + favoriteFoods.join("<br>");

// Remove the first element in the favorite foods array
favoriteFoods.shift();

// Append the modified favorite foods array to the HTML element
foodElement.innerHTML += "<br>" + favoriteFoods.join("<br>");

// Remove the last element in the favorite foods array
favoriteFoods.pop();

// Append the final modified favorite foods array to the HTML element
foodElement.innerHTML += "<br>" + favoriteFoods.join("<br>");






