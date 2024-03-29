// importing required packages
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const port = process.env.PORT || 5000;
// init express node app
const app = express();

// allow the app to use middleware
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use("/", authRoutes);

//====================Middleware to parse JSON and urlencoded form data====================
const upload = multer({ dest: "uploads/" });
//====================Route to handle form submission====================
app.post(
  "/upload",
  upload.fields([
    { name: "fileUpload" },
    { name: "landscapeFile" },
    { name: "portraitFile" },
    { name: "squareFile" },
  ]),
  (req, res) => {
    // const {name, email} = req.body;
    const files = req.files;
    console.log("Received form data:", req.body);
    console.log("~~~~~~~~~FILES~~~~~~~~:", files);
    res.send("Form data received successfully.");
  }
);

// connect the app to a database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log("connected to db and server started on", port);
    });
  })
  .catch((error) => {
    console.log(error);
  });
