"use strict";
// class start with capital letter
class Person {
  constructor(name, yearOfBirth) {
    this.name = name; // add underscore this._name by convention to tell it is private
    this.yearOfBirth = yearOfBirth;
  }

  greet() {
    console.log(`Hi ${this.name}.`);
  }

  age() {
    console.log(`You are ${2021 - this.yearOfBirth} years old.`);
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  set yearOfBirth(yearOfBirth) {
    this._YearOfBirth = yearOfBirth;
  }

  get yearOfBirth() {
    return this._YearOfBirth;
  }
}

const john = new Person("John", 1980);
john.greet();
john.age();

// john.setName("new name")

console.log(john);

const personArray = [];

function createNewPerson(thisName, yearOfBirth) {
  personArray[personArray.length] = new Person(thisName, yearOfBirth);
}

console.log(john.name);
john.setName("hi");
console.log(john.name);

// passing class to class

const john = new Person("John", 1980);
const paul = new Person("Paul", 1980);

//at this point of time not working yet for private
// class Person {
//   name;
//   #age; //private

//   constructor(name, age) {
//     this.name = name
//     this.#age = age
//   }

//   #setAge(val) { //provate

//   }
// }
