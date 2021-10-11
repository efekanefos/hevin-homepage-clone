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
