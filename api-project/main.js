const URL = "https://valorant-api.com/v1/weapons";
import "./style.css";

const DOM = {
  mommy: document.getElementById("mommy"),
  gunbutton: document.getElementById("guns"),
  list: document.getElementById("list"),
  popup: document.getElementById("pop-up1"),
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
main("Odin");

async function makeweaponbuttons() {
  let big = await getweapons(URL);
  big.data.forEach((weapon) => {
    DOM.list.insertAdjacentHTML(
      "beforeend",
      ` <button id="namebutton">
    ${weapon.displayName}</button>`
    );
  });
}
makeweaponbuttons();
DOM.gunbutton.addEventListener("click");
