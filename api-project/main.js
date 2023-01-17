const URL = "https://valorant-api.com/v1/weapons";
import "./style.css";

const DOM = {
  mommy: document.getElementById("mommy"),
  gunbutton: document.getElementById("guns"),
  list: document.getElementById("list"),
  popup: document.getElementById("pop-up1"),
  namebutton: document.getElementById("namebutton"),
};

async function getweapons(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
async function main(name) {
  let big = await getweapons(URL);

  console.log(big);
  big.data
    .filter((weapon) => weapon.displayName == name)
    .forEach((weapon) => {
      DOM.mommy.insertAdjacentHTML(
        "beforeend",
        `<div>
         <img src="${weapon.displayIcon}" >
      </div>`
      );
    });
}

async function makeweaponbuttons() {
  let big = await getweapons(URL);
  big.data.forEach((weapon) => {
    DOM.list.insertAdjacentHTML(
      "beforeend",
      ` <button id="${weapon.displayName}">
    ${weapon.displayName}</button>`
    );
    document
      .getElementById(weapon.displayName)
      .addEventListener("click", function () {
        main(weapon.displayName);
      });
  });
}

makeweaponbuttons();
DOM.popup.style.display = "none";
DOM.gunbutton.addEventListener("click", function () {
  if (DOM.popup.style.display == "none") {
    DOM.popup.style.display = "inline";
  } else if (DOM.popup.style.display == "inline") {
    DOM.popup.style.display = "none";
  }
});
