var express = require("express");
var router = express.Router();

const users = [
  {
    name: "James",
    role: "Instructor",
  },
  {
    name: "Ginny",
    role: "TA",
  },
];

router.get("/myname", (req, res) => {
  console.log("request query: ", req.query);
  const firstName = req.query.firstname;
  const lastName = req.query.lastname;
  console.log(`My Name: ${firstName}`);
  res.send(`The current user is: ${firstName} ${lastName}`);
});

router.get("/getone/:userNumber", (req, res) => {
  const userNumber = req.params.userNumber;
  const foundUser = users[userNumber];
  res.json(foundUser);
});



module.exports = router;