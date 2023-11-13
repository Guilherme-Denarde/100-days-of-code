"use strict";
console.log('Traditional for loop:');
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log('\nfor...of loop:');
const array = ['a', 'b', 'c', 'd'];
for (const element of array) {
    console.log(element);
}
console.log('\nfor...in loop:');
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log(key + ': ' + obj[key]);
    }
}
console.log('\nforEach loop:');
array.forEach((element, index) => {
    console.log(index + ' - ' + element);
});
//# sourceMappingURL=day-04-for-loops.js.map