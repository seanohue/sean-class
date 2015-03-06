var readline = require("readline");
var rl = readline.createInterface({input: process.stdin, output: process.stdout});
waitForUserInput();

function waitForUserInput() {
  	rl.question("Enter grade by percentage score or enter 'quit' to end program. ", function(score){
		if (score.toLowerCase()=="quit"){
			rl.close();
		}
		else if(score<60){
			console.log ("You failed!");
			waitForUserInput();
		}
		else if(score<70){
			console.log ("D.");
			waitForUserInput();
		}
		else if (score<80){
			console.log ("C.");
			waitForUserInput();
		}
		else if(score<90){
			console.log ("B.");
			waitForUserInput();
		}
		else if(score<100){
			console.log ("A.");
			waitForUserInput();
		}
		else if(score == "bananas"){
			console.log ("Stupid monkey!");
			waitForUserInput();
		}
		else{
			console.log ("Invalid input.");
			waitForUserInput();
		}
	});		
}
