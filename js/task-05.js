const input = document.querySelector("#name-input");
const nameOfinput = document.querySelector("#name-output");
input.addEventListener("input", handleEvent)

function handleEvent(event) {
    nameOfinput.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
        nameOfinput.textContent = "Anonymous"
    }
}