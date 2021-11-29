//insertion sort function
async function insertion_sort() {
  //connects bar to the array elements that are to be sorted.
  const bars = document.querySelectorAll(".array-bars");

  //represents the array is sorted when its size is 1.
  bars[0].style.background = "lightgreen";

  //the loop traverse throughout the array.
  for (let i = 1; i < bars.length; i++) {
    let j = i - 1;
    let current_bar_height = bars[i].style.height;
    bars[i].style.background = "cyan";

    //added delay
    await waitDelay(delay);

    //here the loop iterates from index i-1 to 0 and check
    //the position of current element inside the subarray.
    //after each iteration, the array is sorted from index 0 to i;
    while (
      j >= 0 &&
      parseInt(bars[j].style.height) > parseInt(current_bar_height)
    ) {
      //red color represents current comparision elements of array.
      bars[j].style.background = "red";
      bars[j + 1].style.background = "red";

      //added delay
      await waitDelay(delay);

      bars[j + 1].style.height = bars[j].style.height;
      j -= 1;

      //added delay
      await waitDelay(delay);

      //changed color to represent semi sorted array.
      for (let ind = i; ind >= 0; ind--) {
        bars[ind].style.background = "lightgreen";
      }
    }

    //changing color to represent it reached its correct position in subArray.
    bars[j + 1].style.height = current_bar_height;
    bars[j + 1].style.background = "coral";
  }

  //changing color to green to represent the sorted array.
  for (let i = 0; i < bars.length; i++) {
    await waitDelay(30);
    bars[i].style.background = "green";
  }
}

//connects to the Insertion Sort button.
const insertion_btn = document.querySelector("#insertion-btn");

//adding click listener to call the algorithm.
/*also called some disabling functions before calling the algorithm function
  so as to avoid calling multiple algorithms or changing the size of the 
  array or changing the array values, while the algorithm is in execution.
*/
//called the functions to enable the buttons after the complete execution.
insertion_btn.addEventListener("click", async function () {
  disableSortingButtons();
  disableSizeSlider();
  disableNewArrayBtn();
  await insertion_sort();
  enableSortingButtons();
  enableSizeSlider();
  enableNewArrayBtn();
});
