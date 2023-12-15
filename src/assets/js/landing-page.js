// Get the URL query parameters
const urlParams = new URLSearchParams(window.location.search);

// Get the values of the "name", "price", "description", and "image" parameters
const itemName = urlParams.get("name");
const itemPrice = JSON.parse(urlParams.get("price"));
const itemDescription = urlParams.get("description");
const itemImage = urlParams.get("image");

// Display the values in the HTML
document.getElementById("lp-item-image").src = itemImage;
document.getElementById("lp-item-name").textContent = itemName;
document.getElementById("lp-item-description").textContent = itemDescription;

const priceElement = document.getElementById("lp-item-price");

if (Array.isArray(itemPrice) && itemPrice.length > 0) {
  // Create a list of prices
  const priceList = document.createElement("div");
  priceList.className = "container p-0";

  itemPrice.forEach((price) => {
    const listItem = document.createElement("p");
    listItem.textContent = `₱${price.amount.toFixed(2)} (${price.label}) `;
    priceList.appendChild(listItem);
  });

  priceElement.appendChild(priceList);
} else if (typeof itemPrice === "string" || typeof itemPrice === "number") {
  // Display a single price
  const priceValue = document.createElement("span");
  priceValue.textContent = `₱${parseFloat(itemPrice).toFixed(2)}`;
  priceElement.appendChild(priceValue);
} else {
  priceElement.textContent = "Price not available";
}
