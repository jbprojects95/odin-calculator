let firstNumber;
let secondNumber;
let operator;
let total;

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

function calculate(op, firstNumber, secondNumber) {
  switch (op) {
    case "+":
      total = add(firstNumber, secondNumber);
      return total;
    case "-":
      total = subtract(firstNumber, secondNumber);
      return total;
    case "*":
      total = multiply(firstNumber, secondNumber);
      return total;
    case "/":
      total = divide(firstNumber, secondNumber);
      return total;
  }
}

const clearScreen = () => {
  calcScreen.textContent = "";
};

const deleteDisplayValue = () => {
  displayValue = "";
};

// const processDisplayValue = (display) => {
//   const numbers = display.split(/\D/g);
//   const op = display.split(/\d/g).filter(Boolean);
//   const indexed = op.indexOf("=");
//   op.splice(indexed);

//   firstNumber = Number(numbers[0]);
//   secondNumber = Number(numbers[1]);
//   operator = op.join("");

//   return firstNumber, secondNumber, operator;
// };

const numSelect = document.querySelectorAll(".btn");
const calcScreen = document.querySelector(".calc-screen");
const ops = ["+", "-", "*", "/"];
const num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let displayValue = "";

numSelect.forEach((button) => {
  button.addEventListener("click", () => {
    const numBtn = num.includes(button.value);
    const opBtn = ops.includes(button.value);
    const clearBtn = button.value === "c";
    const calcBtn = button.value === "=";

    if (numBtn) {
      displayValue += button.value;
      calcScreen.textContent = displayValue;
      console.log("Number button pressed");
    }

    if (opBtn) {
      console.log("Operator pressed");
    }

    if (clearBtn) {
      console.log("Clear button pressed");
    }

    if (calcBtn) {
      console.log("Calculate button pressed");
    }
  });
});

// const input = displayValue.join("");
// const numbers = input.split(/\D/g);
// const op = input.split(/\d/g).filter(Boolean);
