`use strict`

console.log(`Task-02`);
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const allLi = ingredients.map((item) => {
    const liRef = document.createElement("li");
    liRef.textContent = item;
    return liRef;
  });
  
  document.querySelector("#ingredients").append(...allLi);