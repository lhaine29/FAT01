// Control Flow Structures
// 1. Conditional Statements
// Conditional: if, else if, else statement
// () - Conditional Block
// {} - Code Block
let temperature = 35;
if (temperature < 0) {
  console.log("It's freezing.");
  console.log("Bring a jacket.");
} else if (temperature >= 0 && temperature < 20) {
  // Range: 0 - 20
  console.log("It's cool outside.");
  console.log("Let's go to the park.");
} else if (temperature >= 20 && temperature <= 29) {
  // Range: 20 - 29
  console.log("It's warm outside.");
  console.log("Let's get some ice cream.");
} else {
  console.log("It's hot outside.");
}

let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Its the start of the week.");
    break;
  case "Friday":
    console.log("Its the end of the weekdays.");
    break;
}

// 2. Looping Statements
// for Loop
// 1. Variables Initialization
// 2. Condition Expression
for (let i = 1; i <= 4; i++) {
  console.log("For Loop Count:", i);
}

// while loop
let count = 1;
while (count <= 3) {
  count++;
  console.log("While Loop Count:", count);
}