// definition
const express = require("express");
const app = express();
app.use(express.json());

// routes
app.get("/", (req, res) => {
    res.status(200).send("server is up...");
});

app.get("/staff", (req, res) => {
    const staff = ["John", "Mary", "Roz"];
    res.json(staff);
});

app.get("/staff/john", (req, res) => {
    const data = {
        id: 1,
        name: "John Doe",
        email: "johndoe@tmail.com",
        phone: "+98-22-222-22-22",
    };
    res.json(data);
});

// port
app.listen(3333, () => {
    console.log("server is started & listening on port 3333...");
});
