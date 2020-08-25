`use strict`
console.log(`Task-04`);

let counterValue = 0;
const incrementButtonRef = document.querySelector('button[data-action="increment"]');
const decrementButtonRef = document.querySelector('button[data-action="decrement"]');

const increment = () => {
    counterValue += 1;
    document.querySelector("#value").textContent = counterValue;
  }
const decrement = () => {
    counterValue -= 1;
    document.querySelector("#value").textContent = counterValue;
  }

incrementButtonRef.addEventListener("click", increment);
decrementButtonRef.addEventListener("click", decrement);


  