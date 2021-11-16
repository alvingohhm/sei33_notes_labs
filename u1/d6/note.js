"use strict";
// two ways to declare function
// const Person = class {}; // class expression

class Person {} // class declaration common use.. will be use in the class

class Animal {
  constructor(name, type, numOfLegs = 4) {
    this.name = name;
    this.type = type;
    this.numOfLegs = numOfLegs;
  }

  greet() {
    console.log(`Hi ${this.name}.`);
  }

  animalType() {
    console.log(`It is a ${this.type}.`);
  }
}

const dog = new Animal("Buster", "Dog", 4);

dog.greet();
dog.animalType();

const chicken = new Animal("Tom", "Chicken", 2);
console.log(chicken);
