/****************************************************
	equipment obj
	responsible for updating availability
****************************************************/
function Equipment(name, total) {
		
		this.name = name;
		var free = total;
		this.info = [total, free];
		
		this.infoEnum = {
			free: this.info[1],
			total : this.info[0]
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
		};
		
}

/*********************************************************	
	a list of equipment objs treated as key-value pairs:
	inventory = {
					"e1": [total, free],
					"e2": [total, free]
	}
**********************************************************/
function Inventory() {
	this.list = {
		"test1":"1, 1",
		"test2":"2, 2"
	}
	
	this.addEquipment = function(e) {
		this.list[e.name] = e.info;
	}
};

var inventory = new Inventory();

//empty object for export purposes				
var gym = new Object();
				
gym.Equipment = Equipment;
gym.inventory = inventory;
module.exports = gym;