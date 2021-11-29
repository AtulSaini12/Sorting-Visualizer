//Bubble Sort Function.
async function bubble_sort() {
  //connects bar to the array elements that are to be sorted.
  const bars = document.querySelectorAll(".array-bars");

  //first loop to traverse through the array
  for (let i = 0; i < bars.length - 1; i++) {
    //second loop to traverse through the unsorted part of the array.
    for (let j = 0; j < bars.length - 1 - i; j++) {
      //adding colors to represent current comparisons.
      bars[j].style.background = "tomato";
      bars[j + 1].style.background = "tomato";

      //added delay
      await waitDelay(delay);

      //if the length of current element is greater than the length of next
      // element, then, they are swapped.
      if (parseInt(bars[j].style.height) > parseInt(bars[j + 1].style.height)) {
        await waitDelay(delay);

        swap(bars[j], bars[j + 1]);
      }

      //color changed back to unsorted color.
      bars[j].style.background = "rgb(179, 79, 179)";
      bars[j + 1].style.background = "rgb(179, 79, 179)";
    }

    //after each iteration, the largest element reaches the end of the SubArray,
    // to its right sorted position and is therefore turned lightgreen.
    bars[bars.length - i - 1].style.background = "lightgreen";
  }

  //changing color to green to represent the sorted array.
  for (let i = 0; i < bars.length; i++) {
    await waitDelay(30);
    bars[i].style.background = "green";
  }
}

//connects to the Bubble sort button.
const bubble_btn = document.querySelector("#bubble-btn");

//adding click listener to call the algorithm.
/*also called some disabling functions before calling the algorithm function
  so as to avoid calling multiple algorithms or changing the size of the 
  array or changing the array values, while the algorithm is in execution.
*/
//called the functions to enable the buttons after the complete execution.
bubble_btn.addEventListener("click", async function () {
  disableSortingButtons();
  disableSizeSlider();
  disableNewArrayBtn();
  await bubble_sort();
  enableSortingButtons();
  enableSizeSlider();
  enableNewArrayBtn();
});

//this file has the bubble sort algorithm
