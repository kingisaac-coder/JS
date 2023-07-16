//Higher order functions
//Learning Functions as Data
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for (let i = 1; i <= 1000000; i++) {
    if (2 + 2 != 4) {
      console.log("Something has gone very wrong :( ");
    }
  }
};

// Write your code below
//Here  we changed the name of the function useing the code below
const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;

isTwoPlusTwo();
isTwoPlusTwo.name;

//Functions as Parameters
//Callback functions get invoked during the execution of the higher-order function.

const addTwo = (num) => {
  return num + 2;
};

const checkConsistentOutput = (func, val) => {
  let checkA = val + 2;
  let checkB = func(val);
  if (checkA === checkB) {
    return func(val);
  } else {
    console.log("inconsistent results");
  }
};

console.log(checkConsistentOutput(addTwo, 2));
