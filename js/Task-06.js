`use strict`
console.log(`Task-06`);

const focusInputRef = document.querySelector("#validation-input");

const validationInput = () => {
  focusInputRef.value.length >= 6 ?
    focusInputRef.classList.add("valid") && focusInputRef.classList.remove("invalid") : 
    focusInputRef.classList.add("invalid") && focusInputRef.classList.remove("valid")
  }

focusInputRef.addEventListener("blur", validationInput);