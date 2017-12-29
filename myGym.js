/****************************************************
	equipment obj
	responsible for updating availability
****************************************************/
function Equipment(name, total) {
		
		this.name 	= name; 
		var free 	= total; 	//set the number of free equipment to the total
		var users 	= []; 		//list of current users of the equipment
		var alerts 	= []; 		//list of users signed up for alerts
		this.info 	= [total, free, users, alerts];
		
		this.infoEnum = {
			total : this.info[0],
			free: 	this.info[1],
			users: 	this.info[2],
			alerts: this.info[3]
		}

		this.incAvailable = function() {
			this.infoEnum.free += 1;
			console.log(this.infoEnum.free);
			return "ok";
		}
		
		this.decAvailable = function() {
			this.infoEnum.free -= 1;
			console.log(this.infoEnum.free);
			return "ok";
		}
		
		this.addUser = function (username) {
			
		}
		
		this.removeUser = function (username) {
			
		}
		
		this.addAlert = function (username) {
			
		}
		
		this.removeAlert = function (username) {
			
		};
		
}

/*********************************************************	
	a list of equipment objs treated as key-value pairs:
	inventory = {
					"e1": e1,
					"e2": e2
	}
**********************************************************/
function Inventory() {

	//dictionary of all the equipment info
	this.list = {}
	
	//create an equipment obj and add to inventory list
	this.add = function(name, total) {
		var e = new Equipment(name, total);
		this.list[e.name] = e;
	}
	//remove one availability
	this.decrementAvailable = function (name) {
		if (this.list[name].infoEnum.free > 0)
			this.list[name].infoEnum.free -= 1;
		else
			console.log("ERROR: decrementAvailable()");
	}
	
	//add one availability
	this.incrementAvailable = function (name) {
		if (this.list[name].infoEnum.total
				> this.list[name].infoEnum.free)
			this.list[name].infoEnum.free += 1;
		else
			console.log("ERROR: incrementAvailable()");

		
	}
	//remove x amount of equipment from its total
	this.remove = function(name, num) {
		var total = this.list[name].infoEnum.total;
		if (total > num) 
			total -= num;
		else if (total == num)
			this.list[name] = null;
		else
			console.log("ERROR: remove()")
	}
	
	//remove equipment from inventory entirely
	this.removeAll = function(name) {
		this.list[name] = null;
	}
};

var inventory = new Inventory();

//empty object for export purposes				
var gym = new Object();
				
gym.Equipment = Equipment;
gym.inventory = inventory;
module.exports = gym;