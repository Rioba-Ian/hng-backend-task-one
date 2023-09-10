// routes go here
const express = require("express");

const routes = express.Router();

routes.get("/", (req, res) => {
  const date = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dayName = days[date.getUTCDay()];
  const utcTime = utc.toISOString().split(".")[0] + "Z";

  const slack_name = req.query.slack_name || "Rioba Felix";
  const track = req.query.track || "backend";

  res.json({
    slack_name: slack_name,
    current_day: dayName,
    utc_time: utcTime,
    track: track,
    github_file_url:
      "https://github.com/Rioba-Ian/hng-backend-task-one/blob/main/src/index.js",
    github_repo_url: "https://github.com/Rioba-Ian/hng-backend-task-one",
    status: 200,
  });
});

module.exports = routes;
