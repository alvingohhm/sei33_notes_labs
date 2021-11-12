const panagram = [
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

// function createAlphabetCountingObj() {
//   const alphabetObj = {};
//   for (let i = 97; i <= 122; i++) {
//     alphabetObj[String.fromCharCode(i)] = 0;
//   }
//   return alphabetObj;
// }

// function isPanagram(arr) {
//   const alphabetObj = createAlphabetCountingObj();
//   const arrayOfLetters = arr.join("").split("");
//   for (const letter of arrayOfLetters) {
//     alphabetObj[letter.toLowerCase()] += 1;
//   }
//   return !Object.values(alphabetObj).some((a) => a === 0);
// }

// console.log(isPanagram(panagram));

// new thing to learn javascript Set([])
// function isPanagram(arr) {
//   const alphabetSet = new Set([]);
//   for (const letter of arr.join("").split("")) {
//     alphabetSet.add(letter.toLowerCase());
//     console.log(alphabetSet);
//   }
//   return alphabetSet.size === 26;
// }

// console.log(isPanagram(panagram));
