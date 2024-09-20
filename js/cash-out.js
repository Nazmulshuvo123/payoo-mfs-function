document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const cashOut = getInputFieldValueById("cash-out-input");
    const pinNumber = getInputFieldValueById("cash-out-pin-number");
    // console.log('Cash out input and cash out pin number is:', cashOut, pinNumber);

    if (pinNumber === 1234) {
      const balance = getTextFieldValueById("current-amount");
      const newBalance = balance - cashOut;
      const totalBalance = (document.getElementById(
        "current-amount"
      ).innerText = newBalance);
      console.log(totalBalance);
    } else {
      alert("Pin number is wrong..");
    }
  });
