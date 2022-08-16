const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const morgan = require('morgan');
const _ = require('lodash');

const app = express();
app.use(cors());
// set the view engine to ejs
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");

app.use(morgan('dev'));
app.use(fileUpload({
    createParentPath: true
}));
// use res.render to load up an ejs view file

// index page


module.exports.app = app;