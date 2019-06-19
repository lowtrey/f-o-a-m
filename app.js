const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res){
    res.render('home');
});
app.get('/about', function(req, res){
    res.render('about');
});
app.get('/outreach', function(req, res){
    res.render('outreach');
});
app.get('/events', function(req, res){
    res.render('events');
});
app.get('/donate', function(req, res){
    res.render('donate');
});
app.get('/contact', function(req, res){
    res.render('contact');
});




app.listen(3000, process.env.PORT, function() {
    console.log('Server listening on port 3000...');
});