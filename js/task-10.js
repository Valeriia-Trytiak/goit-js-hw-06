/*Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.
Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

Розміри найпершого <div> - 30px на 30px.
Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsEl = {
  inputEl: document.querySelector("input"),
  btnCreate: document.querySelector("[data-create]"),
  btnDelete: document.querySelector("[data-destroy]"),
  divContainerEl: document.querySelector("#boxes"),
};

controlsEl.btnCreate.addEventListener("click", createBoxes);

function createBoxes(amount) {
  amount = parseInt(controlsEl.inputEl.value);

  const arrayAllDivEl = [];
  let baseSizeBox = 20;

  if (1 >= amount || amount <= 100) {
    controlsEl.divContainerEl.innerHTML = "";

    for (let i = 0; i < amount; i += 1) {
      baseSizeBox += 10;

      const divEl = `<div style="width: ${baseSizeBox}px; height: ${baseSizeBox}px; margin: 5px; background-color: ${getRandomHexColor()};"></div>`;
      arrayAllDivEl.push(divEl);
    }

    controlsEl.divContainerEl.insertAdjacentHTML("beforeend", arrayAllDivEl.join(""));
  }
}

// Видалення елементів та очищення інпуту
controlsEl.btnDelete.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  controlsEl.divContainerEl.innerHTML = "";
  controlsEl.inputEl.value = "";
}
