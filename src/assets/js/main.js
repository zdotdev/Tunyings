fetch("menu.json")
  .then((response) => response.json())
  .then((menu) => {
    const menuContainer = document.getElementById("menu");
    const filterDropdown = document.getElementById("filterDropdown");
    const filterButtons = document.querySelectorAll(".dropdown-item");

    // Function to filter the menu items by category
    function filterMenuItems(category) {
      // Remove all existing menu items
      menuContainer.innerHTML = "";

      // Filter menu items by category
      const filteredItems = category
        ? menu.menuItems.filter((item) => item.category === category)
        : menu.menuItems;

      // Create and append filtered menu items
      filteredItems.forEach(function (item) {
        // Create the menu item element
        const menuItem = document.createElement("div");
        menuItem.className =
          "content-item col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center";

        // Create the menu item content
        const menuContent = `
          <div class="card">
            <div style="overflow: hidden;">
              <img class="card-img-top" src="${item.imageURL}" alt=""/>
            </div>
            <div class="informations">
              <h5 class="item-name">${item.name}</h5>
              <hr class="m-0"/>
              <p class="item-category">${item.category}</p>
              <p class="item-description">${item.description}</p>
            </div>
          </div>
        `;

        // Set the menu item content and append it to the menu container
        menuItem.innerHTML = menuContent;
        menuItem.onclick = function () {
          const urlParams = new URLSearchParams();
          urlParams.append("name", item.name);
          urlParams.append("price", JSON.stringify(item.price));
          urlParams.append("image", item.imageURL);
          urlParams.append("description", item.description);
          window.location.href = "./landing-page.html?" + urlParams.toString();
        };

        menuContainer.appendChild(menuItem);
      });
    }

    // Event listener for the filter buttons click
    filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        // Remove the "active" class from all filter buttons
        filterButtons.forEach(function (btn) {
          btn.classList.remove("active");
        });

        // Add the "active" class to the clicked filter button
        this.classList.add("active");

        // Get the category from the button's id attribute
        const category = this.id;

        if (category === "") {
          filterDropdown.innerText = "All";
        } else {
          filterDropdown.innerText = category;
        }

        filterMenuItems(category);
      });
    });

    // Initially load all menu items
    filterMenuItems();
  })
  .catch((error) => {
    console.error("Error loading menu:", error);
  });

// Carousel code
var nextButton = document.querySelector(".carousel-control-next");
setInterval(function () {
  nextButton.click();
}, 4000);
