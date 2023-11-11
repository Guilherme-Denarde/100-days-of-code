"use strict";
function isPalindrome(str) {
    const cleaned = str.replace(/[\W_]/g, '').toLowerCase();
    return cleaned == cleaned.split('').reverse().join('');
}
const name1 = "Racecar";
const name2 = "Edgar";
console.log(isPalindrome(name1));
console.log(isPalindrome(name2));
//# sourceMappingURL=day-03-palindrome.js.map