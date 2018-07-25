/* eslint-disable */


/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  } //for loop answer
  
  // elements.forEach(e => cb(e));  //.foreach answer not working
  // return items.forEach(item =>  alert(item) );
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
};

const map = (elements, cb) => {
  // const arrNew = [];
  // for (let i = 0; i < elements.length; i++) {
  //   arrNew[i] = cb(elements[i]);
  // }
  // return arrNew; // for loop answer

  return elements.map(e => cb(e));   //.map answer
  // Produces a new array of values by mapping each value in list through a transformation function.
  // Return the new array.
};

/* ======================== Closure Practice ============================ */
// No test needed here, just run the newCounter(); and make sure it's counting up
const counter = () => {
  let value = 0;
  return () => {
    return ++value;
  };
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
};

const limitFunctionCallCount = (cb, n) => {
  let value = 0;
  return (...args) => {
  if (value === n) return null;
  value++;
  return cb(...args);
  };
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
};

/* ======================== Prototype Practice ============================ */

// ***Prototypes do NOT have test cases built for them.  You must use the console logs provided at the end of this section.***

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. 

// Create a CuboidMaker constructor function that accepts properties for length, width, and height

// Create a seperate function property of CuboidMaker that returns the volume of a given cuboid's length, width, and height
// Formula for cuboid volume: length * width * height

// Create a seperate function property of CuboidMaker that returns the surface area of a given cuboid's length, width, and height. 
// Formula for cuboid surface area of a cube: 2(length * width + length * height + width * height)

// Create a cuboid object that inherits from CuboidMaker. 
// The cuboid object must contain keys for length, width, and height.

// To test your formulas, pass these key/value pairs into your constructor: length: 4, width: 5, and height: 5. When running your logs, you should get Volume: 100 with a Surface Area of 130. 

// function CuboidMaker(x) {
//     this.l = x.l;
//     this.w = x.w;
//     this.h = x.h;
//   }

// CuboidMaker.prototype.volume = function volume() {
//   return (this.l * this.w * this.h);
// };

// CuboidMaker.prototype.surfaceArea = function surfaceArea() {
//   return 2 * (this.l * this.w + this.l * this.h + this.w * this.h);
// };

// let cuboid = new CuboidMaker({l:4, w:5, h:5});
// Use these logs to test your results:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

/* ======================== Class Practice ============================ */

// ***Class Practice does NOT have test cases built.  You must use the console logs provided at the end of this section.***

// Task 1: Copy and paste your prototype CuboidMaker here and proceed to convert it into ES6 Class syntax
class CuboidMaker {
  constructor(x) {
    this.l = x.l;
    this.w = x.w;
    this.h = x.h;
  }
  volume() {
    return (this.l * this.w * this.h);
  }
  surfaceArea() {
    return 2 * (this.l * this.w + this.l * this.h + this.w * this.h);
  }
}

// Task 2: Create a new class called Cube. Extend the Cube class with the CuboidMaker class.
class Cube extends CuboidMaker {
  constructor(x){
    super(x);
  }
  volume() {
    return (this.l * this.w * this.h);
  }
  surfaceArea() {
    return 6 * (this.l * this.w);
  }
  checkIfCube() {
    return (this.l === this.w && this.w === this.h) ? 'We have a cube!' : 'Not a cube';
  }
}
// Create two new methods on the Cube class to calculate the volume and surface area of a cube given the same values passed in from CuboidMaker.

// The volume of a cube is: length * width * height
// The surface area of a cube is: 6 * (length + width)

// Create a new cube object that has equal values for length, width, and height 
const cube = new Cube ({l:2, w:2, h:2});
let cuboid = new CuboidMaker({l:4, w:5, h:5});

// To test your formulas, pass these key/value pairs into your constructor: length: 2, width: 2, and height: 2. You should get Volume: 8 with a Surface Area of 24. 

// Use these logs to test your results:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130
// console.log(cube.volume()); // 8
// console.log(cube.surfaceArea()); // 24

/* ======================== Stretch Challenges ============================ */


// Challenge 1: Go back to your prototype CuboidMaker and extend Cube using psuedo-classical inheritance to achiveve the same results you built using the ES6 class syntax

// Use these logs to test your results:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
console.log(cube.volume()); // 8
console.log(cube.surfaceArea()); // 24

// Challenge 2: Go back to your class Cube and add the following property: isCube.
// Create a method inside of Cube that checks for isCube and if it's true, returns a string 'We have a cube!';

// Use these logs to test your results:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
console.log(cube.volume()); // 8
console.log(cube.surfaceArea()); // 24
console.log(cube.checkIfCube());  // "We have a cube!"

// Challenge 3: Recursion
const checkMatchingLeaves = obj => {
  // return true if every property on `obj` is the same
  // otherwise return false
};


module.exports = {
  each,
  map,
  limitFunctionCallCount,
  checkMatchingLeaves,
};
