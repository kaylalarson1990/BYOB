const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/byob", (req, res) => res.send("Hello BYOB!"));

app.listen(PORT, console.log(`Successfully connected to port ${PORT}...`));
