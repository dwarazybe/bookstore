const express = require('express');
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const cors = require("cors");
const mysql = require('mysql');
const passport = require("passport");
const passportSetup = require("./passport");
const authRoute = require("./routes/auth");
const app = express();


const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sklep',
})

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(
    cookieSession({name: "session", keys:["user"], maxAge: 24 * 60 * 60 * 100})
);
app.use(passport.initialize());
app.use(passport.session());
app.use(
    cors({
        origin: "http://localhost:3000",
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
    })
);

app.get('/api/get', (req, res) => {
        const sqlSelect = "SELECT * FROM produkt";
        db.query(sqlSelect, (err, result) => {
            res.send(result);
        });
    });

app.get('/api/get/login', (req, res) => {
    const sqlSelect = "SELECT * FROM uzytkownicy";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.use("/auth", authRoute);

app.listen(3001, () =>{
    console.log('running on port 3001');
});
