`use strict`

console.log(`Task-01`);
const categoriesRef = document.querySelector("#categories");
const itemRef = document.querySelectorAll('.item');

console.log(`В списке ${categoriesRef.children.length} категории`);

itemRef.forEach(elem => {
    console.log(`Категория: ${elem.firstElementChild.textContent}`)
    console.log(`Количество элементов: ${elem.lastElementChild.children.length}`)
});