//function to compare if this the last call to merge function
// and all the elements have been sorted, so change the color
// to green to show them sorted.
//else lightgreen to show them semi sorted.
async function compare(bars, left, right, barsPointer) {
  if (left + right === bars.length - 1) {
    bars[barsPointer].style.background = "green";
  } else {
    bars[barsPointer].style.background = "lightgreen";
  }
}

//function to merge two arrays in sorted order.
async function merge(bars, left, mid, right) {
  //calculating the length of first array.
  let length1 = mid - left + 1;

  //calculating the length of second array.
  let length2 = right - mid;

  //making a new empty array of size of leftArray.
  let leftArray = new Array(length1);

  //making a new empty array of size of rightArray.
  let rightArray = new Array(length2);

  //adding the elements of leftArray to new empty array to represent leftArray.
  for (let i = 0; i < length1; i++) {
    //added delay.
    await waitDelay(delay);

    //changing color to orange to represent leftArray visually.
    bars[left + i].style.background = "orange";
    leftArray[i] = bars[left + i].style.height;
  }

  //adding the elements of rightArray to new empty array to represent rightArray.
  for (let i = 0; i < length2; i++) {
    //added delay
    await waitDelay(delay);

    //changing color to yellow to represent rightArray visually.
    bars[mid + i + 1].style.background = "yellow";
    rightArray[i] = bars[mid + i + 1].style.height;
  }

  //added delay.
  await waitDelay(delay);

  //declaring some variable to help in sorting of the arrays.
  let leftArrayPointer = 0;
  let rightArrayPointer = 0;
  let barsPointer = left;

  //loop runs when both leftArray and rightArray are not empty.
  while (leftArrayPointer < length1 && rightArrayPointer < length2) {
    //added dealy.
    await waitDelay(delay);

    //if leftArrayElement is less than or equal to rightArrayElement
    //we change the element at index barsPointer of the main bars array
    // to the currentLeftElement and increment the respective pointers.
    if (
      parseInt(leftArray[leftArrayPointer]) <=
      parseInt(rightArray[rightArrayPointer])
    ) {
      await compare(bars, left, right, barsPointer);

      bars[barsPointer].style.height = leftArray[leftArrayPointer];
      leftArrayPointer++;
      barsPointer++;
    }
    //else
    //we change the element at index barsPointer of the main bars array
    // to the currentRightElement and increment the respective pointers.
    else {
      await compare(bars, left, right, barsPointer);

      bars[barsPointer].style.height = rightArray[rightArrayPointer];
      rightArrayPointer++;
      barsPointer++;
    }
  }

  //this loop is iterated when length1 > length2.
  //i.e., length of leftArray > length of rightArray.
  while (leftArrayPointer < length1) {
    //added delay.
    await waitDelay(delay);

    await compare(bars, left, right, barsPointer);

    //adding the leftover leftArray elements to the bars array.
    bars[barsPointer].style.height = leftArray[leftArrayPointer];
    leftArrayPointer++;
    barsPointer++;
  }

  //this loop is iterated when length1 < length2.
  //i.e., length of leftArray < length of rightArray.
  while (rightArrayPointer < length2) {
    //added delay.
    await waitDelay(delay);

    await compare(bars, left, right, barsPointer);

    //adding the leftover rightArray elements to the bars array.
    bars[barsPointer].style.height = rightArray[rightArrayPointer];
    rightArrayPointer++;
    barsPointer++;
  }

  //the array from index left to index right is sorted when reaching this point and is marked in
  // green color if right-left == lengthOfBars-1,
  //otherwise, it is marked in lightGreen color respresenting that a part of the whole bars array is sorted.
}

//recursive function for merge sort
async function merge_sort(bars, left, right) {
  if (left >= right) {
    //base case to stop recursion when array size becomes one
    return;
  }

  //calculating the mid element of the array
  let mid = left + Math.floor((right - left) / 2);

  // dividing the array from the middle
  await merge_sort(bars, left, mid);
  await merge_sort(bars, mid + 1, right);

  //calling merge function to merge the array back into one in sorted order.
  await merge(bars, left, mid, right);
}

//connects to the Merge sort button.
const merge_btn = document.querySelector("#merge-btn");

//adding click listener to call the algorithm.
/*also called some disabling functions before calling the algorithm function
  so as to avoid calling multiple algorithms or changing the size of the 
  array or changing the array values, while the algorithm is in execution.
*/
//called the functions to enable the buttons after the complete execution.
merge_btn.addEventListener("click", async function () {
  const bars = document.querySelectorAll(".array-bars");
  disableSortingButtons();
  disableNewArrayBtn();
  disableSizeSlider();
  await merge_sort(bars, 0, bars.length - 1);
  enableSortingButtons();
  enableSizeSlider();
  enableNewArrayBtn();
});
