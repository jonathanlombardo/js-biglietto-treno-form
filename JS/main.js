console.log("JS OK");

const customerNameInputElement = document.getElementById("customer-name");
const journeyKmInputElement = document.getElementById("journey-km");
const ageSelectorElement = document.getElementById("age-selector");
const finalPriceElement = document.getElementById("final-price");
const btnGenerateElement = document.getElementById("btn-generate");

const ticketElement = document.getElementById("ticket");
const subtotalValueElement = document.getElementById("subtotal-value");
const pricePerKmElement = document.getElementById("price-per-km-value");
const discountLabelElement = document.getElementById("discount-label");
const discountValueElement = document.getElementById("discount-value");
const customerNameOutputElement = document.getElementById("customer-detail-name");
const journeyKmOutputElement = document.getElementById("customer-detail-km");
const ticketNameElement = document.getElementById("ticket-name");
const ticketSeatElement = document.getElementById("ticket-seat");
const ticketCodeElement = document.getElementById("ticket-code");
const errorElement = document.getElementById("error");
const errorNameElement = document.getElementById("errorNameText");
const errorKmElement = document.getElementById("errorKmText");

ticketElement.style.display = "none";
errorNameElement.style.display = "none";
errorKmElement.style.display = "none";

btnGenerateElement.addEventListener("click", function () {
  errorElement.style.display = "none";
  errorNameElement.style.display = "none";
  errorKmElement.style.display = "none";
  customerNameInputElement.style.borderColor = "";
  journeyKmInputElement.style.borderColor = "";
  discountLabelElement.style.display = "none";
  discountValueElement.style.display = "none";
  const customerName = customerNameInputElement.value;
  const journeyKm = parseInt(journeyKmInputElement.value);
  const userAge = ageSelectorElement.value;

  if (!isNaN(journeyKm) && customerName) {
    ticketElement.style.display = "";
    let ticketName = "Biglietto Intero";
    const pricePerKm = 0.21;
    let discount = 0;
    let discountValue = 0;
    const subtotalPrice = pricePerKm * journeyKm;

    if (userAge == "under18") {
      ticketName = "Biglietto Ridotto";
      discount = 20;
      discountValue = (subtotalPrice * discount) / 100;
      discountLabelElement.style.display = "";
      discountValueElement.style.display = "";

      discountLabelElement.innerText = "Sconto Under18 (" + discount + "%):";
      discountValueElement.innerText = discountValue.toFixed(2) + " €";
    } else if (userAge == "over65") {
      ticketName = "Biglietto Over65";
      discount = 40;
      discountValue = (subtotalPrice * discount) / 100;
      discountLabelElement.style.display = "";
      discountValueElement.style.display = "";

      discountLabelElement.innerText = "Sconto Over (" + discount + "%):";
      discountValueElement.innerText = discountValue.toFixed(2) + " €";
    }

    const finalPrice = subtotalPrice - discountValue;

    subtotalValueElement.innerText = subtotalPrice.toFixed(2) + " €";
    pricePerKmElement.innerText = pricePerKm.toFixed(2) + " € / Km";
    finalPriceElement.innerText = finalPrice.toFixed(2) + " €";
    customerNameOutputElement.innerText = customerName;
    ticketNameElement.innerText = ticketName;
    journeyKmOutputElement.innerText = journeyKm + " Km";

    const randomSeatNumber = Math.floor(Math.random() * 200) + 1;
    const randomSeatLetter = (Math.floor(Math.random() * 25) + 10).toString(36);
    ticketSeatElement.innerText = randomSeatNumber + randomSeatLetter.toUpperCase();
    ticketCodeElement.innerText = Math.random().toString(36).slice(2);
  } else {
    if (!customerName) {
      customerNameInputElement.style.borderColor = "red";
      errorNameElement.style.display = "";
    }

    if (isNaN(journeyKm)) {
      journeyKmInputElement.style.borderColor = "red";
      errorKmElement.style.display = "";
    }

    ticketElement.style.display = "none";
    errorElement.innerText = "Dati non validi";
    errorElement.style.display = "";
  }
});
