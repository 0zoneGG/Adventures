document.addEventListener("DOMContentLoaded", function () {
  // Populate location and park type dropdowns on page load
  const locationSelect = document.getElementById("locationSelect");
  const typeSelect = document.getElementById("typeSelect");

  populateDropdown(locationSelect, locationsArray);
  populateDropdown(typeSelect, parkTypesArray);

  // Add an event listener to the search button
  const searchButton = document.getElementById("searchButton");
  searchButton.addEventListener("click", searchParks);
});

function populateDropdown(selectElement, dataArray) {
  // Remove existing options
  selectElement.innerText = "";

  // Add a default option
  const defaultOption = document.createElement("option");
  defaultOption.value = "all";
  defaultOption.innerText = "All";
  selectElement.appendChild(defaultOption);

  // Add options from the dataArray
  dataArray.forEach((item) => {
    const option = document.createElement("option");
    option.value = item;
    option.innerText = item;
    selectElement.appendChild(option);
  });
}

function searchParks() {
  // Retrieve selected values
  const selectedLocation = document.getElementById("locationSelect").value;
  const selectedType = document.getElementById("typeSelect").value;

  // Filter parks based on selected location and type
  const filteredParks = nationalParksArray.filter((park) => {
    const locationCondition = selectedLocation === "all" || park.State === selectedLocation;
    const typeCondition = selectedType === "all" || parkTypesArray.includes(park.LocationName);

    return locationCondition && typeCondition;
  });

  // Display the filtered parks
  displayParks(filteredParks);
}

function displayParks(parks) {
  // Access the table body
  const tableBody = document.querySelector("#parkTable tbody");

  console.log("Table Body:", tableBody);

  // Clear existing table rows
  tableBody.innerText = "";

  // Populate the table with the filtered parks
  parks.forEach((park) => {
    const row = tableBody.insertRow();
    row.insertCell(0).innerText = park.LocationName;
    row.insertCell(1).innerText = park.State;
    row.insertCell(2).innerText = park.Address;
    row.insertCell(3).innerText = park.Phone;
    row.insertCell(4).innerText = park.Latitude;
    row.insertCell(5).innerText = park.Longitude;
    row.insertCell(6).innerText = getParkType(park.LocationName);
  });
}

function getParkType(locationName) {
  // Find the park type based on the location name
  const park = nationalParksArray.find((park) => park.LocationName === locationName);
  return park ? park.LocationName : "N/A";
}
