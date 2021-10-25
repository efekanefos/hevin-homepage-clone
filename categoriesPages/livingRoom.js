var lowerSlider = document.querySelector("#lower"),
  upperSlider = document.querySelector("#upper"),
  lowerVal = parseInt(lowerSlider.value);
upperVal = parseInt(upperSlider.value);
function showLower() {
  console.log(lowerSlider.value);
  document.querySelector("#spanId").textContent = lowerSlider.value;
}
function showUpper() {
  console.log(upperSlider.value);
  document.querySelector("#spanId2").textContent = upperSlider.value;
}
lowerSlider.addEventListener("input", showLower);
upperSlider.addEventListener("input", showUpper);

upperSlider.oninput = function () {
  lowerVal = parseInt(lowerSlider.value);
  upperVal = parseInt(upperSlider.value);

  if (upperVal < lowerVal + 4) {
    lowerSlider.value = upperVal - 4;

    if (lowerVal == lowerSlider.min) {
      upperSlider.value = 4;
    }
  }
};

lowerSlider.oninput = function () {
  lowerVal = parseInt(lowerSlider.value);
  upperVal = parseInt(upperSlider.value);

  if (lowerVal > upperVal - 4) {
    upperSlider.value = lowerVal + 4;

    if (upperVal == upperSlider.max) {
      lowerSlider.value = parseInt(upperSlider.max) - 4;
    }
  }
};

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

let bigCollection = document.querySelector(".bigCollection");

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
});
column3.addEventListener("click", function () {
  bigCollection.style.gridTemplateColumns = "repeat(3, 1fr)";
});
column4.addEventListener("click", function () {
  bigCollection.style.gridTemplateColumns = "repeat(4, 1fr)";
});
