//////////////////////////////////////////
//Lab - Classes
//////////////////////////////////////////
//Create the following objects
/*
Create a class for a Pet

attributes
owner - string
name - string
walk - a method that logs 'walka walka'
instantiating a new pet takes the pets name as a parameter and sets the attribute;
create one pet and log it
run the walk method to make sure it works as expected
*/

class Pet {
  constructor(name) {
    this.owner = "";
    this.name = name;
  }

  walk() {
    console.log("walka walka");
  }
}

const panter = new Pet("pink panter");
console.log(panter);

panter.walk();

/*
Create a class for a Dog

this should inherit from Pet
attributes
price - 20
methods
bark() - log "bark"
chaseTail() - log "oh boy oh boy oh boy"
getPrice() - return price
create a new dog and log it
test all the methods to make sure they work as expected
*/

class Dog extends Pet {
  constructor(name) {
    super();
    this.name = name;
    this.price = 20;
  }

  bark() {
    console.log("bark");
  }

  chaseTail() {
    console.log("oh boy oh boy oh boy");
  }

  getPrice() {
    return this.price;
  }
}

const snoopy = new Dog("snoopy");
console.log(snoopy);
snoopy.bark();
snoopy.chaseTail();
console.log(snoopy.getPrice());

/*
Create a class for a Cat

this should inherit from Pet
attributes
price - 10
methods
purr() - log "purrrrr"
clean() - log "cleaning"
getPrice() - return price
walk() - overwrite the method to console.log 'strut strut'
create a new cat and log it
test all the methods to make sure they work as expected
*/

class Cat extends Pet {
  constructor(name) {
    super();
    this.name = name;
    this.price = 10;
  }

  purr() {
    console.log("purrrrr");
  }

  clean() {
    console.log("cleaning");
  }

  getPrice() {
    return this.price;
  }

  walk() {
    console.log("strut strut");
  }
}

const garfield = new Cat("garfield");
console.log(garfield);
garfield.purr();
garfield.clean();
garfield.walk();
console.log(garfield.getPrice());

//////////////////////////////////////////
//Stretch
//////////////////////////////////////////
class Cards {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
    this.faceUp = false;
  }
}

const suits = ["Hearts", "Spades", "Clubs", "Diamonds"];

const cardDeck = [];
suits.map((ele) => {
  for (let i = 1; i <= 13; i++) {
    let theValue = "";
    switch (i) {
      case 1:
        theValue = "Ace";
        break;
      case 11:
        theValue = "Jack";
        break;
      case 12:
        theValue = "Queen";
        break;
      case 13:
        theValue = "King";
        break;
      default:
        theValue = i;
        break;
    }
    cardDeck.push(new Cards(theValue, ele));
  }
});

console.log(cardDeck.length);

function shuffleCard(cardDeck) {}
