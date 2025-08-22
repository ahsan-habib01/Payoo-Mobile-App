const validPIN = 1836;

document
  .getElementById('add-money-btn')
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
