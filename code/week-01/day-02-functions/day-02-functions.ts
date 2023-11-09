// Function Types with type annotations for parameters and return type
function add(x: number, y: number): number {
    return x + y;
}

// Optional Parameters: lastName is optional
function buildName(firstName: string, lastName?: string): string {
    if (lastName) return `${firstName} ${lastName}`;
    else return firstName;
}

// Default Parameters
function applyDiscount(price: number, discount: number = 0.05): number {
    return price * (1 - discount);
}

// Rest Parameters
function buildSentence(...words: string[]): string {
    return words.join(' ');
}

// Arrow Functions
const greet = (name: string): string => `Hello, ${name}!`;

// Function Overloading
function getItems(n: number): number[];
function getItems(s: string): string[];
function getItems(arg: any): any[] {
    if (typeof arg === "number") {
        return new Array(arg).fill(0);
    } else if (typeof arg === "string") {
        return new Array(arg.length).fill("item");
    }
    return [];
}

// Generics in Functions 
function firstElement<Type>(arr: Type[]): Type | undefined {
    return arr[0];
}

// Async/Await: Mocking a delay to simulate async behavior
function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function asyncFunction(): Promise<string> {
    await delay(1000); // wait for 1 second
    return "Async Function Completed";
}

console.log(add(10, 5)); // Output: 15
console.log(buildName("John", "Doe")); // Output: "John Doe"
console.log(buildName("John")); // Output: "John"
console.log(applyDiscount(100)); // Output: 95
console.log(buildSentence("Hello", "World", "!")); // Output: "Hello World !"
console.log(greet("Jane")); // Output: "Hello, Jane!"
console.log(getItems(3)); // Output: [0, 0, 0]
console.log(getItems("test")); // Output: ["item", "item", "item", "item"]
console.log(firstElement([1, 2, 3])); // Output: 1
asyncFunction().then(console.log); // Output after 1 second: "Async Function Completed"
