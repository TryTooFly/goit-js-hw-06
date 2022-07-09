let valueEl = Number(document.querySelector("#value").textContent);

let counterValue = document.querySelector("#value");

const dekrBtn = document.querySelector("#counter").firstElementChild;
const inkrBtn = document.querySelector("#counter").lastElementChild;

inkrBtn.addEventListener("click", (event) => {
  // console.log("Вішаємо слухача подій на цільову кнопку");
  valueEl += 1;

  counterValue.innerText = valueEl;
});

dekrBtn.addEventListener("click", (event) => {
  // console.log("Знімаємо слухача подій з цільової кнопки");
  valueEl -= 1;

  counterValue.innerText = valueEl;
  // console.log("counterValue", counterValue);
});
