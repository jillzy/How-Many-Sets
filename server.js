var gym = require('./myGym');

// modules =================================================
var express        = require('express');
var app            = express();

// set our port
var port = process.env.PORT || 8080;


app.get('/', function(req, res){
    res.send('NICE TO SEE U AGAIN AT THE CHURCH OF IRON, CURRENTLY PLAYING: good ass intro - chance the rapper');
});


app.post('/addEquipment', function(req, res){
	//pass
});


var e = new gym.Equipment("squat rack",5);
gym.inventory.addEquipment(e);
for(var key in gym.inventory.list) {
     console.log(key + ": " + gym.inventory.list[key]);
}

app.listen(port);


