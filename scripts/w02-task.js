/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Nonkululeko Shezi";
let currentYear = 2023;
let profilePicture = "images/profile.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */
let foods = ["Cookies", "Soft Drinks", "Rice and Beans", "Pap", "Wors"];
foodElement.innerHTML = foods;
let newFood = "Burger";
foods.push(newFood);
foodElement.innerHTML += `<br>${foods}`;
foods.shift();
foodElement.innerHTML += `<br>${foods}`;
foods.pop();
foodElement.innerHTML += `<br>${foods}`;










