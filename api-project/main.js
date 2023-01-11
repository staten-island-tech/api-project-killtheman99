const URL = "https://valorant-api.com/v1/weapons";

const DOM = {
  mommy: document.getElementById("mommy"),
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
