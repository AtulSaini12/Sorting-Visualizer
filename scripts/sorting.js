const new_array_btn = document.getElementById("new-array-btn");
let delay = 200;
let numbersArraySize = document.querySelector("#size-input");
let delayElement = document.querySelector("#speed-input");

function generateNewArray(noOfBars = 60) {
  deleteBars();

  let numbers = [];
  for (let i = 0; i < noOfBars; i++) {
    numbers.push(Math.floor(Math.random() * 200) + 1);
  }

  const bars_section = document.getElementById("bars-section");
  for (let i = 0; i < noOfBars; i++) {
    const bar = document.createElement("div");
    bar.classList.add("array-bars");
    bar.style.marginRight = "0.1em";
    bar.style.width = "3em";
    bar.style.height = `${numbers[i] * 2}px`;
    bar.style.background = "rgb(179, 79, 179)";
    bars_section.appendChild(bar);
  }
}

function deleteBars() {
  const bars = document.querySelector("#bars-section");
  bars.innerHTML = "";
}

new_array_btn.addEventListener("click", () => {
  generateNewArray(numbersArraySize.value);
});

generateNewArray();

function swap(element1, element2) {
  let height1 = element1.style.height;
  element1.style.height = element2.style.height;
  element2.style.height = height1;
}

async function waitDelay(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, time);
  });
}

numbersArraySize.addEventListener("input", () => {
  generateNewArray(parseInt(numbersArraySize.value));
});

delayElement.addEventListener("input", () => {
  delay = 320 - parseInt(delayElement.value);
});
