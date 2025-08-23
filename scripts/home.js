const validPIN = 1836;

// add money feature
document
  .getElementById('add-money-submit')
  .addEventListener('click', function (e) {
    e.preventDefault();

    const bank = document.getElementById('add-bank').value;
    const accountNumber = document.getElementById('add-account-number').value;
    const amount = parseInt(document.getElementById('add-amount').value);
    const pinNumber = parseInt(document.getElementById('add-pin-number').value);

    const availableBalance = parseInt(
      document.getElementById('available-balance').innerText
    );

    const newTotalBalance = availableBalance + amount;

    if (accountNumber.length != 11) {
      alert('please provide a valid account number');
      return;
    }
    if (pinNumber !== validPIN) {
      alert('please provide a valid pin number');
      return;
    }

    document.getElementById('available-balance').innerText = newTotalBalance;
  });

// cash out feature
document
  .getElementById('withdraw-submit')
  .addEventListener('click', function (e) {
    e.preventDefault();

    const agentNumber = document.getElementById('agent-number').value;
    const withdrawAmount = parseInt(
      document.getElementById('withdraw-amount').value
    );
    const pinNumber = parseInt(document.getElementById('pin-number').value);

    const availableBalance = parseInt(
      document.getElementById('available-balance').innerText
    );

    const newAvailableBalance = availableBalance - withdrawAmount;

    if (agentNumber.length != 11) {
      alert('please provide a valid account number');
      return;
    }
    if (pinNumber !== validPIN) {
      alert('please provide a valid pin number');
      return;
    }

    document.getElementById('available-balance').innerText =
      newAvailableBalance;
  });

// toggling feature
const addMoneyBtn = document.getElementById('add-money-btn');
const cashOutBtn = document.getElementById('cash-out-btn');

const addMoneyPage = document.getElementById('add-money-page');
const cashOutPage = document.getElementById('cash-out-page');

addMoneyBtn.addEventListener('click', function () {
  cashOutPage.style.display = 'none';
  addMoneyPage.style.display = 'block';

  addMoneyBtn.style.borderColor = 'blue';
  cashOutBtn.style.border = '';
});

cashOutBtn.addEventListener('click', function () {
  addMoneyPage.style.display = 'none';
  cashOutPage.style.display = 'block';

  cashOutBtn.style.borderColor = 'blue';
  addMoneyBtn.style.border = '';
});
