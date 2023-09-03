const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const ingredientsList = document.querySelector(`#ingredients`)
const fragment = document.createDocumentFragment();


ingredients.forEach(ingredient => {
    const elLi = document.createElement("li");
    elLi.textContent = ingredient;
    elLi.classList.add("item");
    fragment.appendChild(elLi);
})

ingredientsList.append(fragment);