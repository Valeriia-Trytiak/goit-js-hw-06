const textInputEl = document.querySelector('#validation-input');

const controlValue = parseInt(textInputEl.dataset.length);

textInputEl.addEventListener('blur', onTextInputBlur);

function onTextInputBlur() {
textInputEl.classList.add("invalid"); 

if (textInputEl.value.trim().length === controlValue) {
    textInputEl.classList.replace('invalid', 'valid')   
}
};


