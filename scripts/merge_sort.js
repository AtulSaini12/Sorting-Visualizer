async function compare(bars, left, right, barsPointer) {
  if (left + right === bars.length - 1) {
    bars[barsPointer].style.background = "green";
  } else {
    bars[barsPointer].style.background = "lightgreen";
  }
}

async function merge(bars, left, mid, right) {
  console.log("in merge func");
  let length1 = mid - left + 1;
  let length2 = right - mid;

  let leftArray = new Array(length1);
  let rightArray = new Array(length2);

  for (let i = 0; i < length1; i++) {
    await waitDelay(delay);

    bars[left + i].style.background = "orange";
    leftArray[i] = bars[left + i].style.height;
  }

  for (let i = 0; i < length2; i++) {
    await waitDelay(delay);

    bars[mid + i + 1].style.background = "yellow";
    rightArray[i] = bars[mid + i + 1].style.height;
  }

  await waitDelay(delay);

  let leftArrayPointer = 0;
  let rightArrayPointer = 0;
  let barsPointer = left;

  while (leftArrayPointer < length1 && rightArrayPointer < length2) {
    await waitDelay(delay);

    if (
      parseInt(leftArray[leftArrayPointer]) <=
      parseInt(rightArray[rightArrayPointer])
    ) {
      await compare(bars, left, right, barsPointer);

      bars[barsPointer].style.height = leftArray[leftArrayPointer];
      leftArrayPointer++;
      barsPointer++;
    } else {
      await compare(bars, left, right, barsPointer);

      bars[barsPointer].style.height = rightArray[rightArrayPointer];
      rightArrayPointer++;
      barsPointer++;
    }
  }

  while (leftArrayPointer < length1) {
    await waitDelay(delay);

    await compare(bars, left, right, barsPointer);

    bars[barsPointer].style.height = leftArray[leftArrayPointer];
    leftArrayPointer++;
    barsPointer++;
  }

  while (rightArrayPointer < length2) {
    await waitDelay(delay);

    await compare(bars, left, right, barsPointer);

    bars[barsPointer].style.height = rightArray[rightArrayPointer];
    rightArrayPointer++;
    barsPointer++;
  }
}

async function merge_sort(bars, left, right) {
  console.log("in merge sort");

  if (left >= right) {
    //base case to stop recursion when array size becomes one
    return;
  }

  let mid = left + Math.floor((right - left) / 2);

  // dividing the array to sort it
  await merge_sort(bars, left, mid);
  await merge_sort(bars, mid + 1, right);

  //calling merge function to merge the array back into one
  await merge(bars, left, mid, right);
}

const merge_btn = document.querySelector("#merge-btn");
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
