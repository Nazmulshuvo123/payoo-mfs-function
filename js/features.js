document
  .getElementById("show-add-money-form")
  .addEventListener("click", function () {
    // console.log("Button click")
    showSectionById("add-money-form");
  });

document
  .getElementById("show-cash-out-form")
  .addEventListener("click", function () {
    showSectionById("cash-out-form");
  });

document
  .getElementById("show-transition-form")
  .addEventListener("click", function () {
    showSectionById("transition-history");
  });
