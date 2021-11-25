async function insertion_sort() {
  console.log("in insertion");
  const bars = document.querySelectorAll(".array-bars");

  bars[0].style.background = "green";

  for (let i = 1; i < bars.length; i++) {
    let j = i - 1;
    let current_bar_height = bars[i].style.height;
    bars[i].style.background = "blue";

    await new Promise((resolve) =>
      setTimeout(() => {
        resolve(), 100;
      })
    );
    while (
      j >= 0 &&
      parseInt(bars[j].style.height) > parseInt(current_bar_height)
    ) {
      bars[j].style.background = "red";
      bars[j + 1].style.height = bars[j].style.height;
      j -= 1;

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve(), 100;
        })
      );
      for (let ind = i; ind >= 0; ind--) {
        bars[ind].style.background = "green";
      }
    }
    bars[j + 1].style.height = current_bar_height;
    bars[j + 1].style.background = "green";
  }
}

const insertion_btn = document.querySelector("#insertion-btn");
insertion_btn.addEventListener("click", async function () {
  await insertion_sort();
});
