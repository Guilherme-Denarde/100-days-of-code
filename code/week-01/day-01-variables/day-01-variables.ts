let myNumber: number = 10;
let myString: string = 'Diego';
let myBoolean: boolean = true;
let myNull: null = null;
let myUndefined: undefined = undefined;
let myObject: object = { key: 'value' };

function showData(): void {
    console.log(thisVar()); 
    displayTypeInfo('myNumber', myNumber);
    displayTypeInfo('myString', myString);
    displayTypeInfo('myBoolean', myBoolean);
    displayTypeInfo('myNull', myNull);
    displayTypeInfo('myUndefined', myUndefined);
    displayTypeInfo('myObject', myObject);
}

function displayTypeInfo(variableName: string, value: any): void {
    console.log(`
        Variable ${variableName}\n 
        type:  ${typeof(value)}\n 
        console: ${value}\n\n
    `);
}

function thisVar(): string {
    var message = 'What\'s sup net!';
    return message;
}

showData();
