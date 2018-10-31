//General Variabes
var buffer;
var context;
var canvas;
var context_canvas;

var i = 0;
var timer = 0;
var rnd = new Number();

var gameMode = new String();
var gameOverText = new Boolean();

var act = 1;

var disableInput = new Boolean();
var specialAnimation = new Number();
var specialCooldown = new Number();
var specialCooldownTime = new Number();
var specialAnimationStart = new Boolean();

var textCooldown = new Number();
var textCooldownTime = 20;

var rainSprite = new Number();
var lightning = new Boolean();
var flashLength = new Number();
var flashCounter = new Number();
var noRain = new Boolean();

//Event Triggers
var battlesEnabled = false;
var specialBattle = false;
var raining = false;

//Custom Event Triggers
var introMom = false;
var sawMomOnce = false;
var sawMomTwice = false;
var sawMomThrice = false;
var defeatedWolf = false;
var thankYou = false;

var questCoffee = false;
var questBestGame = false;
var questGummyWorms = false;
var questCottonCandy = false;
var questComicBook = false;

var holdingBestGame = false;

var questcompleteCoffee = false;
var questcompleteBestGame = false;
var questcompleteGummyWorms = false;
var questcompleteCottonCandy = false;
var questcompleteComicBook = false;

var theEnd = false;

//Menu Variables
var menuMode = "none";
var menuSelection = 0;
var menuPage = 1;
var menuPageTotal = 1;
var menuArrow = new Image();
menuArrow.src = "tiles/arrow.bmp";

//For the Intro
var logo = new Image();
var logoY;
logo.src = "tiles/_mmmlogo.bmp";

//For the Title Screen
var title = new Image();
title.src = "tiles/title.bmp";

//For Keyboard Input
var inputMode = String();
var spaceBar = false;
var keyUp = false;
var keyDown = false;
var keyLeft = false;
var keyRight = false;
var keyESC = false;
var parentKey = 0;
var childKey = 0;

//Prevent Default Action on Keys Used in the Game
window.onkeydown = function (event) {
	if (event.keyCode == 32) { event.preventDefault(); }
	if (event.keyCode == 37) { event.preventDefault(); }
	if (event.keyCode == 38) { event.preventDefault(); }
	if (event.keyCode == 39) { event.preventDefault(); }
	if (event.keyCode == 40) { event.preventDefault(); }
};

//Text Box Variables
var showTextBox = false;
var text1 = new String();
var text2 = new String();
var line1 = 0;
var line2 = 1;
var pos1 = 0;
var pos2 = 0;
var initBattleFromText = 0;

//Player Variables
var playerX = 3 * 16;
var playerY = 4 * 16;
var playerLastX = 32;
var playerLastY = 32;
var playerHeight = 16;
var playerWidth = 16;
var playerSpeed = 5;
var playerSpriteLast = 0;
var playerTimer = 0;

var playerHealth = 100;
var playerMaxHealth = 100;
var playerLevel = 1;
var playerMaxLevel = 10;
var playerExp = 0;
var playerAttack = 1;
var playerDefence = 2;
var playerStatus = "Healthy"; 			//"Healthy", "Poisoned", "Stung"
var playerStatusTimer = 0;
var playerInventory = new Array();
var playerInventoryCount = 0;
var playerEquipment = new Array(); 		//0 = Weapon, 1 = Armor

var playerSprite = new Array();

var jump = 0;

//Fox Variables
var foxX = 5;
var foxY = 3;
var foxSpeed = 4;
var foxWait = true;
var foxSprite = 15;
var foxSpriteLast = 15;
var foxTimer = new Number();
var foxWaitTimer = new Number();
var foxFrame = 0;
var foxBlock = false;

//Exp Levels
var level = new Array();
level[1] = 0;
level[2] = 100;
level[3] = 400;
level[4] = 1000;
level[5] = 1600;
level[6] = 3200;
level[7] = 6400;
level[8] = 12800;
level[9] = 25600;
level[10] = 51200;

//NPC Variables
var npcCount = 0;
var npcX = new Array();
var npcY = new Array();
var npcOffsetX = new Number();
var npcOffsetY = new Number();
var npcHidden = new Array(); //0 = show, 1 = hide
var npcOpacity = new Array(); 
var npcRadius = new Array();
var npcFrame = 0;
var npcTimer = 0;
var npcDialog = new Array();
var npcSpriteIndex = new Array();

var npcSprite = new Array();

//Enemy Variables
var enemyID = new Number();
var enemySprite = new Array();
var enemyName = new String();
var enemyHealth = new Number();
var enemyMaxHealth = new Number();
var enemyItemDrop = new Number();
var enemyItemChance = new Number();
var enemyDialog1 = new Number();
var enemyDialog2 = new Number();
var enemyExp = new Number();
var enemyPosX = new Number();

var enemyAttack = new Array();
enemyAttack[0] = new Array(); 			//Name
enemyAttack[1] = new Array();			//Hit
enemyAttack[2] = new Array();			//Accuracy
enemyAttack[3] = new Array();			//Chance

//Battle Variables
var battleIntroTimer = 0;
var hitValue = new Number();
var battleRun = new Boolean();
var battleTurn = new Boolean();
var battleEnd = new Boolean();

//Map Variables
var ii = 0;
var currentMap = new Number();
var tile = new Array();
var mapLine = new Array();
var tileMap = new Array();
for (i = 0; i <= 9; i++) {
	tileMap[i] = new Array ();
}
var collisionLine = new Array();
var collisionMap = new Array();
for (i = 0; i <= 9; i++) {
	collisionMap[i] = new Array ();
}
var battleChance = new Number();
var enemyCount = new Number
var enemyNumber = new Array();
var enemyChance = new Array();

//Event Variables
var eventTop;
var eventBottom;
var eventLeft;
var eventRight;

//Exit Variables
var exitCount = 0;
var exitX = new Array();
var exitY = new Array();
var exitDestination = new Array();
var exitPlayerX = new Array();
var exitPlayerY = new Array();

//Dialog Variables
var dialog = new Array();
var lines = 0;
var question = false;
var questionMode = new String();

//---------------------------------------------------------------- Functions
//---------------------------------------------------------------- Set Up New Game
function newGame() {
	
	//clearTimeout("gameOverLoop()");
	playerHealth = 100;
	playerMaxHealth = 100;
	playerLevel = 1;
	playerMaxLevel = 10;
	playerExp = 0;
	playerAttack = 1;
	playerDefence = 2;
	playerStatus = "Healthy"; 			//"Healthy", "Poisoned", "Stung"
	playerStatusTimer = 0;

	items[0][4] = 1;				//Apples
	items[1][4] = 0;				//Crab Meat
	items[2][4] = 1;				//Potion
	items[3][4] = 1;				//Herb
	items[4][4] = 1;				//Antidote
	items[5][4] = 1;				//Terrible Game
	items[6][4] = 0;				//Best Game Ever
	items[7][4] = 0;				//Gummy Worms
	items[8][4] = 0;				//Coffee
	items[9][4] = 0;				//Cotton Candy
	items[10][4] = 0;				//Comic Book
	items[11][4] = 0;				//
	items[12][4] = 0;				//
	items[13][4] = 0;				//
	items[14][4] = 0;				//
	items[15][4] = 0;				//
	
	playerEquipment[0] = 0;			//Start with Stick
	playerEquipment[1] = 3;			//Start with Cotton Shirt

	playerSpriteLast = 2;

	equipment[0][4] = 1;
	equipment[1][4] = 0;
	equipment[2][4] = 0;
	equipment[3][4] = 1;
	equipment[4][4] = 0;
	equipment[5][4] = 0;
	
	introMom = false;
	sawMomOnce = false;
	sawMomTwice = false;
	sawMomThrice = false;
	defeatedWolf = false;
	thankYou = false;
	
	questCoffee = false;
	questBestGame = false;
	questGummyWorms = false;
	questCottonCandy = false;
	questComicBook = false;
	
	holdingBestGame = false;
	
	questcompleteCoffee = false;
	questcompleteBestGame = false;
	questcompleteGummyWorms = false;
	questcompleteCottonCandy = false;
	questcompleteComicBook = false;
	
	theEnd = false;

	raining = false;
	partyFox = false;

	gameMode = "newgame";
	inputMode = "none";

	gameOverText = false;
	battleRun = false;
	battleEnd = true;
}
//---------------------------------------------------------------- Game Init
function init() {
	preLoadImages()
	newGame()
	timer = -20;
	disableInput = false;
	battlesEnabled = true;
	//setTimeout("systemIntro()",50);
	
	setTimeout("titleScreen()",50);
	
	//Testing 
	//gameMode = "map";
	//inputMode = "player";
	//act = 1;
	//partyFox = true;
	//raining = true;
	//loadMap(13);
	//loadMap(55);
	//loadDialog(10);
	//setTimeout("mapLoop()",100);
	//theEnd = true;
	//setTimeout("theEndLoop()",100);
}

//---------------------------------------------------------------- Catch Keyboard Input
function inputDown(e) {
	
	var keynum;
	keyUp = false;
	keyDown = false;
	keyLeft = false;
	keyRight = false;
	if(window.event) { // IE8 and earlier
		keynum = e.keyCode;
	} else if(e.which) {// IE9/Firefox/Chrome/Opera/Safari
		keynum = e.which;
	}
	
	if (keynum == 32) { 
		spaceBar = true;
		parentKey = 0;
		childKey = 0;
	} else if (keynum == 27) { 
		if (disableInput == false) {
			keyESC = true; 
			parentKey = 0;
			childKey = 0;
		}
	} else {
		if (disableInput == false) {
			if (parentKey == 0) { parentKey = keynum; } else { childKey = keynum; }
			if (childKey == parentKey) { childKey = 0; }
		}
	}
	//alert (keynum);

	if (parentKey !== 0) {
		if (childKey !== 0) {
			if (childKey == 38) { keyUp = true; }
			if (childKey == 40) { keyDown = true; }
			if (childKey == 37) { keyLeft = true; }
			if (childKey == 39) { keyRight = true; }
		} else {
			if (parentKey !== 0) {
				if (parentKey == 38) { keyUp = true; }
				if (parentKey == 40) { keyDown = true; }
				if (parentKey == 37) { keyLeft = true; }
				if (parentKey == 39) { keyRight = true; }
			}
		}
	}
}

function inputUp(e) {
	var keynum;
	keyUp = false;
	keyDown = false;
	keyLeft = false;
	keyRight = false;
	if(window.event) { // IE8 and earlier
		keynum = e.keyCode;
	} else if(e.which) {// IE9/Firefox/Chrome/Opera/Safari
		keynum = e.which;
	}
	
	if (keynum == 32) { 
		spaceBar = false;
		parentKey = 0;
		childKey = 0;
	} else if (keynum == 27) { 
		keyESC = false; 
		parentKey = 0;
		childKey = 0;
	} else {
		if (parentKey == keynum) { parentKey = 0; }
		if (childKey == keynum) { childKey = 0; }
		if (parentKey == 0 && childKey !== 0) { parentKey = childKey; }
		//alert ("child key does not equal zero");
	}
	//alert (keynum);
	if (parentKey !== 0) {
		if (childKey !== 0) {
			if (childKey == 38) { keyUp = true; }
			if (childKey == 40) { keyDown = true; }
			if (childKey == 37) { keyLeft = true; }
			if (childKey == 39) { keyRight = true; }
		} else {
			if (parentKey !== 0) {
				if (parentKey == 38) { keyUp = true; }
				if (parentKey == 40) { keyDown = true; }
				if (parentKey == 37) { keyLeft = true; }
				if (parentKey == 39) { keyRight = true; }
			}
		}
	}

}

//---------------------------------------------------------------- System Intro
function systemIntro() {
	timer++;
	buffer = document.getElementById("buffer");
	context = buffer.getContext("2d");
	if (timer <= 60) { logoY = timer; } else { logoY = 60; }
	context.drawImage(logo, 30, logoY);
	//Copy the buffer to the canvas
	canvas = document.getElementById("canvas");
	context_canvas = canvas.getContext('2d');
	context_canvas.drawImage(buffer, 0, 0, 480, 430);
	if (timer <= 80) {
		setTimeout("systemIntro()",50);
	} else {
		timer = 0;
		setTimeout("titleScreen()",100);
	}
}

//---------------------------------------------------------------- Display Title Screen
function titleScreen() {
	buffer = document.getElementById("buffer");
	context = buffer.getContext("2d");
	context.drawImage(title, 0, 0);
	//Copy the buffer to the canvas
	canvas = document.getElementById("canvas");
	context_canvas = canvas.getContext('2d');
	context_canvas.drawImage(buffer, 0, 0, 480, 430);
	if (spaceBar == true) {
		newGame();
		gameMode = "map";
		playerX = 5 * 16;
		playerY = 5 * 16;
		loadMap(1);
		loadDialog(11);
		setTimeout("mapLoop()",50);
	} else {
		setTimeout("titleScreen()",50);
	}
}

//---------------------------------------------------------------- Map Mode Loop
function mapLoop() {
	//Animation Timers
	npcTimer++;
	if (npcTimer > 1000) { npcTimer = 0; }
	playerTimer++;
	if (playerTimer > 1000) { playerTimer = 0; }
	foxTimer++;
	if (foxTimer > 1000) { foxTimer = 0; }
	foxWaitTimer++;
	if (foxWaitTimer > 1000) { foxWaitTimer = 0; }

	//Cool Down Timers
	textCooldown--;
	if (textCooldown <= 0) { textCooldown = 0; }

	//Player Last Position
	playerLastX = playerX;
	playerLastY = playerY;
	
	//Input & Player Collision Detection
	if (inputMode == "player") {
		//Move Player
		if (keyUp == true) { 
			playerY = playerY - playerSpeed; 
			
			if (playerX + 4 >= 1 && playerX + 4 < 160 && playerY + playerHeight - 2 >= 1 && playerY + playerHeight - 2 < 144 - 16) {
				if (collisionMap[Math.floor((playerX + 4) / 16)][Math.floor((playerY + playerHeight - 2) / 16)] >= 1) {
					//console.log("left");
					playerY = playerLastY; 
					playerX = playerLastX;
				}
			}
			if (playerX + playerWidth - 4 >= 1 && playerX + playerWidth - 4 < 160 - 16 && playerY + playerHeight - 2 >= 1 && playerY + playerHeight - 2 < 144 - 16) {
				if (collisionMap[Math.floor((playerX + playerWidth - 4) / 16)][Math.floor((playerY + playerHeight - 2) / 16)] >= 1) {
					//alert("right");
					playerY = playerLastY; 
					playerX = playerLastX;
				}
			}
			
		} else if (keyDown == true) { 
			playerY = playerY + playerSpeed; 
		
			if (playerX + 4 >= 1 && playerX + 4 < 160 && playerY + playerHeight + 2 >= 1 && playerY + playerHeight + 2 < 144) {
				if (collisionMap[Math.floor((playerX + 4) / 16)][Math.floor((playerY + playerHeight + 2) / 16)] >= 1) {
					//alert("left");
					playerY = playerLastY; 
					playerX = playerLastX;
				}
			}
			if (playerX + playerWidth - 4 >= 1 && playerX + playerWidth - 4 < 160 - 16 && playerY + playerHeight + 2 >= 1 && playerY + playerHeight + 2 < 144) {
				if (collisionMap[Math.floor((playerX - 4 + playerWidth) / 16)][Math.floor((playerY + playerHeight + 2) / 16)] >= 1) {
					//alert("right");
					playerY = playerLastY; 
					playerX = playerLastX;
				}
			}
			
		} else if (keyLeft == true) {
			playerX = playerX - playerSpeed;
			if (playerX + 4 >= 1 && playerX + 4 < 160 && playerY + playerHeight - 2 >= 1 && playerY + playerHeight - 2 < 144 - 16) {
				if (collisionMap[Math.floor((playerX + 4) / 16)][Math.floor((playerY + playerHeight - 2) / 16)] >= 1) {
					playerY = playerY; 
					playerX = Math.floor((playerX + 16) / 16) * 16;
				}
			}
		} else if (keyRight == true) { 
			playerX = playerX + playerSpeed; 
			if (playerX + playerWidth - 4 >= 1 && playerX + playerWidth - 4 < 160 && playerY + playerHeight - 2 >= 1 && playerY + playerHeight - 2 < 144 - 16) {
				if (collisionMap[Math.floor((playerX - 4 + playerWidth) / 16)][Math.floor((playerY + playerHeight - 2) / 16)] >= 1) {
					playerY = playerY; 
					playerX = Math.floor((playerX) / 16) * 16;
				}
			}

		}
	} else if (inputMode == "textbox") {
		if (spaceBar == true) {}
		
	}

	//Event Detection
	if (playerY <= 0 - (playerHeight / 2)) { 
		loadMap(eventTop);
		var distance = playerY - foxY;
		playerY = 144 - (playerHeight / 2) - 2;
		foxY = playerY - distance;
	} else if (playerY >= 144 - (playerHeight / 2)) { 
		loadMap(eventBottom);
		var distance = playerY - foxY;
		playerY = 0 - (playerHeight / 2) + 2;
		foxY = playerY - distance;
	} else if (playerX <= 0 - (playerWidth / 2)) { 
		loadMap(eventLeft);
		var distance = playerX - foxX;
		playerX = 160 - (playerWidth / 2) - 2;
		foxX = playerX - distance;
	} else if (playerX >= 160 - (playerWidth / 2)) { 
		loadMap(eventRight);
		var distance = playerX - foxX;
		playerX = 0 - (playerWidth / 2) + 2;
		foxX = playerX - distance;
	}
	
	//Exit Detection
	if (exitCount >= 1) {
		for (i = 1; i <= exitCount; i++) {
			if (Math.floor((playerX + 8) / 16) == exitX[i - 1] && Math.floor((playerY + 4) / 16) == exitY[i - 1]) { 
				//load next map
				playerX = exitPlayerX[i - 1];
				playerY = exitPlayerY[i - 1];
				loadMap(exitDestination[i - 1])
			}
		}
	}
	
	//NPC Dialog Detection
	//	if the player is within n pixels of an npc, talk to it.
	if (npcCount >= 1 && spaceBar == true && inputMode == "player" && textCooldown == 0) {
		for (i = 1; i <= npcCount; i++) {
			var x1 = (npcX[i - 1] * 16) + 8;
			var x2 = playerX + 8;		
			var y1 = (npcY[i - 1] * 16) + 8;
			var y2 = playerY + 8;	
			//alert ("X1: "+x1+", X2: "+x2+", Y1: "+y1+", Y2: "+y2);
			var sqr = Math.floor(Math.sqrt(Math.pow(x1 - x2, 2)+Math.pow(y1 - y2, 2)));
			//alert (sqr);
			if (sqr <= npcRadius[i - 1]) {
				loadDialog(npcDialog[i - 1]);
			}
		}
	}

	//Special Animations
	if (specialAnimation == 1) {
		//Mom Running Towards you
		if (specialAnimationStart == false) {
			specialAnimationStart = true;		
		}
		npcOffsetX = npcOffsetX - 3;
		if (npcOffsetX <= -16) {
			npcOffsetX = 0;
			npcX[0] = npcX[0] - 1;
			if (npcX[0] <= 7) {
				specialAnimation = 2;
				//specialAnimationStart = false;		
				npcOffsetX = 0;
				loadDialog(36);
			}
		}
	} else if (specialAnimation == 2) {
		//Mom Jumping
		specialCooldown++;
		if (specialAnimationStart == false) {
			specialAnimationStart = true;		
		}
		if (specialCooldown >= 0) {
			specialCooldown = 0;
			if (jump == 0) {
				//jumping up
				npcOffsetY = npcOffsetY - 2;
				if (npcOffsetY <= -4) {
					jump = 1;	
				}
			} else {
				//fall back down
				npcOffsetY = npcOffsetY + 2;
				if (npcOffsetY >= 0) { 
					//specialAnimation = 5;
					npcOffsetY = 0;
					jump = 0;
					if (line1 >= 8 & npcX[0] <= 7) {
						//npcSpriteIndex[0] = 3;
						collisionMap[9][5] = 0;
						specialAnimation = 3;
					}
				}
			}
		}
	} else if (specialAnimation == 3) {
		//Mom running away from you
		collisionMap[npcX[0]][npcY[0]] = 0;
		if (specialAnimationStart == false) {
			specialAnimationStart = true;		
		}
		npcOffsetX = npcOffsetX + 4;
		if (npcOffsetX >= 16) {
			npcOffsetX = 0;
			npcX[0] = npcX[0] + 1;
			if (npcX[0] >= 10) {
				specialAnimation = 0;
				specialAnimationStart = false;		
				npcOffsetX = 0;
			}
		}
	} else if (specialAnimation == 4) {
		//After Boss Battle
		collisionMap[npcX[0]][npcY[0]] = 0;
		collisionMap[npcX[1]][npcY[1]] = 0;
		collisionMap[npcX[2]][npcY[2]] = 0;
		collisionMap[npcX[3]][npcY[3]] = 0;
		if (specialAnimationStart == false) {
			specialAnimationStart = true;		
			loadDialog(38);
		}
		if (line1 >= 8) {
			npcOffsetX = npcOffsetX - 4;
			if (npcOffsetX <= -16) {
				npcOffsetX = 0;
				npcX[0] = npcX[0] - 1;
				npcX[1] = npcX[1] - 1;
				npcX[2] = npcX[2] - 1;
				npcX[3] = npcX[3] - 1;
				if (npcX[0] <= 0) { npcX[0] = 9; npcY[0] = 9; }
				if (npcX[1] <= 0) { npcX[1] = 9; npcY[1] = 9; }
				if (npcX[2] <= 0) {
					npcY[2] = 9;
					specialAnimation = 0;
					specialAnimationStart = false;		
					npcOffsetX = 0;
				}
				if (npcX[3] <= 0) { npcX[3] = 9; npcY[3] = 9;}
			}
		}
	} else if (specialAnimation == 5) {
		//After Boss Battle
		collisionMap[npcX[1]][npcY[1]] = 0;
		if (specialAnimationStart == false) {
			specialAnimationStart = true;		
		}
		npcOffsetX = npcOffsetX - 4;
		if (npcOffsetX <= -16) {
			npcOffsetX = 0;
			npcX[1] = npcX[1] - 1;
			if (npcX[1] <= 0) {
				specialAnimation = 6;
				specialAnimationStart = false;		
				npcOffsetX = 0;
			}
		}
	} else if (specialAnimation == 6) {
		//After Boss Battle
		collisionMap[npcX[2]][npcY[2]] = 0;
		if (specialAnimationStart == false) {
			specialAnimationStart = true;		
		}
		npcOffsetX = npcOffsetX - 4;
		if (npcOffsetX <= -16) {
			npcOffsetX = 0;
			npcX[2] = npcX[2] - 1;
			if (npcX[2] <= 0) {
				specialAnimation = 0;
				specialAnimationStart = false;		
				npcOffsetX = 0;
			}
		}
	}


	
	//Draw Scene
	i=i+1;
	if (i >= 3) { i = 1; }
	buffer = document.getElementById("buffer");
	context = buffer.getContext("2d");
	context.globalAlpha = 1.0;
	//if (playerStatus == "Poisoned") { context.globalAlpha = 0.5; }
	for (ix = 0; ix <= 9; ix++) { 
		for (iy = 0; iy <= 8; iy++) { 
			//alert ("drawloop");
			context.drawImage(tile[tileMap[ix][iy]], ix * 16, iy * 16, 16, 16);
			if (tileMap[ix][iy] == 1 && raining == true && noRain == false) { 
				if (Math.floor(Math.random() * 8) == 1) {
					context.drawImage(tile[96], ix * 16, iy * 16, 16, 16);
				}
			}
		}
	}
	
	//Draw NPC
	if (npcCount >= 1) {
		if (npcTimer >= 6) {
			npcFrame = npcFrame + 1;
			npcTimer = 0;
		}
		if (npcFrame > 1) { npcFrame = 0; }
		for (i = 1; i <= npcCount; i++) {
			//alert(npcHidden[i - 1]);
			if (npcHidden[i - 1] !== 1) { context.drawImage(npcSprite[npcSpriteIndex[i - 1]][npcFrame], npcX[i - 1] * 16 + npcOffsetX, npcY[i - 1] * 16 + npcOffsetY); }
			//context.drawImage(npcSprite[npcSpriteIndex[i - 1]][npcFrame], npcX[i - 1] * 16 + npcOffsetX, npcY[i - 1] * 16 + npcOffsetY);
		}
	}

	//Animate Fox
	if (partyFox == true && foxBlock == false) {
		if (foxTimer >= 3) {
			foxFrame = foxFrame + 1;
			foxTimer = 0;
		}
		if (foxFrame > 1) { foxFrame = 0; }
		
		var sqr = Math.floor(Math.sqrt(Math.pow(playerX - foxX, 2)+Math.pow(playerY - foxY, 2)));
		if (sqr >= 50) { foxWait = false; }
		if (sqr >= 100) { foxSpeed = 6; }
		if (foxWait == false) {
			if (sqr >= 20) {
				//Check if the fox is about to move diagonally
				var correction = 0;
				if ((foxX - 8 >= playerX || foxX + 24 <= playerX + 16) && (foxY + 8 <= playerY || foxY + 8 >= playerY + 16)) { correction = 1; }
	
				if (foxX - 8 >= playerX || foxX + 24 <= playerX + 16) {
					if (playerX < foxX) { 
						foxX = foxX - (foxSpeed - correction);
						foxSprite = 30;
					} else if (playerX > foxX) {
						foxX = foxX + (foxSpeed - correction);
						foxSprite = 29;
					}
				}
				if (foxY + 8 <= playerY || foxY + 8 >= playerY + 16) {
					if (playerY < foxY) { 
						foxY = foxY - (foxSpeed - correction);
						foxSprite = 35;
					} else if (playerY > foxY) {
						foxY = foxY + (foxSpeed - correction);
						foxSprite = 34;
					} 
				}
				foxWaitTimer = 0;
			} else {
				if (foxSprite == 29) { foxSprite = 31; }
				if (foxSprite == 30) { foxSprite = 32; }
				if (foxSprite == 34) { foxSprite = 36; }
				if (foxSprite == 35) { foxSprite = 37; }
				if (foxWaitTimer >= 50) { 
					if (foxSprite == 31) {
						foxWait = true;
						foxSprite = 28;
					} else {
						foxWait = true;
						foxSprite = 33;
					}
				}
				foxSpeed = 4;
			}
		}
	}
	if (foxBlock == true) { 
		foxWait = true;
		forWaitTimer = 0;
		if (foxSprite == 31) {
			foxWait = true;
			foxSprite = 28;
		} else {
			foxWait = true;
			foxSprite = 33;
		}
	}

	//Animate Player
	if (inputMode == "player") {
		if (keyUp == true) {
			if (playerSpriteLast == 1) { playerSpriteLast = 2; } else { playerSpriteLast = 1; }
		} else if (keyDown == true) {
			if (playerSpriteLast == 3) { playerSpriteLast = 4; } else { playerSpriteLast = 3; }
		} else if (keyLeft == true) {
			if (playerSpriteLast == 5) { playerSpriteLast = 6; } else { playerSpriteLast = 5; }
		} else if (keyRight == true) {
			if (playerSpriteLast == 7) { playerSpriteLast = 8; } else { playerSpriteLast = 7; }
		} else {
			if (playerSpriteLast == 1) { playerSpriteLast = 9; }
			if (playerSpriteLast == 2) { playerSpriteLast = 9; }
			if (playerSpriteLast == 3) { playerSpriteLast = 0; }
			if (playerSpriteLast == 4) { playerSpriteLast = 0; }
			if (playerSpriteLast == 6) { playerSpriteLast = 5; }
			if (playerSpriteLast == 8) { playerSpriteLast = 7; }
		}
	}
	
	if (playerY > foxY - 3) {
		// Fox
		 if (partyFox == true && foxBlock == false) { context.drawImage(npcSprite[foxSprite][foxFrame], foxX, foxY); }
		// Draw Player
		context.drawImage(playerSprite[playerSpriteLast], playerX, playerY);
	} else {
		// Draw Player
		context.drawImage(playerSprite[playerSpriteLast], playerX, playerY);
		// Fox
		 if (partyFox == true && foxBlock == false) { context.drawImage(npcSprite[foxSprite][foxFrame], foxX, foxY); }
	}

//Redraw the top of all the doors
	if (currentMap == 10) {	context.drawImage(tile[27], 3 * 16, 2 * 16, 16, 16); }
	if (currentMap == 10) {	context.drawImage(tile[81], 7 * 16, 2 * 16, 16, 16); }
	if (currentMap == 11) {	context.drawImage(tile[77], 2 * 16, 2 * 16, 16, 16); }
	if (currentMap == 11) {	context.drawImage(tile[88], 7 * 16, 2 * 16, 16, 16); }
	if (currentMap == 12) {	context.drawImage(tile[93], 6 * 16, 2 * 16, 16, 16); }
	if (currentMap == 12) {	context.drawImage(tile[94], 7 * 16, 2 * 16, 16, 16); }
	if (currentMap == 15) {	context.drawImage(tile[19], 2 * 16, 2 * 16, 16, 16); }
	if (currentMap == 15) {	context.drawImage(tile[19], 7 * 16, 2 * 16, 16, 16); }
	if (currentMap == 16) {	context.drawImage(tile[19], 5 * 16, 2 * 16, 16, 16); }

//Redraw the roof
	if (currentMap == 15) {	context.drawImage(tile[15], 1 * 16, 1 * 16, 16, 16); }
	if (currentMap == 15) {	context.drawImage(tile[17], 3 * 16, 1 * 16, 16, 16); }
	if (currentMap == 15) {	context.drawImage(tile[5], 2 * 16, 0 * 16, 16, 16); }
	if (currentMap == 15) {	context.drawImage(tile[15], 6 * 16, 1 * 16, 16, 16); }
	if (currentMap == 15) {	context.drawImage(tile[17], 8 * 16, 1 * 16, 16, 16); }
	if (currentMap == 15) {	context.drawImage(tile[5], 7 * 16, 0 * 16, 16, 16); }
	if (currentMap == 16) {	context.drawImage(tile[15], 4 * 16, 1 * 16, 16, 16); }
	if (currentMap == 16) {	context.drawImage(tile[17], 6 * 16, 1 * 16, 16, 16); }
	if (currentMap == 16) {	context.drawImage(tile[5], 5 * 16, 0 * 16, 16, 16); }

//Redraw the black borders
	if (currentMap == 2) {	context.drawImage(tile[0], 3 * 16, 7 * 16, 16, 16); }
	if (currentMap == 2) {	context.drawImage(tile[0], 4 * 16, 7 * 16, 16, 16); }
	if (currentMap == 2) {	context.drawImage(tile[0], 5 * 16, 7 * 16, 16, 16); }
	if (currentMap == 3) {	context.drawImage(tile[0], 3 * 16, 7 * 16, 16, 16); }
	//if (currentMap == 3) {	context.drawImage(tile[0], 1 * 16, 5 * 16, 16, 16); }
	if (currentMap == 3) {	context.drawImage(tile[0], 4 * 16, 7 * 16, 16, 16); }
	if (currentMap == 3) {	context.drawImage(tile[0], 5 * 16, 7 * 16, 16, 16); }
	if (currentMap == 4) {	context.drawImage(tile[0], 3 * 16, 7 * 16, 16, 16); }
	if (currentMap == 4) {	context.drawImage(tile[0], 4 * 16, 7 * 16, 16, 16); }
	if (currentMap == 4) {	context.drawImage(tile[0], 5 * 16, 7 * 16, 16, 16); }
	if (currentMap == 5) {	context.drawImage(tile[0], 3 * 16, 7 * 16, 16, 16); }
	if (currentMap == 5) {	context.drawImage(tile[0], 4 * 16, 7 * 16, 16, 16); }
	if (currentMap == 5) {	context.drawImage(tile[0], 5 * 16, 7 * 16, 16, 16); }
	if (currentMap == 6) {	context.drawImage(tile[0], 3 * 16, 7 * 16, 16, 16); }
	if (currentMap == 6) {	context.drawImage(tile[0], 4 * 16, 7 * 16, 16, 16); }
	if (currentMap == 6) {	context.drawImage(tile[0], 5 * 16, 7 * 16, 16, 16); }
	if (currentMap == 7) {	context.drawImage(tile[0], 3 * 16, 7 * 16, 16, 16); }
	if (currentMap == 7) {	context.drawImage(tile[0], 4 * 16, 7 * 16, 16, 16); }
	if (currentMap == 7) {	context.drawImage(tile[0], 5 * 16, 7 * 16, 16, 16); }
	if (currentMap == 8) {	context.drawImage(tile[0], 3 * 16, 7 * 16, 16, 16); }
	if (currentMap == 8) {	context.drawImage(tile[0], 4 * 16, 7 * 16, 16, 16); }
	if (currentMap == 8) {	context.drawImage(tile[0], 5 * 16, 7 * 16, 16, 16); }
	if (currentMap == 9) {	context.drawImage(tile[0], 3 * 16, 7 * 16, 16, 16); }
	if (currentMap == 9) {	context.drawImage(tile[0], 4 * 16, 7 * 16, 16, 16); }
	if (currentMap == 9) {	context.drawImage(tile[0], 5 * 16, 7 * 16, 16, 16); }


//Draw Rain
	if (raining == true && noRain == false) {
		context.globalAlpha = 0.5;
		rainSprite++;
		if (rainSprite >= 100) { rainSprite = 97; }
		if (rainSprite <= 96) { rainSprite = 97; }
		for (ix = 0; ix <= 9; ix++) { 
			for (iy = 0; iy <= 8; iy++) { 
				//alert ("drawloop");
				context.drawImage(tile[rainSprite], ix * 16, iy * 16, 16, 16);
			}
		}
		//Draw Lightning
		if (Math.floor(Math.random() * 150) == 1) { 
			lightning = true;
			flashLength = Math.floor(Math.random() * 10) + 5;
			flashCounter = 0;
		}
		if (lightning == true) {
			flashCounter++;
			context.fillStyle = '#ffffff';
			if (flashCounter >= 3 && flashCounter <= 5 ) { context.fillRect (0, 0, 160, 144); }
			if (flashCounter >= flashLength - 2) { 
				//context.globalAlpha = 1; 
				context.fillRect (0, 0, 160, 144);
			}
			if (flashCounter >= flashLength) { lightning = false; }
			
		}
		context.globalAlpha = 1;
	}
	
	//Player Status Effects on Map
	if (inputMode == "player") {
		//Player Status Timer
		playerStatusTimer++;
		if (playerStatus == "Poisoned") { 
			if (playerStatusTimer >= 75) { 
				playerStatusTimer = 0;
				playerHealth = playerHealth - 10; 
				context.globalAlpha = 1;
				context.fillStyle = '#808080';
				context.fillRect (0, 0, 160, 144);
			}
		} else if (playerStatus == "Stung") {
			if (playerStatusTimer >= 30) { 
				playerStatusTimer = 0;
				playerHealth = playerHealth - 1;
				context.globalAlpha = 1;
				context.fillStyle = '#808080';
				context.fillRect (0, 0, 160, 144);
			}
		} else { playerStatusTimer = 0; }
	}
	
	//Menu --------------------------------------------------------------------- Menu
	// Check Menu Key
	if (keyESC == true) { 
		keyESC = false;
		if (inputMode == "player") {
			inputMode = "menu";
			menuMode = "index";
			menuSelection = 0;
		} else if (menuMode == "index") {
			inputMode = "player";
			menuSelection = 0;
			menuMode = "none";
		} else if (menuMode == "inventory") {
			menuMode = "index";
			menuSelection = 0;
		} else if (menuMode == "itemmenu") {
			menuMode = "inventory";
			menuSelection = 0;
		} else if (menuMode == "stats") {
			menuMode = "index";
			menuSelection = 0;
		} else if (menuMode == "equipment") {
			menuMode = "index";
			menuSelection = 0;
		} else if (menuMode == "equipment-armor") {
			menuMode = "equipment";
			menuSelection = 2;
		} else if (menuMode == "equipment-weapon") {
			menuMode = "equipment";
			menuSelection = 1;
		}
	}
	//Menu Mode
	if (inputMode == "menu") {
		// Check Menu Input
		if (keyUp == true) {
			keyUp = false;
			if (menuMode == "index") { 
				menuSelection--;
				if (menuSelection <= -1) { menuSelection = 3; }
			} else if (menuMode == "inventory") { 
				menuSelection--;
				if (menuSelection <= -1) { menuSelection = 7; }
				if (menuSelection >= playerInventoryCount - ((menuPage-1)*6) && menuSelection <= 5) { menuSelection = playerInventoryCount - ((menuPage-1)*6) - 1; }
				if (menuSelection <= 5 && playerInventoryCount == 0) { menuSelection = 7; }
			} else if (menuMode == "itemmenu") { 
				menuSelection--;
				if (menuSelection <= -1) { menuSelection = 2; }
			} else if (menuMode == "equipment") { 
				menuSelection--;
				if (menuSelection <= -1) { menuSelection = 2; }
				if (menuSelection >= 3) { menuSelection = 0; }
			} else if (menuMode == "equipment-weapon") {
				//count items in the menu
				var menuItemCount = new Number();
				for ($i = 0; $i <= 2; $i++) {
					if (equipment[$i][4] == 1) { 
						menuItemCount++;
					}
				}
				menuSelection--;
				if (menuSelection <= -1) { menuSelection = menuItemCount; }
				if (menuSelection >= menuItemCount + 1) { menuSelection = 0; }
			} else if (menuMode == "equipment-armor") {
				//count items in the menu
				var menuItemCount = new Number();
				for ($i = 3; $i <= 5; $i++) {
					if (equipment[$i][4] == 1) { 
						menuItemCount++;
					}
				}
				menuSelection--;
				if (menuSelection <= -1) { menuSelection = menuItemCount; }
				if (menuSelection >= menuItemCount + 1) { menuSelection = 0; }
			}	
			
		}
		if (keyDown == true) {
			keyDown = false;
			if (menuMode == "index") {
				menuSelection++;
				if (menuSelection >= 4) { menuSelection = 0; } 
			} else if (menuMode == "inventory") { 
				menuSelection++;
				if (menuSelection >= 8) { menuSelection = 0; }
				if (menuSelection >= playerInventoryCount - ((menuPage-1)*6) && menuSelection <= 6) { menuSelection = 6; }
			} else if (menuMode == "itemmenu") { 
				menuSelection++;
				if (menuSelection >= 3) { menuSelection = 0; }
			} else if (menuMode == "equipment") { 
				menuSelection++;
				if (menuSelection <= -1) { menuSelection = 3; }
				if (menuSelection >= 4) { menuSelection = 1; }
			} else if (menuMode == "equipment-weapon") {
				//count items in the menu
				var menuItemCount = new Number();
				for ($i = 0; $i <= 2; $i++) {
					if (equipment[$i][4] == 1) { 
						menuItemCount++;
					}
				}
				menuSelection++;
				if (menuSelection <= -1) { menuSelection = menuItemCount; }
				if (menuSelection >= menuItemCount + 1) { menuSelection = 0; }
			} else if (menuMode == "equipment-armor") {
				//count items in the menu
				var menuItemCount = new Number();
				for ($i = 3; $i <= 5; $i++) {
					if (equipment[$i][4] == 1) { 
						menuItemCount++;
					}
				}
				menuSelection++;
				if (menuSelection <= -1) { menuSelection = menuItemCount; }
				if (menuSelection >= menuItemCount + 1) { menuSelection = 0; }
			}
		}
		if (keyLeft == true) {
			keyLeft == false;
			if (menuMode == "inventory") { if (menuSelection == 7) { menuSelection = 6; } }
		}
		if (keyRight == true) {
			keyRight == false;
			if (menuMode == "inventory") { if (menuSelection == 6) { menuSelection = 7; } }
		}
		if (spaceBar == true) {
			spaceBar = false;
			if (menuMode == "index") {
				if (menuSelection == 0) { 
					menuMode = "inventory";
					menuPage = 1;
					//Calculate page total
					playerInventoryCount = 0;
					for (i = 0; i <= itemsCount; i++) {
						if (items[i][4] >= 1) { 
							playerInventory[playerInventoryCount] = i;
							playerInventoryCount++; 
						}
					}
					menuPageTotal = Math.ceil(playerInventoryCount / 6);
					if (playerInventoryCount == 0) {menuSelection = 7; }

				}
				if (menuSelection == 1) { 
					menuMode = "equipment";
				}
				if (menuSelection == 2) { menuMode = "stats"; }
				if (menuSelection == 3) { 
					inputMode = "player";
					menuMode = "none";
				}
			} else if (menuMode == "stats") {
				menuSelection = 2;
				menuMode = "index"; 
			} else if (menuMode == "equipment") {
				if (menuSelection == 1) {
					menuSelection = 0;
					menuMode = "equipment-weapon";
				}
				if (menuSelection == 2) { 
					menuSelection = 0;
					menuMode = "equipment-armor";
				}
				if (menuSelection == 3) { 
					menuSelection = 0;
					menuMode = "index";
				}
			} else if (menuMode == "equipment-weapon") {
				//count items in the menu
				var menuItem = new Array();
				var menuItemCount = new Number();
				for ($i = 0; $i <= 2; $i++) {
					if (equipment[$i][4] == 1) { 
						menuItemCount++;
						menuItem[menuItemCount] = $i;
					}
				}
				if (menuSelection == menuItemCount) { 
					menuSelection = 1;
					menuMode = "equipment";
				} else {
					//equip selected item
					playerEquipment[0] = menuSelection;
										menuSelection = 2;
					menuMode = "equipment";
					menuSelection = 1;
					menuMode = "equipment";
				}			
			} else if (menuMode == "equipment-armor") {
				//count items in the menu
				var menuItem = new Array();
				var menuItemCount = new Number();
				for ($i = 3; $i <= 5; $i++) {
					if (equipment[$i][4] == 1) { 
						menuItemCount++;
						menuItem[menuItemCount] = $i;
					}
				}
				if (menuSelection == menuItemCount) { 
					menuSelection = 2;
					menuMode = "equipment";
				} else {
					//equip selected item
					playerEquipment[1] = menuSelection + 3;
					menuSelection = 2;
					menuMode = "equipment";
				}
				
			} else if (menuMode == "inventory") {
				if (menuSelection <= 5) {
					selectedItem = playerInventory[menuSelection+((menuPage-1) * 6)];
					menuSelection = 0;
					menuMode = "itemmenu";
				} else if (menuSelection == 6) {
					menuSelection = 0;
					menuPage++;
					if (menuPage > menuPageTotal) { menuPage = 1; }
					if (playerInventoryCount == 0) { menuSelection = 7; }

				} else if (menuSelection == 7) {
					menuSelection = 0;
					menuMode = "index";	
				}
			} else if (menuMode == "itemmenu") {
				if (menuSelection == 0) {
					//use item from the menu
					menuMode = "useitem";
					if (selectedItem == "0" || selectedItem == "1" || selectedItem == "2") { //Health Items
						if (playerHealth < playerMaxHealth) {
							items[selectedItem][4]--;
							playerHealth = playerHealth + parseFloat(items[selectedItem][3]);
							loadDialog(0);
						} else {
							loadDialog(2);
						}
					} else if (selectedItem == "3" || selectedItem == "4") { //Status Cure Items
						if (playerStatus == items[selectedItem][2]) {
							playerStatus = "Healthy";
							items[selectedItem][4]--;
							loadDialog(4);
						} else {
							loadDialog(5);
						}						
					} else if (selectedItem >= "5") { //Unuseable Items
						loadDialog(3);
					}
				} else if (menuSelection == 1) {
					//info dialog
					menuMode = "iteminfo";
					loadDialog(1);
				} else if (menuSelection == 2) {
					menuSelection = 0;
					menuMode = "inventory";
				}
			}
		}
	}

	//Draw Menu Index
	if (menuMode == "index") {
		context.fillStyle = '#000000';
		context.fillRect (105, 2, 53, 72);
		context.fillStyle = '#FFFFFF';
		context.fillRect (107, 4, 49, 68);
		context.fillStyle = '#000000';
		context.font = "12px Sans-Serif";
		context.fillText("Inv", 120, 16); 
		context.fillText("Equip", 120, 32); 
		context.fillText("Stats", 120, 48); 
		context.fillText("Exit", 120, 64); 
		context.drawImage(menuArrow, 110, 16 * menuSelection + 7, 7, 10);
	}
	
	//Draw Stats Menu
	if (menuMode == "stats") {
		context.fillStyle = '#000000';
		context.fillRect (0, 0, 160, 144);
		context.fillStyle = '#FFFFFF';
		context.fillRect (2, 2, 156, 140);
		context.fillStyle = '#000000';
		context.font = "12px Sans-Serif";
		context.fillText("Stats", 8, 18); 
		context.fillText("Lvl "+playerLevel, 120, 18); 
		context.fillText("Health", 24, 40); 
		context.fillText(playerHealth+"/"+playerMaxHealth, 90, 40); 
		context.fillText("Status", 24, 56); 
		context.fillText(playerStatus, 90, 56); 
		context.fillText("Attack", 24, 72); 
		context.fillText(playerAttack, 90, 72); 
		context.fillText("Defence", 24, 88);
		context.fillText(playerDefence, 90, 88);
		context.fillText("Exp", 24, 104); 
		context.fillText(playerExp, 90, 104); 
		context.fillText("Nxt Lvl", 24, 120);
		context.fillText(level[playerLevel+1]-playerExp, 90, 120);
		context.fillText("Exit", 130, 135); 
		context.drawImage(menuArrow, 120, 126, 7, 10);
	}
	
	//Draw Inventory Menu
	if (menuMode == "inventory" || menuMode == "itemmenu" || menuMode == "iteminfo") {
		context.fillStyle = '#000000';
		context.fillRect (0, 0, 160, 144);
		context.fillStyle = '#FFFFFF';
		context.fillRect (2, 2, 156, 140);
		context.fillStyle = '#000000';
		context.font = "12px Sans-Serif";
		context.fillText("Inventory", 8, 18);
		
		if (playerInventoryCount == 0) { 
			context.fillText("Page 0/0", 100, 18);
		} else {
			context.fillText("Page "+menuPage+"/"+menuPageTotal, 100, 18);
		}
		var loopMax = playerInventoryCount - ((menuPage-1)*6);
		//alert(loopMax);
		if (loopMax > 6) { loopMax = 6; }
		for (i = 0; i <= loopMax-1; i++) {
			context.fillText(items[playerInventory[i + ((menuPage-1)*6)]][0], 24, i * 16 + 36);
			context.fillText(items[playerInventory[i + ((menuPage-1)*6)]][4], 120, i * 16 + 36);
		}
		context.fillText("Next", 24, 135); 
		context.fillText("Exit", 130, 135); 
		if (menuMode == "inventory") {
			
			if (menuSelection <= 5) {
				context.drawImage(menuArrow, 14, 16 * menuSelection + 27, 7, 10);
			} else if (menuSelection == 6) {
				context.drawImage(menuArrow, 14, 126, 7, 10);
			} else if (menuSelection == 7) {
				context.drawImage(menuArrow, 120, 126, 7, 10);
			}
		}
	}
	
	//Draw Item Menu
	if (menuMode == "itemmenu" || menuMode == "iteminfo") {
		context.fillStyle = '#000000';
		context.fillRect (100, 80, 52, 54);
		context.fillStyle = '#FFFFFF';
		context.fillRect (102, 82, 48, 50);
		context.fillStyle = '#000000';
		context.font = "12px Sans-Serif";
		context.fillText("Use", 116, 96);
		context.fillText("Info", 116, 112);
		context.fillText("Exit", 116, 128);
		context.drawImage(menuArrow, 108, 16 * menuSelection + 86, 7, 10);
	}
			
	//Draw Equip Menu
	if (menuMode == "equipment" || menuMode == "equipment-weapon" || menuMode == "equipment-armor") {
		context.fillStyle = '#000000';
		context.fillRect (0, 0, 160, 144);
		context.fillStyle = '#FFFFFF';
		context.fillRect (2, 2, 156, 140);
		context.fillStyle = '#000000';
		context.font = "12px Sans-Serif";
		context.fillText("Equipment", 8, 18);

		context.fillText("Weapon", 20, 40);
		context.fillText(equipment[playerEquipment[0]][0], 50, 56);
		context.fillStyle = '#999999';
		context.fillText("(Hit "+equipment[playerEquipment[0]][6]+" to "+equipment[playerEquipment[0]][8]+")", 50, 72);
		context.fillStyle = '#000000';
	
		context.fillText("Armor", 20, 88);
		context.fillText(equipment[playerEquipment[1]][0], 50, 104);
		context.fillStyle = '#999999';
		context.fillText("(Def +"+equipment[playerEquipment[1]][3]+")", 50, 120);
		context.fillStyle = '#000000';

		context.fillText("Exit", 130, 135); 
		if (menuMode == "equipment") {
			if (menuSelection == 1 || menuSelection == 2) {
				context.drawImage(menuArrow, 40, (menuSelection * 48) - 1, 7, 10);
			} else {
				context.drawImage(menuArrow, 120, 126, 7, 10);
			}
		}
	}
	
	//Draw Equip Item Menu - Weapon
	if (menuMode == "equipment-weapon") {
		var menuItem = new Array();
		var menuItemCount = new Number();
		var menuTop = new Number();
		var menuLeft = new Number();
		var menuWidth = new Number();
		for ($i = 0; $i <= 2; $i++) {
			if (equipment[$i][4] == 1) { 
				menuItemCount++;
				menuItem[menuItemCount] = $i;
				if ($i == 0) { menuWidth = 90; }
				if ($i == 1) { menuWidth = 100; }
				if ($i == 2) { menuWidth = 100; }
			}
		}
		menuItemCount++;
		menuHeight = menuItemCount * 16 +2;
		menuTop = 144 - menuHeight - 12;
		menuLeft = 160 - menuWidth - 10;
		context.fillStyle = '#000000';
		context.fillRect (menuLeft, menuTop, menuWidth + 2, menuHeight +4);
		context.fillStyle = '#FFFFFF';
		context.fillRect (menuLeft + 2, menuTop + 2, menuWidth - 2, menuHeight);
		context.fillStyle = '#000000';
		context.font = "12px Sans-Serif";
		for ($i = 1; $i <= menuItemCount-1; $i++) {
			context.fillText(equipment[menuItem[$i]][0], menuLeft + 16, menuTop + (16 * $i));
		}
		context.fillText("Exit", menuLeft + 16, menuTop + (16 * $i));
		
		context.drawImage(menuArrow, menuLeft + 6, menuTop + (16 * menuSelection) + 7, 7, 10);
	}

	//Draw Equip Item Menu - Armor
	if (menuMode == "equipment-armor") {
		var menuItem = new Array();
		var menuItemCount = new Number();
		var menuTop = new Number();
		var menuLeft = new Number();
		var menuWidth = new Number();
		for ($i = 3; $i <= 5; $i++) {
			if (equipment[$i][4] == 1) { 
				menuItemCount++;
				menuItem[menuItemCount] = $i;
				if ($i == 3) { menuWidth = 100; }
				if ($i == 4) { menuWidth = 100; }
				if ($i == 5) { menuWidth = 100; }
			}
		}
		menuItemCount++;
		menuHeight = menuItemCount * 16 +2;
		menuTop = 144 - menuHeight - 12;
		menuLeft = 160 - menuWidth - 10;
		context.fillStyle = '#000000';
		context.fillRect (menuLeft, menuTop, menuWidth + 2, menuHeight +4);
		context.fillStyle = '#FFFFFF';
		context.fillRect (menuLeft + 2, menuTop + 2, menuWidth - 2, menuHeight);
		context.fillStyle = '#000000';
		context.font = "12px Sans-Serif";
		for ($i = 1; $i <= menuItemCount-1; $i++) {
			context.fillText(equipment[menuItem[$i]][0], menuLeft + 16, menuTop + (16 * $i));
		}
		context.fillText("Exit", menuLeft + 16, menuTop + (16 * $i));
		
		context.drawImage(menuArrow, menuLeft + 6, menuTop + (16 * menuSelection) + 7, 7, 10);
	}
	
	
	//Draw Text Box ------------------------------------------------------ Draw Text Box
	if (inputMode == "textbox" && textCooldown <= 0) {
		text1 = dialog[line1];
		text2 = dialog[line2];
		//Catch Input
		if (spaceBar == true && pos1 >= text1.length && pos2 >= text2.length) { 
			if (line2 < lines) {
				line1 = line1 + 2;
				line2 = line2 + 2;
				pos1 = 0;
				pos2 = 0;
				text1 = dialog[line1];
				text2 = dialog[line2];
			} else {
				if (menuMode == "iteminfo") {
					inputMode = "menu";
					menuMode = "itemmenu";
					spaceBar = false;
				} else if (question == true && line2 >= lines && pos2 >= text2.length) {
					if (menuSelection == 0) { 	//yes
						if (questionMode == "Dog") {
							spaceBar = false;
							partyFox = true;
							foxX = 7 * 16;
							foxY = 3 * 16;
							foxSprite = 33;
							foxWait = true;
							question = false;
							questionMode = "";
							inputMode = "player";
							loadMap(16);
							//loadDialog(24);
						} else {
							inputMode = "player";
							spaceBar = false;
							textCooldown = textCooldownTime;
						}
					} else {					//no
						if (questionMode == "Dog") {
							spaceBar = false;
							question = false;
							questionMode = "";
							inputMode = "player";
						} else {
							inputMode = "player";
							spaceBar = false;
							textCooldown = textCooldownTime;
						}
					}
				} else if (initBattleFromText >= 1) {
					inputMode = "player";
					spaceBar = false;
					loadBattleData(initBattleFromText);
				} else if (theEnd == true) {
					gameMode = "theend";
					setTimeout("theEndLoop()",50);
				} else {
					inputMode = "player";
					spaceBar = false;
					textCooldown = textCooldownTime;
				}
			}
		}
		if (keyLeft == true && question == true) { 
			keyLeft = false;
			menuSelection--;
			if (menuSelection <= -1) { menuSelection = 1; }
		}
		if (keyRight == true && question == true) { 
			keyRight = false;
			menuSelection++;
			if (menuSelection >= 2) { menuSelection = 0; }
		}
		
		//Animate line
		pos1 = pos1 + 1; 
		if (spaceBar == true) { pos1 = pos1 + 1; }
		if (pos1 >= text1.length && pos2 <= text2.length) {
			pos2 = pos2 + 1;
			if (spaceBar == true) { pos2 = pos2 + 1; }
		}
		
		context.fillStyle = '#000000';
		context.fillRect (0, 100, 160, 44);
		context.fillStyle = '#FFFFFF';
		context.fillRect (2, 102, 156, 40);
		context.fillStyle = '#000000';
		context.font = "12px Sans-Serif";
		context.fillText(text1.substr(0, pos1), 6, 118); 
		context.fillText(text2.substr(0, pos2), 6, 134); 
		if (question == true && line2 >= lines && pos2 >= text2.length) {
			context.drawImage(menuArrow, 6 + (menuSelection * 31), 125, 7, 10);
		}
	}
	
	//Battle Chance
	if (inputMode == "player" && battlesEnabled == true) {
		if (playerLastX !== playerX || playerLastY !== playerY) {
			if (enemyCount >= 1) {
				//Roll the dice and check for battle
				for (i = 0; i <= enemyCount-1; i++) {
					rnd = Math.floor(Math.random()*enemyChance[i]);
					if (rnd == 1) {
						loadBattleData(enemyNumber[i]);
					}
				}
			}
		}
	}
	
	//Draw Battle Intro
	if (inputMode == "battle") {
		var swap = false;
		battleIntroTimer++;
		if (battleIntroTimer >= 10) { gameMode = "battleintro"; }
		for (iy = 0; iy <= 9; iy++) {
			if (swap == true) { swap = false; } else { swap = true; }
			if (swap == true) {
				for (ix = 0; ix <= battleIntroTimer; ix++) { context.drawImage(tile[0], ix * 16, iy * 16, 16, 16); }
			} else {
				for (ix = 0; ix <= battleIntroTimer + 1; ix++) { context.drawImage(tile[0], 160 - (ix * 16), iy * 16, 16, 16); }
			}
		}
	}
	
	//Draw Debug	
	//context.fillText("parentKey: "+parentKey+" childKey: "+childKey, 10, 10);
	
	//Copy the buffer to the canvas
	canvas = document.getElementById("canvas");
	context_canvas = canvas.getContext('2d');
	context_canvas.drawImage(buffer, 0, 0, 480, 430);
	
	//Catch Game Over
	if (playerHealth <= 0) { 
		gameMode = "gameover";
		setTimeout("gameOverLoop()",50);
	}
	
	if (gameMode == "map") {
		setTimeout("mapLoop()",50);	
	} else if (gameMode == "battleintro") {
		setTimeout("battleLoop()",50);	
	}

}

//---------------------------------------------------------------- Load mapLine data in the the tileMap array
function loadMapData() {
	ii = 0;
	ix = 0;
	iy = 0;
	for (iy = 0; iy <= 8; iy++) {
		for (ix = 0; ix <= 9; ix++) {
			tileMap[ix][iy] = parseFloat(mapLine[ii].substr(ix* 3, 2));
		}
		ii = ii + 1;
	}
	ii = 0;
	ix = 0;
	iy = 0;
	for (iy = 0; iy <= 8; iy++) {
		for (ix = 0; ix <= 9; ix++) {
			collisionMap[ix][iy] = parseFloat(collisionLine[ii].substr(ix* 3, 2));
		}
		ii = ii + 1;
	}
	//Add the npc position to the collisionMap
	for (i = 1; i <= npcCount; i++) {
		collisionMap[npcX[i - 1]][npcY[i - 1]] = 1;	
	}
	
}


//---------------------------------------------------------------- Battle Loop
function battleLoop() {
	var speed = 50;
	buffer = document.getElementById("buffer");
	context = buffer.getContext("2d");

	//Catch End of Battle
	if (enemyHealth <= 0 && gameMode == "battle" && inputMode !== "textbox") {
		gameMode = "battleresults";
		var leveledUp = false;
		var itemDropped = false;
		playerExp = playerExp + enemyExp;
		if (playerExp >= 99999) { playerExp = 99999; }
		//Check Level Up
		if (playerLevel <=9) {
			if (playerExp >= level[playerLevel+1]) { 
				leveledUp = true;
				playerLevel++;
				if (playerLevel == 2) {
					playerAttack = 3;
					playerDefence = 5;
					playerMaxHealth = 120;
					playerHealth = 120;
				} else if (playerLevel == 3) {
					playerAttack = 3;
					playerDefence = 6;
					playerMaxHealth = 160;
					playerHealth = 160;
				} else if (playerLevel == 4) {
					playerAttack = 4;
					playerDefence = 6;
					playerMaxHealth = 240;
					playerHealth = 240;
				} else if (playerLevel == 5) {
					playerAttack = 5;
					playerDefence = 7;
					playerMaxHealth = 320;
					playerHealth = 320;
				} else if (playerLevel == 6) {
					playerAttack = 5;
					playerDefence = 7;
					playerMaxHealth = 400;
					playerHealth = 400;
				} else if (playerLevel == 7) {
					playerAttack = 6;
					playerDefence = 8;
					playerMaxHealth = 520;
					playerHealth = 520;
				} else if (playerLevel == 8) {
					playerAttack = 8;
					playerDefence = 8;
					playerMaxHealth = 720;
					playerHealth = 720;
				} else if (playerLevel == 9) {
					playerAttack = 9;
					playerDefence = 9;
					playerMaxHealth = 999;
					playerHealth = 999;
				}
			}
		}
		//Enemy Item Drop
		if (Math.floor(Math.random()*enemyItemChance) == 1) {
			if (enemyItemDrop == 11) {				//Golden Beetle Item Drop
				if (gotGoldenWings == false) {
					gotGoldenWings = true;
					itemDropped = true;
					items[enemyItemDrop][4]++;
				}
			} else if (enemyItemDrop == 12) {		//Golden Crab Item Drop
				if (gotGoldenClaw == false) {
					gotGoldenClaw = true;
					itemDropped = true;
					items[enemyItemDrop][4]++;
				}
			} else {
				itemDropped = true;
				items[enemyItemDrop][4]++;
			}
		}
		//Enemy Trigger
		if (enemyID == 7) { 
			defeatedWolf = true;
			loadMap(17);
		}
	
//		if (specialBattle == true) { 
//			defeatedBanditGuard = true;
//			specialBattle = false;
//			loadMap(53);
//		}
		
		menuMode = "textbox";
		battleTurn = true;
		battleEnd = true;
		if (leveledUp == true && itemDropped == true) {
			loadDialog(308);
		} else if (leveledUp == true) {
			loadDialog(307);
		} else if (itemDropped == true) {
			loadDialog(306);
		} else {
			loadDialog(305);
		}
	}

	//Enemy Turn
	if (battleTurn == false && gameMode == "battle" && inputMode !== "textbox") {
		rnd = Math.floor(Math.random()*3)
		if (rnd == 0) { 				//Enemy Attack 1
			hitValue = enemy[enemyID][7]
			playerHealth = playerHealth - hitValue
			loadDialog(enemy[enemyID][6]);
			battleTurn = true;
			menuMode = "textbox";
		} else if (rnd == 1) {			//Enemy Attack 2
			hitValue = enemy[enemyID][12]
			playerHealth = playerHealth - hitValue
			loadDialog(enemy[enemyID][11]);
			battleTurn = true;
			menuMode = "textbox";
		} else {						//Enemy Attack 3
			hitValue = enemy[enemyID][17]
			playerHealth = playerHealth - hitValue
			loadDialog(enemy[enemyID][16]);
			battleTurn = true;
			menuMode = "textbox";
		}
	}
	
	
	//Draw Battle Scene
	context.fillStyle = '#FFFFFF';
	context.fillRect (0, 0, 160, 144);

	//Slide Enemy In
	if (gameMode == "battleintro") {
		speed = 20;
		enemyPosX = enemyPosX - 2;
		if (enemyPosX <= 0) { 
			enemyPosX = 0;
			gameMode = "battle"; 
			inputMode = "textbox";
			loadDialog(enemyDialog1);
		}
	}
	
	//Draw Enemy
	context.drawImage(enemySprite[enemyID][0], enemyPosX, 0, 160, 100);
	
	//Draw Text Box 
	if (inputMode == "textbox") {
		text1 = dialog[line1];
		text2 = dialog[line2];
		//Catch Input
		if (spaceBar == true && pos1 >= text1.length && pos2 >= text2.length) { 
			if (line2 < lines) {
				line1 = line1 + 2;
				line2 = line2 + 2;
				pos1 = 0;
				pos2 = 0
				text1 = dialog[line1];
				text2 = dialog[line2];
			} else {
				inputMode = "battlemenu";
				if (battleTurn == true) { menuMode = "battlemenu"; } else { menuMode = "textbox"; }
				spaceBar = false;
				if (battleRun == true) {
					menuMode = "none";
					gameMode = "map";
					inputMode = "player";
				}
				if (battleEnd == true) { 
					menuMode = "none";
					gameMode = "map";
				}
			}
		}
		//Animate line
		pos1 = pos1 + 1; 
		if (pos1 >= text1.length && pos2 <= text2.length) {
			pos2 = pos2 + 1;
		}
		
		context.fillStyle = '#000000';
		context.fillRect (0, 100, 160, 44);
		context.fillStyle = '#FFFFFF';
		context.fillRect (2, 102, 156, 40);
		context.fillStyle = '#000000';
		context.font = "12px Sans-Serif";
		context.fillText(text1.substr(0, pos1), 6, 118); 
		context.fillText(text2.substr(0, pos2), 6, 134); 
	}

	//Draw Battle Menu
	if (menuMode == "battlemenu" || menuMode == "fightmenu" || menuMode == "itemmenu") {
		//Catch Input
		if (menuMode == "battlemenu") {
			if (keyLeft == true) {
				keyLeft = false;
				menuSelection--;
				if (menuSelection <= -1) { menuSelection = 2; }
			} else if (keyRight == true) {
				keyRight = false;
				menuSelection++;
				if (menuSelection >= 3) { menuSelection = 0; }
			} else if (spaceBar == true) {
				spaceBar = false;
				if (menuSelection == 0) {
					menuSelection = 0;
					menuMode = "fightmenu";
				} else if (menuSelection == 1) {
					menuSelection = 0;
					menuMode = "itemmenu";
				} else if (menuSelection == 2) {
					//alert ("run");
					menuSelection = 0;
					if (Math.floor(Math.random()*2) == 1) {
						menuMode = "textbox";
						loadDialog(301);
						battleTurn = false;
					} else {
						menuMode = "textbox";
						loadDialog(300);
						battleRun = true;
					}
				}
			}
		}
		context.fillStyle = '#000000';
		context.fillRect (0, 100, 160, 44);
		context.fillStyle = '#FFFFFF';
		context.fillRect (2, 102, 156, 40);
		context.fillStyle = '#000000';
		context.font = "12px Sans-Serif";
		context.fillText("Health "+playerHealth+"/"+playerMaxHealth , 6, 118); 
		context.fillText("Fight", 16, 134); 
		context.fillText("Items", 64, 134);
		context.fillText("Run", 112, 134); 
		if (menuMode == "battlemenu") { context.drawImage(menuArrow, 6 + (menuSelection * 48), 125, 7, 10); }
	}
	
	//Draw Fight Menu
	if (menuMode == "fightmenu") {
		//Catch Input
		if (menuMode == "fightmenu") {
			if (keyESC == true) {
				menuSelection = 0;
				menuMode = "battlemenu";
			} else if (keyUp == true) {
				keyUp = false;
				menuSelection--;
				if (menuSelection <= -1) { menuSelection = 2; }
			} else if (keyDown == true) {
				keyDown = false;
				menuSelection++;
				if (menuSelection >= 3) { menuSelection = 0; }
			} else if (spaceBar == true) {
				spaceBar = false;
				if (menuSelection == 0) {
					battleTurn = false;
					if (Math.floor(Math.random()*5) == 1) {
						menuMode = "textbox";
						loadDialog(304);
					} else {
						var equipmentHit = new Number();
						equipmentHit = parseFloat(equipment[playerEquipment[0]][6]);
						hitValue =  Math.round(equipmentHit + (equipmentHit * (playerAttack / 10)) - (equipmentHit * (Math.floor(Math.random() * 3) / 10)));
						menuMode = "textbox";
						enemyHealth = enemyHealth - hitValue;
						loadDialog(302);
					}
				} else if (menuSelection == 1) {
					battleTurn = false;
					if (Math.floor(Math.random()*5) == 1) {
						menuMode = "textbox";
						loadDialog(304);
					} else {
						equipmentHit = parseFloat(equipment[playerEquipment[0]][8]);
						hitValue =  Math.round(equipmentHit + (equipmentHit * (playerAttack / 10)) - (equipmentHit * (Math.floor(Math.random() * 3) / 10)));
						menuMode = "textbox";
						enemyHealth = enemyHealth - hitValue;
						loadDialog(303);
					}
				} else if (menuSelection == 2) {	
					menuSelection = 0;
					menuMode = "battlemenu";
				}
			}
		}
		context.fillStyle = '#000000';
		context.fillRect (100, 75, 50, 55);
		context.fillStyle = '#FFFFFF';
		context.fillRect (102, 77, 46, 51);
		context.fillStyle = '#000000';
		context.font = "12px Sans-Serif";
		context.fillText(equipment[playerEquipment[0]][5], 112, 91);
		context.fillText(equipment[playerEquipment[0]][7], 112, 107); 
		context.fillText("Exit", 112, 123); 
		if (menuMode == "fightmenu") { context.drawImage(menuArrow, 104, 82 + (menuSelection * 16), 7, 10); }
	}
	
	//Draw Item Menu
	if (menuMode == "itemmenu") {
		//Count Items Available
		var menuCount = 1;
		var menuWidth = 65;
		var itemsTemp = new Array();
		if (items[1][4] >= 1) { menuWidth = 80; }
		for (i = 0; i <= 4; i++) {
			if (items[i][4] >= 1) { 
				itemsTemp[menuCount - 1] = i;
				menuCount++;
			}
		}
		//Catch Input
		if (menuMode == "itemmenu") {
			if (keyESC == true) {
				menuSelection = 0;
				menuMode = "battlemenu";
			} else if (keyUp == true) {
				keyUp = false;
				menuSelection--;
				if (menuSelection <= -1) { menuSelection = menuCount - 1; }
			} else if (keyDown == true) {
				keyDown = false;
				menuSelection++;
				if (menuSelection >= menuCount) { menuSelection = 0; }
			} else if (spaceBar == true) {
				spaceBar = false;
				if (menuSelection == menuCount - 1) {	
					menuSelection = 0;
					menuMode = "battlemenu";
				} else {
					selectedItem = itemsTemp[menuSelection];
					menuMode = "none";
					if (selectedItem == "0" || selectedItem == "1" || selectedItem == "2") { //Health Items
						if (playerHealth < playerMaxHealth) {
							battleTurn = false;
							items[selectedItem][4]--;
							playerHealth = playerHealth + parseFloat(items[selectedItem][3]);
							if (playerHealth >= playerMaxHealth) { playerHealth = playerMaxHealth; }
							menuMode = "textbox";
							loadDialog(0);
						} else {
							menuMode = "textbox";
							loadDialog(2);
						}
					} else if (selectedItem == "3" || selectedItem == "4") { //Status Cure Items
						if (playerStatus == items[selectedItem][2]) {
							battleTurn = false;
							playerStatus = "Healthy";
							items[selectedItem][4]--;
							menuMode = "textbox";
							loadDialog(4);
						} else {
							menuMode = "textbox";
							loadDialog(5);
						}						
					}
				}
			}
		}
		context.fillStyle = '#000000';
		context.fillRect (75, 160-((16 * menuCount)+6)-30, menuWidth, (16 * menuCount)+5);
		context.fillStyle = '#FFFFFF';
		context.fillRect (77, 162-((16 * menuCount)+6)-30, menuWidth-4, (16 * menuCount)-4+5);
		context.fillStyle = '#000000';
		context.font = "12px Sans-Serif";
		for (i = 0; i <= menuCount-2; i++) {
			context.fillText(items[itemsTemp[i]][0], 90, 123 - (((menuCount - 1) - i) * 16));
		}
		context.fillText("Exit", 90, 123);
		
		if (menuMode == "itemmenu") { context.drawImage(menuArrow, 80, 123 - ((menuCount - 1) * 16) + (menuSelection * 16) - 9, 7, 10); }
		//alert (menuCount);
		//if (menuMode == "itemmenu") { context.drawImage(menuArrow, 80, 82 + ((menuSelection * 16)-(menuCount * 16))+((5 - menuCount) * 16), 7, 10); }
	}	
	
	//Copy the buffer to the canvas
	canvas = document.getElementById("canvas");
	context_canvas = canvas.getContext('2d');
	context_canvas.drawImage(buffer, 0, 0, 480, 430);

	//Catch Game Over
	if (playerHealth <= 0 && inputMode !== "textbox") { 
		if (gameOverText == false) {
			gameOverText = true;
			battleTurn = false;
			menuMode = "none";
			inputMode = "textbox";
			loadDialog(309);			
		} else {
			battleTurn = false;
			menuMode = "none";
			gameMode = "gameover";
		}
	}
	
	if (gameMode == "battle" || gameMode == "battleintro" || gameMode == "battleresults") {
		setTimeout("battleLoop()",speed);	
	} else if (gameMode == "map") {
		inputMode = "player";
		setTimeout("mapLoop()",50);	
	} else if (gameMode == "gameover") {
		setTimeout("gameOverLoop()",50);
	}
}

//---------------------------------------------------------------- Battle Results Loop
function battleResultsLoop() {
	buffer = document.getElementById("buffer");
	context = buffer.getContext("2d");
	
	//Copy the buffer to the canvas
	canvas = document.getElementById("canvas");
	context_canvas = canvas.getContext('2d');
	context_canvas.drawImage(buffer, 0, 0, 480, 430);
	
	setTimeout("battleResultsLoop()",50);	
}

//---------------------------------------------------------------- Load Battle Data
function loadBattleData(enemyIndex) {
	inputMode = "battle";
	menuSelection = 0;
	gameOverText = false;
	battleIntroTimer = 0;
	battleRun = false;
	battleEnd = false;
	
	if (Math.floor(Math.random()*5) == 1) { battleTurn = false;	} else { battleTurn = true; }
	
	enemyPosX = 160;
		
	enemyID = enemyIndex;
	enemyName = enemy[enemyID][0];
	enemyExp = parseFloat(enemy[enemyID][4]);
	enemyHealth = parseFloat(enemy[enemyID][3]);
	enemyMaxHealth = parseFloat(enemy[enemyID][2]);
	rnd = Math.floor(Math.random()*2);
	enemyItemDrop = parseFloat(enemy[enemyID][20 + rnd]);
	enemyItemChance = parseFloat(enemy[enemyID][22]);
	enemyDialog1 = parseFloat(enemy[enemyID][23]);
	enemyDialog2 = parseFloat(enemy[enemyID][24]);
	
}

//---------------------------------------------------------------- Game Over Loop
function gameOverLoop() {
	buffer = document.getElementById("buffer");
	context = buffer.getContext("2d");
	
	context.fillStyle = '#000000';
	context.fillRect (0, 0, 160, 144);
	context.fillStyle = '#FFFFFF';
	context.font = "12px Sans-Serif";
	context.fillText("Game Over", 48, 65); 
	
	//Copy the buffer to the canvas
	canvas = document.getElementById("canvas");
	context_canvas = canvas.getContext('2d');
	context_canvas.drawImage(buffer, 0, 0, 480, 430);
	
	setTimeout("init()",2000);	
}

//---------------------------------------------------------------- The End Loop
function theEndLoop() {

	var starCount = 0;
	
	if (questcompleteBestGame == true) { starCount++; }
	if (questcompleteCottonCandy == true) { starCount++; }
	if (questcompleteCoffee == true) { starCount++; }
	if (questcompleteComicBook == true) { starCount++; }
	if (questcompleteGummyWorms == true) { starCount++; }
	if (defeatedWolf == true) { starCount++; }

	var starCenter = ((starCount * 16) / 2);
	
	buffer = document.getElementById("buffer");
	context = buffer.getContext("2d");
	
	context.fillStyle = '#000000';
	context.fillRect (0, 0, 160, 144);
	context.fillStyle = '#FFFFFF';
	context.font = "12px Sans-Serif";
	context.fillText("The End", 54, 75); 
	
	
	for (i = 0; i < starCount; i++) { 
		context.drawImage(tile[31], ((160 / 2) - starCenter)+(i * 16) -  2, 80);
	}
	
	//Copy the buffer to the canvas
	canvas = document.getElementById("canvas");
	context_canvas = canvas.getContext('2d');
	context_canvas.drawImage(buffer, 0, 0, 480, 430);
	
	setTimeout("init()",10000);	
}
