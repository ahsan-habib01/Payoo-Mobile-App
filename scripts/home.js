const validPIN = 1836;
const transactionData = [];

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
  document
    .getElementById(id)
    .classList.add('border-[#0874f2]', 'bg-[#0874f20d]');
}

//! add money feature
document
  .getElementById('add-money-submit')
  .addEventListener('click', function (e) {
    e.preventDefault();

    const bank = getInputValue('add-bank');
    const accountNumber = getInputValue('add-account-number');
    const amount = getInputValueNumber('add-amount');
    const pinNumber = getInputValueNumber('add-pin-number');

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

    setInnerText(newTotalBalance);

    const data = {
      name: 'Add Money',
      date: new Date().toLocaleTimeString(),
    };

    transactionData.push(data);
    console.log(transactionData);
  });

//! cash out feature
document
  .getElementById('withdraw-submit')
  .addEventListener('click', function (e) {
    e.preventDefault();

    const agentNumber = getInputValue('agent-number');
    const withdrawAmount = getInputValueNumber('withdraw-amount');
    const pinNumber = getInputValueNumber('pin-number');

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

    setInnerText(newAvailableBalance);

    const data = {
      name: 'Cash Out',
      date: new Date().toLocaleTimeString(),
    };

    transactionData.push(data);
    console.log(data);
    console.log(transactionData);
  });

//! Transaction feature
document
  .getElementById('transactions-btn')
  .addEventListener('click', function () {
    // console.log(transactionData);
    const transactionCardContainer = document.getElementById(
      'transaction-card-container'
    );

    
    for (const data of transactionData) {
      const div = document.createElement('div');
      div.innerHTML = `
        <div class="bg-white rounded-xl p-3 flex justify-between items-center mt-3">
          <div class="flex items-center">
            <div class="bg-[#f4f5f7] p-3 rounded-full">
              <img src="./assets/wallet1.png" class="mx-auto" alt="">
            </div>
            <div class="ml-3">
              <h1 class="font-semibold">${data.name}</h1>
              <p>${data.date}</p>
        
            </div>
          </div>
        
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
    `
    transactionCardContainer.appendChild(div);
    }
  });

//! toggling feature
// Add Money
document
  .getElementById('add-money-btn')
  .addEventListener('click', function (e) {
    handleToggle('add-money-page');

    handleButtonToggle('add-money-btn');
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
