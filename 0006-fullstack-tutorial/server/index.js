const express = require("express");
const app = express();

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", (req, res) => {
  res.status(200).send("Welcome....");
});

const users = [
  { _id: 1, name: "roz", email: "roz@tmail.com" },
  { _id: 2, name: "ali", email: "ali@tmail.com" },
  { _id: 3, name: "john", email: "john@tmail.com" },
  { _id: 4, name: "parry", email: "parry@tmail.com" },
  { _id: 5, name: "elina", email: "elina@tmail.com" },
  { _id: 6, name: "ghasem", email: "ghasem@tmail.com" },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(3333, () => {
  console.log("App is listening on port 3333...");
});
