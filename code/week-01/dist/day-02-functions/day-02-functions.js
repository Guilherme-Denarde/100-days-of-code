"use strict";
function add(x, y) {
    return x + y;
}
function buildName(firstName, lastName) {
    if (lastName)
        return `${firstName} ${lastName}`;
    else
        return firstName;
}
function applyDiscount(price, discount = 0.05) {
    return price * (1 - discount);
}
function buildSentence(...words) {
    return words.join(' ');
}
const greet = (name) => `Hello, ${name}!`;
function getItems(arg) {
    if (typeof arg === "number") {
        return new Array(arg).fill(0);
    }
    else if (typeof arg === "string") {
        return new Array(arg.length).fill("item");
    }
    return [];
}
function firstElement(arr) {
    return arr[0];
}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function asyncFunction() {
    await delay(1000);
    return "Async Function Completed";
}
console.log(add(10, 5));
console.log(buildName("John", "Doe"));
console.log(buildName("John"));
console.log(applyDiscount(100));
console.log(buildSentence("Hello", "World", "!"));
console.log(greet("Jane"));
console.log(getItems(3));
console.log(getItems("test"));
console.log(firstElement([1, 2, 3]));
asyncFunction().then(console.log);
//# sourceMappingURL=day-02-functions.js.map