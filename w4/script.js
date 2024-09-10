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
    console.log(`Points added from household members is ${houseHoldPoints}`);
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
    console.log(`Points added from home size is ${sizePoints}`);
    return sizePoints;
}

function start(houseHoldMembers, houseSize) {
    const houseHoldPTS = determineHouseholdPts(houseHoldMembers);
    const sizePTS = sizeOfHome(houseSize);
    const total = houseHoldPTS + sizePTS;
    cfpData.push([houseHoldMembers, houseSize, houseHoldPTS, sizePTS, total]);
    console.log(cfpData);
    console.log(`Total carbon footprint score so far: ${total}`);
}
// Last code along for Week 4 - For readability's sake, I think the data should be in separate arrays. It'd be too confusing to keep numeric values and strings in the same array. // 

// Global Scope //

console.log("-- global scope --");

// const myInputs = [5, "apartment"];
start(2, "apartment");
start(5, "large house");
start(4, "medium house");
start(3, "small house");
start(1, "large house");
start(1, "small house");
// I think it doesn't matter where the console.log is placed? However I feel like it's good practice to have it before the return value for easier reading. //
// I understand how to pass an array into a function. //

// Arrays //

// const myArr = [1, 2, 3];
// console.log(myArr);
// console.log(myArr[2]);
// console.log(myArr[0] = 6);
// console.log(myArr.push(9));