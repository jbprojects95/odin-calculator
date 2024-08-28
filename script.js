function calculate(op, firstNumber, secondNumber) {
  switch (op) {
    case "+":
      return parseFloat(firstNumber) + parseFloat(secondNumber);
    case "-":
      return parseFloat(firstNumber) - parseFloat(secondNumber);

    case "*":
      return parseFloat(firstNumber) * parseFloat(secondNumber);

    case "/":
      return parseFloat(firstNumber) / parseFloat(secondNumber);
  }
}

const clearScreen = () => {
  calcScreen.textContent = "";
};

const deleteDisplayValue = () => {
  displayValue = "";
};

const calculator = document.querySelector(".calculator");
const numSelect = document.querySelectorAll(".btn");
const calcScreen = document.querySelector(".calc-screen");
const ops = ["+", "-", "*", "/"];
const num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let displayValue = "";

numSelect.forEach((button) => {
  button.addEventListener("click", () => {
    const numBtn = num.includes(button.value);
    const opBtn = ops.includes(button.value);
    const decimalBtn = button.value === ".";
    const clearBtn = button.value === "c";
    const calcBtn = button.value === "=";
    const btnContent = button.value;
    const bckBtn = button.value === "bkspc";
    let total;

    if (numBtn) {
      if (calcScreen.textContent === "0" || lastValue === "operator") {
        displayValue = btnContent;
        lastValue = "number";
      } else {
        displayValue += btnContent;
      }
      calcScreen.textContent = displayValue;
    }

    if (bckBtn && lastValue !== "calculate") {
      console.log("DELETED PRESSED!");
      displayValue = calcScreen.textContent.slice(0, -1);
      calcScreen.textContent = displayValue;
    }

    if (decimalBtn) {
      if (!displayValue.includes(".")) {
        calcScreen.textContent = displayValue += ".";
      } else if (lastValue === "operator") {
        calcScreen.textContent = "0.";
      }
      lastValue = "decimal";
    }

    if (opBtn) {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayValue;

      if (firstValue && operator && lastValue !== "operator") {
        total = calculate(operator, firstValue, secondValue);
        calcScreen.textContent = total;
        calculator.dataset.firstValue = total;
      } else {
        calculator.dataset.firstValue = displayValue;
      }
      calculator.dataset.operator = btnContent;
      lastValue = "operator";
    }

    if (clearBtn) {
      displayValue = "";
      calculator.dataset.firstValue = "";
      calculator.dataset.operator = "";
      calculator.dataset.secondValue = "";
      calcScreen.textContent = "0";
      lastValue = ""; // Optional, if you need to reset this as well.
      console.log("Clear button pressed");
      console.log(`FIRST: ${calculator.dataset.firstValue}`);
      console.log(`SECOND: ${calculator.dataset.secondValue}`);
      console.log(calculator.dataset.operator);
    }

    if (calcBtn) {
      firstValue = calculator.dataset.firstValue;
      operator = calculator.dataset.operator;
      secondValue = displayValue;

      total = calculate(operator, firstValue, secondValue);
      calcScreen.textContent = total;

      if ((!firstValue && !operator) || !secondValue) {
        calcScreen.textContent = "0";
      }

      lastValue = "calculate";
      console.log("Clear button pressed");
      console.log(`FIRST: ${firstValue}`);
      console.log(`SECOND: ${secondValue}`);
      console.log(operator);
    }
  });
});

// const input = displayValue.join("");
// const numbers = input.split(/\D/g);
// const op = input.split(/\d/g).filter(Boolean);
