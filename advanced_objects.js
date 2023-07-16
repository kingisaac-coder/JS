const robot = {
  //adding and assigning it to properties
  model: "1E78V2",
  energyLevel: 100,
  provideInfo() {
    //returning a string and changing the objects with the this keyword
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
  },
}; //logging the results to the console
console.log(robot.provideInfo());

// const robot = {
//   energyLevel: 100,
//   checkEnergy() {
//     console.log(`Energy is currently at ${this.energyLevel}%.`);
//   },
// };

// robot.checkEnergy();
