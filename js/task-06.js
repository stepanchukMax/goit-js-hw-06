const input = document.querySelector("#validation-input");
input.addEventListener("blur", handleBlur);

function handleBlur(event) {
    let lengthOfWord = 0;
    lengthOfWord = event.currentTarget.value.length;
    if (lengthOfWord != input.dataset.length) {
        input.classList.remove("valid")
        input.classList.add("invalid");
    } else {
        input.classList.remove("invalid");
        input.classList.add("valid");
    }
}