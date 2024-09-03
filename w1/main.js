console.log('hello from inside the main.js file')

// let myVar;
const myVar = "leon";

const myVarType = typeof(myVar);

console.log("myVarType" + myVarType);
console.log(`myVarType ${myVarType}`);

function runNow() {
    if(myVarType === "number") {
        console.log('this line will run');
    }
    else {
        console.log('this line will not run');
    }
}

runNow();
runNow();