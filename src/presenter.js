import sumar from "./sumador";
import multiplicar from "./multiplicador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
// const form = document.querySelector("#sumar-form");
const sumarButton = document.querySelector("#sumar-button");
const multiplicarButton = document.querySelector("#boton-multiplicar");
const div = document.querySelector("#resultado-div");

sumarButton.addEventListener("click", (event) => {
  event.preventDefault();
  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

multiplicarButton.addEventListener("click", (event) => {
  event.preventDefault();
  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  div.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
});
