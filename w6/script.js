const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];
function determineHouseholdPts(numberInHousehold) {
    let houseHoldPoints = 0;
    if (numberInHousehold === 1) {
        houseHoldPoints = 14;
    } else if(numberInHousehold === 2) {
        houseHoldPoints = 12;
    } else if (numberInHousehold === 3) {
        houseHoldPoints = 10;
    } else if (numberInHousehold === 4) {
        houseHoldPoints = 8
    } else if (numberInHousehold === 5) {
        houseHoldPoints = 6;
    } else if (numberInHousehold === 6) {
        houseHoldPoints = 4;
    } else if (numberInHousehold > 6) {
        houseHoldPoints = 2;
    }
    return houseHoldPoints;
}

function sizeOfHome(houseSize) {
    let sizePoints = 0;
    switch (houseSize) {
        case "large house":
            sizePoints = 10;
            break;
        case "medium house":
            sizePoints = 7;
            break;
        case "small house":
            sizePoints = 4;
            break;
        case "apartment":
            sizePoints = 2;
            break;
        default:
            console.log("No points added for house size");
            break;
    }
    return sizePoints;
}

function displayOutObj(obj) {
    const output = document.getElementById("output");
    const newH2 = document.createElement("h2");
    newH2.textContent = `Carbon Footprint ${obj.cfpTotal}`;
    OUTPUT.appendChild(newH2);

    const newH3 = document.createElement("h3");
    newH3.textContent = `Based on the size of home (${obj.cfpHomeSize}, points added: ${obj.cfpSizePTS})`;
    OUTPUT.appendChild(newH3);

    const newP = document.createElement("p");
    newP.textContent = `This number is based on the number of people in the house of ${obj.cfpHouseHold} (score: ${obj.cfpHousePTS}), `;
    OUTPUT.appendChild(newP);
}

function start(houseHoldMembers, houseSize, firstName, lastName) {
    const houseHoldPTS = determineHouseholdPts(houseHoldMembers);
    const sizePTS = sizeOfHome(houseSize);
    const total = houseHoldPTS + sizePTS;
    const fName = firstName;
    const lName = lastName;
    cfpData.push({
        cfpTotal: total,
        cfpHouseHold: houseHoldMembers,
        cfpHousePTS: houseHoldPTS,
        cfpHomeSize: houseSize,
        cfpSizePTS: sizePTS,
        cfpFirstName: fName,
        cfpLastName: lName
    });
};

function displayOutput() {
    const output = document.getElementById("output");
    for (obj of cfpData) {
        const nameH2 = document.createElement("h2")
        nameH2.textContent = `First name: ${obj.cfpFirstName}`;
        OUTPUT.appendChild(nameH2);

        const lastNameH2 = document.createElement("h2")
        lastNameH2.textContent = `Last name: ${obj.cfpLastName}`;
        OUTPUT.appendChild(lastNameH2);
        
        const newH2 = document.createElement("h2");
        newH2.textContent = `Carbon Footprint ${obj.cfpTotal}`;
        OUTPUT.appendChild(newH2);

        const newH3 = document.createElement("h3");
        newH3.textContent = `Size of home is ${obj.cfpHomeSize} (score: ${obj.cfpSizePTS})`;
        OUTPUT.appendChild(newH3);

        const newP = document.createElement("p");
        newP.textContent = `Number of people in home ${obj.cfpHouseHold} (score: ${obj.cfpHousePTS}), `;
        OUTPUT.appendChild(newP);
    }
}

FORM.addEventListener('submit', function (e) {
    e.preventDefault();
    const firstName = FORM.firstname.value;
    const lastName = FORM.lastname.value;
    const houseMembers = parseInt(FORM.housemembers.value);
    const houseSize = FORM.homesize.value;
    start(houseMembers, houseSize, firstName, lastName);
    OUTPUT.innerHTML = "";
    displayOutput();
    FORM.reset();
})

/* It's not correct because the option value doesn't match the the optional values we've established
in JavaScript. */

/* We're putting a lot of effort into the form because we want to ensure we're getting correct data 
from the user. For example if the user accidently types in all caps then our JavaScript would work, but 
not the way we want it to. We're making the form as limited and simple as possible so that we don't have
to make a case for any number of user input data that doesn't match with what we have in our JavaScript. */