<script>
    // Declare a new object literal variable named myProfile and assign an empty object to it
    let myProfile = {};

    // Add properties to the myProfile object
    myProfile.name = "Nonkululeko Shezi"; // Replace "Your Name" with your actual name
    myProfile.photo = "images/profile.jpg"; // Replace "path/to/your/photo.jpg" with the actual path to your photo
    myProfile.favoriteFoods = ["Cookies", "Soft Drinks", "Rice and Beans"]; // Replace "Food 1", "Food 2", "Food 3" with your favorite foods
    myProfile.hobbies = ["Reading", "Play word games", "Play number games"]; // Replace "Hobby 1", "Hobby 2", "Hobby 3" with your hobbies
    myProfile.placesLived = []; // Initialize an empty array for placesLived

    // Add an item to the placesLived array
    let place1 = { place: "Osizweni", length: "Most of my life" }; // Replace "Place 1" and "Length 1" with the actual values
    myProfile.placesLived.push(place1);

    // Add additional items to the placesLived array
    let place2 = { place: "Pretoria", length: "5 years" }; // Replace "Place 2" and "Length 2" with the actual values
    let place3 = { place: "Ixopo", length: "3 years" }; // Replace "Place 3" and "Length 3" with the actual values
    myProfile.placesLived.push(place2, place3);

    // Assign values to HTML elements using DOM manipulation
    document.getElementById("name").textContent = myProfile.name;
    document.getElementById("photo").src = myProfile.photo;
    document.getElementById("photo").alt = myProfile.name;

    // Create HTML list elements for favorite foods
    myProfile.favoriteFoods.forEach((food) => {
      let li = document.createElement("li");
      li.textContent = food;
      document.getElementById("favorite-foods").appendChild(li);
    });

    // Create HTML list elements for hobbies
    myProfile.hobbies.forEach((hobby) => {
      let li = document.createElement("li");
      li.textContent = hobby;
      document.getElementById("hobbies").appendChild(li);
    });

    // Create HTML dl elements for places lived
    myProfile.placesLived.forEach((place) => {
      let dt = document.createElement("dt");
      dt.textContent = place.place;

      let dd = document.createElement("dd");
      dd.textContent = place.length;

      document.getElementById("places-lived").appendChild(dt);
      document.getElementById("places-lived").appendChild(dd);
    });
  </script>