function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.querySelector(".change-color").addEventListener("click", function () {
  let body = document.querySelector("body");
  let colorSpan = document.querySelector(".color");
  
  let randomColor = getRandomHexColor();
  
  body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});