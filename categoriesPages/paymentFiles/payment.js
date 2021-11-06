document.addEventListener("DOMContentLoaded", () => {
  const selectDrop = document.querySelector("#country");
  const selectDropPersonal = document.querySelector(".countryPersonal");

  var countryArr = [
    "Afganistan",
    "Åland Adaları",
    "Almanya",
    "Amerika Birleşik Devletleri (ABD)",
    "Amerika Birleşik Devletleri (ABD) Küçük Dış Adaları",
    "Amerikan Samoası",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antartika",
    "Antigua ve Barbuda",
    "Arjantin",
    "Arnavutluk",
    "Avustralya",
    "Avusturya",
    "Azerbaycan",
    "Bahamalar",
    "Bahreyn",
    "Bangladeş",
    "Barbados",
    "Batı Sahra",
    "Belau",
    "Belçika",
    "Belize",
    "Benin",
    "Bermuda",
    "Beyaz Rusya",
    "Birleşik Arap Emirlikleri",
    "Birleşik Krallık (UK)",
    "Bolivya",
    "Bonaire, Saint Eustatius and Saba",
    "Bosna Hersek",
    "Botsvana",
    "Bouvet Adası",
    "Brezilya",
    "Brunei Sultanlığı",
    "Bulgaristan",
    "Burkina Faso",
    "Burundi",
    "Butan",
    "Cape Verde",
    "Cayman Adaları",
    "Cebelitarık",
    "Cezayir",
    "Christmas Adaları",
    "Cibuti",
    "Cocos (Keeling) Adaları",
    "Comoros",
    "Cook Adaları",
    "Curaçao",
    "Çat",
    "Çek Cumhuriyeti",
    "Çin",
    "Danimarka",
    "Dominik Cumhuriyeti",
    "Dominika",
    "Ekvator",
    "Ekvator Ginesi",
    "El Salvador",
    "Endonezya",
    "Eritre",
    "Ermenistan",
    "Estonya",
    "Etiyopya",
    "Falkland Adaları",
    "Faroe Adaları",
    "Fas",
    "Fiji",
    "Fildişi Sahilleri",
    ,
    "Filipinler",
    "Filistin",
    "Finlandiya",
    "Fransa",
    "Fransız Guyanası",
    "Fransız Güney Bölgeleri",
    "Fransız Poliznezyası",
    "Gabon",
    "Gambiya",
    "Gana",
    "Gine",
    "Gine-Bissau Cumhuriyeti",
    "Grenada",
    "Grönland",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guyana",
    "Güney Afrika",
    "Güney Georgia / Sandwich Adaları",
    "Güney Kore",
    "Güney Sudan",
    "Gürcistan",
    "Haiti",
    "Heard Adası ve McDonald Adaları",
    "Hırvatistan",
    "Hindistan",
    "Hint Okyanusu İngiliz Bölgesi",
    "Hollanda",
    "Honduras",
    "Hong Kong",
    "Irak",
    "İran",
    "İrlanda",
    "İspanya",
    "İsrail",
    "İsveç",
    "İsviçre",
    "İtalya",
    "İzlanda",
    "Jamaika",
    "Japonya",
    "Jersey",
    "Kamboçya",
    "Kamerun",
    "Kanada",
    "Karadağ",
    "Katar",
    "Kazakistan",
    "Kenya",
    "Kıbrıs",
    "Kırgızistan",
    "Kiribati",
    "Kolombiya",
    "Kongo (Brazzaville)",
    "Kongo (Kinshasa)",
    "Kostarika",
    "Kuveyt",
    "Kuzey Kore",
    "Kuzey Makedonya",
    "Kuzey Mariana Adaları",
    "Küba",
    "Laos",
    "Lesoto",
    "Letonya",
    "Liberya",
    "Libya",
    "Lihtenştayn",
    "Litvanya",
    "Lübnan",
    "Lüksemburg",
    "Macao",
    "Macaristan",
    "Madagaskar",
    "Malavi",
    "Maldivler",
    "Malezya",
    "Mali",
    "Malta",
    "Man Adası",
    "Marshall Adaları",
    "Martinik",
    "Mayotte",
    "Meksika",
    "Mısır",
    "Mikronezya",
    "Moğolistan",
    "Moldova",
    "Monako",
    "Montserat",
    "Moritanya",
    "Morityus",
    "Mozambik",
    "Myanmar",
    "Namibya",
    "Nauru",
    "Nepal",
    "Nijer",
    "Nijerya",
    "Nikaragua",
    "Niue",
    "Norfolk Adası",
    "Norveç",
    "Orta Afrika Cumhuriyeti",
    "Özbekistan",
    "Pakistan",
    "Panama",
    "Papua Yeni Gine",
    "Paraguay",
    "Peru",
    "Pitcairn Adası",
    "Polonya",
    "Portekiz",
    "Porto Riko",
    "Reunion Adası",
    "Romanya",
    "Ruanda",
    "Rusya Federasyonu",
    "Saint Barthelemy",
    "Saint Pierre ve Miquelon",
    "Saint Vincent ve Grenadinler",
    "Samoa",
    "San Marino",
    "Santa Helena",
    "Santa Kitts ve Nevis",
    "Santa Luçia",
    "Santa Martin (Fransız Kesimi)",
    "Santa Martin (Hollanda bölümü)",
    "Sao Tome and Principe",
    "Senegal",
    "Seyşeller",
    "Sırbistan",
    "Sierra Leone",
    "Singapur",
    "Slovakya",
    "Slovenya",
    "Solomon Adaları",
    "Somali",
    "Sri Lanka",
    "Sudan",
    "Surinam",
    "Suriye",
    "Suudi Arabistan",
    "Svalbard ve Jan Mayen Adaları",
    "Svaziland",
    "Şili",
    "Tacikistan",
    "Tanzanya",
    "Tayland",
    "Tayvan",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad ve Tobago",
    "Tunus",
    "Turks ve Caicos Adaları",
    "Tuvalu",
    "Türkiye",
    "Türkmenistan",
    "Uganda",
    "Ukrayna",
    "Umman",
    "Uruguay",
    "Ürdün",
    "Vanuatu",
    "Vatikan",
    "Venezuela",
    "Vietnam",
    "Virjin Adaları (ABD)",
    "Virjin Adaları (Britanya)",
    "Wallis ve Futuna",
    "Yemen",
    "Yeni Kaledonya",
    "Yeni Zelanda",
    "Yunanistan",
    "Zambia",
    "Zimbabve",
  ];
  let output = `<li id="firstListItem">Bir ülke/bölge seçin…</li>`;
  countryArr.forEach((country) => {
    output += `<li value="${country}">${country}</li>`;
  });
  selectDrop.innerHTML = output;
  selectDropPersonal.innerHTML = output;
});

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
