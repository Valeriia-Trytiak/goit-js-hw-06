// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterVal

// const counterValue = document.querySelector('#value');
const counterValue = 0;

const decrementBtn = document.querySelector('[data-action = "decrement"]');

const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener('click', onDecrementBtnClick);

function onDecrementBtnClick() {

    counterValue += 1;
}

console.log(counterValue)