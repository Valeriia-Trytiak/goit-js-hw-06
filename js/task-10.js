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


controlsEl.inputEl.addEventListener('input', onInputElInput);

const quantity = onInputElInput (); 

function onInputElInput (evt) {
  return parseInt(evt.currentTarget.value);
  
}
console.log(quantity)

// controlsEl.btnCreate.addEventListener('click', onBtnCreateClick);

// function onBtnCreateClick (evt) {
//   createBoxes(onInputElInput())
// }

// function createBoxes(amount) {
// const createDivEl = document.createElement('div');
// console.log(createDivEl);
// };

