const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
// app.use(cors());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      "https://update-page-nu.vercel.app",
    ],
    methods: ["GET", "POST"],
  })
);

const bodyParser = require("body-parser");

// Parse JSON and URL-encoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Razorpay Route
const phonepeRoute = require("./routes/phonepe/phonepeRoute");
app.use("/api", phonepeRoute);

// Starting Server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
