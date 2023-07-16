//Destructured Assignment
//Use destructured assignment to create a const variable named functionality that extracts the functionality property of robot.
const robot = {
  model: "1E78V2",
  energyLevel: 100,
  functionality: {
    beep() {
      console.log("Beep Boop");
    },
    fireLaser() {
      console.log("Pew Pew");
    },
  },
};

const { functionality } = robot;
functionality.beep();
