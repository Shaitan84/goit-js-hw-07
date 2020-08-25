`use strict`
console.log(`Task-07`);

const fontSizeRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

const fontSizeChange = () => {
  text.setAttribute("style", `font-size: ${fontSizeRef.value}px`);
}

fontSizeRef.addEventListener("input", fontSizeChange);