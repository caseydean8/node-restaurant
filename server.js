const express = require("express");
const path = require("path");

const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Page Routes
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

// Customer route to display on tables page
app.get("/api/customers", (req, res) => {
  return res.json(customers);
})

// customer array
const customers = [
  {
    name: "Joe Cool", 
    email: "joe@cool.dude",
    phone: "555-5555"
  }, 
  {
    name: "Mr Fartstein",
    email: "fart@yourface.com",
    phone: "555-5555"
  }
]

// Start server
app.listen(port, () => console.log(`serving to port ${port}`));

// cmd+w === close editor tab