if (document.getElementById("sidebarCollapse") != null) {
  var sidebarCollapse = document.getElementById("sidebarCollapse");
  var Sidebar = document.getElementById("sidebar");
  var Content = document.getElementById("content");
  var adminMenuDrop = document.getElementById("admin-drop-list");
  var siderbarOverlay = document.querySelector(".siderbar-overlay");
  var btn_closeSiderbar = document.querySelector(".btn-close-sidebar");

  sidebarCollapse.addEventListener("click", function () {
    Sidebar.classList.toggle("active");
    Content.classList.toggle("active");
    this.classList.toggle("active");
    siderbarOverlay.classList.add("active");
  });
  siderbarOverlay.addEventListener("click", function () {
    Sidebar.classList.remove("active");
    Content.classList.remove("active");
    this.classList.remove("active");
    siderbarOverlay.classList.remove("active");
  });
  btn_closeSiderbar.addEventListener("click", function () {
    Sidebar.classList.remove("active");
    Content.classList.remove("active");
    this.classList.remove("active");
    siderbarOverlay.classList.remove("active");
  });
}
// Dropdowns
if (document.querySelector(".dropdown") != null) {
  document.addEventListener("DOMContentLoaded", function () {
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

    dropdownToggles.forEach((toggle) => {
      toggle.addEventListener("click", function () {
        const dropdownMenu = toggle.nextElementSibling;
        if (dropdownMenu.classList.contains("open")) {
          dropdownMenu.classList.remove("open");
        } else {
          closeAllDropdowns();
          dropdownMenu.classList.add("open");
        }
      });
    });
    window.addEventListener("click", function (event) {
      if (
        !event.target.matches(".dropdown-toggle") &&
        !event.target.closest(".dropdown-menu") &&
        !event.target.matches(".fi")
      ) {
        closeAllDropdowns();
      }
    });

    function closeAllDropdowns() {
      dropdownToggles.forEach((toggle) => {
        const dropdownMenu = toggle.nextElementSibling;
        if (dropdownMenu.classList.contains("open")) {
          dropdownMenu.classList.remove("open");
        }
      });
    }
  });
}

// For Prices
if (document.querySelector("[data-price]")) {
  const allElementPrices = document.querySelectorAll("[data-price]");
  if (allElementPrices.length > 0) {
    allElementPrices.forEach((element) => {
      var price = element.getAttribute("data-price");
      price += "";
      price = price.replace(",", "");
      x = price.split(".");
      y = x[0];
      z = x.length > 1 ? "." + x[1] : "";
      var rgx = /(\d+)(\d{3})/;
      while (rgx.test(y)) y = y.replace(rgx, "$1" + "," + "$2");
      // return y + z;
      // element.innerHTML = `${y + z} <span class="toman">تومان</span>`;
      element.innerHTML = `${y + z}`;
    });
  }
}

// Show Side Basket
if (document.querySelector(".btn-basket") !== null) {
  var btnsSideBasket = document.querySelectorAll(".btn-basket");
  var sideBasket = document.getElementById("side-basket");
  var dismissBasket = document.getElementById("dismiss-basket");
  var basketOverlay = document.querySelector(".basket-overlay");
  var body = document.querySelector("body");

  btnsSideBasket.forEach((btnBasket) => {
    btnBasket.addEventListener("click", function () {
      sideBasket.classList.add("active");
      basketOverlay.classList.add("active");
      body.classList.add("fixedposition");
    });
  });
  basketOverlay.addEventListener("click", function () {
    sideBasket.classList.remove("active");
    basketOverlay.classList.remove("active");
    body.classList.remove("fixedposition");
  });
  dismissBasket.addEventListener("click", function () {
    sideBasket.classList.remove("active");
    basketOverlay.classList.remove("active");
    body.classList.remove("fixedposition");
  });
}
// For Delete Item from side Basket
function deleteBasktet_item(el) {
  el.parentElement.parentElement.parentElement.parentElement.remove();
}

// Login
if (document.querySelector(".login-section") != null) {
  var modalSignContent = document.querySelectorAll(".login-section");
  var currentTab = 0;
  showModalSignContent(currentTab);
}
function showModalSignContent(num) {
  for (i = 0; i < modalSignContent.length; i++) {
    modalSignContent[i].classList.remove("active");
  }
  modalSignContent[num].classList.add("active");
}
