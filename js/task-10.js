function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsEl = {
  inputEl : document.querySelector('input'),
  btnCreate : document.querySelector('[data-create]'),
  btnDelete : document.querySelector('[data-destroy]'),
  divContainerEl : document.querySelector('#boxes'),
};

 let baseSizeBox = 20;
 const arrayAllDivEl = [];

controlsEl.btnCreate.addEventListener('click', createBoxes);

function createBoxes(amount) {
amount = parseInt(controlsEl.inputEl.value) 
console.log(amount);

if (1 >= amount || amount <= 100) {
  for (let i = 0; i < amount; i+= 1) {
    baseSizeBox += 10;
 
    const divEl = `<div style="width: ${baseSizeBox}px; height: ${baseSizeBox}px; margin: 10px; background-color: ${getRandomHexColor()};"></div>`
    arrayAllDivEl.push(divEl)
    controlsEl.divContainerEl.insertAdjacentHTML('beforeend', arrayAllDivEl);
    }
}

}

// Видалення елементів та очищення інпуту
controlsEl.btnDelete.addEventListener('click', destroyBoxes);

function destroyBoxes () {
controlsEl.divContainerEl.innerHTML = '';
controlsEl.inputEl.value = '';
}
