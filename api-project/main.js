const URL = "https://valorant-api.com/v1/weapons";

async function getweapons(URL) {
  return await fetch(URL);
}

async function getskin(URL2) {
  const response = await fetch(URL2);
  const data = await response.json();
  console.log(response);
}
getskin(URL2);
