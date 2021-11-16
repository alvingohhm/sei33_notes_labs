"use strict";
/////////////////////////////////////////////////////////////
//Creating Classes
/////////////////////////////////////////////////////////////
/*
Hamster
attributes:
  owner - string, initially set as an empty string
  name - string, set the name from parameter in constructor method
  price - integer, set as 15
methods:
  wheelRun() - log "squeak squeak"
  eatFood() - log "nibble nibble"
  getPrice() - return the price
*/

class Hamster {
  constructor(name) {
    this.owner = "";
    this.name = name;
    this.price = 15;
  }

  wheelRun() {
    console.log("squeak squeak");
  }

  eatFood() {
    console.log("nibble nibble");
  }

  getPrice() {
    return this.price;
  }

  setOwner(owner) {
    this.owner = owner;
  }
}
// const newHam = new Hamster("tom");
// console.log(newHam);

/*
Person
attributes:
  name - set name from parameter in constructor method
  age - initially 0
  height - initially 0
  weight - initially 0
  mood - integer starting at 0 initially
  hamsters - empty array initially
  bankAccount - initially set to 0
methods:
  getName() - returns name
  getAge() - returns age
  getWeight() - returns weight
  greet() - logs a message with person's name
  eat() - increment weight, increment mood
  exercise() - decrement weight
  ageUp() - increment age, increment height, increment weight, decrement mood, increment bank account by 10 (birthday money)
  buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())
*/

class Person {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamster = [];
    this.bankAccount = 0;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  getWeight() {
    return this.weight;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }

  eat(noOfTimes = 1) {
    for (let i = 1; i <= noOfTimes; i++) {
      this.weight++;
      this.mood++;
    }
  }

  exercise(noOfTimes = 1) {
    for (let i = 1; i <= noOfTimes; i++) {
      this.weight--;
    }
  }

  ageUp(noOfYrs = 1) {
    for (let i = 1; i <= noOfYrs; i++) {
      this.age++;
      this.height++;
      this.weight++;
      this.mood--;
      this.bankAccount += 10;
    }
  }

  buyHamster(hamster) {
    this.hamster.push(hamster);
    this.mood += 10;
    this.bankAccount -= hamster.getPrice();
  }
}

// const tom = new Person("tom");
// console.log(tom.age, tom.height, tom.mood, tom.bankAccount);
// tom.ageUp();
// console.log(tom.age, tom.height, tom.mood, tom.bankAccount);
// tom.ageUp();
// console.log(tom.age, tom.height, tom.mood, tom.bankAccount);
// tom.buyHamster(new Hamster("alice"));
// console.log(tom.age, tom.height, tom.mood, tom.bankAccount);
// console.log(tom.hamster);

/////////////////////////////////////////////////////////////
//Create a Story with your Person class
/////////////////////////////////////////////////////////////
// 1. Instantiate a new Person named Timmy
const timmy = new Person("Timmy");
// 2. Age Timmy five years
timmy.ageUp(5);
// console.log(timmy.age, timmy.height, timmy.weight, timmy.mood, timmy.bankAccount);

// 3. At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
timmy.eat(5);
// console.log(timmy.age, timmy.height, timmy.weight, timmy.mood, timmy.bankAccount);

// 4. Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
timmy.exercise(5);
// console.log(timmy.age, timmy.height, timmy.weight, timmy.mood, timmy.bankAccount);

// 5. Age Timmy 9 years
timmy.ageUp(9);
// console.log(timmy.age, timmy.height, timmy.weight, timmy.mood, timmy.bankAccount);

// 6. Create a hamster named "Gus"
const gus = new Hamster("Gus");

// 7. Set Gus's owner to the string "Timmy"
gus.setOwner("Timmy");
// console.log(gus.owner);

// 8. Have Timmy "buy" Gus
timmy.buyHamster(gus);
// console.log(timmy.hamster);
// console.log(timmy.age, timmy.height, timmy.weight, timmy.mood, timmy.bankAccount);

// 9. Age Timmy 15 years
timmy.ageUp(15);
// console.log(timmy.age, timmy.height, timmy.weight, timmy.mood, timmy.bankAccount);

// 10. Have Timmy eat twice
timmy.eat(2);
// console.log(timmy.age, timmy.height, timmy.weight, timmy.mood, timmy.bankAccount);

// 11. Have Timmy exercise twice
timmy.exercise(2);
// console.log(timmy.age, timmy.height, timmy.weight, timmy.mood, timmy.bankAccount);
