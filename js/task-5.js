function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorChangeBtn = document.querySelector('button.change-color');
const colorSpan = document.querySelector('span.color');

colorChangeBtn.addEventListener('click', handleBtnClick);

function handleBtnClick() {
const randomColor = getRandomHexColor();
document.body.style.backgroundColor = randomColor;
colorSpan.textContent = randomColor;
}