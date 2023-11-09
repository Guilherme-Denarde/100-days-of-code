"use strict";
let myNumber = 10;
let myString = 'Diego';
let myBoolean = true;
let myNull = null;
let myUndefined = undefined;
let myObject = { key: 'value' };
function showData() {
    console.log(thisVar());
    displayTypeInfo('myNumber', myNumber);
    displayTypeInfo('myString', myString);
    displayTypeInfo('myBoolean', myBoolean);
    displayTypeInfo('myNull', myNull);
    displayTypeInfo('myUndefined', myUndefined);
    displayTypeInfo('myObject', myObject);
}
function displayTypeInfo(variableName, value) {
    console.log(`
        Variable ${variableName}\n 
        type:  ${typeof (value)}\n 
        console: ${value}\n\n
    `);
}
function thisVar() {
    var message = 'What\'s sup net!';
    return message;
}
showData();
//# sourceMappingURL=day-01-variables.js.map