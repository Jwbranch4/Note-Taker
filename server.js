// import express and fs
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3001;

// use routes

const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// middle ware for express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));

app.use(express.json());
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);
app.use("*", htmlRoutes);

app.listen(PORT, () => {
  console.log(`api server now on port ${PORT}`);
});
