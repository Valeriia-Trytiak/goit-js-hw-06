const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormElSubmit);

function onFormElSubmit (evt) {
// забороняю перезавантаження сторінки
evt.preventDefault();

// збираю властивості
const {
    elements: { email, password }
} = evt.currentTarget;

// перевіряю умову заповнення усіх полів
if (email.value === "" || password.value === "") {
alert(`Усі поля повинні бути заповнені!`);
};

// забираю значення логіну та пороля у консоль при заповнені усіх полів
if (email.value !== "" && password.value !== "") {
console.log(`Login: ${email.value}, Password: ${password.value}`)};

// очищую форму
evt.currentTarget.reset();
};
