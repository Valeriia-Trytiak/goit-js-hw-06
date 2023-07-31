function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsEl = {
  inputEl : document.querySelector('input'),
  btnCreate : document.querySelector('[data-create]'),
  btnDelete : document.querySelector('[data-destroy]'),
  
}

const divContainerEl = document.querySelector('#boxes');

controlsEl.btnCreate.addEventListener('click', createBoxes);

function createBoxes(amount) {
amount = parseInt(controlsEl.inputEl.value) 
console.log(amount)

let divSizeDefaut = 30;
const arrayAllDiv = [];

for (let i = 0; i < amount; i += 1) {
  divSizeDefaut += 10;
  const divEl = `<div style="width: ${divSizeDefaut} ; height: ${divSizeDefaut} ; background-color: ${getRandomHexColor()};"></div>`;
  arrayAllDiv.push(divEl);
  arrayAllDiv.join('')
  // arrayAllDiv.join('');
  // console.log(arrayAllDiv)
  console.log(arrayAllDiv)

// return divContainerEl.insertAdjacentHTML('beforeend', arrayAllDiv);


}
}

