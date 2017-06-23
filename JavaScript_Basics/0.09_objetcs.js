
// Object literal
var player ={
	//Properties
	name : "",
	life : 100,
	damage : 0,
	hasSniperRifle : true,
	hasSword: true,
	rank : ["soilder", "mage", "spartan", "barbarin"],

	//methods= funvctions inside something
	challenge: function(){
		console.log("lets fight no using golden apples ")
	}, //NEED COMMAS BETWEEN METHODS ENDING
	  fightme: function(){
		console.log("fight me no gapples " + this.name )
	},
	  attack: function(target){
		console.log(this.name + " attacks " + target.name + " for " + this.damage);
		target.life -= this.damage;
	},
	pickedUpSword : function(){
		if (this.hasSword==true) {
			console.log(this.name + "picked up the sword ")
		}
	}
		health :function(){
			console.log(this.damage+"you have this health")
		},
	  

};


var saul= Object.create(player);
saul.name= "saul"
saul.life = 120;
saul.damage= 20;
saul.hasSniperRifle
saul.challenge();
console.log(saul.name);
console.log(saul.life)
saul.challenge();
saul.fightme();



var allan= Object.create(player)
allan.name="Creeper_SlayerXX"
allan.life=1000
allan.damage=100
console.log(allan.name)
console.log(allan.life)
console.log(allan.damage)
allan.hasSword=true;
allan.fightme();
allan.attack(saul);
allan.pickedUpSword();
allan.health();