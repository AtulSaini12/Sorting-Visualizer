const bars_section = document.getElementById("bars-section");
const new_array_btn = document.getElementById("new-array-btn");
var numbers = [];
var elements = [];

for (let i = 0; i < 100; i++) {
  elements[i] = document.createElement("DIV");
  elements[i].classList.add("array-bars");
  elements[i].style.marginRight = "0.1em";
  elements[i].style.width = "3em";
  bars_section.appendChild(elements[i]);
}

function generateNewArray() {
  for (let i = 0; i < 100; i++) {
    numbers[i] = Math.floor(Math.random() * 91) + 1;
    let newHeight = numbers[i].toString();
    elements[i].style.height = newHeight + "%";
    elements[i].style.background = "rgb(179, 79, 179)";
  }
}

new_array_btn.addEventListener("click", generateNewArray);
generateNewArray();

function swap(element1, element2) {
  let height1 = element1.style.height;
  element1.style.height = element2.style.height;
  element2.style.height = height1;
}
