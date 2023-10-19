// Declare Global Variables
const templesElement = document.getElementById("temples");
const templeList = [];

// Function: displayTemples
const displayTemples = (temples) => {
  temples.forEach((temple) => {
    const article = document.createElement("article");
    
    const h3 = document.createElement("h3");
    h3.textContent = temple.templeName;
    
    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.location;
    
    article.appendChild(h3);
    article.appendChild(img);
    
    templesElement.appendChild(article);
  });
};

// Function: getTemples
const getTemples = async () => {
  try {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json'); // Replace with the actual URL
    const templeData = await response.json();
    templeList.push(...templeData);

    // Call the displayTemples function to display the list of temples
    displayTemples(templeList);
  } catch (error) {
    console.error("Error fetching temple data: ", error);
  }
};

// Function: reset
const reset = () => {
  templesElement.innerHTML = "";
};

// Function: sortBy
const sortBy = (temples) => {
  reset();
  const filter = document.getElementById("sortBy").value;
  
  switch (filter) {
    case "utah":
      displayTemples(temples.filter(temple => temple.location.includes("Utah")));
      break;
    case "nonutah":
      displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
      break;
    case "older":
      displayTemples(temples.filter(temple => new Date(temple.dedicatedDate) < new Date(1950, 0, 1)));
      break;
    case "all":
      displayTemples(temples);
      break;
  }
};

// Event Listener: sortBy Element change
document.getElementById("sortBy").addEventListener("change", () => {
  sortBy(templeList);
});

// Call getTemples at the end of the JavaScript file to initiate the data retrieval and display
getTemples();
