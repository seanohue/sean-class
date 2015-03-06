var sget = require('sget');
var width;
var height;
var validChoice = false;


function calculateAreaRectangle(width, height){
	var area = width * height;
	return area;
}

function calculateAreaTriangle(width, height){
	var area = width * height;
	area = area/2;
	return area;
}

while (validChoice===false){
	
	var userChoice = sget("Enter the number of your choice: \n 1) Rectangle \n 2) Triangle \n ...");
	
	if (parseInt(userChoice) === 1){
		validChoice = true;
		
		while(isNaN(width)===true){
			width = sget("Please enter the width of the rectangle: ");
		}
		
		while(isNaN(height)===true){
			height = sget("Please enter the height of the rectangle: ");
		}
	
	console.log("The area is " + calculateAreaRectangle(width, height) + ".");	
	
	} 

	else if (parseInt(userChoice) === 2){
		validChoice = true;
		
		while(isNaN(width)===true){
			width = sget("Please enter the width of the triangle: ");
		}
		
		while(isNaN(height)===true){
			height = sget("Please enter the height of the triangle: ");
		}
		console.log("The area is " + calculateAreaTriangle(width, height) + ".");	
	}

	else {
		console.log("Quit being a tool and enter a proper choice!");
	}
	
	
	
} 