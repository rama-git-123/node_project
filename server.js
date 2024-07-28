var fs = require("fs");
var os = require("os");
var notes = require("./notes.js");
var user = os.userInfo();
// console.log(user);
// fs.appendFile("greeting.txt", "Hi" + user.username + "\n", () => {
//   console.log("file created ");
// });

var ages = notes.age;
console.log(ages);

const express = require("express");
const app = express();
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

const personRoutes = require("./routes/personRoutes");
const studentRoutes = require("./routes/studentRoutes");

app.use("/person", personRoutes);
app.use("/student", studentRoutes);

app.listen(3005);
