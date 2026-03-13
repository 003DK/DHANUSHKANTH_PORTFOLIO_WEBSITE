async function loadCodolioStats(){

const username = "YOUR_USERNAME";

const url = `https://api.codolio.com/profile/${dk003}`;

try{

const response = await fetch(url);
const data = await response.json();

document.getElementById("problems").innerText = data.totalSolved;
document.getElementById("platforms").innerText = data.platforms.length;
document.getElementById("activeDays").innerText = data.activeDays;

}catch(error){

console.log("Unable to load Codolio data");

}

}

loadCodolioStats();
