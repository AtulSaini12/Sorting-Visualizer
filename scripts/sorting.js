//this connects us to the button which when clicked generates new array.
const new_array_btn = document.getElementById("new-array-btn");

//the delay element maintains the speed of the algorithm.
let delay = 270;

//this connects us to the slider for altering the speed of execution of the algorithm.
let delayElement = document.querySelector("#speed-input");

//this connects us to the slider for altering array size.
let numbersArraySize = document.querySelector("#size-input");

//this function generates the array to be sorted by using random numbers between 1-201.
//By default it generates array of size 60.
function generateNewArray(noOfBars = 60) {
  disableNewArrayBtn();
  disableSizeSlider();
  disableSortingButtons();
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
    bar.style.background = "rgb(179, 79, 179)";
    bar.style.height = `${numbers[i] * 2}px`;
    bars_section.appendChild(bar);
  }

  enableSortingButtons();
  enableSizeSlider();
  enableNewArrayBtn();
}

//this function deletes the previously created bars.
function deleteBars() {
  const bars = document.querySelector("#bars-section");
  bars.innerHTML = "";
}

//this function disables the sorting algorithm buttons to avoid calling multiple algorithms at once.
function disableSortingButtons() {
  document.querySelector("#selection-btn").disabled = true;
  document.querySelector("#bubble-btn").disabled = true;
  document.querySelector("#insertion-btn").disabled = true;
  document.querySelector("#merge-btn").disabled = true;
  document.querySelector("#quick-btn").disabled = true;
}

//this function enables the sorting algorithm buttons.
function enableSortingButtons() {
  document.querySelector("#selection-btn").disabled = false;
  document.querySelector("#bubble-btn").disabled = false;
  document.querySelector("#insertion-btn").disabled = false;
  document.querySelector("#merge-btn").disabled = false;
  document.querySelector("#quick-btn").disabled = false;
}

//this function disables the button used to generate a new array to avoid generating a new array while one algorithm is already being executed.
function disableNewArrayBtn() {
  new_array_btn.disabled = true;
}

//this function enables the button to generate a new array
function enableNewArrayBtn() {
  new_array_btn.disabled = false;
}

//this function disables the size slider to avoid chnaging the array while one algorithm is already being executed.
function disableSizeSlider() {
  numbersArraySize.disabled = true;
  document.getElementById("size").style.color = "grey";
}

//this function enables the size slider
function enableSizeSlider() {
  numbersArraySize.disabled = false;
  document.getElementById("size").style.color = "whitesmoke";
}

//a special swap function that swaps two divs passed as elements as per their heights
function swap(element1, element2) {
  let height1 = element1.style.height;
  element1.style.height = element2.style.height;
  element2.style.height = height1;
}

//this function is used to dealy the execution of the algorithm to visualize the traversing and swapping of array elements.
async function waitDelay(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, time);
  });
}

//function called when the site is opened for the first time to get the user an array whose size by default is 60.
generateNewArray();

//adding event listener to new array button to generate a new array everytime it is clicked.
new_array_btn.addEventListener("click", () => {
  generateNewArray(numbersArraySize.value);
});

//adding event listener to size slider to get the size input of the array by the user
numbersArraySize.addEventListener("input", () => {
  generateNewArray(parseInt(numbersArraySize.value));
});

//adding event listener to speed slider, to provide the user with a means to see the algorithm working fast and slow as per the user wants.
delayElement.addEventListener("input", () => {
  delay = 310 - parseInt(delayElement.value);
});

//Important functions are in this file
