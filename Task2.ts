// Scenario 1: Sum numbers
function add(num1: number, num2: number): number {
    return num1 + num2;
}

// Scenario 2: Check Even or Odd
function checkEvenOrOdd(number: number): string {
    return (number % 2 === 0) ? "Even" : "Odd";
}

// Scenario 3: Calculate Area
function calculateArea(width: number, height: number): number {
    return width * height;
}

// Scenario 4: String Reversal
function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

// Scenario 5: Temperature Conversion
function convertCelsiusToFahrenheit(celsius: number): number {
    // Formula: (Celsius * 9/5) + 32
    return (celsius * 9/5) + 32;
}

// Example usages
let sum: number = add(3, 7);
console.log("Sum:", sum);

let result: string = checkEvenOrOdd(9);
console.log("Number is:", result);

let area: number = calculateArea(5, 8);
console.log("Area:", area);

let reversed: string = reverseString("Hello, World!");
console.log("Reversed String:", reversed);

let fahrenheit: number = convertCelsiusToFahrenheit(25);
console.log("Temperature in Fahrenheit:", fahrenheit);
