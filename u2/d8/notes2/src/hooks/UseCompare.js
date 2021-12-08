const UseCompare = (arrayA, arrayB) => {
  if (JSON.stringify(arrayA) === JSON.stringify(arrayB)) {
    return "Array are the same";
  } else {
    return "Arrays are different";
  }
};

export default UseCompare;
