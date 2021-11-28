async function selection_sort() {
  console.log("in selection");
  const bars = document.querySelectorAll(".array-bars");

  for (let i = 0; i < bars.length - 1; i++) {
    let minBarInd = i;
    bars[minBarInd].style.background = "blue";
    for (let j = i + 1; j < bars.length; j++) {
      bars[j].style.background = "red";
      if (
        parseInt(bars[j].style.height) < parseInt(bars[minBarInd].style.height)
      ) {
        await waitDelay(delay);

        swap(bars[minBarInd], bars[j]);
      }
      bars[j].style.background = "rgb(179, 79, 179)";
    }
    bars[i].style.background = "green";
  }
  bars[bars.length - 1].style.background = "green";
}

const selection_btn = document.querySelector("#selection-btn");
selection_btn.addEventListener("click", async function () {
  await selection_sort();
});
