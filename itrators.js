//Learning how to use .map() .filter() and .forEach()

const artists = ["Picasso", "Kahlo", "Matisse", "Utamaro"];

artists.forEach((artist) => {
  console.log(artist + " is one of my favorite artists.");
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map((number) => {
  return number * number;
});

console.log(squareNumbers);

const things = ["desk", "chair", 5, "backpack", 3.14, 100];

const onlyNumbers = things.filter((thing) => {
  return typeof thing === "number";
});

console.log(onlyNumbers);

//first learning forEach()
//Iterate over the fruits array to log I want to eat a plus the name of each fruit to the console. For example, I want to eat a mango.

// You may use any form of callback you prefer.

const fruits = ["mango", "papaya", "pineapple", "apple"];

// Iterate over fruits below
fruits.forEach((fruits) => {
  console.log(`I want to eat a ${fruits}`);
});

//Learning .map()
//Add your code under the animals array and before the line console.log(secretMessage.join(''));

// Use .map() to create a new array that contains the first character of each string in the animals array. Save the new array to a const variable named secretMessage.

const Animals = [
  "Hen",
  "elephant",
  "llama",
  "leopard",
  "ostrich",
  "Whale",
  "octopus",
  "rabbit",
  "lion",
  "dog",
];

// Create the secretMessage array below
const secretMessage = Animals.map((Animal) => {
  return Animal[0];
});

console.log(secretMessage.join(""));

//Use .map() to divide all the numbers in bigNumbers by 100. Save the returned values to a variable declared with const called smallNumbers.

const bigNumbers = [100, 200, 300, 400, 500];

const smallNumber = bigNumbers.map((num) => num / 100);

// Create the smallNumbers array below
console.log(smallNumber);

//Learning the .filter() method

//examples
const words = ["chair", "music", "pillow", "brick", "pen", "door"];

const shortWords = words.filter((word) => {
  return word.length < 6;
});

//Exercise

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter((randomNumber) => {
  //return only numbers less than 250
  return randomNumber < 250;
});
console.log(smallNumbers);

const favoriteWords = [
  "nostalgia",
  "hyperbole",
  "fervent",
  "esoteric",
  "serene",
];

// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter((favoriteWord) => {
  //return only words that have the length greater than 7
  return favoriteWord.length > 7;
});
console.log(longFavoriteWords);

//Learning the .findIndex()
const animals = [
  "hippo",
  "tiger",
  "lion",
  "seal",
  "cheetah",
  "monkey",
  "salamander",
  "elephant",
];

const foundAnimal = animals.findIndex((animal) => {
  return animal === "elephant";
});
//finding index of the letter s

const startsWithS = animals.findIndex((animal) => {
  return animal[0] === "s" ? true : false;
});

//Learning The .reduce() Method

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log("The value of accumulator: ", accumulator);
  console.log("The value of currentValue: ", currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum);

//Learning Iterator Documentation
//Examples

const Words = ["unique", "uncanny", "pique", "oxymoron", "guise"];

// Something is missing in the method call below

console.log(
  Words.some((Word) => {
    return Word.length < 6;
  })
);

// Use filter to create a new array

const interestingWords = Words.filter((Word) => {
  return Word.length > 5;
});
console.log(interestingWords);

// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(
  interestingWords.every((Word) => {
    return Word.length > 5;
  })
);

///Choose the Right Iterator
const cities = [
  "Orlando",
  "Dubai",
  "Edinburgh",
  "Chennai",
  "Accra",
  "Denver",
  "Eskisehir",
  "Medellin",
  "Yokohama",
];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach((city) => console.log("Have you visited " + city + "?"));

// Choose a method that will return a new array
// an array containing multiple values and returns a single value
const longCities = cities.filter((city) => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0];
}, "C");

console.log(word);

// Choose a method that will return a new array
const smallerNums = nums.map((num) => num - 5);

// Choose a method that will return a boolean value
nums.some((num) => num < 0);
