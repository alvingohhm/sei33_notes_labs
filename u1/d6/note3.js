"use strict";

class Character {
  constructor(hitpoints = 100, weapon = false, movement = 10) {
    this.hitpoints = hitpoints;
    this.weapon = weapon;
    this.movement = movement;
  }

  damage(amount) {
    this.hitpoints -= amount;
    return this.hitpoints;
  }
}

class Mytest extends Character {
  constructor(value) {
    super();
    this.newValue = value;
  }
}

class Worker extends Character {
  constructor(testing) {
    super();
    this.testing = testing;
  }
}

class Warrior extends Character {
  constructor(
    hitpoints = 300,
    weapon = true,
    movement = 20,
    weaponDamage = 20
  ) {
    super(hitpoints, weapon, movement);
    this.weaponDamage = weaponDamage;
  }

  fight() {
    return Math.floor(Math.random() * this.weaponDamage);
  }

  damage(amount) {
    this.hitpoints = this.hitpoints - (amount - 10);
    return this.hitpoints;
  }
}
const character = new Character();
const warrior = new Warrior();
const worker = new Worker();
const newTest = new Mytest(10);

console.log(character);
console.log(warrior);

const damage = warrior.fight();
console.log(damage);
console.log(warrior.damage(damage));

const damage2 = warrior.fight();
console.log("damage: " + damage2);
console.log(worker.damage(damage2));

console.log(newTest.hitpoints);
