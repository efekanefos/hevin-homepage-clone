(function () {
  var parent = document.querySelector(".range-slider");
  if (!parent) return;

  var rangeS = parent.querySelectorAll("input[type=range]"),
    numberS = parent.querySelectorAll("input[type=number]");

  rangeS.forEach(function (el) {
    el.oninput = function () {
      var slide1 = parseFloat(rangeS[0].value),
        slide2 = parseFloat(rangeS[1].value);

      if (slide1 > slide2) {
        [slide1, slide2] = [slide2, slide1];
        // var tmp = slide2;
        // slide2 = slide1;
        // slide1 = tmp;
      }

      numberS[0].value = slide1;
      numberS[1].value = slide2;
    };
  });

  numberS.forEach(function (el) {
    el.oninput = function () {
      var number1 = parseFloat(numberS[0].value),
        number2 = parseFloat(numberS[1].value);

      if (number1 > number2) {
        var tmp = number1;
        numberS[0].value = number2;
        numberS[1].value = tmp;
      }

      rangeS[0].value = number1;
      rangeS[1].value = number2;
    };
  });
})();
/* bullet */
var rangeSlider = document.getElementById("rs-range-line");
var rangeBullet = document.getElementById("leftPrice");
var leftPrice_gray = document.getElementById("leftPrice-gray");

rangeSlider.addEventListener("input", showSliderValue, false);
rangeBullet.innerHTML = " &#8378;" + rangeSlider.value;
leftPrice_gray.innerHTML = " &#8378;" + rangeSlider.value;

function showSliderValue() {
  rangeBullet.innerHTML = " &#8378;" + rangeSlider.value;
  var bulletPosition = rangeSlider.value / rangeSlider.max - 0.08;
  console.log(rangeSlider.value);
  if (rangeSlider.value <= 1290) {
    leftPrice_gray.style.display = "none";
  } else {
    leftPrice_gray.style.display = "inline-block";
  }
  rangeBullet.style.left = bulletPosition * 308 + "px";
}
/* */
var rangeSlider2 = document.getElementById("rs-range-line2");
var rangeBullet2 = document.getElementById("rightPrice");
var rightPrice_gray = document.getElementById("rightPrice_gray");

rangeSlider2.addEventListener("input", showSliderValue2, false);
rangeBullet2.innerHTML = " &#8378;" + rangeSlider2.value;
rightPrice_gray.innerHTML = " &#8378;" + rangeSlider2.value;

function showSliderValue2() {
  rangeBullet2.innerHTML = " &#8378;" + rangeSlider2.value;
  var bulletPosition2 = rangeSlider2.value / rangeSlider2.max - 0.08;
  if (rangeSlider2.value >= 16840) {
    rightPrice_gray.style.display = "none";
  } else {
    rightPrice_gray.style.display = "inline-block";
  }
  rangeBullet2.style.left = bulletPosition2 * 308 + "px";
}

/* Plus Btn */

let collectionPlus = document.querySelector("#collectionPlusBtn");
let collectionSubList = document.querySelector("#collectionSubList");

let livingRoomPlus = document.querySelector("#livingRoomPlusBtn");
let livingRoomSubList = document.querySelector("#livingRoomSubList");

let bedRoomPlus = document.querySelector("#bedRoomPlusBtn");
let bedRoomSubList = document.querySelector("#bedRoomSubList");

let kitchenPlus = document.querySelector("#kitchenPlusBtn");
let kitchenSubList = document.querySelector("#kitchenSubList");

let column2 = document.querySelector("#column__2");

let column3 = document.querySelector("#column__3");

let column4 = document.querySelector("#column__4");

let rectangle1 = document.querySelector("#rectangle__1");

let bigCollection = document.querySelector(".bigCollection");

let bigCollectionRectangle = document.querySelector(".bigCollection-rectangle");

collectionPlus.addEventListener("click", function () {
  collectionSubList.classList.toggle("showSubList");
  collectionPlus.innerHTML === `<i id="plusBtn" class="fas fa-plus"></i>`
    ? (collectionPlus.innerHTML = `<i id="minusBtn" class="fas fa-minus"></i>`)
    : (collectionPlus.innerHTML = `<i id="plusBtn" class="fas fa-plus"></i>`);
});
livingRoomPlus.addEventListener("click", function () {
  livingRoomSubList.classList.toggle("showSubList");
  livingRoomPlus.innerHTML === `<i id="plusBtn" class="fas fa-plus"></i>`
    ? (livingRoomPlus.innerHTML = `<i id="minusBtn" class="fas fa-minus"></i>`)
    : (livingRoomPlus.innerHTML = `<i id="plusBtn" class="fas fa-plus"></i>`);
});
bedRoomPlus.addEventListener("click", function () {
  bedRoomSubList.classList.toggle("showSubList");
  bedRoomPlus.innerHTML === `<i id="plusBtn" class="fas fa-plus"></i>`
    ? (bedRoomPlus.innerHTML = `<i id="minusBtn" class="fas fa-minus"></i>`)
    : (bedRoomPlus.innerHTML = `<i id="plusBtn" class="fas fa-plus"></i>`);
});
kitchenPlus.addEventListener("click", function () {
  kitchenSubList.classList.toggle("showSubList");
  kitchenPlus.innerHTML === `<i id="plusBtn" class="fas fa-plus"></i>`
    ? (kitchenPlus.innerHTML = `<i id="minusBtn" class="fas fa-minus"></i>`)
    : (kitchenPlus.innerHTML = `<i id="plusBtn" class="fas fa-plus"></i>`);
});

column2.addEventListener("click", function () {
  bigCollection.style.gridTemplateColumns = "repeat(2, 1fr)";
  bigCollection.style.display = "grid";
  bigCollectionRectangle.style.display = "none";
});
column3.addEventListener("click", function () {
  bigCollection.style.gridTemplateColumns = "repeat(3, 1fr)";
  bigCollection.style.display = "grid";
  bigCollectionRectangle.style.display = "none";
});
column4.addEventListener("click", function () {
  bigCollection.style.gridTemplateColumns = "repeat(4, 1fr)";
  bigCollection.style.display = "grid";
  bigCollectionRectangle.style.display = "none";
});
bigCollectionRectangle.style.display = "none";
rectangle1.addEventListener("click", function () {
  bigCollection.style.display = "none";
  bigCollectionRectangle.style.display = "grid";
});
