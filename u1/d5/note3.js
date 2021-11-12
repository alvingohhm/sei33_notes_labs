const panagram1 = [
  "The",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];

const panagramLower = panagram1.join("").toLowerCase();
// console.log(panagramLower);
const panagramCodeArray = [];

for (const letter of panagramLower) {
  panagramCodeArray.push(letter.charCodeAt());
}

// console.log(panagramCodeArray);
function isAPanagram() {
  for (let i = 97; i < 123; i++) {
    if (panagramCodeArray.indexOf(i) === -1) {
      return false;
    }
    // console.log(panagramCodeArray.indexOf(i));
  }
  return true;
}

console.log(isAPanagram());
