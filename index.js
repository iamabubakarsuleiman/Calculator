// Calculator Program

const display = document.getElementById("display");

// Function to display values
function appendToDisplay(input) {
  display.value += input;
}

// Function to delate the last value
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Function to clear display screen
function clearDisplay() {
  display.value = "";
}

// Function to evaluate/calculate displayed values
function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Syntax Error!";
  }
}
