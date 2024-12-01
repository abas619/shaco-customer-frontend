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

// جدا کردن ۳ رقم
function separate(Number) {
  Number = Number.replace(/,/g, "");
  let parts = Number.split(".");
  let integerPart = parts[0];
  let decimalPart = parts.length > 1 ? "." + parts[1] : "";
  let rgx = /(\d+)(\d{3})/;
  while (rgx.test(integerPart)) {
    integerPart = integerPart.replace(rgx, "$1" + "," + "$2");
  }
  return integerPart + decimalPart;
}

// جمع پرداختی ها
function updateTotalPayment() {
  let total = 0;

  // نقدی
  const cashInput = document.querySelector(".input-group input");
  if (cashInput && cashInput.value) {
    const cashValue = parseInt(cashInput.value.replace(/,/g, ""), 10);
    if (!isNaN(cashValue)) {
      total += cashValue;
    }
  }

  // قسطی
  document
    .querySelectorAll("#list-payment .input-group input")
    .forEach((input) => {
      if (input.value) {
        const installmentValue = parseInt(input.value.replace(/,/g, ""), 10);
        if (!isNaN(installmentValue)) {
          total += installmentValue;
        }
      }
    });

  // به‌روزرسانی جمع پرداختی
  const totalElement = document.querySelector("#total-payment .number");
  totalElement.innerHTML =
    separate(total.toString()) + `<small class="toman">تومان</small>`;
}

function addInputEventListeners() {
  document
    .querySelectorAll("#list-payment .input-group input")
    .forEach((input) => {
      input.addEventListener("keyup", function () {
        this.value = separate(this.value);
        updateTotalPayment();
      });
    });
  const cashInput = document.querySelector(".input-group input");
  if (cashInput) {
    cashInput.addEventListener("keyup", function () {
      this.value = separate(this.value);
      updateTotalPayment();
    });
  }
}

// دکمه افزودن قسط جدید
if (document.getElementById("list-payment") != null) {
  document
    .getElementById("add-form-payment")
    .addEventListener("click", function () {
      const paymentItem = document.createElement("div");
      paymentItem.className =
        "card-payment grid grid-cols-[1fr,1fr,48px] gap-2 mb-3";
      paymentItem.innerHTML = `
          <div class="input-group m-0">
              <input type="text" class="input !sm:text-md !text-sm"
                  placeholder="به تومان وارد کنید" onkeyup="this.value=separate(this.value); updateTotalPayment();">
          </div>
          <div class="input-group m-0">
              <input type="text" class="input date-picker !sm:text-md !text-sm"
                  placeholder="انتخاب تاریخ">
          </div>
          <button
              class="btn btn-primary-outline border-red-500 text-red-500 hover:bg-red-500 hover:text-white w-full remove-item p-0 w-12 h-12">
              <i class="fi fi-rs-trash relative top-1"></i>
          </button>
      `;

      document.getElementById("list-payment").appendChild(paymentItem);

      $(paymentItem).find(".date-picker").persianDatepicker({
        observer: true,
        format: "YYYY/MM/DD",
        autoClose: true,
        initialValue: true,
      });

      addInputEventListeners();
      updateTotalPayment();
    });

  // مدیریت دکمه حذف
  document
    .getElementById("list-payment")
    .addEventListener("click", function (event) {
      if (event.target.classList.contains("remove-item")) {
        event.target.closest(".card-payment").remove();
        updateTotalPayment();
      }
    });
}

addInputEventListeners();
