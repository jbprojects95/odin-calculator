function calculate(op, firstNumber, secondNumber) {
  switch (op) {
    case "+":
      return parseInt(firstNumber) + parseInt(secondNumber);
    case "-":
      return parseInt(firstNumber) - parseInt(secondNumber);

    case "*":
      return parseInt(firstNumber) * parseInt(secondNumber);

    case "/":
      return parseInt(firstNumber) / parseInt(secondNumber);
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
// let lastValue;
// let operator;
// let firstValue;

numSelect.forEach((button) => {
  button.addEventListener("click", () => {
    const numBtn = num.includes(button.value);
    const opBtn = ops.includes(button.value);
    const clearBtn = button.value === "c";
    const calcBtn = button.value === "=";
    const btnContent = button.value;

    if (numBtn) {
      if (calcScreen.textContent === "0" || lastValue === "operator") {
        displayValue = btnContent;
        lastValue = "number";
      } else {
        displayValue += btnContent;
      }
      calcScreen.textContent = displayValue;
    }

    if (opBtn) {
      //LEFT IT HERE
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayValue;

      if (firstValue && operator && lastValue !== "operator") {
        const total = calculate(operator, firstValue, secondValue);
        calcScreen.textContent = total;
        calculator.dataset.firstValue = total;
      } else {
        calculator.dataset.firstValue = displayValue;
      }
      calculator.dataset.operator = btnContent;
      lastValue = "operator";
      console.log(`FIRST VALUE: ${firstValue}`);
    }

    if (clearBtn) {
      console.log("Clear button pressed");
    }

    if (calcBtn) {
      firstValue = calculator.dataset.firstValue;
      operator = calculator.dataset.operator;
      secondValue = displayValue;

      calcScreen.textContent = calculate(operator, firstValue, secondValue);

      console.log(`FIRST: ${firstValue}`);
      console.log(`SECOND: ${secondValue}`);
      console.log("Calculate button pressed");
    }
  });
});

// const input = displayValue.join("");
// const numbers = input.split(/\D/g);
// const op = input.split(/\d/g).filter(Boolean);
