
/*Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
Під час відправлення форми сторінка не повинна перезавантажуватися.
Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.*/


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
return alert(`Усі поля повинні бути заповнені!`);
};

// забираю значення логіну та пороля у консоль при заповнені усіх полів
if (email.value !== "" && password.value !== "") {
console.log(`Login: ${email.value}, Password: ${password.value}`)};

// очищую форму
evt.currentTarget.reset();
};
