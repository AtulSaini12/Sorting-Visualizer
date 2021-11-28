async function selection_sort() {
  console.log("in selection");
  const bars = document.querySelectorAll(".array-bars");

  for (let i = 0; i < bars.length - 1; i++) {
    let minBarInd = i;
    bars[minBarInd].style.background = "yellow";
    for (let j = i + 1; j < bars.length; j++) {
      bars[j].style.background = "red";
      await waitDelay(delay);
      if (
        parseInt(bars[j].style.height) < parseInt(bars[minBarInd].style.height)
      ) {
        if (minBarInd !== i) {
          bars[minBarInd].style.background = "rgb(179, 79, 179)";
        } else {
          bars[minBarInd].style.background = "cyan";
        }
        minBarInd = j;
        bars[minBarInd].style.background = "yellow";
      } else {
        bars[j].style.background = "rgb(179, 79, 179)";
      }
    }
    await waitDelay(delay);
    swap(bars[minBarInd], bars[i]);
    bars[minBarInd].style.background = "rgb(179, 79, 179)";
    bars[i].style.background = "green";
  }
  bars[bars.length - 1].style.background = "green";
}

const selection_btn = document.querySelector("#selection-btn");
selection_btn.addEventListener("click", async function () {
  disableSortingButtons();
  disableNewArrayBtn();
  disableSizeSlider();
  await selection_sort();
  enableSortingButtons();
  enableSizeSlider();
  enableNewArrayBtn();
});
