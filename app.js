const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api/v1/shows", (req, res) => res.send("Hello Shows!"));

app.listen(PORT, console.log(`Successfully connected to port ${PORT}...`));
