class Character {
  static characterName = "The ship";

  static greeting() {
    return "Hello.";
  }

  constructor(name) {
    this.name = name;
    this.anotherName = Character.characterName;
  }

  gt() {
    Character.greeting();
  }
}

console.log(Character.characterName);
console.log(Character.greeting());

const person1 = new Character("tom");
console.log(person1.anotherName);
