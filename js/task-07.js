/*Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.*/

const inputControlEl = document.querySelector('#font-size-control');

const textEl = document.querySelector('#text');

inputControlEl.addEventListener('input', onInputControlElInput);

function onInputControlElInput (evt) {
textEl.style.fontSize = `${parseInt(evt.currentTarget.value)}px`

console.log(textEl.style.fontSize = parseInt(evt.currentTarget.value))
};
