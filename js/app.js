const btnDecrease = document.getElementById("btnDecrease");
const btnReset = document.getElementById("btnReset");
const btnIncrease = document.getElementById("btnIncrease");
const countLabel = document.getElementById("countLabel");
let count = 0;

btnDecrease.onclick = function () {
  count--;
  countLabel.textContent = count;
};
btnReset.onclick = function () {
  count = 0;
  countLabel.textContent = count;
};
btnIncrease.onclick = function () {
  count++;
  countLabel.textContent = count;
};
