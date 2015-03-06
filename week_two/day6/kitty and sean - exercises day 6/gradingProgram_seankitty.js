var score = 66;

if(score<60){
		return "You failed!";
	}
	else if(score<70){
		return "D.";
	}
	else if (score<80){
		return "C.";
	}
	else if(score<90){
		return "B."
	}
	else if(score<100){
		return "A.";
	}
	else if(score == "bananas"){
		return "Stupid monkey!";
	}
	else{
		return "Invalid input.";
	}