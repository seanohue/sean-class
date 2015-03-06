var sget = require('sget');
var keyWord = "ramen";
var guessedWord = new Array(keyWord.length);
var guesses = new Array;
var guessesLeft = 8;
var hints = 2;
var clear = require('clear');

function gameMenu(){

	clear();
	console.log("WELCOME TO Hangman");
	console.log("---------------------");
	console.log("Please select a choice from the menu:");
	console.log("1) Make a guess");
	console.log("2) Get a hint");
	console.log("3) See guessed letters");
	console.log("4) See your progress");
	console.log("---------------------");
	
	var menuChoice = parseInt(sget("Enter a number:"));

	switch(menuChoice){
		case 1:
			guessLetter();
			break;
		case 2:
			giveHint();
			break;
		case 3:
			displayStatus();
			break;
		case 4:
			displayStatus();
			break;
		default:
			console.log("Please enter a number!");
			gameMenu();
	}
}

function toContinue(){
	var what = sget("Please press enter to continue...");
}

function displayStatus(){
	
	console.log("-------------");
	console.log("Your status:");
	console.log("-------------");
	displayGuessedWord();
	displayGuesses();
	checkWin();
	toContinue();
	gameMenu();
}

function displayGuessedWord(){
	console.log("So far you have... : "+guessedWord);
	console.log("There are "+guessedWord.length+" letters in this word...")
	
}

function displayGuesses(){
	console.log("You have guessed:" + guesses);
}

function checkWin(){
	var counter=0;
	for(i=0; i<keyWord.length; i++){
		if (guessedWord[i] == keyWord[i])
			counter++;			
	}


	if (counter === keyWord.length){
		clear();
		console.log("You have won!");
		process.exit(0);
	}
	
	else if(guessesLeft <= 0){
		clear();
		console.log("You have lost! The man is hanged!\nIt's 1692 all over again.");
		process.exit(0);
	}

}

function guessLetter(){
	clear();
	var guess = sget("Enter your guess: ").trim();
	//if (guess.length > 1)
	//	guessLetter();
	checkLetter(guess);
}

function checkLetter(guess){
	
	var correctGuess=false;
	addToGuesses(guess);
	//console.log("guessed - "+guess);	// for debugging
	//console.log("word - " +keyWord);
	//console.log("length -" +keyWord.length);

	for(i = 0; i < keyWord.length; i++){
		
		if (guess == keyWord[i]){
			//console.log("Letter #"+i+" is "+guess+".");
			guessedCorrectly(guess, i);			
			correctGuess=true;
		}
		
		else{
			//console.log("Letter #"+i+" is NOT "+guess+". It is '"+keyWord[i]+"'.");
		}
	}
	//console.log("if/then stopped");
	if (!correctGuess){
		guessedWrong();}

	toContinue();
	displayStatus();

}

function guessedCorrectly(guess, i){
	
	//console.log(i);
	
	guessedWord[i] = guess;
	console.log("You guessed correctly!");		
}

function guessedWrong(){
	guessesLeft--;
	console.log("You was WRONG!!!!!")
}

function addToGuesses(guess){
	guesses.push(guess);
}



function giveHint(){
	clear();
	if (hints===2){
		console.log("It is a food!");
	}
	else if (hints ===1){
		console.log("It is a noodle!");
	}
	else{
		console.log("NO HINTS FOR YOU!");
	}

	hints--;
	toContinue();
	gameMenu();

}

//setGuessedWord(keyWord, guessedWord);
gameMenu();