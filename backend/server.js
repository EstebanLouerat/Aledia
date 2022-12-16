const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync();

/**
 * Launch the "force: true" option and the initial function for the first time launch or to resync the db
 */
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Db');
//   initial();
// });

// const Role = db.role;

// function initial() {
//   Role.create({
//     id: 1,
//     name: "ROLE_USER"
//   });
 
//   Role.create({
//     id: 2,
//     name: "ROLE_MODERATOR"
//   });
 
//   Role.create({
//     id: 3,
//     name: "ROLE_ADMIN"
//   });
// }

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Aledia application." });
});

require('./app/routes/auth.routes')(app);
require('./app/routes/data.routes')(app);
require('./app/routes/user.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});