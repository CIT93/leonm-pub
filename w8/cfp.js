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

export { determineHouseholdPts, sizeOfHome };