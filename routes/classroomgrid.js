const express = require('express')
let app = express.Router()

// https://medium.com/@codesprintpro/getting-started-sqlite3-with-nodejs-8ef387ad31c4
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('src/wmss_covid_tracker.db');


app.get('/', function (req, res)
{
    res.render('classroomgrid');
});
module.exports = app
