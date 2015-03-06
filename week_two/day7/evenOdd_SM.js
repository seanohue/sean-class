
var sget = require('sget');


function isEvenOrOdd(){

	var userNumber = sget("Enter your favorite number, I will tell you if it's even or odd. Enter 'quit' to exit...");

	if (userNumber == 'quit\n'){
		console.log("Goodbye.");
	}
	else if (userNumber%2 == 0){
		console.log(userNumber.toString().trim() + " is even.");
		isEvenOrOdd();
	}
	else if (userNumber%2 != 0){
		console.log(userNumber.toString().trim() + " is odd.");
		isEvenOrOdd();}
	else{
		console.log("What?!");
		isEvenOrOdd();
	}
}

isEvenOrOdd();

/*function exitProgram(){
	console.log("Thank you, goodbye!");
	process.exit(1);
}*/