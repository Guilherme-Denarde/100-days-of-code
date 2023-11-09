"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
function asyncFunction() {
    return __awaiter(this, void 0, void 0, function* () {
        yield delay(1000);
        return "Async Function Completed";
    });
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