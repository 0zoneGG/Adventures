document.addEventListener("DOMContentLoaded", function () {
    // Add your mountainsArray data here

    // Define a single image for all cards
    const commonImage = "images/american-eagle-logo-7072D409FF-seeklogo.com.png"; // Replace with your common image URL

    // Function to create a card for each mountain
    function createMountainCard(mountain) {
        // Create card container
        const cardContainer = document.createElement("div");
        cardContainer.classList.add("card", "col-md-3", "mb-4"); // Adjust the col-md-3 for a wider card

        // Create image element
        const img = document.createElement("img");
        img.src = commonImage; // Use the common image for all cards
        img.alt = mountain.name;
        img.classList.add("card-img-top");

        // Create card body container
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        // Create card title element
        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = mountain.name;

        cardBody.style.padding = "15px";
        
        // Create card text elements
        const elevationText = createCardText("Elevation: " + mountain.elevation + " ft");
        const effortText = createCardText("Effort: " + mountain.effort);
        const descText = createCardText("Description: " + mountain.desc);
        const coordsText = createCardText("Coords: " + mountain.coords.lat + ", " + mountain.coords.lng);

        // Append elements to the card body
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(elevationText);
        cardBody.appendChild(effortText);
        cardBody.appendChild(descText);
        cardBody.appendChild(coordsText);

        // Append elements to the card container
        cardContainer.appendChild(img);
        cardContainer.appendChild(cardBody);

        return cardContainer;
    }

    // Function to create card text element
    function createCardText(textContent) {
        const cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.textContent = textContent;
        return cardText;
    }

    // Function to render mountain cards
    function renderMountainCards(mountainsToRender) {
        const mountainCardsContainer = document.getElementById("mountainCards");
        mountainCardsContainer.innerHTML = ""; // Clear existing cards

        // Loop through provided mountains array and create a card for each mountain
        mountainsToRender.forEach((mountain) => {
            const card = createMountainCard(mountain);
            mountainCardsContainer.appendChild(card);
        });
    }

    // Call the function to render all mountain cards initially
    renderMountainCards(mountainsArray);

    // Populate the dropdown with mountain names
    const dropdown = document.getElementById("mountainDropdown");
    const uniqueMountainNames = Array.from(new Set(mountainsArray.map(mountain => mountain.name)));
    
    // Populate the dropdown options
    uniqueMountainNames.forEach((name) => {
        const option = document.createElement("option");
        option.value = name;
        option.textContent = name;
        dropdown.appendChild(option);
    });

    // Add event listener to the dropdown to filter mountain cards
    dropdown.addEventListener("change", function () {
        const selectedMountainName = dropdown.value;
        const filteredMountains = selectedMountainName
            ? mountainsArray.filter(mountain => mountain.name === selectedMountainName)
            : mountainsArray;

        renderMountainCards(filteredMountains);
    });
});
