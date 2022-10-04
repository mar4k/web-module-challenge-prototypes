// 👇 COMPLETE YOUR WORK BELOW 👇
/* ❗❗ NOTE: PLEASE USE INDIVIDUAL KEYS FOR YOUR CONSTRUCTOR PARAMETERS, NOT OBJECTS. THE TESTS WILL NOT PASS WITH OBJECTS. ❗❗  */

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + .eat() should recieve a string as a parameter and take some type of edible as an argument
        + When eating an edible, it should be pushed into the `stomach` array.
        + The `eat` method should have no effect if there are 10 items in the `stomach` array.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` array should be empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

// class Person{
//   constructor(name, age){
//     this.name = name;
//     this.age = age;
//     this.stomach = [];
//   }
//   eat(edible){
//     if(this.stomach.length < 10){
//       this.stomach.push(edible);
//     }
//   }
//   poop(){
//     this.stomach = [];
//   }
//   toString(){
//     return `${this.name}, ${this.age}`
//   }
// }

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function(edible){
  if(this.stomach.length < 10){
    this.stomach.push(edible)
  }
}

Person.prototype.poop = function(edible){
  this.stomach = [];
}
Person.prototype.toString = function(name, age){
  return (`${this.name}, ${this.age}`)
}

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method
      + should take 'gallons' as an parameter which will take number of gallons as an argument
      + should add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon){
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function(gallons){
  this.tank = this.tank + gallons
}

Car.prototype.drive = function(distance){
  this.odometer = this.odometer + distance
  this.tank = this.tank - (distance / this.milesPerGallon)
  return (`I ran out of fuel at ${this.odometer} miles!`)
}























// class Car{
//   constructor(model, mpg){
//   this.model = model;
//   this.milesPerGallon = mpg;
//   this.tank = 0;
//   this.odometer = 0;
//   }
//   fill(gallons){
//     this.tank = this.tank + gallons
//   }
//   drive(dist){
//     const drivableMiles = this.tank * this.milePerGallon
//     if(dist < this.drivablemiles){
//       this.odometer = this.odomter + distance;
//       this.tank = this.tank - (distance / this.milesPerGallon);
//     } else {
//       this.odometer = this.odometer + drivableMiles;
//       this.tank = 0;
//       return `I ran out of fuel at ${this.odometer} miles!`
//     }
//   }
// }


/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies also have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/




class Baby extends Person{
  constructor(name, age, favoriteToy){
  super();
  this.name = name;
  this.age = age;
  this.favoriteToy = favoriteToy;
  }
  // play(favoriteToy){
  //   return (`Playing with ${favoriteToy}`)
  // };
}

Baby.prototype.play = function(){
  return (`Playing with ${this.favoriteToy}`)
}





/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  
  The four this principles are the four things this can represent in javascript code. It can stand for:
  1. The global object i.e. javascript itself
  2. the object before the dot when a function is called in conjuntion with an object
  3. the relevant object created, if "this" is used in a creator function
  4. when using .apply or .call to call a constructor function on [a] constructor object[s]
*/

///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}
