var gym = require('./myGym');
//var val = inventory.equipment();

// modules =================================================
var express        = require('express');
var app            = express();

// set our port
var port = process.env.PORT || 8080;


app.get('/', function(req, res){
    res.send('README for usage');
});




console.log("ready to rumble on port " + port);
//console.log(val);
console.log(gym.inventory["test1"]);
var e = new gym.Equipment("NAME","1");
console.log(e.testFunction());
app.listen(port);


