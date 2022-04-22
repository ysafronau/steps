const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let activeCircle = 1;

next.addEventListener("click", () => {
  activeCircle++;
  if (activeCircle > circles.length) {
    activeCircle = 4;
  }

  update();
});

prev.addEventListener("click", () => {
  activeCircle--;
  if (activeCircle < 1) {
    activeCircle = 1;
  }
  update();
});

const update = function () {
  circles.forEach((circle, i) => {
    i < activeCircle
      ? circle.classList.add("active")
      : circle.classList.remove("active");
  });

  progress.style.width =
    ((activeCircle - 1) / (circles.length - 1)) * 100 + "%";

  if (activeCircle === 1) {
    prev.disabled = true;
    prev.classList.add("not--allowed");
  } else if (activeCircle === circles.length) {
    next.disabled = true;
    next.classList.add("not--allowed");
  } else {
    prev.disabled = false;
    prev.classList.remove("not--allowed");
    next.disabled = false;
    next.classList.remove("not--allowed");
  }
};
