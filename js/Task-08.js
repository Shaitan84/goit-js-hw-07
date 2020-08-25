`use strict`
console.log(`Task-08`);

const renderBtnRef = document.querySelector(`button[data-action="render"]`);
const destroyBtnRef = document.querySelector(`button[data-action="destroy"]`);
const boxesRef = document.querySelector("#boxes");
const inputRef = document.querySelector("#controls input");


  

const createDiv = (amount) => {
    let newDiv = [];
    for (let i = 0; i < amount; i += 1) {
        const newDivRef = document.createElement('div');
        newDivRef.style.width = `{30 + i * 10}px`;
        newDivRef.style.height = `{30 + i * 10}px`;
        newDivRef.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        newDiv.push(newDivRef);
    }
    boxesRef.append(...newDiv);
} 
const destroyBoxes = () => {
    boxesRef.innerHTML = '';
  }
  renderBtnRef.addEventListener('click', () => createDiv(inputRef.value));
  destroyBtnRef.addEventListener('click', destroyBoxes);
  