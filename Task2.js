// Scenario 1: Sum numbers
function add(num1, num2) {
    return num1 + num2;
}
// Scenario 2: Check Even or Odd
function checkEvenOrOdd(number) {
    return (number % 2 === 0) ? "Even" : "Odd";
}
// Scenario 3: Calculate Area
function calculateArea(width, height) {
    return width * height;
}
// Scenario 4: String Reversal
function reverseString(str) {
    return str.split('').reverse().join('');
}
// Scenario 5: Temperature Conversion
function convertCelsiusToFahrenheit(celsius) {
    // Formula: (Celsius * 9/5) + 32
    return (celsius * 9 / 5) + 32;
}
// Example usages
let sum = add(3, 7);
console.log("Sum:", sum);
let result = checkEvenOrOdd(9);
console.log("Number is:", result);
let area = calculateArea(5, 8);
console.log("Area:", area);
let reversed = reverseString("Hello, World!");
console.log("Reversed String:", reversed);
let fahrenheit = convertCelsiusToFahrenheit(25);
console.log("Temperature in Fahrenheit:", fahrenheit);
export {};
