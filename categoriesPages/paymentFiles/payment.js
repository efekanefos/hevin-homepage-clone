document.addEventListener("DOMContentLoaded", () => {
  const selectDrop = document.querySelector("#country");
  // const selectDrop = document.getElementById('countries');

  fetch("https://restcountries.com/v3.1/all")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      let output = "";
      data.forEach((country) => {
        output += `
        
        <option value="${country.name.official}">${country.name.official}</option>`;
      });

      selectDrop.innerHTML = output;
    })
    .catch((err) => {
      console.log(err);
    });
});
