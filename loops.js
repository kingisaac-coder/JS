//Learning for and while loops
// A loop is a programming tool that repeats a set of instructions until a specified condition, called a stopping condition is reached

//Before using loops
let vacationSpots = ["Las Vagas", "Los Angeles", "Berlin"];
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

//After using loops
let vacationSpot = ["Bali", "Paris", "Tulum"];

for (let i = 0; i < vacationSpot.length; i++) {
  console.log("I would love to visti " + vacationSpot[i]);
}

//Nested loops
//Challenge
// Create a nested loop that iterates through bobsFollowers as the array for the outer loop and tinasFollowers as the array for the inner loop. If the current element from the outer loop is the same as the current element from the inner loop, push that element into the mutualFollowers array.

let bobsFollowers = ["Alice", "Jenna", "James", "Yuki"];
let tinasFollowers = ["Tempest", "James", "Jenna"];
let mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

const animals = ["Pig", "Slots", "Boar"];

for (i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

for (let counter = 3; counter >= 0; counter--) {
  console.log(counter);
}

//while loops

const cards = ["diamond", "spade", "heart", "club"];

// Write your code below
let currentCard = "";
while (currentCard !== "spade") {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

//Learning Do..while statements

//Syntax for a do..while statement lloks like this

let countString = "";
let i = 0;

do {
  countString = countString + i;
  i++;
} while (i < 5);

console.log(countString);

//Challenge create a program to simulate part of the cake-baking process

// Write your code below
const cupsOfSugarNeeded = 7;
let cupsAdded = 0;
do {
  cupsAdded++;
  console.log(cupsAdded + " was added to the mix");
} while (cupsAdded < cupsOfSugarNeeded);

//The break keyword
//Examples of using break
for (let i = 0; i < 99; i++) {
  if (i > 2) {
    break;
  }
  console.log("Banana.");
}

console.log("Orange you glad I broke out the loop!");

//Exercise

//Add a break inside your loop’s block that breaks out of the loop if the element at the current index in the rapperArray is 'Notorious B.I.G.'. Log the element before breaking out of the loop.

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for (let i = 0; i < rapperArray.length; i++) {
  //run through this array
  console.log(rapperArray[i]);
  if (rapperArray[2] === "Notorious B.I.G.") {
    console.log(rapperArray[2]);
    break;
  }
}
console.log("And if you don't know, now you know.");
