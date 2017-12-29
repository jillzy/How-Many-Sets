var gym = require('./myGym');
//restful if many users?

// modules =================================================
var express        = require('express');
var app            = express();

// set our port
var port = process.env.PORT || 8080;

//greeting message
app.get('/', function(req, res){
    res.send('welcome 2 gym');
});

//refresh inventory display whenever changed
app.get('/returnInventory', function(req, res){
});


/*----------------------
app owner only interface
------------------------*/
app.post('/addEquipment', function(req, res){
	//pass a rep of object
});

/*----------------------
user interface
------------------------*/
//request an alert for a particular equipment
app.post('/requestAlert', function(req, res){
	
});

//change availability of equipment:
//add user to list of users
//free user from list if clicked again by same user
app.post('/change', function(req, res){
});




gym.inventory.add("squat rack", 5);
for(var key in gym.inventory.list) {
     console.log(key + ": " + gym.inventory.list[key]);
}

app.listen(port);


