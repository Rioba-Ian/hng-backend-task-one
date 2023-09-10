const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

const apiRoutes = require("./routes");

app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
