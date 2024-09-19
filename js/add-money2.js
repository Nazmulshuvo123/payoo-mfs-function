document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault(); // use for reloading page.
    // console.log("Add button is connected");

    const addMoney = getInputFieldValueById("add-money-input");
    const pinNumber = getInputFieldValueById("pin-number-input");
    console.log("The add money amount is:", addMoney);

    if (pinNumber === 1234) {
      const balance = getTextFieldValueById("current-amount");
      const newBalance = balance + addMoney;

      const totalBalance = (document.getElementById(
        "current-amount"
      ).innerText = newBalance);

      console.log("Total money is:", totalBalance);
    } else {
      alert("Failed to add money");
    }
  });
