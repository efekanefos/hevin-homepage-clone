let personalOption = document.querySelector("#personal");
let businessOption = document.querySelector("#business");

let personalInputs = document.querySelector("#personalInputs");
let businessInputs = document.querySelector("#businessInputs");
document
  .getElementById("billing_selection")
  .addEventListener("change", function () {
    if (this.value == "Bireysel") {
      businessInputs.style.display = "none";
      personalInputs.style.display = "block";
    } else {
      personalInputs.style.display = "none";
      businessInputs.style.display = "block";
    }
  });

personalOption.addEventListener("click", function () {});
businessOption.addEventListener("click", function () {});

/* Radio Button Toggle */

var anotherAddressBtnPersonal = document.querySelector(
  "#anotherAddressBtnPersonal"
);
var anotherAddressBtnBusiness = document.querySelector(
  "#anotherAddressBtnBusiness"
);
var innerAnotherAddressPersonal = document.querySelector(
  "#innerAnotherAddressPersonal"
);

var innerAnotherAddressBusiness = document.querySelector(
  "#innerAnotherAddressBusiness"
);

innerAnotherAddressPersonal.style.display = "none";

innerAnotherAddressBusiness.style.display = "none";

anotherAddressBtnPersonal.addEventListener("click", function () {
  anotherAddressBtnPersonal.classList.toggle("activeRadio");

  if (anotherAddressBtnPersonal.classList.contains("activeRadio")) {
    innerAnotherAddressPersonal.style.display = "block";
  } else {
    innerAnotherAddressPersonal.style.display = "none";
  }
});
anotherAddressBtnBusiness.addEventListener("click", function () {
  anotherAddressBtnBusiness.classList.toggle("activeRadio");

  if (anotherAddressBtnBusiness.classList.contains("activeRadio")) {
    innerAnotherAddressBusiness.style.display = "block";
  } else {
    innerAnotherAddressBusiness.style.display = "none";
  }
});

/* Payment Btns */

var creditCardBtn = document.querySelector(".creditCardBtn");
var iyzicoBtn = document.querySelector(".iyzicoBtn");
var otherExplain = document.querySelector(".otherExplain");
var iyzicoSection = document.querySelector(".iyzicoSection");

/* Inıt function */
otherExplain.style.display = "none";
creditCardBtn.classList.add("creditCard__active");
/* Inıt */

creditCardBtn.addEventListener("click", function () {
  creditCardBtn.classList.toggle("creditCard__active");
  if (creditCardBtn.classList.contains("creditCard__active")) {
    iyzicoBtn.classList.remove("iyzicoBtn__active");
    otherExplain.style.display = "none";
    iyzicoSection.style.marginTop = "0px";
  }
});
iyzicoBtn.addEventListener("click", function () {
  iyzicoBtn.classList.toggle("iyzicoBtn__active");
  if (iyzicoBtn.classList.contains("iyzicoBtn__active")) {
    creditCardBtn.classList.remove("creditCard__active");
    otherExplain.style.display = "block";
    iyzicoSection.style.marginTop = "-50px";
  }
});

/*  scrollbar */

var countryPersonal = document.querySelector(".countryPersonal");
var countryArrowIcon = document.querySelector("#countryArrowIcon");

countryArrowIcon.addEventListener("click", function () {
  countryPersonal.classList.toggle("openCountryPersonal");
  if (countryPersonal.classList.contains("openCountryPersonal")) {
    countryArrowIcon.style.transform = "rotate(180deg)";
    countryArrowIcon.style.marginTop = "5px";
  } else {
    countryArrowIcon.style.transform = "rotate(0deg)";
    countryArrowIcon.style.marginTop = "0px";
  }
});

/* 1 */
const optionsContainer = document.querySelector(".options-container");

var countryArr = [
  `Afganistan`,
  `Åland Adaları`,
  `Almanya`,
  `Amerika Birleşik Devletleri (ABD)`,
  `Amerika Birleşik Devletleri (ABD) Küçük Dış Adaları`,
  `Amerikan Samoası`,
  `Andorra`,
  `Angola`,
  `Anguilla`,
  `Antartika`,
  `Antigua ve Barbuda`,
  `Arjantin`,
  `Arnavutluk`,
  `Avustralya`,
  `Avusturya`,
  `Azerbaycan`,
  `Bahamalar`,
  `Bahreyn`,
  `Bangladeş`,
  `Barbados`,
  `Batı Sahra`,
  `Belau`,
  `Belçika`,
  `Belize`,
  `Benin`,
  `Bermuda`,
  `Beyaz Rusya`,
  `Birleşik Arap Emirlikleri`,
  `Birleşik Krallık (UK)`,
  `Bolivya`,
  `Bonaire, Saint Eustatius and Saba`,
  `Bosna Hersek`,
  `Botsvana`,
  `Bouvet Adası`,
  `Brezilya`,
  `Brunei Sultanlığı`,
  `Bulgaristan`,
  `Burkina Faso`,
  `Burundi`,
  `Butan`,
  `Cape Verde`,
  `Cayman Adaları`,
  `Cebelitarık`,
  `Cezayir`,
  `Christmas Adaları`,
  `Cibuti`,
  `Cocos (Keeling) Adaları`,
  `Comoros`,
  `Cook Adaları`,
  `Curaçao`,
  `Çat`,
  `Çek Cumhuriyeti`,
  `Çin`,
  `Danimarka`,
  `Dominik Cumhuriyeti`,
  `Dominika`,
  `Ekvator`,
  `Ekvator Ginesi`,
  `El Salvador`,
  `Endonezya`,
  `Eritre`,
  `Ermenistan`,
  `Estonya`,
  `Etiyopya`,
  `Falkland Adaları`,
  `Faroe Adaları`,
  `Fas`,
  `Fiji`,
  `Fildişi Sahilleri`,
  `Filipinler`,
  `Filistin`,
  `Finlandiya`,
  `Fransa`,
  `Fransız Guyanası`,
  `Fransız Güney Bölgeleri`,
  `Fransız Poliznezyası`,
  `Gabon`,
  `Gambiya`,
  `Gana`,
  `Gine`,
  `Gine-Bissau Cumhuriyeti`,
  `Grenada`,
  `Grönland`,
  `Guadeloupe`,
  `Guam`,
  `Guatemala`,
  `Guernsey`,
  `Guyana`,
  `Güney Afrika`,
  `Güney Georgia / Sandwich Adaları`,
  `Güney Kore`,
  `Güney Sudan`,
  `Gürcistan`,
  `Haiti`,
  `Heard Adası ve McDonald Adaları`,
  `Hırvatistan`,
  `Hindistan`,
  `Hint Okyanusu İngiliz Bölgesi`,
  `Hollanda`,
  `Honduras`,
  `Hong Kong`,
  `Irak`,
  `İran`,
  `İrlanda`,
  `İspanya`,
  `İsrail`,
  `İsveç`,
  `İsviçre`,
  `İtalya`,
  `İzlanda`,
  `Jamaika`,
  `Japonya`,
  `Jersey`,
  `Kamboçya`,
  `Kamerun`,
  `Kanada`,
  `Karadağ`,
  `Katar`,
  `Kazakistan`,
  `Kenya`,
  `Kıbrıs`,
  `Kırgızistan`,
  `Kiribati`,
  `Kolombiya`,
  `Kongo (Brazzaville)`,
  `Kongo (Kinshasa)`,
  `Kostarika`,
  `Kuveyt`,
  `Kuzey Kore`,
  `Kuzey Makedonya`,
  `Kuzey Mariana Adaları`,
  `Küba`,
  `Laos`,
  `Lesoto`,
  `Letonya`,
  `Liberya`,
  `Libya`,
  `Lihtenştayn`,
  `Litvanya`,
  `Lübnan`,
  `Lüksemburg`,
  `Macao`,
  `Macaristan`,
  `Madagaskar`,
  `Malavi`,
  `Maldivler`,
  `Malezya`,
  `Mali`,
  `Malta`,
  `Man Adası`,
  `Marshall Adaları`,
  `Martinik`,
  `Mayotte`,
  `Meksika`,
  `Mısır`,
  `Mikronezya`,
  `Moğolistan`,
  `Moldova`,
  `Monako`,
  `Montserat`,
  `Moritanya`,
  `Morityus`,
  `Mozambik`,
  `Myanmar`,
  `Namibya`,
  `Nauru`,
  `Nepal`,
  `Nijer`,
  `Nijerya`,
  `Nikaragua`,
  `Niue`,
  `Norfolk Adası`,
  `Norveç`,
  `Orta Afrika Cumhuriyeti`,
  `Özbekistan`,
  `Pakistan`,
  `Panama`,
  `Papua Yeni Gine`,
  `Paraguay`,
  `Peru`,
  `Pitcairn Adası`,
  `Polonya`,
  `Portekiz`,
  `Porto Riko`,
  `Reunion Adası`,
  `Romanya`,
  `Ruanda`,
  `Rusya Federasyonu`,
  `Saint Barthelemy`,
  `Saint Pierre ve Miquelon`,
  `Saint Vincent ve Grenadinler`,
  `Samoa`,
  `San Marino`,
  `Santa Helena`,
  `Santa Kitts ve Nevis`,
  `Santa Luçia`,
  `Santa Martin (Fransız Kesimi)`,
  `Santa Martin (Hollanda bölümü)`,
  `Sao Tome and Principe`,
  `Senegal`,
  `Seyşeller`,
  `Sırbistan`,
  `Sierra Leone`,
  `Singapur`,
  `Slovakya`,
  `Slovenya`,
  `Solomon Adaları`,
  `Somali`,
  `Sri Lanka`,
  `Sudan`,
  `Surinam`,
  `Suriye`,
  `Suudi Arabistan`,
  `Svalbard ve Jan Mayen Adaları`,
  `Svaziland`,
  `Şili`,
  `Tacikistan`,
  `Tanzanya`,
  `Tayland`,
  `Tayvan`,
  `Timor-Leste`,
  `Togo`,
  `Tokelau`,
  `Tonga`,
  `Trinidad ve Tobago`,
  `Tunus`,
  `Turks ve Caicos Adaları`,
  `Tuvalu`,
  `Türkiye`,
  `Türkmenistan`,
  `Uganda`,
  `Ukrayna`,
  `Umman`,
  `Uruguay`,
  `Ürdün`,
  `Vanuatu`,
  `Vatikan`,
  `Venezuela`,
  `Vietnam`,
  `Virjin Adaları (ABD)`,
  `Virjin Adaları (Britanya)`,
  `Wallis ve Futuna`,
  `Yemen`,
  `Yeni Kaledonya`,
  `Yeni Zelanda`,
  `Yunanistan`,
  `Zambia`,
  `Zimbabve`,
];
let output = "";

countryArr.forEach((country) => {
  output += `
  <div class="option">
    <input type="radio" class="radio" id="${country}" name="category" />
    <label for="${country}">${country}</label>
  </div>`;
});
optionsContainer.innerHTML = output;

const selected = document.querySelector(".selected");
const searchBox = document.querySelector(".search-box input");

const optionsList = document.querySelectorAll(".option");
selected.style.borderBottom = "2px solid #ddd";
selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
  searchBox.value = "";
  filterList("");

  if (optionsContainer.classList.contains("active")) {
    searchBox.focus();
  }
  if (optionsContainer.classList.contains("active")) {
    selected.style.border = "none";
  } else {
    selected.style.borderBottom = "2px solid #ddd";
  }
});

optionsList.forEach((o) => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
    selected.style.borderBottom = "2px solid #ddd";
  });
});

searchBox.addEventListener("keyup", function (e) {
  filterList(e.target.value);
});

const filterList = (searchTerm) => {
  searchTerm = searchTerm.toLowerCase();
  optionsList.forEach((option) => {
    let label =
      option.firstElementChild.nextElementSibling.innerText.toLowerCase();
    if (label.indexOf(searchTerm) != -1) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
};

/* 2 */
const optionsContainer2 = document.querySelector(".options-container2");

let output2 = "";

countryArr.forEach((country) => {
  output2 += `
  <div class="option2">
    <input type="radio" class="radio" id="${country}" name="country2" />
    <label for="${country}">${country}</label>
  </div>`;
});
optionsContainer2.innerHTML = output2;

const selected2 = document.querySelector(".selected2");
const searchBox2 = document.querySelector(".search-box2 input");

const optionsList2 = document.querySelectorAll(".option2");
selected2.style.borderBottom = "2px solid #ddd";
selected2.addEventListener("click", () => {
  optionsContainer2.classList.toggle("active");
  searchBox2.value = "";
  filterList("");

  if (optionsContainer2.classList.contains("active")) {
    searchBox2.focus();
  }
  if (optionsContainer2.classList.contains("active")) {
    selected2.style.border = "none";
  } else {
    selected2.style.borderBottom = "2px solid #ddd";
  }
});

optionsList2.forEach((o) => {
  o.addEventListener("click", () => {
    selected2.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer2.classList.remove("active");
    selected2.style.borderBottom = "2px solid #ddd";
  });
});

searchBox2.addEventListener("keyup", function (e) {
  filterList2(e.target.value);
});

const filterList2 = (searchTerm) => {
  searchTerm = searchTerm.toLowerCase();
  optionsList2.forEach((option) => {
    let label2 =
      option.firstElementChild.nextElementSibling.innerText.toLowerCase();
    if (label2.indexOf(searchTerm) != -1) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
};

/* 3 */

const optionsContainer3 = document.querySelector(".options-container3");

let output3 = "";

countryArr.forEach((country) => {
  output3 += `
  <div class="option3">
    <input type="radio" class="radio" id="${country}" name="country3" />
    <label for="${country}">${country}</label>
  </div>`;
});
optionsContainer3.innerHTML = output3;

const selected3 = document.querySelector(".selected3");
const searchBox3 = document.querySelector(".search-box3 input");

const optionsList3 = document.querySelectorAll(".option3");
selected3.style.borderBottom = "2px solid #ddd";
selected3.addEventListener("click", () => {
  optionsContainer3.classList.toggle("active");
  searchBox3.value = "";
  filterList("");

  if (optionsContainer3.classList.contains("active")) {
    searchBox3.focus();
  }
  if (optionsContainer3.classList.contains("active")) {
    selected3.style.border = "none";
  } else {
    selected3.style.borderBottom = "2px solid #ddd";
  }
});

optionsList3.forEach((o) => {
  o.addEventListener("click", () => {
    selected3.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer3.classList.remove("active");
    selected3.style.borderBottom = "2px solid #ddd";
  });
});

searchBox3.addEventListener("keyup", function (e) {
  filterList3(e.target.value);
});

const filterList3 = (searchTerm) => {
  searchTerm = searchTerm.toLowerCase();
  optionsList3.forEach((option) => {
    let label3 =
      option.firstElementChild.nextElementSibling.innerText.toLowerCase();
    if (label3.indexOf(searchTerm) != -1) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
};

/* 4 */

const optionsContainer4 = document.querySelector(".options-container4");

let output4 = "";

countryArr.forEach((country) => {
  output4 += `
  <div class="option4">
    <input type="radio" class="radio" id="${country}" name="country4" />
    <label for="${country}">${country}</label>
  </div>`;
});
optionsContainer4.innerHTML = output4;

const selected4 = document.querySelector(".selected4");
const searchBox4 = document.querySelector(".search-box4 input");

const optionsList4 = document.querySelectorAll(".option4");
selected4.style.borderBottom = "2px solid #ddd";
selected4.addEventListener("click", () => {
  optionsContainer4.classList.toggle("active");
  searchBox4.value = "";
  filterList("");

  if (optionsContainer4.classList.contains("active")) {
    searchBox4.focus();
  }
  if (optionsContainer4.classList.contains("active")) {
    selected4.style.border = "none";
  } else {
    selected4.style.borderBottom = "2px solid #ddd";
  }
});

optionsList4.forEach((o) => {
  o.addEventListener("click", () => {
    selected4.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer4.classList.remove("active");
    selected4.style.borderBottom = "2px solid #ddd";
  });
});

searchBox4.addEventListener("keyup", function (e) {
  filterList4(e.target.value);
});

const filterList4 = (searchTerm) => {
  searchTerm = searchTerm.toLowerCase();
  optionsList4.forEach((option) => {
    let label4 =
      option.firstElementChild.nextElementSibling.innerText.toLowerCase();
    if (label4.indexOf(searchTerm) != -1) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
};
