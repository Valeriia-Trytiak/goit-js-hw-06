const inputControlEl = document.querySelector('#font-size-control');

const textEl = document.querySelector('#text');

inputControlEl.addEventListener('input', onInputControlElInput);

function onInputControlElInput (evt) {
textEl.style.fontSize = `${parseInt(evt.currentTarget.value)}px`

console.log(textEl.style.fontSize = parseInt(evt.currentTarget.value))
};
