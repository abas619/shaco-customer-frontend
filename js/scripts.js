if (document.getElementById("sidebarCollapse") != null) {
  var sidebarCollapse = document.getElementById("sidebarCollapse");
  var Sidebar = document.getElementById("sidebar");
  var Content = document.getElementById("content");
  var adminMenuDrop = document.getElementById("admin-drop-list");
  var btn_closeSiderbar = document.querySelector(".btn-close-sidebar");

  sidebarCollapse.addEventListener("click", function () {
    Sidebar.classList.toggle("active");
    Content.classList.toggle("active");
    this.classList.toggle("active");
  });
  btn_closeSiderbar.addEventListener("click", function () {
    Sidebar.classList.remove("active");
    Content.classList.remove("active");
    this.classList.remove("active");
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

// جدا کردن 3 رقم
function separate(Number) {
  Number += "";
  Number = Number.replace(",", "");
  x = Number.split(".");
  y = x[0];
  z = x.length > 1 ? "." + x[1] : "";
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(y)) y = y.replace(rgx, "$1" + "," + "$2");
  return y + z;
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

// Change Cart Value
function changeValue(inputId, increment) {
  var input = document.getElementById(inputId);
  var value = parseInt(input.innerHTML);

  if (increment && value < 10) {
    value++;
  } else if (!increment && value > 0) {
    value--;
  }

  input.innerHTML = value;

  if (value === 0) {
    var cartItem =
      input.parentElement.parentElement.parentElement.parentElement
        .parentElement;
    cartItem.parentElement.removeChild(cartItem);
  }
}

// Payment
if (document.getElementById("list-payment") != null) {
  document
    .getElementById("add-form-payment")
    .addEventListener("click", function () {
      // ایجاد یک عنصر جدید برای لیست پرداخت
      const paymentItem = document.createElement("div");
      paymentItem.className = "card-payment flex flex-row gap-2 mb-3";

      // محتوای HTML مربوط به آیتم جدید
      paymentItem.innerHTML = `
          <div class="input-group basis-2/5 m-0">
              <input type="text" class="input !sm:text-md !text-sm"
                  placeholder="به تومان وارد کنید" onkeyup="javascript:this.value=separate(this.value)">
          </div>
          <div class="input-group basis-2/5 m-0">
              <input type="text" class="input !sm:text-md !text-sm"
                  placeholder="انتخاب تاریخ">
          </div>
          <div class="btns-group basis-1/5">
              <button class="btn btn-primary-outline w-full remove-item">حذف</button>
          </div>
      `;

      // اضافه کردن آیتم به لیست پرداخت
      document.getElementById("list-payment").appendChild(paymentItem);
    });

  // مدیریت دکمه حذف
  document
    .getElementById("list-payment")
    .addEventListener("click", function (event) {
      if (event.target.classList.contains("remove-item")) {
        // حذف آیتم مربوطه
        event.target.closest(".card-payment").remove();
      }
    });
}

// Tabs
if (document.querySelectorAll(".nav-link") != null) {
  const tabsButtons = document.querySelectorAll(".nav-link");
  const tabPans = document.querySelectorAll(".tab-pane");
  tabsButtons.forEach((tabBtn, i) => {
    tabBtn.onclick = () => {
      tabPans.forEach((tabpane) => {
        tabpane.classList.add("hidden");
      });
      tabsButtons.forEach((btn) => {
        btn.classList.remove("active");
      });
      tabBtn.classList.add("active");
      tabPans[i].classList.remove("hidden");
    };
  });
}
