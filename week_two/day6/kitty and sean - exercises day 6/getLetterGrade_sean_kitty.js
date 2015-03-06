
var rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});
function waitForUserInput() {
  rl.question("Enter grade by percentage score: ", function(score){
	if(score<60){
		return "You failed!";
		waitForUserInput();
	}
	else if(score<70){
		return "D.";
		waitForUserInput();
	}
	else if (score<80){
		return "C.";
		waitForUserInput();
	}
	else if(score<90){
		return "B.";
		waitForUserInput();
	}
	else if(score<100){
		return "A.";
		waitForUserInput();
	}
	else if(score == "bananas"){
		return "Stupid monkey!";
		waitForUserInput();
	}
	else{
		return "Invalid input.";
		waitForUserInput();
	}
}
