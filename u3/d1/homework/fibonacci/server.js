const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

const isFibonacci = (targetNum, current = 1, previous = 0) => {
  if (current < targetNum) {
    return isFibonacci(targetNum, current + previous, current);
  }
  if (current === targetNum) {
    return true;
  }
  return false;
};

app.get("/:num", (req, res) => {
  const { num } = req.params;
  let result = null;
  if (isFibonacci(Number(num))) {
    result = "Very good. It is Fibonacci.";
  } else {
    result = "I can tell this is not a fibonacci number.";
  }
  res.send(result);
});

app.listen(PORT, () => {
  console.log(`
  🚀  Server is running
  🔉  Listening on port ${PORT}
`);
});
