"use strict";

const adventurer = {
  name: "Timothy",
  hitpoints: 10,
  belongings: ["sword", "potion", "Tums"],
  companion: {
    name: "Velma",
    type: "Bat",
    companion: {
      name: "Tim",
      type: "Parasite",
      companion: {
        name: "Tom",
        type: "Fungus",
      },
    },
  },
};

for (let i = 0; i < adventurer.belongings.length; i++) {
  console.log(i);
}

console.log(adventurer.companion.type);

// Object.values
// Object.entries
for (const ele of Objects.keys(adventurer)) {
  console.log(ele);
}

for (const ele of Objects.entries(adventurer)) {
  console.log(key, value);
}

// for (let ele of adventurer.keys) {
//   console.log(ele);
// }
