async function bubble_sort() {
  console.log("in bubble");
  const bars = document.querySelectorAll(".array-bars");

  for (let i = 0; i < bars.length - 1; i++) {
    for (let j = 0; j < bars.length - 1 - i; j++) {
      bars[j].style.background = "red";
      bars[j + 1].style.background = "blue";
      if (parseInt(bars[j].style.height) > parseInt(bars[j + 1].style.height)) {
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve(), 100;
          })
        );
        await swap(bars[j], bars[j + 1]);
      }
      bars[j].style.background = "rgb(179, 79, 179)";
      bars[j + 1].style.background = "rgb(179, 79, 179)";
    }
    bars[bars.length - i - 1].style.background = "green";
  }
  bars[0].style.background = "green";
}

const bubble_btn = document.querySelector("#bubble-btn");
bubble_btn.addEventListener("click", async function () {
  await bubble_sort();
});
