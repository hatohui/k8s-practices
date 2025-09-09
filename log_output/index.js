const express = require("express");
const { randomUUID } = require("crypto");

function logRandomString() {
  const randomString = randomUUID();
  const timestamp = new Date().toISOString();
  const result = `${timestamp}: ${randomString}`;
  return result;
}

const app = express();

app.get("/", (req, res) => {
  res.send(logRandomString());
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
