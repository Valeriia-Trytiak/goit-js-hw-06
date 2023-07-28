const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listIngredients = document.querySelector('#ingredients');
const itemsIngredientsEl = [];

function createItemEl(arr) {

  arr.map((item) => {
    const itemEl = document.createElement('li');

      itemEl.classList.add('item');
      itemEl.textContent = item; 
      itemsIngredientsEl.push(itemEl)
    }).join('');

    listIngredients.append(...itemsIngredientsEl)
};

createItemEl(ingredients);




