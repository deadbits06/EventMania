const http = require('http');
const express =require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require("mysql");
const session = require('express-session');
const md5 = require('md5');
const multer = require('multer');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const assert = require('assert');
const csv=require('csvtojson');
const PDFDocument = require('pdfkit');
const fs = require('fs');



let uploadData = multer();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));


//functions
//const mail = require('./functions/mail.js');
const con = require('./configuration/databaseConnection.js');


//setting the template engine
app.set('view engine','ejs');

//session maintaining
app.use(session({secret:'noneed', resave: false, saveUninitialized: true}));

// by using locals we can access the session variable anywhere in the templates.
app.use(function(req, res, next){
	res.locals.userId = req.session.userId;
	res.locals.role = req.session.designation;
	res.locals.roles = req.session.userId;
	res.locals.status = "400";
	next();
});



//AJAX
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


//router
const volunteer = require('./routes/volunteer.js');
const organiser = require('./routes/organiser.js');
const donar = require('./routes/donar.js');

app.use('/volunteer',volunteer);
app.use('/organiser',organiser);
app.use('/donar',donar);

app.listen(8080);