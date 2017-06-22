//functions

//decleration
function hello(){
	console.log("hello!!!");
}
// call function
hello();



function Girlfriend(){
	console.log("minecraft")
}
Girlfriend();
////////////////////////
function addTwos(){
	var x = 2;
	var y = 2;
	console.log(x+y);
}
addTwos();
///////////////////////////
function multi(){
	x=2
	y=3
	console.log(x*y)
}
multi();
//////////////////////// thing in parathensis is called a parameter
function numberenterd(x){
	console.log("The number displayed is: ", x)
}
numberenterd(5);
numberenterd(6);
numberenterd(6);

function calculation(x,y){
	console.log("the sum is:", x+y);
}
calculation(2, 2);

//////////////////////////////
function name (first,last){
	first:""
	last:""
	console.log("your name is",first+last) 
}
name("allan", "hernandez");

function petNameandBreed(name,breed){
	var details=name+ ", " + breed;
	console.log(details)
}
 petNameandBreed("Rufus", "WienerDog");

function salesTax(quantity, price){
	var tax= 0.07;
	var totalTax= quantity* price* tax;
	var totalPrice= totalTax+quantity *price;
	return totalPrice

}
console.log(salesTax(10, 10));

