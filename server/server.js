// server/server.js
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post("/calculate", (req, res) => {
  try {
    const result = eval(req.body.expression);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: "Invalid expression" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
