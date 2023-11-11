# Day 3 - Palindrome Checker

## Palindrome in TypeScript
str.replace(/[\W_]/g, ''): Removes all non-alphanumeric characters using a regular expression.

.toLowerCase(): Converts the string to lowercase to ensure case-insensitivity.

cleaned.split(''): Splits the cleaned string into an array of characters.

.reverse(): Reverses the array.

.join(''): Joins the reversed array back into a string.
The final string is compared to the cleaned str and return true or false.