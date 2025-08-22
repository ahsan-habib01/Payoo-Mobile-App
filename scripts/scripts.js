// Login Button Functionality

const loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click', function (e) {
  e.preventDefault();

  const mobileNumber = 1742981732;
  const pinNumber = 1836;

  const mobileNumberValue = document.getElementById('phone-number').value;
  const mobileNumberValueConverted = parseInt(mobileNumberValue);

  const pinNumberValue = document.getElementById('pin-number').value;
  const pinNumberValueConverted = parseInt(pinNumberValue);
  
  if (mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber) {
  window.location.href='./home.html'
  } else {
    alert('Invalid Credentials')
  }
});
