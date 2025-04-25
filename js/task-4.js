const formElem = document.querySelector('.login-form');

formElem.addEventListener('submit', onFormSubmit);

function onFormSubmit(event){
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (emailValue === '' || passwordValue === '') {
        alert('All form fields must be filled in');
    } else {
        const userData = {
            email: emailValue,
            password: passwordValue,
    };
    console.log(userData);   
    formElem.reset();
    }};
