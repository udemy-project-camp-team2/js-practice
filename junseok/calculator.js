const firstNumber = document.querySelector("input[name='firstNumber']");
const secondNumber = document.querySelector("input[name='secondNumber']");
const calculateBtns = document.querySelectorAll(".calculate-buttons");

calculateBtns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    const { name } = e.target;
    if (!firstNumber.value || !secondNumber.value) return;

    const firstValue = Number(firstNumber.value);
    const secondValue = Number(secondNumber.value);

    let result;

    switch (name) {
      case "sum":
        result = firstValue + secondValue;
        break;
      case "minus":
        result = firstValue - secondValue;
        break;
      case "multiply":
        result = firstValue * secondValue;
        break;
      case "divide":
        result = firstValue / secondValue;
        break;
      default:
        break;
    }

    document.getElementById("result").innerHTML = result;
  }),
);
