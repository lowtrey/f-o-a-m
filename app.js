const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// res.render("campgrounds/index", {
//     campgrounds: allCampgrounds,
//     page: 'campgrounds'
//   });

app.get('/', function(req, res){
    res.render('home', { page: 'home' });
});
app.get('/outreach', function(req, res){
    res.render('outreach', { page: 'outreach' });
});
app.get('/events', function(req, res){
    res.render('events', { page: 'events' });
});
app.get('/donate', function(req, res){
    res.render('donate', { page: 'donate' });
});
app.get('/contact', function(req, res){
    res.render('contact', { page: 'contact' });
});




app.listen(3000, process.env.PORT, function() {
    console.log('Server listening on port 3000...');
});