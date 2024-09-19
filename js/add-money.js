document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    console.log('Add Money button clicked');
    // const addMoney = getInputFieldValueById();
    // console.log('The add money amount is:',addMoney);

    const addMoney = getInputFieldValueById('add-money-input');
    console.log('Add money input is:', addMoney);

    const pinNumber = getInputFieldValueById('pin-number-input');
    console.log('The pin number is:', pinNumber);

  });
