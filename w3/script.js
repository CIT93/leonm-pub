function determineHouseholdPts(numberInHousehold) {
    console.log("inside the function");
    if (numberInHousehold === 1) {
        carbonFootprintPoints = carbonFootprintPoints + 14;
    } else if(numberInHousehold === 2) {
        carbonFootprintPoints = carbonFootprintPoints + 12;
    } else if (numberInHousehold === 3) {
        carbonFootprintPoints = carbonFootprintPoints + 10;
    } else if (numberInHousehold === 4) {
        carbonFootprintPoints = carbonFootprintPoints + 8;
    } else if (numberInHousehold === 5) {
        carbonFootprintPoints = carbonFootprintPoints + 6;
    } else if (numberInHousehold === 6) {
        carbonFootprintPoints = carbonFootprintPoints + 4;
    } else if (numberInHousehold > 6) {
        carbonFootprintPoints = carbonFootprintPoints + 2;
    }
    console.log(`Based on the number of members in the household of ${numberInHousehold} the points would be ${carbonFootprintPoints}`);
}

function sizeOfHome(houseSize) {
    switch (houseSize) {
        case "large house":
            carbonFootprintPoints = carbonFootprintPoints + 10;
            console.log("Carbon footprint added by 10");
            break;
        case "medium house":
            carbonFootprintPoints = carbonFootprintPoints + 7;
            console.log("Carbon footprint added by 7");
            break;
        case "small house":
            carbonFootprintPoints = carbonFootprintPoints + 4;
            console.log("Carbon footprint added by 4");
            break;
        case "apartment":
            carbonFootprintPoints = carbonFootprintPoints + 2;
            console.log("Carbon footprint added by 2");
            break;
        default:
            console.log("No points added for house size");
            break;
    }
    console.log(`Carbon footprint is now ${carbonFootprintPoints}`);
}

// Global Scope
let carbonFootprintPoints = 0;
// const numberInHousehold = 2;

determineHouseholdPts(2);
sizeOfHome("apartment");