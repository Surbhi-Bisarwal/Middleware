const express = require("express");
const app = express();
const port = 3000;

//loading middleware into app

app.use(express.json());

//middleware -logging, auth, validation


//creation of middleware
const loggingMiddleware = function (req, res, next) {
  console.log("Logging kar rah hu");
  next();
};
//loading middleware into application
app.use(loggingMiddleware);
//********************** */
const authMiddleware = function (req, res, next) {
  console.log("authentication ho rha h ");
  next();
};
app.use(authMiddleware);
//*********************** */
const validationMiddleware = function (req, res, next) {
  console.log("validate ho rha h");
  next();
};
app.use(validationMiddleware);
//**************************************** */
app.get("/", (req, res) => {
  console.log("main route handler hu");
  console.log(req.body);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
