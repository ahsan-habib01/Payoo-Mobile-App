const validPIN = 1836;

//? shared functions to get input values
function getInputValueNumber(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  const inputFieldValueNumber = parseInt(inputFieldValue);

  return inputFieldValueNumber;
}

function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;

  return inputFieldValue;
}

//? function to get innerText
function getInnerText(id) {
  const element = document.getElementById(id);
  const elementValue = element.innerText;
  const elementValueNumber = parseInt(elementValue);

  return elementValueNumber;
}

//? function to set innerText
function setInnerText(value) {
  const availableBalanceElement = document.getElementById('available-balance');
  availableBalanceElement.innerText = value;
}

//? function to toggle
function handleToggle(id) {
  const forms = document.getElementsByClassName('form');
  for (const form of forms) {
    form.style.display = 'none';
  }
  document.getElementById(id).style.display = 'block';
}

//? function toggle menu Buttons
function handleButtonToggle(id) {
  const menuBtns = document.getElementsByClassName('menu-btn');

  for (const btn of menuBtns) {
    btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]');
    btn.classList.add('border-gray-300');
  }

  document.getElementById(id).classList.remove('border-gray-300');
  document.getElementById(id).classList.add('border-[#0874f2]', 'bg-[#0874f20d]');
}

//! add money feature
document
  .getElementById('add-money-submit')
  .addEventListener('click', function (e) {
    e.preventDefault();

    // const bank = document.getElementById('add-bank').value;
    // const accountNumber = document.getElementById('add-account-number').value;
    // const amount = parseInt(document.getElementById('add-amount').value);
    // const pinNumber = parseInt(document.getElementById('add-pin-number').value);
    const bank = getInputValue('add-bank');
    const accountNumber = getInputValue('add-account-number');
    const amount = getInputValueNumber('add-amount');
    const pinNumber = getInputValueNumber('add-pin-number');

    // const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    const availableBalance = getInnerText('available-balance');

    const newTotalBalance = availableBalance + amount;

    if (accountNumber.length != 11) {
      alert('please provide a valid account number');
      return;
    }
    if (pinNumber !== validPIN) {
      alert('please provide a valid pin number');
      return;
    }

    // document.getElementById('available-balance').innerText = newTotalBalance;
    setInnerText(newTotalBalance);
  });

//! cash out feature
document
  .getElementById('withdraw-submit')
  .addEventListener('click', function (e) {
    e.preventDefault();

    // const agentNumber = document.getElementById('agent-number').value;
    // const withdrawAmount = parseInt(document.getElementById('withdraw-amount').value);
    // const pinNumber = parseInt(document.getElementById('pin-number').value);
    const agentNumber = getInputValue('agent-number');
    const withdrawAmount = getInputValueNumber('withdraw-amount');
    const pinNumber = getInputValueNumber('pin-number');

    // const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    const availableBalance = getInnerText('available-balance');

    const newAvailableBalance = availableBalance - withdrawAmount;

    if (agentNumber.length != 11) {
      alert('please provide a valid account number');
      return;
    }
    if (pinNumber !== validPIN) {
      alert('please provide a valid pin number');
      return;
    }

    // document.getElementById('available-balance').innerText = newAvailableBalance;
    setInnerText(newAvailableBalance);
  });

//! toggling feature
// Add Money
document
  .getElementById('add-money-btn')
  .addEventListener('click', function (e) {
    handleToggle('add-money-page');

    handleButtonToggle('add-money-btn')
  });

// Cash Out
document.getElementById('cash-out-btn').addEventListener('click', function (e) {
  handleToggle('cash-out-page');

  handleButtonToggle('cash-out-btn');
});

// Transfer Money
document
  .getElementById('transfer-money-btn')
  .addEventListener('click', function (e) {
    handleToggle('transfer-money-page');

    handleButtonToggle('transfer-money-btn');
  });

// Get Bonus
document
  .getElementById('get-bonus-btn')
  .addEventListener('click', function (e) {
    handleToggle('get-bonus-page');

    handleButtonToggle('get-bonus-btn');
  });

// Pay Bill
document.getElementById('pay-bill-btn').addEventListener('click', function (e) {
  handleToggle('pay-bill-page');

  handleButtonToggle('pay-bill-btn');
});

// Transactions
document
  .getElementById('transactions-btn')
  .addEventListener('click', function () {
    handleToggle('transactions-page');

    handleButtonToggle('transactions-btn');
  });
