// // this is for the counter part

document.addEventListener("DOMContentLoaded", () => {
  function counters(id, start, end, duration) {
    let obj = document.getElementById(id);
    (current = start),
      (range = end - start),
      (increment = end > start ? 1 : -1),
      (step = Math.abs(Math.floor(duration / range / increment))),
      (timers = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (
          (increment === 1 && current >= end) ||
          (increment === -1 && current <= end)
        ) {
          clearInterval(timers);
          obj.textContent = end;
        }
      }, step));
  }
  counters("counter-1", 2, 3000, 1230);
  counters("counter-2", 5, 3420, 1330);
  counters("counter-3", 11, 3210, 1630);
  counters("counter-4", 1, 3530, 1550);
});

// this is for the navigation change on scroll

let nav = document.querySelector(".navbar-wrapper");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("scroll-on");
  } else {
    nav.classList.remove("scroll-on");
  }
};

// this is for the navbar item after click hide the navbar

let navbar = document.querySelectorAll(".nav-link");
let navcolps = document.querySelector(".navbar-collapse");
navbar.forEach((a) => {
  a.addEventListener("click", () => {
    navcolps.classList.remove("show");
  });
});
