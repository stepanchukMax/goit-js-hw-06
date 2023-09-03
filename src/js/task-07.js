const sizer = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
sizer.addEventListener("input", changeSize);

function changeSize(event) {
    const size = sizer.value + 'px';
    text.style.fontSize = size;
}