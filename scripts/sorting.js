var bars_section = document.getElementById("bars-section");
var new_array_btn = document.getElementById("new-array-btn");

function generateNewArray() {
  console.log("clicked !!!!");
  const numbers = [];
  const elements = [];

  for (let i = 0; i < 100; i++) {
    numbers[i] = Math.floor(Math.random() * 91) + 1;
  }

  for (let i = 0; i < 100; i++) {
    elements[i] = document.createElement("DIV");
    elements[i].classList.add("array-bars");
    elements[i].style.marginRight = "0.3em";
    let newHeight = numbers[i].toString();

    elements[i].innerHTML = newHeight;

    elements[i].style.minHeight = newHeight + "%";
    bars_section.appendChild(elements[i]);
  }
}

new_array_btn.addEventListener("click", generateNewArray);
generateNewArray();
