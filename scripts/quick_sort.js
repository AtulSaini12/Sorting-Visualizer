//this function return the index of the sorted position of the element at index(right).
async function partition(bars, left, right) {
  //we assume that the pivot element(the element at index(right)) has its right sorted position at pivotIndex.
  let pivotIndex = left - 1;
  //changing the pivot element's color to coral to differentiate it from other elements.
  bars[right].style.background = "aqua";

  //iterating from index(left) to index(right-1).
  for (let barIndex = left; barIndex < right; barIndex++) {
    //changing the color of current element to visualise the iteration.
    bars[barIndex].style.background = "crimson";

    //added delay.
    await waitDelay(delay);

    //checking if current elemn=ent is less than the pivotValue
    //if true: then we swap the current element with element at the pivotIndex.
    //change colors for visualising the swap.
    //increment the pivotIndex for new expected position of pivot.
    if (
      parseInt(bars[barIndex].style.height) < parseInt(bars[right].style.height)
    ) {
      pivotIndex++;
      swap(bars[pivotIndex], bars[barIndex]);
      bars[pivotIndex].style.background = "sandybrown";
      bars[barIndex].style.background = "yellow";

      //added delay.
      await waitDelay(delay);
    }
    //else change color to visualise skip.
    else {
      bars[barIndex].style.background = "orange";
    }
  }

  //added delay.
  await waitDelay(delay);
  pivotIndex++;

  //after the above loop iteration, we get the correct sorted position of the our pivot
  // and we swap the index(right) element (i.e, our pivot) with the element at the pivotIndex.
  swap(bars[pivotIndex], bars[right]);

  //we then make the color of the new right element to orange that is the color of elements greater than pivot element.
  bars[right].style.background = "orange";

  //change the color of pivot element to green to tell that it is at its right sorted position.
  bars[pivotIndex].style.background = "lightgreen";

  //Now the elements in yellow respresent smaller than pivot.
  //elements in orange represents greater than pivot.

  //added delay.
  await waitDelay(delay);

  //traversing throughout all the elements and making all the unsorted elements back to their purple unsorted color.
  for (let barInd = 0; barInd < bars.length; barInd++) {
    if (bars[barInd].style.background != "lightgreen") {
      bars[barInd].style.background = "rgb(179, 79, 179)";
    }
  }

  //returns the index of current pivot element.
  return pivotIndex;
}

//recursive Quick sort function
async function quick_sort(bars, left, right) {
  if (left < right) {
    //gets the index of index(right) element when it is at its sorted position.
    let partitionIndex = await partition(bars, left, right);

    //calling quick sort function for the left part and right part of the partition index.
    await quick_sort(bars, left, partitionIndex - 1);
    await quick_sort(bars, partitionIndex + 1, right);
  }
  //checking if all the elements are sorted and change the color to green to represent sorted.
  else if (
    left >= 0 &&
    right >= 0 &&
    left < bars.length &&
    right < bars.length
  ) {
    bars[left].style.background = "lightgreen";
    bars[right].style.background = "lightgreen";
  }

  if (left == 0 && right == bars.length - 1) {
    //changing color to green to represent the sorted array.
    for (let i = 0; i < bars.length; i++) {
      await waitDelay(30);
      bars[i].style.background = "green";
    }
  }
}

//connects to the Quick sort button.
const quick_btn = document.querySelector("#quick-btn");

//adding click listener to call the algorithm.
/*also called some disabling functions before calling the algorithm function
  so as to avoid calling multiple algorithms or changing the size of the 
  array or changing the array values, while the algorithm is in execution.
*/
//called the functions to enable the buttons after the complete execution.
quick_btn.addEventListener("click", async function () {
  const bars = document.querySelectorAll(".array-bars");
  disableSortingButtons();
  disableSizeSlider();
  disableNewArrayBtn();
  await quick_sort(bars, 0, bars.length - 1);
  enableSortingButtons();
  enableSizeSlider();
  enableNewArrayBtn();
});
