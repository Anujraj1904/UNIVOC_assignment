const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "layouts/boilerplate");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));

// Serve static files from the img directory 
app.use('/img', express.static(path.join(__dirname,'img')));

// Middleware to set the current user for all views
app.use((req, res, next) => {
  res.locals.CurrUser = req.user;
  next();
});

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

// Root route redirects to /listings
app.use("/", require("./routes/index"));

app.listen(8080, () => {
  console.log("server is listening to port 8080");
});
