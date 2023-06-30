// Select input field
const input = document.querySelector("#input");

// Select unit selection
const unit = document.querySelector("#unit");

const convert = () => {
  // Get value of user input and unit
  const value = parseFloat(input.value);
  const unitValue = unit.value;
  const output = document.querySelector("#output");

  // Show output when there is a valid value
  output.style.display = value ? "block" : "none";

  // Check unit type
  switch (unitValue) {
    case "lbs":
      convertLbs(value);
      break;
    case "grams":
      convertGrams(value);
      break;
    case "kilograms":
      convertKilograms(value);
      break;
    case "ounces":
      convertOunces(value);
      break;
    case "miles":
      convertMiles(value);
      break;
    case "meters":
      convertMeters(value);
      break;
    case "inches":
      convertInches(value);
      break;
    default:
      clearOutput();
  }
};

const card1 = document.querySelector("#card-1");
const card2 = document.querySelector("#card-2");
const card3 = document.querySelector("#card-3");

const convertLbs = (value) => {
  card1.querySelector("h4").textContent = "Grams:";
  card2.querySelector("h4").textContent = "Kilograms:";
  card3.querySelector("h4").textContent = "Ounces:";

  card1.querySelector("div").textContent = (value * 453.592).toFixed(2);
  card2.querySelector("div").textContent = (value * 0.453592).toFixed(2);
  card3.querySelector("div").textContent = (value * 16).toFixed(2);
};

const convertGrams = (value) => {
  card1.querySelector("h4").textContent = "Kilograms:";
  card2.querySelector("h4").textContent = "Ounces:";
  card3.querySelector("h4").textContent = "Pounds:";

  card1.querySelector("div").textContent = (value * 0.001).toFixed(2);
  card2.querySelector("div").textContent = (value * 0.035274).toFixed(2);
  card3.querySelector("div").textContent = (value * 0.00220462).toFixed(2);
};

const convertKilograms = (value) => {
  card1.querySelector("h4").textContent = "Grams:";
  card2.querySelector("h4").textContent = "Ounces:";
  card3.querySelector("h4").textContent = "Pounds:";

  card1.querySelector("div").textContent = (value * 1000).toFixed(2);
  card2.querySelector("div").textContent = (value * 35.274).toFixed(2);
  card3.querySelector("div").textContent = (value * 2.20462).toFixed(2);
};

const convertOunces = (value) => {
  card1.querySelector("h4").textContent = "Grams:";
  card2.querySelector("h4").textContent = "Kilograms:";
  card3.querySelector("h4").textContent = "Pounds:";

  card1.querySelector("div").textContent = (value * 28.3495).toFixed(2);
  card2.querySelector("div").textContent = (value * 0.0283495).toFixed(2);
  card3.querySelector("div").textContent = (value * 0.0625).toFixed(2);
};

const convertMiles = (value) => {
  card1.querySelector("h4").textContent = "Kilometers:";
  card2.querySelector("h4").textContent = "Meters:";
  card3.querySelector("h4").textContent = "Inches:";

  card1.querySelector("div").textContent = (value * 1.60934).toFixed(2);
  card2.querySelector("div").textContent = (value * 1609.34).toFixed(2);
  card3.querySelector("div").textContent = (value * 63360).toFixed(2);
};

const convertMeters = (value) => {
  card1.querySelector("h4").textContent = "Kilometers:";
  card2.querySelector("h4").textContent = "Miles:";
  card3.querySelector("h4").textContent = "Inches:";

  card1.querySelector("div").textContent = (value * 0.001).toFixed(2);
  card2.querySelector("div").textContent = (value * 0.000621371).toFixed(2);
  card3.querySelector("div").textContent = (value * 39.3701).toFixed(2);
};

const convertInches = (value) => {
  card1.querySelector("h4").textContent = "Centimeters:";
  card2.querySelector("h4").textContent = "Feet:";
  card3.querySelector("h4").textContent = "Meters:";

  card1.querySelector("div").textContent = (value * 2.54).toFixed(2);
  card2.querySelector("div").textContent = (value * 0.0833333).toFixed(2);
  card3.querySelector("div").textContent = (value * 0.0254).toFixed(2);
};

const clearOutput = () => {
  card1.querySelector("h4").textContent = "";
  card2.querySelector("h4").textContent = "";
  card3.querySelector("h4").textContent = "";

  card1.querySelector("div").textContent = "";
  card2.querySelector("div").textContent = "";
  card3.querySelector("div").textContent = "";
};

// Catch user input event and unit change
input.addEventListener("input", convert);
unit.addEventListener("change", convert);
