let bestSinger = "Lil Baby";

if (bestSinger === "The Kid LaROI") {
  console.log("Kid LaROI is good");
} else if (bestSinger === "Hotbooi") {
  console.log("i dont know hot boy");
} else {
  console.log("Lil baby is the only Goat");
}

let day = "Sunday";

if (day === "Saturday") {
  console.log("Its Weekend, Time to enjoy");
} else if (day == "Thursday") {
  console.log("Its's not weekend, it's time for work");
} else {
  console.log("Invalid");
}

if (day === "Friday" || day === "Saturday" || day === "Sunday") {
  console.log("It's weekend enjoy your self");
} else {
  console.log("it's not weekend time to go to work");
}

let time = 8;
let mood = "Sleepy";

if (mood === "Sleepy" && time >= 8) {
  console.log("It's bed time");
} else {
  console.log("It's not yet time for bed");
}

let tool = "marker";

let writingUtensils = tool || "pen";

console.log(`The ${writingUtensils} is better than a sword`);

const isNightTime = true;

isNightTime
  ? console.log("Turn off the lights")
  : console.log("Turn on the lights");

const doorIsLocked = true;

doorIsLocked
  ? console.log("We are now safe")
  : console.log("We need to lock this door");

const lockedDoor = "";

if (lockedDoor === true) {
  console.log("We are now safe");
} else if (lockedDoor === false) {
  console.log("we are not safe");
} else {
  console.log("We need to lock the door");
}

let cashAtHand = 700;

if (cashAtHand >= 400) {
  console.log("I have a little money to spare");
} else if (cashAtHand <= 300) {
  console.log("I have no money to spare");
} else {
  console.log("I need money now ");
}

let totalAmount = 400;

if (totalAmount > 300) {
  console.log("We go to buy food at cravings");
} else if (totalAmount <= 150) {
  console.log("We cannot buy food at cravings");
} else {
  console.log("We are too broke to get the food");
}

let season = "";

if (season === "spring") {
  console.log("It's spring! The trees are budding!");
} else if (season === "winter") {
  console.log("It's winter! Everything is covered in snow.");
} else if (season === "fall") {
  console.log("It's fall! Leaves are falling!");
} else if (season === "summer") {
  console.log("It's sunny and warm because it's summer!");
} else {
  console.log("Invalid season.");
}

// Converting normal Js operations to Tenary operations

// Normal code
if (walkingSign === "Walk") {
  console.log("You may walk!");
} else {
  console.log("Do not walk!");
}
// converted to Tenary operation

walkingSign === "Walk"
  ? console.log("You may walk!")
  : console.log("Do not walk!");

// Learning Functions
function getReminder() {
  console.log("Water the plants.");
}
function greetInSpanish() {
  console.log("Buenas tardes.");
}

// Let's create a function for saying thank you to ever customer

function sayThanks() {
  console.log("Thank you for your purchase! We appreciate your business.");
}

// we can call a function as many times as we need them
sayThanks();
sayThanks();
sayThanks();

// Executing tasks with the functions
function sayThanks(name) {
  console.log(
    "Thank you for your purchase " + name + "! We appreciate your business."
  );
}

sayThanks("Cole");

// Default Parameters

function greeting(name = "stranger") {
  console.log(`Hello, ${name}!`);
}

greeting("Nick"); // Output: Hello, Nick!
greeting(); // Output: Hello, stranger!

// In the example above, we used the = operator to assign the parameter name a default value of 'stranger'. This is useful to have in case we ever want to include a non-personalized default greeting!

// When the code calls greeting('Nick') the value of the argument is passed in and, 'Nick', will override the default parameter of 'stranger' to log 'Hello, Nick!' to the console.

// When there isn’t an argument passed into greeting(), the default value of 'stranger' is used, and 'Hello, stranger!' is logged to the console.

// Exercise
// Imagine that you always purchase milk, bread, and eggs every time you go shopping for groceries. To make creating a grocery list easier, let’s assign default values to the parameters in makeShoppingList()

function makeShoppingList(item1 = "milk", item2 = "bread", item3 = "eggs") {
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
makeShoppingList();

// Functions
// Return

function rectangleArea(width, height) {
  if (width < 0 || height < 0) {
    return "You need positive integers to calculate area!";
  }
  return width * height;
}

// Creating a function to help calculate the number of monitors
function monitorCount(rows, columns) {
  return rows * columns;
}
const numOfMonitors = monitorCount(15, 10);
console.log(numOfMonitors);

// Helper Functions
function multiplyByNineFifths(number) {
  return number * (9 / 5);
}

function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
}

getFahrenheit(15); // Returns 59
// More examples on Helper functions

function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);

console.log(totalCost);

// Functions Expressions

// Creating a watering plant routine

const plantNeedsWater = function (day) {
  if (day === "Wednesday") {
    return true;
  } else if (day != "Wednesday") {
    return false;
  }
};
plantNeedsWater("Tuesday");
console.log(plantNeedsWater("Tuesday"));

// Concise Body Arrow Functions

// const plantNeedsWater = day =>
//   day === 'Wednesday' ? true : false;

// Learning scope

//Block and Scope

//example of block
const logSkyColor = () => {
  let color = "blue";
  console.log(color); // blue
};

const city = "New York City";

//The function is able to access both variables without any problems outside of the block
function logCitySkyline() {
  let skyscraper = "Empire State Building";
  return "The stars over the " + skyscraper + " in " + city;
}
console.log(logCitySkyline());

//Working on global variable

// const satellite = "The Moon";
// const galaxy = "The Milky Way";
// const stars = "North Star";

// function callMyNightSky() {
//   return "Night Sky: " + satellite + ", " + stars + ", and " + galaxy;
// }
// console.log(callMyNightSky());

//Working on block scope

// const logSkyColor = () => {
//   let color = 'blue';
//   console.log(color); // Prints "blue"
// };

// logSkyColor(); // Prints "blue"
// console.log(color); // throws a ReferenceError

//More examples on block scope

function logVisibleLightWaves() {
  const lightWaves = "Moonlight";
  console.log(lightWaves);
}
logVisibleLightWaves();
console.log(lightWaves);
// When we log the variable lightWaves again it returns RefrenceError to the console because the variable has already been defined by calling out the function

//Now we learn Scope Pollution

const satellite = "The Moon";
const galaxy = "The Milky Way";
let stars = "North Star";

const callMyNightSky = () => {
  stars = "Sirius"; //prints Sirius as a result of Scope pollution
  return "Night Sky: " + satellite + ", " + stars + ", " + galaxy;
};

console.log(callMyNightSky());
console.log(stars);

//Learning the proper way to scope
const logVisibleLightWaves = () => {
  let lightWaves = "Moonlight";
  let region = "The Arctic";
  // Add if statement here:
  if (region === "The Arctic") {
    let lightWaves = "Northern Lights";
    console.log(lightWaves);
  } else {
    console.log("Invalid");
  }
  console.log(lightWaves);
};

logVisibleLightWaves();

//Learning Arrays

const hobbies = ["Coding", "Watchinf Films", "And being alone "];
console.log(hobbies);

//Accessing Elements next lesson in Arrays

const famousSayings = [
  "Fortune favors the brave.",
  "A joke is a very serious thing.",
  "Where there is love there is life.",
];

const listItem = famousSayings[0];
// when accessing an Index thats beyond the amount of index there is it logs undefined
console.log(famousSayings[3]);

//Now we learn about updating elements in Arrays

let prettyGirls = ["Rias", "Soma", "Asia"];

prettyGirls[1] = "Akeno";
console.log(prettyGirls);

//Now learning Arrays with let and const

let condiments = ["Ketchup", "Mustard", "Soy Sauce", "Sriracha"];
condiments[0] = "Mayo";
console.log(condiments);
//Notice that you can re-assign elements in an array and re-assign an entire new array to a variable declared using the let keyword
condiments = ["Mayo"];
console.log(condiments);

const utensils = ["Fork", "Knife", "Chopsticks", "Spork"];
utensils[3] = "Spoon";
console.log(utensils);

let goodDrinks = ["Fanta", "Cola", "Wines"];
goodDrinks[2] = "Fruit Juice";
goodDrinks = "Fruit Juice";
console.log(goodDrinks);
//We'll notice it logges the two variable called Fruit Juice

//Learning the .length to use with Arrays
//Examples

const newYearsResolutions = ["Keep a journal", "Take a falconry class"];

console.log(newYearsResolutions.length);
// Output: 2

const objectives = [
  "Learn Hacking",
  "Be the best hacker",
  "Participate in hackatons",
  ",earn and become the best of the best",
  "Get a great job and earn millions",
  "Find a nice red hair girl to get married to.",
];

console.log(objectives);

//Now learning the .push() method in arrays
// These methods are specifically called on arrays to make common tasks, like adding and removing elements, more straightforward.

//Examples

const itemTracker = ["item 0", "item 1", "item 2"];

itemTracker.push("item 3", "item 4");

console.log(itemTracker);
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];

// Another example
const chores = ["wash dishes", "do laundry", "take out trash"];

chores.push("Wash the toilets", "Daily sleep Routine", "sleep befor 8pm");
console.log(chores);

// .push() allows to add to an arrays while .length helps to find out the number of indexs used and .pop(helps in subtracting from an array)

//Learning the .pop() method
//Another array method, .pop(), removes the last item of an array.

const newItemTracker = ["item 0", "item 1", "item 2"];

const removed = newItemTracker.pop();

console.log(newItemTracker);
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2

const choress = [
  "wash dishes",
  "do laundry",
  "take out trash",
  "cook dinner",
  "mop floor",
];
chores.pop();
console.log(choress);

//JavaScript developers include: .join(), .slice(), .splice(), .shift(), .unshift(), and .concat()

// more  array functions to use are
// Arrays
// .concat()
// Merges, or concatenates, two or more arrays.
// .copyWithin()
// Returns a mutated array with part of it copied to another location in the same array, and its length unchanged.
// .filter()
// Creates a new array with all elements that pass the test from the provided function.
// .find()
// Returns the first element in the array that satisfies the given function.
// .findIndex()
// Returns the first index that passes the callback function's test. Returns -1 if no element passes the test.
// .forEach()
// Loops over the array, passing each item in the array into the callback function provided.
// .includes()
// Returns true if a given value is included in an array.
// .indexOf()
// Returns the first index at which an element can be found. Returns -1 if element is not found.
// .isArray()
// Returns true for arrays, otherwise false.
// .join()
// Elements of an array are converted to strings and concatenated together, returning the resulting string.
// .lastIndexOf()
// Returns the last index at which an element can be found. Returns -1 if element is not found.
// .length
// Returns the specific number of elements in the array.
// .map()
// Creates a new array with the results of calling a function for every element in array.
// .pop()
// Removes the last element of an array, decrements the array length, and returns the value that it removed.
// .push()
// Adds one or more elements to the end of the array and returns the new length.
// .reduce()
// Combines each element of an array, using a specified reducer function, and returns a single value.
// .reverse()
// Reverses the order of the elements of an array in place and returns the reversed array.
// .shift()
// Removes and returns the first element of the array. All subsequent elements will shift down one place.
// .slice()
// Returns a shallow copy of part of array, while original array is not modified.
// .sort()
// Returns an array with its items sorted in place.
// .splice()
// Modifies an array by inserting, deleting, and/or replacing array elements then returns an array of deleted elements.
// .toString()
// Returns a string with each of the array values, separated by commas. Does not mutate the original array.
// .unshift()
// Adds one or more elements to beginning of array and returns new length.
// .valueOf()
// Returns the value of all the elements of the original array.

// Examples

const groceryList = [
  "orange juice",
  "bananas",
  "coffee beans",
  "brown rice",
  "pasta",
  "coconut oil",
  "plantains",
];
groceryList.shift();

console.log(groceryList);

groceryList.unshift("popcorn");

console.log(groceryList.slice(1, 4));
console.log(groceryList);

const pastaIndex = groceryList.indexOf("pasta");
console.log(pastaIndex);

//Learning Arrays and Functions
//Examples

const flowers = ["peony", "daffodil", "marigold"];

function addFlower(arr) {
  arr.push("lily");
}

addFlower(flowers);

console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']

//Learning examples

const concept = ["arrays", "can", "be", "mutated"];

function changeArr(arr) {
  arr[3] = "MUTATED";
}

changeArr(concept);
console.log(concept);

function removeElement(newArr) {
  newArr.pop();
}
removeElement(concept);
console.log(concept);
//The value of concept prints arrays can be that means that we successfully removed the 'mutated' with the other function.

//Learning Nested Arrays
const numberClusters = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const target = numberClusters[2][1];
// TO get the number 6 from the index you must first identify the index then write the index like so [1] and then the index inside the array you are looking for like
so[2][0];
console.log(target);
