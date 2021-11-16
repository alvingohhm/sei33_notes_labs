"use strict";
//////////////////////////////////////////////////////////////////
//WestWorld
//////////////////////////////////////////////////////////////////
const host = {
  name: "Roget",
  occupation: "creator of Roget's Thesaurus",
  saySpecs: () => {
    console.log(
      `My name is ${host.name}. My occupation is ${host.occupation}.`
    );
  },
};

class BasicHost {
  constructor(name, occupation) {
    this.name = name;
    this.occupation = occupation;
    this.empathy = 0;
    this.loyalty = 0;
    this.aggression = 0;
    this.curiosity = 0;
    this.bulkApperception == "";
  }

  setEmpathy(empathy) {
    this.empathy = empathy;
  }

  getEmpathy() {
    return this.empathy;
  }

  setLoyalty(loyalty) {
    this.loyalty = loyalty;
  }

  getLoyalty() {
    return this.loyalty;
  }

  setAggression(aggression) {
    this.aggression = aggression;
  }

  getAggression() {
    return this.aggression;
  }

  setCuriosity(curiosity) {
    this.curiosity = curiosity;
  }

  getCuriosity() {
    return this.curiosity;
  }

  setBulkApperception(bulkApperception) {
    this.bulkApperception = bulkApperception;
  }

  getBulkApperception() {
    return this.bulkApperception;
  }

  saySpecs() {
    console.log(
      `My name is ${this.name}. My occupation is ${this.occupation}.`
    ); //arrow function also works using this
  }
}

const host1 = new BasicHost("Roget", "creator of Roget's Thesaurus");
const host2 = new BasicHost("Tom", "Robot maintenance");

console.log(host1);
console.log(host2);

host1.saySpecs();

//prettier-ignore
const names = [
  "Laila", "Jack", "Harley", "Hertha", "Darren", "Jolene", 
  "Loura", "Lona", "Davida", "Reena", "Leland", "Ta", "Jen", 
  "Linn", "Roslyn", "Margorie", "Rafaela", "Romona", "Shanel", "Stan"
 ];

//prettier-ignore
const occupations = [
  "Clerical assistant", "Leaflet distributor", "Landowner",
  "Special constable", "Anaesthetist", "Park-keeper", "Butler",
  "Choreographer", "Blacksmith", "Chef", "Legal secretary",
  "Song writer", "Librarian", "Landscape gardener"
 ];

const hostArray = [];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * (arr.length - 1 - 0 + 1))];
}

for (let i = 0; i <= 100; i++) {
  let theName = getRandomItem(names);
  let theOccupation = getRandomItem(occupations);
  hostArray.push(new BasicHost(theName, theOccupation));
  // console.log(hostArray[i]);
}

hostArray[55].saySpecs();
console.log(hostArray[55].getLoyalty());
hostArray[55].setLoyalty(80);
console.log(hostArray[55].getLoyalty());
