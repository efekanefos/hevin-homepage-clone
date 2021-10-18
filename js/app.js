var lastScrollTop = 0;

window.addEventListener(
  "scroll",
  function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st < lastScrollTop) {
      document.getElementById("dark-links").style.position = "sticky";
      /* UP */
    } else {
      document.getElementById("dark-links").style.position = "unset"; /* DOWN */
    }
    lastScrollTop = st <= 0 ? 0 : st;
  },
  false
);
function myFunction(x) {
  if (x.matches) {
    // If media query matches
    var lastScrollTop = 0;

    window.addEventListener(
      "scroll",
      function () {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st < lastScrollTop) {
          document.getElementById("header").style.position = "unset";
        } else {
          document.getElementById("header").style.position = "sticky";
        }
        lastScrollTop = st <= 0 ? 0 : st;
      },
      false
    );
  } else {
  }
}

var x = window.matchMedia("(max-width: 960px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes

/* Slider Part */

var slides = document.querySelector(".slider-items").children;
var nextSlide = document.querySelector(".right-slide");
var prevSlide = document.querySelector(".left-slide");
var totalSlides = slides.length;
var index = 0;

nextSlide.onclick = function () {
  next("next");
};
prevSlide.onclick = function () {
  next("prev");
};

function next(direction) {
  if (direction == "next") {
    index++;
    if (index == totalSlides) {
      index = 0;
    }
  } else {
    if (index == 0) {
      index = totalSlides - 1;
    } else {
      index--;
    }
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");
}
