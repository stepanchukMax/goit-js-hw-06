const form = document.querySelector(".login-form")
form.addEventListener("submit", handleSubmit);



function handleSubmit(event) {

    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    if (email.value === '' || password.value === '') {
        alert('you should fill in all fields!');
    }


    const info = {
        email: email.value,
        password: password.value,
    }



    console.log(info);
    form.reset();
}