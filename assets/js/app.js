btn = document.querySelector(".purchase-payment-button");
btnLoader = document.querySelector(".purchase-payment-button-loader");
btnText = document.querySelector(".purchase-payment-button-text");
form = document.getElementById("form");
card = document.getElementById("input-card");
cvv = document.getElementById("input-cvv");
timer = document.getElementById("timer");
modal = document.querySelector(".modal");
error = document.querySelector(".purchase-payment-error");

let countDownDate = new Date("Augst 5, 2020 15:37:25").getTime();

// create loop for every 1 second and update the countdown
var x = setInterval(function () {
  // we take the time now
  var now = new Date().getTime();

  //we find the difference from the count down date
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //   we update the timer div
  timer.innerHTML = `
        <div class='countDown'>
         <div class="countDown-arrow"></div>
        <div class='countDown-days'>${days}<br> <span>DAYS</span></div>
        <div class='countDown-hours'>${hours}<br> <span>HOURS</span></div>
        <div class='countDown-minutes'>${minutes}<br> <span>MINUTES</span></div>
        <div class='countDown-seconds'>${seconds}<br> <span>SECONDS</span></div>
        </div>
        `;
  // days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // if distance is 0 we expire the offer
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// here put a event listener so cvv must be no more than 3 numbers
cvv.addEventListener("keypress", (event) => {
  if (event.target.value.length > 2) {
    event.preventDefault();
  }
});

// here i check the  card length to be no more than 16 digits and
// every 4 number i put a space to be more readable
card.addEventListener("keypress", (event) => {
  console.log(event.target.value);
  if (event.target.value.length === 4) {
    card.value = event.target.value + " ";
    console.log("4 length");
  }

  if (event.target.value.length === 9) {
    card.value = event.target.value + " ";
  }

  if (event.target.value.length === 14) {
    card.value = event.target.value + " ";
  }

  if (event.target.value.length > 18) {
    event.preventDefault();
  }
});

// here he handle the form submition
form.addEventListener("submit", (event) => {
  event.preventDefault();
  btnLoader.style.display = "block";
  btnText.style.display = "none";
  // we start teh validation of the form
  // i ma doing a very simple and quick validation

  //we check if name, email, card holder is empty
  if (
    event.target.name.value.length <= 0 ||
    event.target.email.value.length <= 0 ||
    event.target.cardHolder.value.length <= 0
  ) {
    error.style.display = " block";
    btnLoader.style.display = "none";
    btnText.style.display = "block";
    return;
  }

  name = event.target.name.value;
  email = event.target.email.value;
  card = event.target.card.value;
  // i remove the spaces
  card = card.replace(/ /g, "");
  expire = event.target.expire.value;
  cvv = event.target.cvv.value;
  cardholder = event.target.cardHolder.value;
  modal.classList.add("modalShow");
  console.log(
    "Name: " + name,
    "\n",
    "Email: " + email,
    "\n",
    "Card Number: " + card,
    "\n",
    "Expire Date: " + expire,
    "\n",
    "Card Cvv: " + cvv,
    "\n",
    "Card Holder: " + cardholder
  );
});
