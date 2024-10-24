// Operators and Expressions

//Arithmetic Operators
let num1 = 10;
let num2 = 5;

console.log("Addition (+):", num1 + num2);
console.log("Subtraction (-):", num1 - num2);
console.log("Multiply (*):", num1 * num2);
console.log("Divide (/):", num1 / num2);
console.log("Exponent (**):", num1 ** num2);
console.log("Remainder (%):", num1 % 6);

// Order of Operations
let answer = 3 + (4 * (5 - 2) ** 2) / 2;
console.log("Answer:", answer);


// 2. String Expression or Concatenation
let greeting = "Hi"
let firstName = "John"
console.log(greeting + " " + firstName);

// 3. Comparison Operators
// Type coercion: converts the data type if necessary
// Equal to (==): Check if two values are equal
console.log("Equal to (==):", 5 == 5);
console.log("Equal to (==):", num1 == num2);
console.log("Equal to with type coercion(==):", 5 == "5");

// Not Equal to (!=): Check if two values are not equal
console.log("Not Equal to (!=):", 5 != 5);
console.log("Not Equal to (!=):", num1 != num2);
console.log("Not Equal to with type coercion(!=):", 5 != "5");

// Strict Equal to (===): Check if two values are equal in value and in data type
console.log("Strict Equal to (===):", 5 === 5);
console.log("Strict Equal to (===):", num1 === num2);
console.log("Strict Equal to with type coercion(===):", 5 === "5");

// Strict Not Equal to (!==): Check if two values are not equal in value and in data type
console.log("Strict Not Equal to (!==):", 5 !== 5);
console.log("Strict Not Equal to (!==):", num1 !== num2);
console.log("Strict Not Equal to with type coercion(!==):", 5 !== "5");

console.log("Greater than(>):", 5 > 3);
console.log("less than(<):", 5 < 3);
console.log("Greater than or Equal to (>=):", 5 >= 3);
console.log("Greater than or Equal to (>=):", 5 >= 5);
console.log("less than or Equal to (<=):", 5 <= 3);

// Logical Operators
// AND -&& 
// OR - ||
// NOT - !

let sunny = true;
let warm = false;

// AND: true if both boolean variables is true, otherwise false
console.log("Is it sunny AND warm?", sunny && warm);
// OR: true if at least one of your variables is true, otherwise false
console.log("Is it sunny OR warm?", sunny || warm);
// NOT: invert the value of boolean
console.log("NOT sunny", !sunny);

// 5. Assignment Expression
// Assigning a value to a variable 

let num3= 10;
let num4 = 5;

// Addition Assignment(+=)
num3 += num4;
console.log("The new value of num3 is",num3);
// Computation: 10 + 5 = 15

// Subtraction Assignment(-=)
num3 -= num4;
console.log("The new value of num3 is",num3);
// Computation: 15 - 5 = 10

// Multiplication Assignment (*=)
num3 *= num4;
console.log("The new value of num3:", num3);
// Computation: 10 * 5 = 50

// Division Assignment (/=)
num3 /= num4;
console.log("The new value of num3:", num3);
// Computation: 50 / 5 = 10

// Exponent Assignment (**=)
num3 **= num4;
console.log("The new value of num3:", num3);
// Computation: 10 ** 5 = 100000

// Remainder Assignment (%=)
num3 %= num4;
console.log("The new value of num3:", num3);
// Computation: 100000 % 5 = 0

// Get the percentage of a number
let number = 1000;
let percentage = 0.25;
console.log("25% of 1000:", number * percentage);