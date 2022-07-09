function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnChangeColor = document.querySelector(".change-color");
const textColor = document.querySelector(".color");
const body = document.body;

btnChangeColor.addEventListener("click", changeColor);

function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
  textColor.textContent = body.style.backgroundColor;
}
