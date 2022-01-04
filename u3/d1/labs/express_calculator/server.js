const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/calc/:num1/:num2", (req, res) => {
  const { num1, num2 } = req.params;
  const sum = Number(num1) + Number(num2);
  res.send("the sum is " + sum);
});

app.get("/calcquery/:num1/:num2", (req, res) => {
  const number1 = Number(req.params.num1);
  const number2 = Number(req.params.num2);
  const { operation } = req.query;
  let result = null;
  switch (operation) {
    case "add":
      result = number1 + number2;
      break;
    case "subtract":
      result = number1 - number2;
      break;
    case "multiply":
      result = number1 * number2;
      break;
    case "divide":
      result = number1 / number2;
      break;
    case "expo":
      result = number1 ** number2;
      break;
    default:
      result = null;
      break;
  }

  result === null
    ? res.send("no operation")
    : res.send(`the ${operation} operation is ${result.toString()}`);
});

app.listen(PORT, () => {
  console.log(`
  🚀  Server is running
  🔉  Listening on port ${PORT}
`);
});
