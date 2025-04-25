# goit-js-hw-07
<!-- category -->

<!-- const gallery = document.querySelector(".gallery");

const markup = images
  .map(({ url, alt }) => `
    <li class="gallery-item">
      <img src="${url}" alt="${alt}" width="300">
    </li>
  `)
  .join("");

gallery.insertAdjacentHTML("beforeend", markup); -->

<!-- Task 3 input -->

  <!-- const input = document.querySelector('#name-input');
  const output = document.querySelector('#name-output');

  input.addEventListener('input', () => {
    const trimmedValue = input.value.trim();
    output.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;
  });

  or

    document.querySelector('#name-input').addEventListener('input', ({ target }) => {
    const name = target.value.trim();
    document.querySelector('#name-output').textContent = name || 'Anonymous';
  }); -->

  <!-- Task 4 Form -->

  <!-- const formElem = document.querySelector('.login-form');

formElem.addEventListener('submit', onFormSubmit);

function onFormSubmit(event){
    event.preventDefault();
    // деструктуризація спосіб "витягнути" конкретні властивості з об'єкта.
    const { email, password } = event.currentTarget.elements;
// const email = event.currentTarget.elements.email;
// const password = event.currentTarget.elements.password;

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
    }} -->