`use strict`
console.log(`Task-05`);

const nameInputRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");

const inputChange = (event) =>{
  nameInputRef.value ? (nameOutputRef.textContent = event.currentTarget.value) : (nameOutputRef.textContent = "незнакомец");
}

nameInputRef.addEventListener("input", inputChange);