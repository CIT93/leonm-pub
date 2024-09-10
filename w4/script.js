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

function start(houseHoldMembers, houseSize) {
    const houseHoldPTS = determineHouseholdPts(houseHoldMembers);
    const sizePTS = sizeOfHome(houseSize);
    const total = houseHoldPTS + sizePTS;
    cfpData.push([houseHoldMembers, houseSize, houseHoldPTS, sizePTS, total]);
}

function displayOutput() {
    for (arr of cfpData) {
        console.log(arr);
        const output = document.getElementById("output");
        const newP = document.createElement("p");
        const pHouseMembers = document.createElement("p");
        const pHouseScore = document.createElement("p");
        const pHouseSize = document.createElement("p");
        const pSizeScore = document.createElement("p");
        newP.textContent = `Carbon Footprint total is ${arr[4]}`;
        pHouseMembers.textContent = `Number of members in household: ${arr[0]}`;
        pHouseScore.textContent = `Score for household members: ${arr[2]}`;
        pHouseSize.textContent = `Home size is: ${arr[1]}`
        pSizeScore.textContent = `Score for home size is: ${arr[3]}`
        output.appendChild(newP);
        output.appendChild(pHouseMembers);
        output.appendChild(pHouseScore);
        output.appendChild(pHouseSize);
        output.appendChild(pSizeScore);

        const br = document.createElement("p");
        br.textContent = `--------------------------------------------`;
        output.appendChild(br);
    }
}

// Global Scope //

start(2, "apartment");
start(5, "large house");
start(4, "medium house");
start(3, "small house");
start(1, "large house");
start(1, "small house");

displayOutput();
