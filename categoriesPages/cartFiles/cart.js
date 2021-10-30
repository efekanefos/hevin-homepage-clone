const cityArr = [
  {
    city: "İl",
    price: "Minimum Alışveriş Tutarı",
    backgroundColor: "whiteBack",
  },
  {
    city: "Adana",
    price: "1.000₺",
    backgroundColor: "darkerBack",
  },
  {
    city: "Mersin",
    price: "1.000₺",
    backgroundColor: "whiteBack",
  },
  {
    city: "Osmaniye",
    price: "1.000₺",
    backgroundColor: "darkerBack",
  },
  {
    city: "Hatay",
    price: "5.000₺",
    backgroundColor: "whiteBack",
  },
  {
    city: "KahramanMaraş",
    price: "5.000₺",
    backgroundColor: "darkerBack",
  },
  {
    city: "Niğde",
    price: "5.000₺",
    backgroundColor: "whiteBack",
  },
  {
    city: "Gaziantep",
    price: "5.000₺",
    backgroundColor: "darkerBack",
  },
  {
    city: "Kilis",
    price: "10.000₺",
    backgroundColor: "whiteBack",
  },
  {
    city: "Aksaray",
    price: "10.000₺",
    backgroundColor: "darkerBack",
  },
  {
    city: "Nevşehir",
    price: "10.000₺",
    backgroundColor: "whiteBack",
  },
  {
    city: "Karaman",
    price: "10.000₺",
    backgroundColor: "darkerBack",
  },
  {
    city: "Kayseri",
    price: "10.000₺",
    backgroundColor: "whiteBack",
  },
  {
    city: "Adıyaman",
    price: "10.000₺",
    backgroundColor: "darkerBack",
  },
  {
    city: "Şanlıurfa",
    price: "10.000₺",
    backgroundColor: "whiteBack",
  },
  {
    city: "Konya",
    price: "10.000₺",
    backgroundColor: "darkerBack",
  },
  {
    city: "Kırşehir",
    price: "10.000₺",
    backgroundColor: "whiteBack",
  },
  {
    city: "Malatya",
    price: "10.000₺",
    backgroundColor: "darkerBack",
  },
  {
    city: "Sivas",
    price: "20.000₺",
    backgroundColor: "whiteBack",
  },
  {
    city: "Kırıkkale",
    price: "20.000₺",
    backgroundColor: "darkerBack",
  },
  {
    city: "Yozgat",
    price: "20.000₺",
    backgroundColor: "whiteBack",
  },
  {
    city: "Tokat",
    price: "20.000₺",
    backgroundColor: "darkerBack",
  },
  {
    city: "Ankara",
    price: "20.000₺",
    backgroundColor: "whiteBack",
  },
  {
    city: "Elazığ",
    price: "20.000₺",
    backgroundColor: "darkerBack",
  },
  {
    city: "Diyarbakır",
    price: "20.000₺",
    backgroundColor: "whiteBack",
  },
  {
    city: "Antalya",
    price: "20.000₺",
    backgroundColor: "darkerBack",
  },
  {
    city: "Mardin",
    price: "20.000₺",
    backgroundColor: "whiteBack",
  },
  {
    city: "Afyon",
    price: "30.000₺",
    backgroundColor: "darkerBack",
  },
  {
    city: "Çankırı",
    price: "30.000₺",
    backgroundColor: "whiteBack",
  },
  {
    city: "Çorum",
    price: "30.000₺",
    backgroundColor: "darkerBack",
  },
  {
    city: "Amasya",
    price: "30.000₺",
    backgroundColor: "whiteBack",
  },
  {
    city: "Isparta",
    price: "30.000₺",
    backgroundColor: "darkerBack",
  },
  {
    city: "Batman",
    price: "30.000₺",
    backgroundColor: "whiteBack",
  },
  {
    city: "Tunceli",
    price: "40.000₺",
    backgroundColor: "darkerBack",
  },
  {
    city: "Bingöl",
    price: "40.000₺",
    backgroundColor: "whiteBack",
  },
  {
    city: "Burdur",
    price: "40.000₺",
    backgroundColor: "darkerBack",
  },
  {
    city: "Erzincan",
    price: "40.000₺",
    backgroundColor: "whiteBack",
  },
  {
    city: "Kütahya",
    price: "40.000₺",
    backgroundColor: "darkerBack",
  },
  {
    city: "Kastamonu",
    price: "40.000₺",
    backgroundColor: "whiteBack",
  },
  {
    city: "Bolu",
    price: "40.000₺",
    backgroundColor: "darkerBack",
  },
  {
    city: "Eskişehir",
    price: "40.000₺",
    backgroundColor: "whiteBack",
  },
  {
    city: "Uşak",
    price: "40.000₺",
    backgroundColor: "darkerBack",
  },
  {
    city: "Ordu",
    price: "40.000₺",
    backgroundColor: "whiteBack",
  },
  {
    city: "Siirt",
    price: "40.000₺",
    backgroundColor: "darkerBack",
  },
  {
    city: "Şırnak",
    price: "40.000₺",
    backgroundColor: "whiteBack",
  },
  {
    city: "Karabük",
    price: "40.000₺",
    backgroundColor: "darkerBack",
  },
  {
    city: "Giresun",
    price: "40.000₺",
    backgroundColor: "whiteBack",
  },
  {
    city: "Samsun",
    price: "40.000₺",
    backgroundColor: "darkerBack",
  },
  {
    city: "Bitlis",
    price: "40.000₺",
    backgroundColor: "whiteBack",
  },
  {
    city: "Düzce",
    price: "40.000₺",
    backgroundColor: "darkerBack",
  },
  {
    city: "Muş",
    price: "40.000₺",
    backgroundColor: "whiteBack",
  },
  {
    city: "Denizli",
    price: "40.000₺",
    backgroundColor: "darkerBack",
  },
  {
    city: "Zonguldak",
    price: "40.000₺",
    backgroundColor: "whiteBack",
  },
  {
    city: "Bilecik",
    price: "40.000₺",
    backgroundColor: "darkerBack",
  },
  {
    city: "Gümüşhane",
    price: "40.000₺",
    backgroundColor: "whiteBack",
  },
  {
    city: "Bartın",
    price: "40.000₺",
    backgroundColor: "darkerBack",
  },
  {
    city: "Sakarya",
    price: "40.000₺",
    backgroundColor: "whiteBack",
  },
  {
    city: "Bayburt",
    price: "40.000₺",
    backgroundColor: "darkerBack",
  },
  {
    city: "Erzurum",
    price: "40.000₺",
    backgroundColor: "whiteBack",
  },
  {
    city: "Kocaeli",
    price: "40.000₺",
    backgroundColor: "darkerBack",
  },
  {
    city: "Bursa",
    price: "40.000₺",
    backgroundColor: "whiteBack",
  },
  {
    city: "Trabzon",
    price: "40.000₺",
    backgroundColor: "darkerBack",
  },
  {
    city: "Muğla",
    price: "40.000₺",
    backgroundColor: "whiteBack",
  },
  {
    city: "Sinop",
    price: "40.000₺",
    backgroundColor: "darkerBack",
  },
  {
    city: "Aydın",
    price: "40.000₺",
    backgroundColor: "whiteBack",
  },
  {
    city: "Manisa",
    price: "40.000₺",
    backgroundColor: "darkerBack",
  },
  {
    city: "Van",
    price: "40.000₺",
    backgroundColor: "whiteBack",
  },
  {
    city: "Hakkari",
    price: "40.000₺",
    backgroundColor: "darkerBack",
  },
  {
    city: "Yalova",
    price: "40.000₺",
    backgroundColor: "whiteBack",
  },
  {
    city: "Diğer İller",
    price: "45.000₺",
    backgroundColor: "darkerBack",
  },
];

var mainContent__TableRowDiv = document.querySelector(
  ".mainContent__TableRowDiv"
);

mainContent__TableRowDiv.innerHTML = cityArr
  .map(function (item) {
    return `<div class="mainContent__CityTableRow ${item.backgroundColor}">
    <span class="leftCityText">${item.city}</span>
    <span class="rightCityText"> ${item.price} </span>
  </div>
  `;
  })
  .join("");
