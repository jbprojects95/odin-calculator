let firstNumber;
let secondNumber;
let operator;

const warning = "Type a valid operator";

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

function operate(op) {
  switch (op) {
    case "+":
      return add(firstNumber, secondNumber);
    case "-":
      return subtract(firstNumber, secondNumber);
    case "*":
      return multiply(firstNumber, secondNumber);
    case "/":
      return divide(firstNumber, secondNumber);
  }
}

const clearScreen = () => {
  calcScreen.textContent = "";
};

const deleteDisplayValue = () => {
  displayValue.length = 0;
};

const numSelect = document.querySelectorAll(".btn");
const calcScreen = document.querySelector(".calc-screen");
let displayValue = [];
const numberValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const ops = ["+", "-", "*", "/"];

numSelect.forEach((button) => {
  button.addEventListener("click", () => {
    if (numberValues.includes(button.value)) {
      displayValue.push(Number(button.value));
    } else {
      displayValue.push(button.value);
    }
    calcScreen.textContent = displayValue.join("");
    console.log(displayValue);

    if (button.value === "c") {
      clearScreen();
      deleteDisplayValue();
    }

    if (button.value === "=") {
      const indexOfEqual = displayValue.indexOf("=");
      displayValue.splice(indexOfEqual);
      for (const element of displayValue) {
        if (typeof element !== "number") {
          const indexed = displayValue.indexOf(element);
          operator = [element];
          firstNumber = Number(displayValue.slice(0, indexed).join(""));
          secondNumber = Number(displayValue.slice(indexed + 1).join(""));
          operator = operator.join("");
        }
      }
      //put calculate function here
      console.log(firstNumber);
      console.log(secondNumber);
      console.log(operator);
    }
  });
});

// const input = displayValue.join("");
// const numbers = input.split(/\D/g);
// const op = input.split(/\d/g).filter(Boolean);
