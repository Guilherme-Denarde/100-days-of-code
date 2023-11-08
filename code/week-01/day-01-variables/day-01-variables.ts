
let myNumber: number;
let myString: string;
let myBoolean: boolean;
let myNull: null;
let myUndefined: undefined;
let myObject: object = { key: 'value' };

myNumber = 10;
myString = 'Diego';
myBoolean = true;
myNull = null;
myUndefined = undefined;
myObject = { key: 'value'};

showData();

function showData(){
    console.log(thisVar()); //What's sup net!
    console.log(thisLet()); //What's sup net!
    console.log(`
        Variable myNumber\n 
        type:  ${typeof(myNumber)}\n 
        bytes: 8\n
        console: ${myNumber}\n\n
    `);  //Variable myNumber type: number bytes: 8  console: 10

    console.log(`
        Variable myString\n 
        type:  ${typeof(myString)}\n 
        bytes: ${new Blob([myString]).size}\n
        console: ${myString}\n\n
    `);  //Variable myString type: string bytes: 5  console: Diego
    
    console.log(`
        Variable myBoolean\n 
        type:  ${typeof(myBoolean)}\n 
        bytes: ${new Blob([JSON.stringify(myBoolean)]).size}\n
        console: ${myBoolean}\n\n
    `);  //Variable myBoolean type: boolean bytes: 4  console: true
    
    console.log(`
        Variable myNull\n 
        type:  ${typeof(myNull)}\n 
        bytes: ${new Blob([JSON.stringify(myNull)]).size}\n
        console: ${myNull}\n\n
    `);  //Variable myNull type: object bytes: 4  console: null

    console.log(`
        Variable myUndefined\n 
        type:  ${typeof(myUndefined)}\n 
        bytes: 4\n
        console: ${myUndefined}\n\n
    `);  //Variable myUndefined type: undefined bytes: 4  console: null

    console.log(`
        Variable myObject\n 
        type:  ${typeof(myObject)}\n 
        bytes: 16\n
        console: ${myObject}\n\n
    `);  //Variable myObject type: object bytes: 16  console: [object Object]
    
}

function thisVar(){
    var message = 'What\'s sup net!';
    return message;
}

function thisLet(){
    let message = 'What\'s sup net!';
    return message;
}
