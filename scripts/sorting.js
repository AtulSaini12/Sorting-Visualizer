var bars_section = document.getElementById("bars-section");
var new_array_btn = document.getElementById("new-array-btn");
var numbers = [];
var elements = [];

for (let i = 0; i < 100; i++) {
  elements[i] = document.createElement("DIV");
  elements[i].classList.add("array-bars");
  elements[i].style.marginRight = "0.3em";
  elements[i].style.width = "1.5em";
  bars_section.appendChild(elements[i]);
}

function generateNewArray() {
  console.log("clicked !!!!");

  for (let i = 0; i < 100; i++) {
    numbers[i] = Math.floor(Math.random() * 91) + 1;
    let newHeight = numbers[i].toString();
    elements[i].style.height = newHeight + "%";
  }
}

new_array_btn.addEventListener("click", generateNewArray);
generateNewArray();
