var express = require('express')
var router = express.Router()
const http = require('http');
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
const mkdirp = require('mkdirp');


const database = require("../functions/donarQuery.js");
const mail = require('../functions/mail.js');
const pdfObj = require('../functions/pdf.js');






module.exports = router;