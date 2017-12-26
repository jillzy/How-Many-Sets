/*	
	equipment object!
	responsible for updating availability	
*/
function Equipment(name, total) {
		//{ name: [total: x, available: y] }
		this.name = name;
		var available = total;
		this.details = (total, available);

		this.testFunction = function(){
			return "ok";
		};
		
}

var inventory = {
					"test1":"hi",
					"test2":"bye"
				}

//empty object for export purposes				
var gym = new Object();
				
gym.Equipment = Equipment;
gym.inventory = inventory;
module.exports = gym;