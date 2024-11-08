import { renderTbl } from "./render.js";
import { determineHouseholdPts, sizeOfHome } from "./cfp.js";

const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];

function start(houseHoldMembers, houseSize, firstName, lastName) {
    const houseHoldPTS = determineHouseholdPts(houseHoldMembers);
    const sizePTS = sizeOfHome(houseSize);
    const total = houseHoldPTS + sizePTS;
    const fName = firstName;
    const lName = lastName;
    cfpData.push({
        cfpFirstName: fName,
        cfpLastName: lName,
        cfpHouseHold: houseHoldMembers,
        cfpHousePTS: houseHoldPTS,
        cfpHomeSize: houseSize,
        cfpSizePTS: sizePTS,
        cfpTotal: total,
    });
};

FORM.addEventListener('submit', function (e) {
    e.preventDefault();
    const firstName = FORM.firstname.value;
    const lastName = FORM.lastname.value;
    const houseMembers = parseInt(FORM.housemembers.value);
    const houseSize = FORM.homesize.value;
    start(houseMembers, houseSize, firstName, lastName);
    OUTPUT.innerHTML = "";
    renderTbl(cfpData);
    FORM.reset();
})


