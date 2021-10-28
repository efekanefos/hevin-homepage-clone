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

/* Column Colors */

column3.style.color = "#695D4F";

column2.addEventListener("click", function () {
  column2.style.color = "#695D4F";
  column3.style.color = "black";
  column4.style.color = "black";
  rectangle1.style.color = "black";
});
column3.addEventListener("click", function () {
  column2.style.color = "black";
  column3.style.color = "#695D4F";
  column4.style.color = "black";
  rectangle1.style.color = "black";
});
column4.addEventListener("click", function () {
  column2.style.color = "black";
  column3.style.color = "black";
  column4.style.color = "#695D4F";
  rectangle1.style.color = "black";
});
rectangle1.addEventListener("click", function () {
  column2.style.color = "black";
  column3.style.color = "black";
  column4.style.color = "black";
  rectangle1.style.color = "#695D4F";
});

/* map */

var show_15 = document.querySelector("#show_15");
var show_30 = document.querySelector("#show_30");
var show_45 = document.querySelector("#show_45");
let booleanVar = false;

/* PAGE - 15 START */

show_15.addEventListener("click", function () {
  bigCollection.innerHTML = newArr
    .slice(0, 15)
    .map(function (item) {
      return `<div class="countdownCard">
  <img
    class="oliviaNehirImg1"
    src=${item.image}
    alt="1"
  />
  <h3>${item.name}</h3>
  <p>
    <span class="previousPrice">&#8378;18.333</span>
    <span class="discountedPrice">&#8378;11.600</span>
  </p>
  <a href="#" class="orange_btn-2">Sepete Ekle</a>
  <i class="fav-icon far fa-heart"></i>
</div>`;
    })
    .join("");

  bigCollectionRectangle.innerHTML = newArr
    .slice(0, 15)
    .map(function (item) {
      return `<div class="countdownCard-rectangle">
        <span class="ImgSpan">
          <img
            class="oliviaNehirImg1 countdownCard-rectangleImg"
            src=${item.image}
            alt="1"
          />
          <div class="ImgOverlay"></div>
          <i class="fas fa-search searchIcon"></i>
        </span>
        <span class="bigCollection-rightColumn">
          <h3>${item.name}</h3>
          <p>
            <span class="previousPrice">&#8378;14.916</span>
            <span class="discountedPrice">&#8378;8.950</span>
          </p>
          <span class="basketColumn">
            <a href="#" class="orange_btn-2">Sepete Ekle</a>
            <i class="fav-icon far fa-heart"></i>
          </span>
          <p class="bottomParag">
            Özel formlu kol tasarımdaki eşsiz kapitone detayları ile
            şık ve konforlu bir oturum alanı oluşturur. Sırt
            yapısında kullanılan zengin kırlentler yaşam alanlarında
            sıra dışı bir…
          </p>
        </span>
      </div>`;
    })
    .join("");
  pagination_2.classList.remove("pagination__activeItem");
  pagination_1.classList.add("pagination__activeItem");
  pagination_3.classList.remove("pagination__activeItem");
  pagination_4.classList.remove("pagination__activeItem");

  pagination_3.style.display = "block";
  pagination_1.style.display = "block";
  pagination_2.style.display = "block";
  pagination_4.style.display = "block";

  booleanVar = false;
  console.log(booleanVar);
  return booleanVar;
});

/* PAGE - 15  END */

/* PAGE - 30  START */

show_30.addEventListener("click", function () {
  bigCollection.innerHTML = newArr
    .slice(0, 30)
    .map(function (item) {
      return `<div class="countdownCard">
  <img
    class="oliviaNehirImg1"
    src=${item.image}
    alt="1"
  />
  <h3>${item.name}</h3>
  <p>
    <span class="previousPrice">&#8378;18.333</span>
    <span class="discountedPrice">&#8378;11.600</span>
  </p>
  <a href="#" class="orange_btn-2">Sepete Ekle</a>
  <i class="fav-icon far fa-heart"></i>
</div>`;
    })
    .join("");

  bigCollectionRectangle.innerHTML = newArr
    .slice(0, 30)
    .map(function (item) {
      return `<div class="countdownCard-rectangle">
        <span class="ImgSpan">
          <img
            class="oliviaNehirImg1 countdownCard-rectangleImg"
            src=${item.image}
            alt="1"
          />
          <div class="ImgOverlay"></div>
          <i class="fas fa-search searchIcon"></i>
        </span>
        <span class="bigCollection-rightColumn">
          <h3>${item.name}</h3>
          <p>
            <span class="previousPrice">&#8378;14.916</span>
            <span class="discountedPrice">&#8378;8.950</span>
          </p>
          <span class="basketColumn">
            <a href="#" class="orange_btn-2">Sepete Ekle</a>
            <i class="fav-icon far fa-heart"></i>
          </span>
          <p class="bottomParag">
            Özel formlu kol tasarımdaki eşsiz kapitone detayları ile
            şık ve konforlu bir oturum alanı oluşturur. Sırt
            yapısında kullanılan zengin kırlentler yaşam alanlarında
            sıra dışı bir…
          </p>
        </span>
      </div>`;
    })
    .join("");
  pagination_2.classList.remove("pagination__activeItem");
  pagination_1.classList.add("pagination__activeItem");
  pagination_3.classList.remove("pagination__activeItem");
  pagination_4.classList.remove("pagination__activeItem");

  pagination_3.style.display = "none";
  pagination_1.style.display = "block";
  pagination_2.style.display = "block";
  pagination_4.style.display = "block";

  booleanVar = true;
  console.log(booleanVar);
  return booleanVar;
});

/* PAGE - 30  END */

/* PAGE - 45  START */

show_45.addEventListener("click", function () {
  bigCollection.innerHTML = newArr
    .slice(0, 45)
    .map(function (item) {
      return `<div class="countdownCard">
  <img
    class="oliviaNehirImg1"
    src=${item.image}
    alt="1"
  />
  <h3>${item.name}</h3>
  <p>
    <span class="previousPrice">&#8378;18.333</span>
    <span class="discountedPrice">&#8378;11.600</span>
  </p>
  <a href="#" class="orange_btn-2">Sepete Ekle</a>
  <i class="fav-icon far fa-heart"></i>
</div>`;
    })
    .join("");

  bigCollectionRectangle.innerHTML = newArr
    .slice(0, 45)
    .map(function (item) {
      return `<div class="countdownCard-rectangle">
        <span class="ImgSpan">
          <img
            class="oliviaNehirImg1 countdownCard-rectangleImg"
            src=${item.image}
            alt="1"
          />
          <div class="ImgOverlay"></div>
          <i class="fas fa-search searchIcon"></i>
        </span>
        <span class="bigCollection-rightColumn">
          <h3>${item.name}</h3>
          <p>
            <span class="previousPrice">&#8378;14.916</span>
            <span class="discountedPrice">&#8378;8.950</span>
          </p>
          <span class="basketColumn">
            <a href="#" class="orange_btn-2">Sepete Ekle</a>
            <i class="fav-icon far fa-heart"></i>
          </span>
          <p class="bottomParag">
            Özel formlu kol tasarımdaki eşsiz kapitone detayları ile
            şık ve konforlu bir oturum alanı oluşturur. Sırt
            yapısında kullanılan zengin kırlentler yaşam alanlarında
            sıra dışı bir…
          </p>
        </span>
      </div>`;
    })
    .join("");

  pagination_2.classList.remove("pagination__activeItem");
  pagination_1.classList.add("pagination__activeItem");
  pagination_3.classList.remove("pagination__activeItem");
  pagination_4.classList.remove("pagination__activeItem");

  pagination_1.style.display = "none";
  pagination_2.style.display = "none";
  pagination_3.style.display = "none";
  pagination_4.style.display = "none";

  booleanVar = false;
  console.log(booleanVar);
  return booleanVar;
});

/* PAGE - 45 END */

bigCollection.innerHTML = newArr
  .slice(0, 15)
  .map(function (item) {
    return `<div class="countdownCard">
  <img
    class="oliviaNehirImg1"
    src=${item.image}
    alt="1"
  />
  <h3>${item.name}</h3>
  <p>
    <span class="previousPrice">&#8378;18.333</span>
    <span class="discountedPrice">&#8378;11.600</span>
  </p>
  <a href="#" class="orange_btn-2">Sepete Ekle</a>
  <i class="fav-icon far fa-heart"></i>
</div>`;
  })
  .join("");

bigCollectionRectangle.innerHTML = newArr
  .slice(0, 15)
  .map(function (item) {
    return `<div class="countdownCard-rectangle">
    <span class="ImgSpan">
      <img
        class="oliviaNehirImg1 countdownCard-rectangleImg"
        src=${item.image}
        alt="1"
      />
      <div class="ImgOverlay"></div>
      <i class="fas fa-search searchIcon"></i>
    </span>
    <span class="bigCollection-rightColumn">
      <h3>${item.name}</h3>
      <p>
        <span class="previousPrice">&#8378;14.916</span>
        <span class="discountedPrice">&#8378;8.950</span>
      </p>
      <span class="basketColumn">
        <a href="#" class="orange_btn-2">Sepete Ekle</a>
        <i class="fav-icon far fa-heart"></i>
      </span>
      <p class="bottomParag">
        Özel formlu kol tasarımdaki eşsiz kapitone detayları ile
        şık ve konforlu bir oturum alanı oluşturur. Sırt
        yapısında kullanılan zengin kırlentler yaşam alanlarında
        sıra dışı bir…
      </p>
    </span>
  </div>`;
  })
  .join("");

/* Pagination */

var pagination_1 = document.querySelector("#pagination_1");

var pagination_2 = document.querySelector("#pagination_2");

var pagination_3 = document.querySelector("#pagination_3");

var pagination_4 = document.querySelector("#pagination_4"); /* > */

pagination_2.addEventListener("click", function () {
  let page2Arr;
  if (booleanVar === true) {
    page2Arr = newArr.slice(30, 45);
  } else {
    page2Arr = newArr.slice(15, 30);
  }
  console.log(page2Arr);

  bigCollection.innerHTML = page2Arr
    .map(function (item) {
      return `<div class="countdownCard">
  <img
    class="oliviaNehirImg1"
    src=${item.image}
    alt="1"
  />
  <h3>${item.name}</h3>
  <p>
    <span class="previousPrice">&#8378;18.333</span>
    <span class="discountedPrice">&#8378;11.600</span>
  </p>
  <a href="#" class="orange_btn-2">Sepete Ekle</a>
  <i class="fav-icon far fa-heart"></i>
</div>`;
    })
    .join("");

  pagination_2.classList.add("pagination__activeItem");
  pagination_1.classList.remove("pagination__activeItem");
  pagination_3.classList.remove("pagination__activeItem");
  pagination_4.classList.remove("pagination__activeItem");
});

pagination_3.addEventListener("click", function () {
  let page2Arr = newArr.slice(30, 45);
  console.log(page2Arr);

  bigCollection.innerHTML = page2Arr
    .map(function (item) {
      return `<div class="countdownCard">
  <img
    class="oliviaNehirImg1"
    src=${item.image}
    alt="1"
  />
  <h3>${item.name}</h3>
  <p>
    <span class="previousPrice">&#8378;18.333</span>
    <span class="discountedPrice">&#8378;11.600</span>
  </p>
  <a href="#" class="orange_btn-2">Sepete Ekle</a>
  <i class="fav-icon far fa-heart"></i>
</div>`;
    })
    .join("");

  pagination_2.classList.remove("pagination__activeItem");
  pagination_1.classList.remove("pagination__activeItem");
  pagination_3.classList.add("pagination__activeItem");
  pagination_4.classList.remove("pagination__activeItem");
});
