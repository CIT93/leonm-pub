// Number members in household
const houseMembers = 12;

// Size of home
const homeSize = 4;

// Food Choices
const foodChoice = 10;

// Water Usage
const waterUse = 1;

// Household purchase 
const householdPurchases = 2;

// Waste produced
const wasteProduced = 30;

// How much I recycle
const wasteRecycle = 12;

// Transportation Score
const transportScore = 6;

// Carbon Footprint Total
const cfpTotal = houseMembers + homeSize + foodChoice + waterUse + householdPurchases + wasteProduced + wasteRecycle + transportScore;
const myHeading = document.querySelector("h2");
myHeading.textContent = cfpTotal;