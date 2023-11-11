// palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward
// php is palindrome
// python isn't palindrome

function isPalindrome(str: string): boolean {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleaned = str.replace(/[\W_]/g, '').toLowerCase();

    // Compare the cleaned string with its reverse
    return cleaned == cleaned.split('').reverse().join('');
}


const name1:string = "Racecar";
const name2:string = "Edgar";
console.log(isPalindrome(name1)); // true
console.log(isPalindrome(name2)); // false
