const express = require("express");
const cors = require("cors");

const db = require("./database/db");

const contactRoute = require("./routes/contact");

const quoteRoute = require("./routes/quote");

const app = express();

const PORT = 3000;

// Middleware
app.use(cors());

app.use(express.json());

// Routes

app.use("/contact", contactRoute);

app.use("/quote", quoteRoute);

// Home

app.get("/", (req, res) => {

    res.send("Manpower Backend Running 🚀");

});

app.listen(PORT, () => {

    console.log(`Server running on http://localhost:${PORT}`);

});