const PORT = 8000;
const axios = require("axios").default;
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(cors());

app.get("/leagues", (req, res) => {
  const options = {
    method: "GET",
    url: "https://api-football-v1.p.rapidapi.com/v3/leagues",
    params: { country: "England" },
    headers: {
      "X-RapidAPI-Key": "1db263d736msh4b232a418979166p1ef21cjsnbbe6f7f46704",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data.response["0"]["league"]["name"]);
      console.log(response.data.response["0"]["league"]["logo"]);
      lgName.innerText = response.data.response["0"]["league"]["name"];
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.listen(PORT, () => console.log("running on PORT " + PORT));
