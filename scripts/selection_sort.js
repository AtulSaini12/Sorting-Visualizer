//selection sort function
async function selection_sort() {
  //connects bar to the array elements that are to be sorted.
  const bars = document.querySelectorAll(".array-bars");

  //each time we traverse through the array, we calculate the minimum and swap it with the ith index and
  //keeps on going until the whole array is sorted
  for (let i = 0; i < bars.length - 1; i++) {
    //minBarInd is believed to be storing the index of the minimum value in the current iteration
    let minBarInd = i;

    //the color of the minimum element is changed to red to visualize.
    bars[minBarInd].style.background = "red";

    for (let j = i + 1; j < bars.length; j++) {
      //the color of current element is changed to  to visualize the working.
      bars[j].style.background = "orangered";

      //adding delay
      await waitDelay(delay);

      //checking if the currentArrayValue is less than the arrayValue at minBarInd.
      //if it is true, then the minBarInd is updated
      if (
        parseInt(bars[j].style.height) < parseInt(bars[minBarInd].style.height)
      ) {
        if (minBarInd !== i) {
          //color changed back to previous color resembling unsorted.
          bars[minBarInd].style.background = "rgb(179, 79, 179)";
        } else {
          //red representing the ith element.
          bars[minBarInd].style.background = "red";
        }
        minBarInd = j;

        //the following represents the new minimum element.
        bars[minBarInd].style.background = "red";
      } else {
        //color changed back to previous color resembling unsorted.
        bars[j].style.background = "rgb(179, 79, 179)";
      }
    }

    //adding delay.
    await waitDelay(delay);

    //swapping the ith element with the minimum element of the iteration.
    swap(bars[minBarInd], bars[i]);

    //color changed back to previous color resembling unsorted.
    bars[minBarInd].style.background = "rgb(179, 79, 179)";

    //color changed to lightgreen representing the element is in its right sorted position.
    bars[i].style.background = "lightgreen";
  }

  bars[bars.length - 1].style.background = "lightgreen";

  //changing color to green to represent the sorted array.
  for (let i = 0; i < bars.length; i++) {
    await waitDelay(30);
    bars[i].style.background = "green";
  }
}

//connects to the selection sort button.
const selection_btn = document.querySelector("#selection-btn");

//adding click listener to call the algorithm.
/*also called some disabling functions before calling the algorithm function
  so as to avoid calling multiple algorithms or changing the size of the 
  array or changing the array values, while the algorithm is in execution.
*/
//called the functions to enable the buttons after the complete execution.
selection_btn.addEventListener("click", async function () {
  disableSortingButtons();
  disableNewArrayBtn();
  disableSizeSlider();
  await selection_sort();
  enableSortingButtons();
  enableSizeSlider();
  enableNewArrayBtn();
});

//this file has the selection sort algorithm
