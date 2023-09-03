function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color")
const body = document.body;
const bodyBackgroundColor = document.querySelector(".color");

btn.addEventListener("click", changeColor);

function changeColor() {

    const color = getRandomHexColor();
    bodyBackgroundColor.textContent = color;
    body.style.backgroundColor = color;
}