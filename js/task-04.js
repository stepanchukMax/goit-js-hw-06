const counter = document.querySelector("#counter");
const incrementBtn = counter.querySelector('button[data-action="increment"]')
const decrementBtn = counter.querySelector('button[data-action="decrement"]')
const number = counter.querySelector('#value')

incrementBtn.addEventListener("click", increaseValue)
decrementBtn.addEventListener("click", decreaseValue)

let counterValue = 0;

function increaseValue() {
    counterValue += 1;
    updateValue();
}

function decreaseValue() {
    counterValue -= 1;
    updateValue();
}

function updateValue() {
    number.textContent = counterValue;
}