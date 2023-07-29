
let counterValue = 0;

const decrementBtn = document.querySelector('[data-action = "decrement"]');

const incrementBtn = document.querySelector('[data-action="increment"]');

const spanValueEl = document.querySelector('#value');




decrementBtn.addEventListener('click', onDecrementBtnClick);

function onDecrementBtnClick(evt) {
spanValueEl.textContent = counterValue -= 1;
};

incrementBtn.addEventListener('click', onIncrementBtn);

function onIncrementBtn(evt) {
spanValueEl.textContent = counterValue += 1;   
};



