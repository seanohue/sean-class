var sget = require('sget');
var inventory = ["dagger","rags","empty bottle"];
var playerHealth = 5;
var playerDamage = 1;
var isWizard = false;
var playerToHit = .5;
var pants = false;

function displayInventory(){
console.log("Inventory:\n----------- ");
	for(i = 0; i < inventory.length; i++){
		
		console.log(inventory[i]);
	}
}

function playerDied(){
	process.exit(0);
}

function displayHealth(){
	console.log("HP: "+playerHealth);
}

function beginCombat(enemyHP, enemyDamage, toHit){
	var hitRoll = Math.random();
	var combatOver = false;
	while (combatOver===false){
	if (hitRoll > toHit){
		console.log("You hit for "+playerDamage+" points.")
		enemyHP-=playerDamage;
		}
		else{
			console.log("You missed!");
		}

	combatOver = checkEnemyHP(enemyHP);

	var enemyRoll = Math.random();
	if (enemyRoll > playerToHit && combatOver === false){
		playerHealth-=enemyDamage;
		console.log("You've been hit for "+enemyDamage+" points.");
		}
		else if(combatOver === false){
			console.log("You dodge your enemy's attack!")
		}
	checkPlayerHP();
	displayHealth();}
	return true;
}

function checkEnemyHP(hp){
	console.log("Enemy HP: "+hp);
	if (hp <= 0){
		console.log("You emerge victorious!");
		return true;
	}
	else{
		return false;
	}
}

function checkPlayerHP(){
	if (playerHealth <= 0){
		console.log("You have been struck down!");
		playerDied();
	}

}

function getItems(){
	validChoice=false;
	while(validChoice===false){
		var itemChoice = sget("1) A rusty old longsword.\n2) A bow and arrows. It seems flimsy.\n3) A greasy sack. You look inside and there is a single bean burrito.\n4) A dusty scroll. You cannot read the words inscribed on this scroll.\n5) A shabby oaken shield. The paint is faded, but it has a honey badger as the sigil.\n6) Pants. They appear to be your pants. You have no idea how they got here.")
		itemChoice = parseInt(itemChoice);
		switch(itemChoice){
			case 1:
				console.log("You strap the longsword to your back. \nYou feel stronger.")
				inventory.push("longsword");
				playerDamage+=2;
				validChoice = true;
				break;

			case 2:
				console.log("You fit the quiver over your back and grab the bow. \nYou feel safer fighting this foul beast from a distance.");
				inventory.push("bow and arrows");
				playerToHit+=.2;
				validChoice = true;
				break;

			case 3:
				console.log("You reach into the greasy bag, and pull out the burrito.\n You shovel the burrito into your mouth shamelessly.\n Your hangover is cured, though you've now bloated to thrice your normal size!");
				playerHealth+=10;
				validChoice = true;
				inventory.push("empty greasy bag");
				break;

			case 4:
				if(isWizard===true){
					console.log("The magical scroll glows as you touch it.\nYou feel power surging through your fingertips.\nYou have learned 'Lightning Bolt'.");
					playerDamage+=9;
					inventory.push("scroll of Lightning Bolt");
					}
				else{
					console.log("You're not sure why you picked the scroll, since you can't even read.\nShould have been a wizard.");
					inventory.push("dusty scroll");
					}
				validChoice = true;
				break;

			case 5:
				console.log("You strap the heavy shield to your arm and hope for the best.");
				playerHealth+=2;
				playerToHit+=.05;
				inventory.push("old honeybadger shield");
				validChoice = true;
				break;

			case 6:
				console.log("You sheepishly pull your pants from the bag and tug them on one leg at a time, like everyone else.\nYou feel limber.")
				pants = true;
				inventory.push("pantaloons");
				validChoice = true;
				break;

			default: 
				console.log("Are you a fool?! Y U NO WANT ITEM?!\nTry again.");
		}
	}
displayInventory();
}

var validChoice = false;


console.log("ADVENTURES IN WUT");
console.log("Please enter the number of your choice when prompted.")

while (validChoice===false){
console.log("You wake up in a foul-smelling, dark room. \nThe room is filled with empty glass bottles and you have a stabbing headache. \nYou also have no idea where your pants are, or what happened last night. \nYou take a look at your surroundings, and your inventory, and think you are a wizard... \nAre you?!");
var choiceOne = sget("1) Yes, I am definitely a wizard. \n2) No. Wizards killed my family. \n3) GRRR. ME BARBARIAN. ME SMASH. \n4) Hand me your wallet, mate. \n 5) Check your inventory.");
console.log(choiceOne);
choiceOne = parseInt(choiceOne);
if (choiceOne === 1){
	console.log("Of course you're a wizard.");
	isWizard = true;
	validChoice=true;
	}
else if (choiceOne === 2){
	console.log("Yes, and they also killed you. You're dead.");
	playerDied();
	validChoice=true;
	}
else if (choiceOne === 3){
	console.log("HULK SMASH.");
	playerDamage+=3;
	validChoice=true;
	}
else if (choiceOne === 4){
	console.log("I earned that fair and square, you thief!");
	playerToHit = .7;
	validChoice=true;
	}
else if (choiceOne === 5){
	displayInventory();
	displayHealth();
	}
else {
	console.log("Try again...");
	}

}

validChoice = false;
var combatResultsGuards = false;
while (validChoice===false){
console.log("You stumble out of the room, pantsless and smelling of grog. \nThe harsh light of day blinds you momentarily. \nWhen you recover, two guards are standing before you, their swords drawn.\n'Come with us, adventurer,' one says, 'and for the sake of all the gods and goddesses, put on some damn pants.'\n What do you do?");
var choiceTwo = sget("1) Put on some pants. \n2) Try to run past the guards. \n3) Try to kill the guards. \n4) Go with them peacefully. \n 5) Check your inventory.");
console.log(choiceTwo);
choiceTwo = parseInt(choiceTwo);
if (choiceTwo === 1){
	console.log("You stumble back into the room. \nUnfortunately, you trip and fall face-first into a broken bottle, stabbing yourself through the heart.\n You bleed out in a matter of seconds.");
	playerDied();
	}
else if (choiceTwo === 2){
	console.log("You try to run. From out of nowhere, a third guard appears and shoots an arrow into your knee.\nThey take you to a cell where you spend many years.\nOne day, a young adventurer is thrown into the cell with you. \nYou tell them of your tale, of how you used to be an adventurer like them...\nUntil you took an arrow in the knee.");
	playerDied();
	}
else if (choiceTwo === 3){
	console.log("You enter into a melee.");
	combatResultsGuards = beginCombat(4, 2, .5);
	validChoice=true;
	}
else if (choiceTwo === 4){
	console.log("'Come along, citizen,' the guard says.");
	validChoice=true;
	}
else if (choiceTwo === 5){
	displayInventory();
	displayHealth();
	}
else {
	console.log("Try again...");
}}

if (combatResultsGuards === true){
	console.log("You have felled your would-be captors.\nAfter stepping over their corpses, you find yourself surrounded by eight more guards, who close in on you.");
}

console.log("The guards grab you roughly by the arms and haul you out to a field. In the distance is a llama.\n The llama appears to be quite sassy.\n You wonder if you're hallucinating.\nSensing your confusion, one guard pipes up, 'That is, indeed, a llama...'\n'The sassy llama of Wut.'\n'What?' You reply.\n'No, Wut,' the guard says.\nHe continues, 'You summoned the sassy llama in a drunken stupor. Now we need you to take care of it.'\nThe guard pulls out his bag of holding. 'Here, choose one item to help you defeat the llama.'");
getItems();


validChoice=false;

while (validChoice===false){
console.log("You gather yourself before venturing forth.\nThe guards bid you farewell and back off to a safe distance to watch and enjoy some ale.\nAs you travel closer to the llama, you are overcome with a pang of envy.\nHis sassy, carefree hairstyle entrances you as it sways in the light breeze of the meadow.\nYou shake yourself from the stupor.\nYou didn't come here to make love. You came here to make fight.\nThe llama tosses its luxurious locks and stares you dead in the eye.\n'Come at me, bro,' he sasses you.\nHow do you respond?");
var choiceThree = sget("1) Fight like a real man! Or woman! Or... \n2) Run away! Run awaaaayyyy! \n3) Check your inventory.");
console.log(choiceThree);
choiceThree = parseInt(choiceThree);
if (choiceThree === 1){
	console.log("You take the llama on head-on!");
	var wonLlamaCombat = beginCombat(10, 4, .75);
	validChoice=true;
	}
else if (choiceThree === 2){
	if (pants === true){
		console.log("You turn to run.\n The llama is confused and gives chase, but is no match for your Pantaloons of Swiftness.\nYou escape handily, leaving the guards to deal with the llama.\nTheir screams echo for days, but later you see them and they all have really great hair.\nYou never return to the land of Wut, for fear that the sass will take you, too.");
	}
	else{
		console.log("You turn to run.\nThe sassy llama is enraged by the sight of your naked bum.\nHis power level is now over 9000.\n His mohawk stands on end and shimmers with golden light.\nIn an explosion of rage and sass, you are consumed.\nYou are now a tub of hair product.")
		playerDied();}
	validChoice=true;
	}
else if (choiceThree === 3){
	displayInventory();
	displayHealth();
	}
else {
	console.log("Try again...");
	}

}
if (wonLlamaCombat===true){
	console.log("The llama lays on the ground, slain and bleeding pomade from every orifice.\nYou stand over it, victorious.\nUsing your trusty dagger, you remove the llama's mohawk and take it back to the town...\nIt's time to party.\nThe guards pat you on the back, and carry you to the tavern.\n Everyone in town offers to buy you a beer.\nYou accept happily...and with a touch of sass.\n...\nYou wake up in a foul-smelling, dark room.");
}


