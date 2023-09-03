const categoriesList = document.querySelector("#categories");
const categoriesItems = categoriesList.querySelectorAll(".item")
console.log(`Number of categories: ${categoriesItems.length}`);


categoriesItems.forEach(item => {
    console.log("Category: " + item.querySelector(`h2`).textContent)
    console.log("Elements: " + item.querySelectorAll(`ul li`).length)
})