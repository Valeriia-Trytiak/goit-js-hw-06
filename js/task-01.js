/* Напиши скрипт, який:

Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.*/

const listCategoriesEl = document.querySelector('#categories');

// Task 1
console.log(`Number of categories: ${listCategoriesEl.children.length}`)

// Task 2
const itemsAll = document.querySelectorAll('.item');

itemsAll.forEach((element) => {
console.log(`Category: ${element.firstElementChild.textContent} 
Elements: ${element.lastElementChild.children.length}`)
})


