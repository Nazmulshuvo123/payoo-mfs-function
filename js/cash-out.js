document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
   const cashOutMoney =  getInputFieldValueById('cash-out-input');
   const pinNumber = getInputFieldValueById('cash-out-pin-number');
   
   console.log(cashOutMoney, pinNumber)
  });
