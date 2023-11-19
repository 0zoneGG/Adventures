document.addEventListener("DOMContentLoaded", function () {
    // Add your mountainsArray data here

    // Define a single image for all cards
    const commonImage = "images/american-eagle-logo-7072D409FF-seeklogo.com.png"; // Replace with your common image URL

    // Function to create a card for each mountain
    function createMountainCard(mountain) {
        // Create card container
        const cardContainer = document.createElement("div");
        cardContainer.classList.add("card", "col-md-2", "m-4");

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
    function renderMountainCards() {
        const mountainCardsContainer = document.getElementById("mountainCards");

        // Loop through mountainsArray and create a card for each mountain
        mountainsArray.forEach((mountain) => {
            const card = createMountainCard(mountain);
            mountainCardsContainer.appendChild(card);
        });
    }

    // Call the function to render mountain cards
    renderMountainCards();
});