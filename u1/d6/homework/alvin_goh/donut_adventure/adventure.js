"use strict";
/////////////////////////////////////////////////////////////
//Daring Adventure! - Getting Started
/////////////////////////////////////////////////////////////
//Our Hero
/*
Let's create our Hero class!

Attributes:
  name: set name from parameter in constructor method
  health: initially 100
  weapons: use the following object
{
    sprinkleSpray: 5,
    sugarShock: 10
}
catchPhrases: use the following array
[
  'i\'m fresher than day old pizza', 
  'you can\'t count my calories'
]
Methods:
  talkSass: logs one of his catchphrases randomly
  announceHealth: logs his current health
  fight: for now, logs 'i\'m ready to rumble'
Now, using this Hero class, create an instance of our hero Dougie the donut.


*/

class Hero {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.weapons = {
      sprinkleSpray: 5,
      sugarShock: 10,
    };
    this.catchPhrases = [
      "i'm fresher than day old pizza",
      "you can't count my calories",
    ];
  }

  talkSass() {
    //Math.floor(Math.random() * (max - min + 1) + min)
    console.log(
      this.catchPhrases[
        Math.floor(Math.random() * (this.catchPhrases.length - 1 - 0 + 1))
      ]
    );
  }

  annouceHealth() {
    console.log(this.health);
  }

  fight(enemy) {
    const keys = Object.keys(this.weapons);
    const weaponPicked = keys[Math.floor(Math.random() * keys.length)];
    const hitpoint = this.weapons[weaponPicked];
    enemy.health -= hitpoint;
    console.log(
      `${enemy.name} got hit by ${weaponPicked}! His health is now at ${enemy.health}!`
    );
  }
}

const dougie = new Hero("Dougie");

//Our Enemy
/*
Now let's create our Enemy class!

Attributes:
name: set name from parameter in constructor method
health: initially 100
weapons: use the following object
{
    pepperoniStars: 5,
    cheeseGrease: 10    
}
catchPhrases:
[
  'i\'m youtube famous',
  'i\'m more dangerous than an uncovered sewer'
]
Methods:
talkSmack: logs one of his catchphrases randomly
announceHealth: logs his current health
fight: for now, logs i\'m gonna flatten you like a slice of pepperoni!
Now, using this Enemy class, create an instance of the enemy Pizza Rat.
*/

//trying out inheritance
class Enemy extends Hero {
  constructor(name) {
    super();
    this.name = name;
    this.weapons = {
      pepperoniStars: 5,
      cheeseGrease: 10,
    };
    this.catchPhrases = [
      "i'm youtube famous",
      "i'm more dangerous than an uncovered sewer",
    ];
  }

  talkSmack() {
    //Math.floor(Math.random() * (max - min + 1) + min)
    console.log(
      this.catchPhrases[
        Math.floor(Math.random() * (this.catchPhrases.length - 1 - 0 + 1))
      ]
    );
  }

  annouceHealth() {
    console.log(this.health);
  }
}

const pizzaRat = new Enemy("Pizza Rat");
// console.log(pizzaRat);
// pizzaRat.annouceHealth();
// pizzaRat.talkSmack();
// pizzaRat.fight();

/////////////////////////////////////////////////////////////
//Walking Down the Street
/////////////////////////////////////////////////////////////
/*
Now, let's write their story! Dougie is walking down Flat Iron -- but oh no! He runs into Pizza rat!
*/

// 1. Have Dougie talkSass
dougie.talkSass();
// 2. Have Pizza Rat talkSmack
pizzaRat.talkSmack();
// 3. Have Dougie announceHealth
dougie.annouceHealth();
// 4. Have Pizza Rat announceHealth
pizzaRat.annouceHealth();

/////////////////////////////////////////////////////////////
//Fight
/////////////////////////////////////////////////////////////
/*
Things have escalated between Dougie and Pizza Rat!
1. Upgrade their fight methods so that it accesses one of their weapons and console log its hitpoints. Bonus Utilize the name of each weapon by accesing the weapons object's keys.

2. Keep upgrading this fight method to accept an argument called enemy so that when you call on the fight method you can pass in the entire Dougie or Pizza Rat object as the parameter. (i.e. dougie.fight(pizzaRat))

3. Now that we are able to pass in Dougie or Pizza Rat as an object, we can make it so that our fight method subtracts from their health.
      - Using the hitpoints from the weapon they're using, subtract that amount from the enemy's health (i.e. If Dougie fights Pizza Rat using sprinkleSpray, subtract sprinkleSpray's hitpoint value (5) from Pizza Rat's health)

      - Console log the enemy name and their new health value (i.e. 'Dougie got hit by pepperoniStars! His health is now at 95!')
*/
// 1.Have Pizza Rat fight Dougie
pizzaRat.fight(dougie);

// 2. Have Dougie fight Pizza Rat
dougie.fight(pizzaRat);

// 3. Have Pizza Rat and Dougie both announceHealth to make sure their health has decreased!
pizzaRat.annouceHealth();
dougie.annouceHealth();
