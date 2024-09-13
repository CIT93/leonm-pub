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
    output.appendChild(newH2);

    const newH3 = document.createElement("h3");
    newH3.textContent = `Based on the size of home (${obj.cfpHomeSize}, points added: ${obj.cfpSizePTS})`;
    output.appendChild(newH3);

    const newP = document.createElement("p");
    newP.textContent = `This number is based on the number of people in the house of ${obj.cfpHouseHold} (score: ${obj.cfpHousePTS}), `;
    output.appendChild(newP);
}

function start(houseHoldMembers, houseSize) {
    const houseHoldPTS = determineHouseholdPts(houseHoldMembers);
    const sizePTS = sizeOfHome(houseSize);
    const total = houseHoldPTS + sizePTS;
    cfpData.push({
        cfpTotal: total,
        cfpHouseHold: houseHoldMembers,
        cfpHousePTS: houseHoldPTS,
        cfpHomeSize: houseSize,
        cfpSizePTS: sizePTS
    });
};

function displayOutput() {
    for (obj of cfpData) {
    const output = document.getElementById("output");
    const newH2 = document.createElement("h2");
    newH2.textContent = `Carbon Footprint ${obj.cfpTotal}`;
    output.appendChild(newH2);

    const newH3 = document.createElement("h3");
    newH3.textContent = `Size of home is ${obj.cfpHomeSize} (score: ${obj.cfpSizePTS})`;
    output.appendChild(newH3);

    const newP = document.createElement("p");
    newP.textContent = `Number of people in home ${obj.cfpHouseHold} (score: ${obj.cfpHousePTS}), `;
    output.appendChild(newP);
    }
}

// Global Scope //

start(2, "apartment");
start(5, "large house");
start(4, "medium house");
start(3, "small house");
// start(1, "large house");
// start(1, "small house");
displayOutput();

