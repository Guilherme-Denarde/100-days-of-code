var myNumber;
var myString;
var myBoolean;
var myNull;
var myUndefined;
var myObject = { key: 'value' };
myNumber = 10;
myString = 'Diego';
myBoolean = true;
myNull = null;
myUndefined = undefined;
myObject = { key: 'value' };
showData();
function showData() {
    console.log(thisVar()); //What's sup net!
    console.log(thisLet()); //What's sup net!
    console.log("\n        Variable myNumber\n \n        type:  ".concat(typeof (myNumber), "\n \n        bytes: 8\n\n        console: ").concat(myNumber, "\n\n\n    ")); //Variable myNumber type: number bytes: 8  console: 10
    console.log("\n        Variable myString\n \n        type:  ".concat(typeof (myString), "\n \n        bytes: ").concat(new Blob([myString]).size, "\n\n        console: ").concat(myString, "\n\n\n    ")); //Variable myString type: string bytes: 5  console: Diego
    console.log("\n        Variable myBoolean\n \n        type:  ".concat(typeof (myBoolean), "\n \n        bytes: ").concat(new Blob([JSON.stringify(myBoolean)]).size, "\n\n        console: ").concat(myBoolean, "\n\n\n    ")); //Variable myBoolean type: boolean bytes: 4  console: true
    console.log("\n        Variable myNull\n \n        type:  ".concat(typeof (myNull), "\n \n        bytes: ").concat(new Blob([JSON.stringify(myNull)]).size, "\n\n        console: ").concat(myNull, "\n\n\n    ")); //Variable myNull type: object bytes: 4  console: null
    console.log("\n        Variable myUndefined\n \n        type:  ".concat(typeof (myUndefined), "\n \n        bytes: 4\n\n        console: ").concat(myUndefined, "\n\n\n    ")); //Variable myUndefined type: undefined bytes: 4  console: null
    console.log("\n        Variable myObject\n \n        type:  ".concat(typeof (myObject), "\n \n        bytes: 16\n\n        console: ").concat(myObject, "\n\n\n    ")); //Variable myObject type: object bytes: 16  console: [object Object]
}
function thisVar() {
    var message = 'What\'s sup net!';
    return message;
}
function thisLet() {
    var message = 'What\'s sup net!';
    return message;
}
