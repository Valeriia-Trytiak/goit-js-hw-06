const listCategoriesEl = document.querySelector('#categories');

// Tack 1
console.log(`Number of categories: ${listCategoriesEl.children.length}`)

// Tack 2
const itemsAll = document.querySelectorAll('.item');

itemsAll.forEach((element) => {
    console.log(`Category: ${element.firstElementChild.textContent} Elements: ${element.lastElementChild.children.length}`)
})


