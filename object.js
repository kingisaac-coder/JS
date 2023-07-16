// Write your fasterShip object literal below
let fasterShip = {
  "Fuel Type": "Turbo Fuel",
  color: "silver",
};

//Accesing Properties

//Instructions
//Let’s use the dot operator to access the value of numCrew from the spaceship object in the code editor. Create a variable crewCount and assign the spaceship‘s numCrew property to it.
// Again using the dot operator, create a variable planetArray and assign the spaceship‘s flightPath property to it.

let spaceship = {
  homePlanet: "Earth",
  color: "silver",
  "Fuel Type": "Turbo Fuel",
  numCrew: 5,
  flightPath: ["Venus", "Mars", "Saturn"],
};

// Write your code below
const crewCount = spaceship.numCrew;
const planetArray = spaceship.flightPath;

//Bracket Notation

//We must use bracket notation when accessing keys that have numbers, spaces, or special characters in them. Without bracket notation in these situations, our code would throw an error.

//Instructions
//Let’s use bracket notation to access the value of 'Active Mission' from the spaceship object in the code editor. Create a variable isActive and assign the spaceship‘s 'Active Mission' property to it.

let spaceShip = {
  "Fuel Type": "Turbo Fuel",
  "Active Mission": true,
  homePlanet: "Earth",
  numCrew: 5,
};

let propName = "Active Mission";

// Write your code below
const isActive = spaceShip["Active Mission"];
console.log(spaceShip[propName]);

//Property Assignment
let spaceships = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
  color: "silver",
  "Secret Mission": "Discover life outside of Earth.",
};

// Write your code below
//Reassigning the color to a new color
spaceships["glorious gold"] = "glorious gold";
spaceships.color = "glorious gold";
//adding the property numEngines
spaceships[7] = 7;
spaceships.numEngines = 7;
//deleting the property fromm the object
delete spaceships["Secret Mission"];

//Object Methods

let retreatMessage =
  "We no longer wish to conquer your planet. It is full of dogs, which we do not care for.";

// Write your code below
let alienShip = {
  retreat() {
    console.log(
      "We no longer wish to conquer your planet. It is full of dogs, which we do not care for."
    );
  },
  takeOff() {
    console.log("Spim... Borp... Glix... Blastoff!");
  },
};
//Invoking our object methods
alienShip.retreat();
alienShip.takeOff();

//Nested Objects
//examples
// const spaceship = {
//      telescope: {
//         yearBuilt: 2018,
//         model: '91031-XLT',
//         focalLength: 2032
//      },
//     crew: {
//         captain: {
//             name: 'Sandra',
//             degree: 'Computer Engineering',
//             encourageTeam() { console.log('We got this!') }
//          }
//     },
//     engine: {
//         model: 'Nimbus2000'
//      },
//      nanoelectronics: {
//          computer: {
//             terabytes: 100,
//             monitors: 'HD'
//          },
//         'back-up': {
//            battery: 'Lithium',
//            terabytes: 50
//          }
//     }
// };

let Spaceship = {
  passengers: [{ name: "Sally" }],
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032,
  },
  crew: {
    captain: {
      name: "Sandra",
      degree: "Computer Engineering",
      encourageTeam() {
        console.log("We got this!");
      },
      "favorite foods": ["cookies", "cakes", "candy", "spinach"],
    },
  },
  engine: {
    model: "Nimbus2000",
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD",
    },
    "back-up": {
      battery: "Lithium",
      terabytes: 50,
    },
  },
};

//Creating a variable and assigning it to the 0th index of the capFaorite food
const capFave = Spaceship.crew.captain["favorite foods"][0];

const firstPassenger = Spaceship.passengers[0];

//Pass By Reference

// let spaceship = {
//   "Fuel Type": "Turbo Fuel",
//   homePlanet: "Earth",
// };

// // Write your code below
// let greenEnergy = (newObject) => {
//   newObject["Fuel Type"] = "avocado oil";
// };

// let remotelyDisable = (disabledObj) => {
//   disabledObj.disabled = true;
// };
// greenEnergy(spaceship);
// remotelyDisable(spaceship);
// console.log(spaceship);

//Looping through objects

// let spaceship = {
//   crew: {
//     captain: {
//       name: "Lily",
//       degree: "Computer Engineering",
//       cheerTeam() {
//         console.log("You got this!");
//       },
//     },
//     "chief officer": {
//       name: "Dan",
//       degree: "Aerospace Engineering",
//       agree() {
//         console.log("I agree, captain!");
//       },
//     },
//     medic: {
//       name: "Clementine",
//       degree: "Physics",
//       announce() {
//         console.log(`Jets on!`);
//       },
//     },
//     translator: {
//       name: "Shauna",
//       degree: "Conservation Science",
//       powerFuel() {
//         console.log("The tank is full!");
//       },
//     },
//   },
// };

// // Write your code below

// for (let crewMember in spaceship.crew) {
//   console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
// }

// for (let crewMember in spaceship.crew) {
//   console.log(
//     `${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`
//   );
// }
