const codolioProfile = "https://codolio.com/profile/dk003";

/* Load coding stats from JSON */

async function loadStats(){

try{

const response = await fetch("stats.json");
const data = await response.json();

document.getElementById("problems").innerText = data.problemsSolved;
document.getElementById("activeDays").innerText = data.activeDays;
document.getElementById("contests").innerText = data.contests;
document.getElementById("leetcode").innerText = data.leetcodeRating;
document.getElementById("codechef").innerText = data.codechefRating;
document.getElementById("streak").innerText = data.maxStreak;

}
catch(error){

console.log("Stats could not load");

}

}

loadStats();


/* Click coding section → open Codolio */

document.getElementById("codingSection").addEventListener("click", function(){

window.open(codolioProfile, "_blank");

});
