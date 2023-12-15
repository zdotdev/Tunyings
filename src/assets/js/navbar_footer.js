window.addEventListener("DOMContentLoaded", function () {
  var navbarContainer = document.getElementById("navbar-container");
  var footerContainer = document.getElementById("footer-container");

  var navbarRequest = new XMLHttpRequest();
  navbarRequest.open("GET", "assets/html/navbar.html", true);
  navbarRequest.onreadystatechange = function () {
    if (navbarRequest.readyState === 4 && navbarRequest.status === 200) {
      navbarContainer.innerHTML = navbarRequest.responseText;
    }
  };
  navbarRequest.send();

  var footerRequest = new XMLHttpRequest();
  footerRequest.open("GET", "assets/html/footer.html", true);
  footerRequest.onreadystatechange = function () {
    if (footerRequest.readyState === 4 && footerRequest.status === 200) {
      footerContainer.innerHTML = footerRequest.responseText;
    }
  };
  footerRequest.send();
});
