// 1. Traditional for loop
console.log('Traditional for loop:');
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

// 2. for...of loop (iterating over iterable objects like arrays)
console.log('\nfor...of loop:');
const array = ['a', 'b', 'c', 'd'];
for (const element of array) {
    console.log(element); // a, b, c, d
}

// 3. for...in loop (iterating over the properties of an object)
console.log('\nfor...in loop:');
const obj: { [key: string]: number } = { a: 1, b: 2, c: 3 };
for (const key in obj) {
    if (obj.hasOwnProperty(key)) { // This check is important to filter out properties from the prototype
        console.log(key + ': ' + obj[key]); // a: 1, b: 2, c: 3
    }
}

// 4. forEach loop (Array method, not exactly a 'for' loop, but similar in function)
console.log('\nforEach loop:');
array.forEach((element, index) => {
    console.log(index + ' - ' + element); // 0 - a, 1 - b, 2 - c, 3 - d
});
