/*Напиши скрипт, який для кожного елемента масиву ingredients:

Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
Додасть назву інгредієнта як його текстовий вміст.
Додасть елементу клас item.
Після чого, вставить усі <li> за одну операцію у список ul#ingredients.*/

const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const listIngredients = document.querySelector("#ingredients");
const itemsIngredientsEl = [];

function createItemEl(arr) {
  arr
    .map((item) => {
      const itemEl = document.createElement("li");

      itemEl.classList.add("item");
      itemEl.textContent = item;
      itemsIngredientsEl.push(itemEl);
    })
    .join("");

  listIngredients.append(...itemsIngredientsEl);
}

createItemEl(ingredients);
