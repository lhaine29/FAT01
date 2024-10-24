// Arrays []
let fruits = ["Apple", "Banana", "Mango", "Melon","Grapes", "Blueberry"];
console.log("Fruits:", fruits);
console.log("Legnth of Fruits:", fruits.length);

console.log("First Fruit:", fruits[0])
console.log("Third Fruit:", fruits[3])
console.log("Last Fruit:", fruits[fruits.length - 1]); //fruits.length - 1 consistent of the last item


// Update an element
fruits[2] = "Avocado"
console.log("Fruits update:", fruits);

// Add an element
// .push(element): add an element at the end
fruits.push("Strawberry");
console.log("Fruits add:", fruits);


// Delete an element 
// .pop(): delete an element at the end
fruits.pop();
console.log("Fruits delete:", fruits);

// .splice() add or delete an element at a specified index
// 1. starting index
// 2. delete count
// 3. element(s) you want to add
fruits.splice(2, 4, "Rambutan", "Lanzones", "Orange", "Dalandan")
console.log("Fruits", fruits)


//Searching element
// .includes(element): check if an element exist
console.log("Is Banana included?", fruits.includes("Banana"));

// .indexOf(element): return the index of the element or -1
console.log("Index of Lanzones:", fruits.indexOf("Lanzones"));

// .forEach(function): iterate over an array, execute a function for each element.
fruits.forEach(function (fruit) {
    console.log("Fruit:", fruit);
  });