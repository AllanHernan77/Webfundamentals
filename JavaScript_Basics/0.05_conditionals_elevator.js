

var elevatorUp=true;
var elevatorDown=true;
var elevatorBroken=true;
var elevatorIsStuckWhileWeAreOnIt=true;
var elevatorNumber= 13;
//elevator machine going up or down
if(elevatorUp===true){
	console.log("going up");
}else{
	console.log("going down");
}
//elevator machine broke
if(elevatorBroken==true){
	console.log("You gonna die!");
} else{
	console.log("boy you is lucky!");
}

if(elevatorIsStuckWhileWeAreOnIt){
	console.log("We gonna die today!");
}

if(elevatorBroken || elevatorDown){
	console.log('Oh no');
}

if(elevatorNumber && elevatorIsStuckWhileWeAreOnIt){
	console.log("today is not a lucky day for me");
}
