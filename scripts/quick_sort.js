async function partition(bars, left, right) {
  console.log("in partition");

  let pivotIndex = left - 1;
  bars[right].style.background = "coral";

  for (let barIndex = left; barIndex < right; barIndex++) {
    bars[barIndex].style.background = "cyan";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve(), 100;
      })
    );

    if (
      parseInt(bars[barIndex].style.height) < parseInt(bars[right].style.height)
    ) {
      pivotIndex++;
      swap(bars[pivotIndex], bars[barIndex]);
      bars[pivotIndex].style.background = "yellow";
      bars[barIndex].style.background = "yellow";
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve(), 100;
        })
      );
    } else {
      bars[barIndex].style.background = "orange";
    }
  }

  await new Promise((resolve) =>
    setTimeout(() => {
      resolve(), 100;
    })
  );
  pivotIndex++;
  swap(bars[pivotIndex], bars[right]);

  bars[right].style.background = "orange";
  bars[pivotIndex].style.background = "green";

  await new Promise((resolve) =>
    setTimeout(() => {
      resolve(), 100;
    })
  );

  for (let barInd = 0; barInd < bars.length; barInd++) {
    if (bars[barInd].style.background != "green") {
      bars[barInd].style.background = "rgb(179, 79, 179)";
    }
  }
  return pivotIndex;
}

async function quick_sort(bars, left, right) {
  console.log("in quick sort");

  if (left < right) {
    let partitionIndex = await partition(bars, left, right);
    await quick_sort(bars, left, partitionIndex - 1);
    await quick_sort(bars, partitionIndex + 1, right);
  } else if (
    left >= 0 &&
    right >= 0 &&
    left < bars.length &&
    right < bars.length
  ) {
    bars[left].style.background = "green";
    bars[right].style.background = "green";
  }
}

const quick_btn = document.querySelector("#quick-btn");
quick_btn.addEventListener("click", async function () {
  const bars = document.querySelectorAll(".array-bars");
  await quick_sort(bars, 0, bars.length - 1);
});
