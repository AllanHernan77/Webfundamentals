//bronze
function birthPlace(city, state){
	console.log("I am from", city + state)
}

//silver
birthPlace("Indianapoils ", "Indiana");

function Bills(power, water, netflix){
	var totalBills= power+ water+ netflix;
	console.log("You owe " + totalBills + " dollars")
}
Bills(300, 500, 20)
//gold

function printOddorEven(x){
	if (x%2===0){
		console.log("the number is even")
	}else{
		console.log("the number is odd")
	}
}
printOddorEven(4);