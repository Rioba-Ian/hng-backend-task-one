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

  const dayName = days[date.getUTCDate()];
  const utcTime = date.toISOString();

  const slack_name = req.query.slack_name || "example_name";
  const track = req.query.track || "backend";

  res.json({
    slack_name: slack_name,
    current_day: dayName,
    utc_time: utcTime,
    track: track,
    github_file_url: "",
    github_repo_url: "",
    status: 200,
  });
});

module.exports = routes;
