/*Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.
*/ 
const textInputEl = document.querySelector('#validation-input');

const controlValue = parseInt(textInputEl.dataset.length);

textInputEl.addEventListener('blur', onTextInputBlur);

function onTextInputBlur() {
textInputEl.classList.add("invalid"); 

if (textInputEl.value.trim().length === controlValue) {
    textInputEl.classList.replace('invalid', 'valid')   
}
};


