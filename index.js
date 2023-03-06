const axios = require("axios").default;
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(cors());

const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

var lgName;
var lgEntries = [];

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use("/assets", express.static("assets"));

app.get("/", (req, res) => {
  res.render("home");
});

// app.get("/leagues/:country", (req, res) => {
//   const options = {
//     method: "GET",
//     url: "https://api-football-v1.p.rapidapi.com/v3/leagues",
//     params: { country: req.params.country },
//     headers: {
//       "X-RapidAPI-Key": "1db263d736msh4b232a418979166p1ef21cjsnbbe6f7f46704",
//       "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
//     },
//   };
//   axios
//     .request(options)
//     .then(function (response) {
//       console.log(response.data.response["0"]["league"]["name"]);
//       console.log(response.data.response["0"]["league"]["logo"]);
//       lgName = response.data.response["0"]["league"]["name"];
//       console.log(lgName);
//       res.render("home", { lgName: lgName });
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// });

app.get("/leagues/:country", (req, res) => {
  if (req.params.country == "England") {
    lgEntries = {
      league: "Premier League",
      logo: "https://media.api-sports.io/football/leagues/39.png",
    };
  } else if (req.params.country == "Spain") {
    lgEntries = {
      league: "La Liga",
      logo: "https://media.api-sports.io/football/leagues/140.png",
    };
  } else if (req.params.country == "Germany") {
    lgEntries = {
      league: "Bundesliga",
      logo: "https://media.api-sports.io/football/leagues/78.png",
    };
  }

  // console.log(lgEntries);
  res.render("home", { lgEntries });
});

app.listen(3000, () => {
  console.log("Listening on Port 3000");
});
