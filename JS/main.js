console.log("JS OK");

const journeyKmElement = document.getElementById("journey-km");
const ageSelectorElement = document.getElementById("age-selector");
const finalPriceElement = document.getElementById("final-price");
const btnGenerateElement = document.getElementById("btn-generate");

btnGenerateElement.addEventListener("click", function () {
  const journeyKm = parseInt(journeyKmElement.value);
  console.log(journeyKm);
  const userAge = ageSelectorElement.value;
  console.log(userAge);

  if (!isNaN(journeyKm)) {
    const pricePerKm = 0.21;
    let discount = 0;
    const subtotalPrice = pricePerKm * journeyKm;

    if (userAge == "under18") {
      discount = 20;
    } else if (userAge == "over65") {
      discount = 40;
    }

    const finalPrice = subtotalPrice * (1 - discount / 100);
    finalPriceElement.innerText = finalPrice.toFixed(2) + " €";
  } else {
    finalPriceElement.innerText = "Dati non validi";
  }
});
