const express = require("express");
const path = require("path");

const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Routes
let page = "/";
// page = req.url;
app.get(page, (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
})

app.get("/tables", (req, res) => {
  res.sendFile(path.join(__dirname, "tables.html"));
})

app.get("/reserve", (req, res) => {
  res.sendFile(path.join(__dirname, "reserve.html"));
})



// Start server
app.listen(port, () => console.log(`serving to port ${port}`));

// cmd+w === close editor tab