// Declare Global Variables
const templesElement = document.querySelector("#temples");
let templeList = [];

// Function: displayTemples()
const displayTemples = (temples) => {
  temples.forEach((temple) => {
    // Create HTML article element
    const article = document.createElement("article");

    // Create HTML h3 element and add templeName property
    const h3 = document.createElement("h3");
    h3.textContent = temple.templeName;

    // Create HTML img element and add imageUrl and location properties
    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.location;

    // Append h3 and img elements to article element
    article.appendChild(h3);
    article.appendChild(img);

    // Append article element to templesElement
    templesElement.appendChild(article);
  });
};

// Function: getTemples()
const getTemples = async () => {
  const response = await fetch("https://example.com/temple-data.json");
  templeList = await response.json();
  displayTemples(templeList);
};

// Function: reset()
const reset = () => {
  templesElement.innerHTML = "";
};

// Function: sortBy()
const sortBy = (temples) => {
  reset();

  const filter = document.querySelector("#sortBy").value;

  switch (filter) {
    case "utah":
      displayTemples(temples.filter((temple) => temple.location.includes("Utah")));
      break;
    case "nonutah":
      displayTemples(temples.filter((temple) => !temple.location.includes("Utah")));
      break;
    case "older":
      displayTemples(temples.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)));
      break;
    case "all":
      displayTemples(temples);
      break;
    default:
      displayTemples(temples);
      break;
  }
};

// Event Listener: sortBy Element change
document.querySelector("#sortBy").addEventListener("change", () => {
  sortBy(templeList);
});

// Call getTemples() at the end of the JavaScript file
getTemples();