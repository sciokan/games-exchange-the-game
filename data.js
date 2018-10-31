//---------------------------------------------------------------- Preload Images
function preLoadImages() {
		
	for (i=0; i<=99; i++) {
		tile[i] = new Image();
	}

	tile[0].src = "tiles/black.bmp";
	tile[1].src = "tiles/white.bmp";
	tile[2].src = "tiles/ground-grass.bmp";
	tile[3].src = "tiles/ground-road.bmp";
	tile[4].src = "tiles/ground-water.bmp";
	tile[5].src = "tiles/house-t-t.png";
	tile[6].src = "tiles/ground-coast-r.bmp";
	tile[7].src = "tiles/ground-coast-u.bmp";
	tile[8].src = "tiles/ground-coast-d.bmp";
	tile[9].src = "tiles/trees-line-a-l.bmp";
	tile[10].src = "tiles/trees-line-b-l.bmp";
	tile[11].src = "tiles/trees-line-a.bmp";
	tile[12].src = "tiles/trees-line-b.bmp";
	tile[13].src = "tiles/trees-line-a-r.bmp";
	tile[14].src = "tiles/trees-line-b-r.bmp";
	tile[15].src = "tiles/house-tl.png";
	tile[16].src = "tiles/house-t.bmp";
	tile[17].src = "tiles/house-tr.png";
	tile[18].src = "tiles/house-l.bmp";
	tile[19].src = "tiles/house-c.bmp";
	tile[20].src = "tiles/house-r.bmp";
	tile[21].src = "tiles/house-bl.bmp";
	tile[22].src = "tiles/house-b.bmp";
	tile[23].src = "tiles/house-bd.bmp";
	tile[24].src = "tiles/house-br.bmp";
	tile[25].src = "tiles/sign-game-a.bmp";
	tile[26].src = "tiles/sign-game-c.bmp";
	tile[27].src = "tiles/sign-game-b.bmp";
	tile[28].src = "tiles/ground-tile.bmp";
	tile[29].src = "tiles/sign-game-d.bmp";
	tile[30].src = "tiles/star-large.bmp";
	tile[31].src = "tiles/star-full.bmp";
	tile[32].src = "tiles/bridge-l.bmp";
	tile[33].src = "tiles/bridge-r.bmp";
	tile[34].src = "tiles/bridge-c.bmp";
	tile[35].src = "tiles/bridge-s.bmp";
	tile[36].src = "tiles/building-wall-br.bmp";
	tile[37].src = "tiles/building-wall-bc.bmp";
	tile[38].src = "tiles/building-wall-bl.bmp";
	tile[39].src = "tiles/building-wall-l.bmp";
	tile[40].src = "tiles/building-roof-l.bmp";
	tile[41].src = "tiles/building-roof-c.bmp";
	tile[42].src = "tiles/building-roof-r.bmp";
	tile[43].src = "tiles/building-wall-r.bmp";
	tile[44].src = "tiles/castle-wall-tl-a.bmp";
	tile[45].src = "tiles/bus-a.bmp";
	tile[46].src = "tiles/bus-b.bmp";
	tile[47].src = "tiles/bus-c.bmp";
	tile[48].src = "tiles/bus-d.bmp";
	tile[49].src = "tiles/bus-e.bmp";
	tile[50].src = "tiles/bus-f.bmp";
	tile[51].src = "tiles/bridge-h-a.bmp";
	tile[52].src = "tiles/bridge-h-b.bmp";
	tile[53].src = "tiles/stairs-a-l.bmp";
	tile[54].src = "tiles/stairs-a-c.bmp";
	tile[55].src = "tiles/stairs-a-r.bmp";
	tile[56].src = "tiles/shop-bookcase-a.bmp";
	tile[57].src = "tiles/shop-bookcase-b.bmp";
	tile[58].src = "tiles/shop-bin.bmp";
	tile[59].src = "tiles/castle-roof-t.bmp";
	tile[60].src = "tiles/castle-fence.bmp";
	tile[61].src = "tiles/house-stairs.bmp";
	tile[62].src = "tiles/house-stairs-b.bmp";
	tile[63].src = "tiles/house-stairs-c.bmp";
	tile[64].src = "tiles/house-snes.bmp";
	tile[65].src = "tiles/house-tv.bmp";
	tile[66].src = "tiles/house-bed-a.bmp";
	tile[67].src = "tiles/house-bed-b.bmp";
	tile[68].src = "tiles/house-computer-a.bmp";
	tile[69].src = "tiles/house-computer-b.bmp";
	tile[70].src = "tiles/house-bin.bmp";
	tile[71].src = "tiles/dog-house-a-02.bmp";
	tile[72].src = "tiles/dog-house-a-01.bmp";
	tile[73].src = "tiles/star-empty.bmp";
	tile[74].src = "tiles/sign-cafe-d.bmp";
	tile[75].src = "tiles/sign-cafe-a.bmp";
	tile[76].src = "tiles/sign-comic-a.bmp";
	tile[77].src = "tiles/sign-comic-b.bmp";
	tile[78].src = "tiles/sign-comic-c.bmp";
	tile[79].src = "tiles/cave-water-2.bmp";
	tile[80].src = "tiles/sign-candy-a.bmp";
	tile[81].src = "tiles/sign-candy-b.bmp";
	tile[82].src = "tiles/sign-candy-c.bmp";
	tile[83].src = "tiles/floor-wood.bmp";
	tile[84].src = "tiles/wall-top.bmp";
	tile[85].src = "tiles/wall-blank.bmp";
	tile[86].src = "tiles/wall-window.bmp";
	tile[87].src = "tiles/floor-door-mat-03.bmp";
	tile[88].src = "tiles/sign-cafe-b.bmp";
	tile[89].src = "tiles/sign-cafe-c.bmp";
	tile[90].src = "tiles/shop-counter-1.bmp";
	tile[91].src = "tiles/shop-counter-2.bmp";
	tile[92].src = "tiles/shop-counter-3.bmp";
	tile[93].src = "tiles/sign-bus-a.bmp";
	tile[94].src = "tiles/sign-bus-b.bmp";
	tile[95].src = "tiles/shop-counter-4.bmp";
	tile[96].src = "tiles/splash.bmp";
	tile[97].src = "tiles/rain-1.bmp";
	tile[98].src = "tiles/rain-2.bmp";
	tile[99].src = "tiles/rain-3.bmp";

	for (i=0; i<=9; i++) {
		playerSprite[i] = new Image();
	}
	
	playerSprite[0].src = "tiles/player-idle-a.gif";
	playerSprite[1].src = "tiles/player-up-a.gif";
	playerSprite[2].src = "tiles/player-up-b.gif";
	playerSprite[3].src = "tiles/player-down-a.gif";
	playerSprite[4].src = "tiles/player-down-b.gif";
	playerSprite[5].src = "tiles/player-left-a.gif";
	playerSprite[6].src = "tiles/player-left-b.gif";
	playerSprite[7].src = "tiles/player-right-a.gif";
	playerSprite[8].src = "tiles/player-right-b.gif";
	playerSprite[9].src = "tiles/player-idle-b.gif";
	
	for (i=0; i<=99; i++) {
		npcSprite[i] = new Array(); 
		npcSprite[i][0] = new Image(); //Animation frame 1
		npcSprite[i][1] = new Image(); //Animation frame 2
	}

	npcSprite[0][0].src = "tiles/blank.png";	//Blanks
	npcSprite[0][1].src = "tiles/blank.png";
	npcSprite[1][0].src = "tiles/npc-woman-01-a.gif";	//Mom
	npcSprite[1][1].src = "tiles/npc-woman-01-a.gif";
	npcSprite[2][0].src = "tiles/npc-boy-01-a.gif";		//Boy - Looking Left
	npcSprite[2][1].src = "tiles/npc-boy-01-a.gif";
	npcSprite[3][0].src = "tiles/npc-boy-01-b.gif";		//Boy - Looking Right
	npcSprite[3][1].src = "tiles/npc-boy-01-b.gif";
	npcSprite[4][0].src = "tiles/npc-boy-01-a.gif";		//Boy - Looking Left to Right
	npcSprite[4][1].src = "tiles/npc-boy-01-b.gif";
	npcSprite[5][0].src = "tiles/npc-boy-02-a.gif";		//Boy - Jumping
	npcSprite[5][1].src = "tiles/npc-boy-02-b.gif";
	npcSprite[6][0].src = "tiles/npc-boy-03-a.gif";		//Boy - Fishing
	npcSprite[6][1].src = "tiles/npc-boy-03-b.gif";
	npcSprite[7][0].src = "tiles/npc-girl-rope-l-a.gif";	//Girls Jumping - Rope Left
	npcSprite[7][1].src = "tiles/npc-girl-rope-l-b.gif";
	npcSprite[8][0].src = "tiles/npc-girl-rope-c-a.gif";	//Girls Jumping - Rope Center
	npcSprite[8][1].src = "tiles/npc-girl-rope-c-b.gif";
	npcSprite[9][0].src = "tiles/npc-girl-rope-r-a.gif";	//Girls Jumping - Rope Right
	npcSprite[9][1].src = "tiles/npc-girl-rope-r-b.gif";
	npcSprite[10][0].src = "tiles/npc-crab-stick-a.gif";	//Crab getting hit with stick
	npcSprite[10][1].src = "tiles/npc-crab-stick-b.gif";
	npcSprite[11][0].src = "tiles/npc-kid-stick-a.gif";		//Boy - Fighting Crabs
	npcSprite[11][1].src = "tiles/npc-kid-stick-b.gif";
	npcSprite[12][0].src = "tiles/npc-old-man-a.gif";		//Old Man
	npcSprite[12][1].src = "tiles/npc-old-man-b.gif";
	npcSprite[13][0].src = "tiles/npc-shopowner-a.gif";		//Shop Owner
	npcSprite[13][1].src = "tiles/npc-shopowner-b.gif";
	npcSprite[14][0].src = "tiles/npc-sister-01-a.gif";		//Sister - Jumping
	npcSprite[14][1].src = "tiles/npc-sister-01-b.gif";
	npcSprite[15][0].src = "tiles/npc-fox-01-a.gif";		//Fox - Idle
	npcSprite[15][1].src = "tiles/npc-fox-01-a.gif";
	npcSprite[16][0].src = "tiles/npc-wolf-01-b.gif";		//Wolf - Barking
	npcSprite[16][1].src = "tiles/npc-wolf-01-a.gif";
	npcSprite[17][0].src = "tiles/npc-crown.gif";			//Crown on Beach
	npcSprite[17][1].src = "tiles/npc-crown.gif";
	npcSprite[18][0].src = "tiles/npc-sister-01-a.gif";		//Sister - Right
	npcSprite[18][1].src = "tiles/npc-sister-01-a.gif";
	npcSprite[19][0].src = "tiles/npc-sister-01-a.gif";		//Sister - Left
	npcSprite[19][1].src = "tiles/npc-sister-01-a.gif";
	npcSprite[20][0].src = "tiles/npc-knight-01-a.gif";		//Knight - Standing
	npcSprite[20][1].src = "tiles/npc-knight-01-a.gif";
	npcSprite[21][0].src = "tiles/npc-knight-02-a.gif";		//Knight - Looking Around
	npcSprite[21][1].src = "tiles/npc-knight-02-b.gif";
	npcSprite[22][0].src = "tiles/npc-knight-03-a.gif";		//Knight - Looking Up
	npcSprite[22][1].src = "tiles/npc-knight-03-b.gif";
	npcSprite[23][0].src = "tiles/npc-knight-02-a.gif";		//Knight - Looking Left
	npcSprite[23][1].src = "tiles/npc-knight-02-a.gif";
	npcSprite[24][0].src = "tiles/npc-knight-02-b.gif";		//Knight - Looking Right
	npcSprite[24][1].src = "tiles/npc-knight-02-b.gif";
	npcSprite[25][0].src = "tiles/npc-king-a.gif";			//King - Idle
	npcSprite[25][1].src = "tiles/npc-king-b.gif";
	npcSprite[26][0].src = "tiles/npc-king-a.gif";			//King - Clapping
	npcSprite[26][1].src = "tiles/npc-king-c.gif";
	npcSprite[27][0].src = "tiles/npc-fox-02-a.gif";		//Fox - Barking
	npcSprite[27][1].src = "tiles/npc-fox-02-b.gif";
	npcSprite[28][0].src = "tiles/npc-fox-03-a.gif";		//Fox - Sitting Right
	npcSprite[28][1].src = "tiles/npc-fox-03-b.gif";
	npcSprite[29][0].src = "tiles/npc-fox-04-a.gif";		//Fox - Walking Right
	npcSprite[29][1].src = "tiles/npc-fox-04-b.gif";
	npcSprite[30][0].src = "tiles/npc-fox-05-a.gif";		//Fox - Walking Left
	npcSprite[30][1].src = "tiles/npc-fox-05-b.gif";
	npcSprite[31][0].src = "tiles/npc-fox-04-a.gif";		//Fox - Idle Right
	npcSprite[31][1].src = "tiles/npc-fox-04-c.gif";
	npcSprite[32][0].src = "tiles/npc-fox-05-a.gif";		//Fox - Idle Left
	npcSprite[32][1].src = "tiles/npc-fox-05-c.gif";
	npcSprite[33][0].src = "tiles/npc-fox-06-a.gif";		//Fox - Sitting Left
	npcSprite[33][1].src = "tiles/npc-fox-06-b.gif";
	npcSprite[34][0].src = "tiles/npc-fox-07-a.gif";		//Fox - Walking Down
	npcSprite[34][1].src = "tiles/npc-fox-07-b.gif";
	npcSprite[35][0].src = "tiles/npc-fox-08-a.gif";		//Fox - Walking Up
	npcSprite[35][1].src = "tiles/npc-fox-08-b.gif";
	npcSprite[36][0].src = "tiles/npc-fox-09-a.gif";		//Fox - Idle Down
	npcSprite[36][1].src = "tiles/npc-fox-09-b.gif";
	npcSprite[37][0].src = "tiles/npc-fox-10-a.gif";		//Fox - Idle Up
	npcSprite[37][1].src = "tiles/npc-fox-10-b.gif";
	npcSprite[38][0].src = "tiles/npc-knight-04-a.bmp";		//Dead Knight A
	npcSprite[38][1].src = "tiles/npc-knight-04-a.bmp";
	npcSprite[39][0].src = "tiles/npc-knight-05-a.bmp";		//Dead Knight B
	npcSprite[39][1].src = "tiles/npc-knight-05-a.bmp";
	npcSprite[40][0].src = "tiles/npc-knight-06-a.bmp";		//Dead Knight C
	npcSprite[40][1].src = "tiles/npc-knight-06-a.bmp";
	npcSprite[41][0].src = "tiles/npc-knight-07-a.bmp";		//Dead Knight D
	npcSprite[41][1].src = "tiles/npc-knight-07-a.bmp";

	for (i=0; i<=15; i++) {
		enemySprite[i] = new Array(); 
		enemySprite[i][0] = new Image(); //Animation frame 1
		enemySprite[i][1] = new Image(); //Animation frame 2
		enemySprite[i][2] = new Image(); //Animation frame Hit
		enemySprite[i][3] = new Image(); //Animation frame Death
	}
	
	enemySprite[0][0].src = "tiles/enemy-crab-a.bmp";  				//Enemy - Crab
	enemySprite[0][1].src = "tiles/enemy-crab-a.bmp";
	enemySprite[0][2].src = "tiles/enemy-crab-a.bmp";
	enemySprite[0][3].src = "tiles/enemy-crab-a.bmp";
	enemySprite[1][0].src = "tiles/enemy-goldencrab-a.bmp";  		//Enemy - Golden Crab
	enemySprite[1][1].src = "tiles/enemy-goldencrab-a.bmp";
	enemySprite[1][2].src = "tiles/enemy-goldencrab-a.bmp";
	enemySprite[1][3].src = "tiles/enemy-goldencrab-a.bmp";
	enemySprite[2][0].src = "tiles/enemy-bees-a.bmp";  				//Enemy - Bee
	enemySprite[2][1].src = "tiles/enemy-bees-a.bmp";
	enemySprite[2][2].src = "tiles/enemy-bees-a.bmp";
	enemySprite[2][3].src = "tiles/enemy-bees-a.bmp";
	enemySprite[3][0].src = "tiles/enemy-wasp-a.bmp";  				//Enemy - Wasp
	enemySprite[3][1].src = "tiles/enemy-wasp-a.bmp";
	enemySprite[3][2].src = "tiles/enemy-wasp-a.bmp";
	enemySprite[3][3].src = "tiles/enemy-wasp-a.bmp";
	enemySprite[4][0].src = "tiles/enemy-beetle-a.bmp";  			//Enemy - Beetle
	enemySprite[4][1].src = "tiles/enemy-beetle-a.bmp";
	enemySprite[4][2].src = "tiles/enemy-beetle-a.bmp";
	enemySprite[4][3].src = "tiles/enemy-beetle-a.bmp";
	enemySprite[5][0].src = "tiles/enemy-goldenbeetle-a.bmp";  		//Enemy - Golden Beetle
	enemySprite[5][1].src = "tiles/enemy-goldenbeetle-a.bmp";
	enemySprite[5][2].src = "tiles/enemy-goldenbeetle-a.bmp";
	enemySprite[5][3].src = "tiles/enemy-goldenbeetle-a.bmp";
	enemySprite[6][0].src = "tiles/enemy-crow-a.bmp"; 				//Enemy - Crow
	enemySprite[6][1].src = "tiles/enemy-crow-a.bmp";
	enemySprite[6][2].src = "tiles/enemy-crow-a.bmp";
	enemySprite[6][3].src = "tiles/enemy-crow-a.bmp";
	enemySprite[7][0].src = "tiles/enemy-wolf-a.bmp";  				//Enemy - Wolf
	enemySprite[7][1].src = "tiles/enemy-wolf-a.bmp";
	enemySprite[7][2].src = "tiles/enemy-wolf-a.bmp";
	enemySprite[7][3].src = "tiles/enemy-wolf-a.bmp";
	enemySprite[8][0].src = "tiles/enemy-bat-a.bmp";				//Enemy - Bat
	enemySprite[8][1].src = "tiles/enemy-bat-a.bmp";
	enemySprite[8][2].src = "tiles/enemy-bat-a.bmp";
	enemySprite[8][3].src = "tiles/enemy-bat-a.bmp";
	enemySprite[9][0].src = "tiles/enemy-rat-a.bmp";				//Enemy - Rat
	enemySprite[9][1].src = "tiles/enemy-rat-a.bmp";
	enemySprite[9][2].src = "tiles/enemy-rat-a.bmp";
	enemySprite[9][3].src = "tiles/enemy-rat-a.bmp";
	enemySprite[10][0].src = "tiles/enemy-snake-a.bmp";				//Enemy - Snake
	enemySprite[10][1].src = "tiles/enemy-snake-a.bmp";
	enemySprite[10][2].src = "tiles/enemy-snake-a.bmp";
	enemySprite[10][3].src = "tiles/enemy-snake-a.bmp";
	enemySprite[11][0].src = "tiles/enemy-nightcrawler-a.bmp";		//Enemy - Night Crawler
	enemySprite[11][1].src = "tiles/enemy-nightcrawler-a.bmp";
	enemySprite[11][2].src = "tiles/enemy-nightcrawler-a.bmp";
	enemySprite[11][3].src = "tiles/enemy-nightcrawler-a.bmp";
	enemySprite[12][0].src = "tiles/enemy-bandit-a.bmp";			//Enemy - Bandit
	enemySprite[12][1].src = "tiles/enemy-bandit-a.bmp";
	enemySprite[12][2].src = "tiles/enemy-bandit-a.bmp";
	enemySprite[12][3].src = "tiles/enemy-bandit-a.bmp";
	enemySprite[13][0].src = "tiles/enemy-banditboss-a.bmp";		//Enemy - Bandit Boss
	enemySprite[13][1].src = "tiles/enemy-banditboss-a.bmp";
	enemySprite[13][2].src = "tiles/enemy-banditboss-a.bmp";
	enemySprite[13][3].src = "tiles/enemy-banditboss-a.bmp";
	enemySprite[14][0].src = "tiles/enemy-banditbossweak-a.bmp";	//Enemy - Bandit Boss - Weak
	enemySprite[14][1].src = "tiles/enemy-banditbossweak-a.bmp";
	enemySprite[14][2].src = "tiles/enemy-banditbossweak-a.bmp";
	enemySprite[14][3].src = "tiles/enemy-banditbossweak-a.bmp";
	enemySprite[15][0].src = "tiles/enemy-sorcerer-a.bmp";			//Enemy - Sorcerer
	enemySprite[15][1].src = "tiles/enemy-sorcerer-a.bmp";
	enemySprite[15][2].src = "tiles/enemy-sorcerer-a.bmp";
	enemySprite[15][3].src = "tiles/enemy-sorcerer-a.bmp";
}

//---------------------------------------------------------------- Map
function loadMap(index) {
	//Disable Special Animations
	specialAnimation = 0;
	npcOffsetX = 0;
	npcOffsetY = 0;
	
	currentMap = index;
	inputMode = "player";
	foxBlock = false;
	noRain = false;
//Map 0 - Empty
	if (index == 0) {
	

		mapLine[0] = "00 00 00 00 00 00 00 00 00 00";
		mapLine[1] = "00 00 00 00 00 00 00 00 00 00";
		mapLine[2] = "00 00 00 00 00 00 00 00 00 00";
		mapLine[3] = "00 00 00 00 00 00 00 00 00 00";
		mapLine[4] = "00 00 00 00 00 00 00 00 00 00";
		mapLine[5] = "00 00 00 00 00 00 00 00 00 00";
		mapLine[6] = "00 00 00 00 00 00 00 00 00 00";
		mapLine[7] = "00 00 00 00 00 00 00 00 00 00";
		mapLine[8] = "00 00 00 00 00 00 00 00 00 00";

		collisionLine[0] = "00 00 00 00 00 00 00 00 00 00";
		collisionLine[1] = "00 00 00 00 00 00 00 00 00 00";
		collisionLine[2] = "00 00 00 00 00 00 00 00 00 00";
		collisionLine[3] = "00 00 00 00 00 00 00 00 00 00";
		collisionLine[4] = "00 00 00 00 00 00 00 00 00 00";
		collisionLine[5] = "00 00 00 00 00 00 00 00 00 00";
		collisionLine[6] = "00 00 00 00 00 00 00 00 00 00";
		collisionLine[7] = "00 00 00 00 00 00 00 00 00 00";
		collisionLine[8] = "00 00 00 00 00 00 00 00 00 00";

		eventTop = 0;
		eventBottom = 0;
		eventLeft = 0;
		eventRight = 0;

		exitCount = 0;
		
		npcCount = 1;
		npcX[0] = 6;
		npcY[0] = 2;
		npcDialog[0] = 9;
		npcSpriteIndex[0] = 4;
		npcRadius[0] = 20;

		enemyCount = 0;

		if (act == 1) {
			
		} else if (act == 2) {
			
		} else if (act == 3) {
			
		}
		
		noRain = true;

		loadMapData();
	}
//Map 1 - Interior - Players Room
	if (index == 1) {
	

		mapLine[0] = "00 00 00 00 00 00 00 00 00 00";
		mapLine[1] = "00 00 84 84 84 84 84 84 00 00";
		mapLine[2] = "00 00 68 85 86 85 86 85 00 00";
		mapLine[3] = "00 00 69 83 83 83 83 63 00 00";
		mapLine[4] = "00 00 83 83 83 65 83 83 00 00";
		mapLine[5] = "00 00 66 83 83 64 83 83 00 00";
		mapLine[6] = "00 00 67 83 83 83 83 70 00 00";
		mapLine[7] = "00 00 00 00 00 00 00 00 00 00";
		mapLine[8] = "00 00 00 00 00 00 00 00 00 00";

		collisionLine[0] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[1] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[2] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[3] = "01 01 01 00 00 00 00 00 01 01";
		collisionLine[4] = "01 01 00 00 00 01 00 00 01 01";
		collisionLine[5] = "01 01 01 00 00 01 00 00 01 01";
		collisionLine[6] = "01 01 01 00 00 00 00 00 01 01";
		collisionLine[7] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[8] = "01 01 01 01 01 01 01 01 01 01";

		eventTop = 0;
		eventBottom = 0;
		eventLeft = 0;
		eventRight = 0;

		exitCount = 1;
		exitX[0] = 7;
		exitY[0] = 2;
		exitDestination[0] = 2;
		exitPlayerX[0] = 16 * 7;
		exitPlayerY[0] = 16 * 2 + 8;
		
		npcCount = 5;
		npcX[0] = 5;
		npcY[0] = 5;
		npcDialog[0] = 11;
		npcSpriteIndex[0] = 0;
		npcRadius[0] = 20;
		npcX[1] = 2;
		npcY[1] = 2;
		npcDialog[1] = 12;
		npcSpriteIndex[1] = 0;
		npcRadius[1] = 20;
		npcX[2] = 2;
		npcY[2] = 6;
		npcDialog[2] = 13;
		npcSpriteIndex[2] = 0;
		npcRadius[2] = 20;
		npcX[3] = 7;
		npcY[3] = 6;
		npcDialog[3] = 15;
		npcSpriteIndex[3] = 0;
		npcRadius[3] = 20;
		npcX[4] = 2;
		npcY[4] = 5;
		npcDialog[4] = 16;
		npcSpriteIndex[4] = 0;
		npcRadius[4] = 20;

		enemyCount = 0;

		if (act == 1) {
			
		} else if (act == 2) {
			
		} else if (act == 3) {
			
		}

		foxBlock = true
		noRain = true;

		loadMapData();
	}
//Map 2 - Interior - Your House First Floor
	if (index == 2) {
	

		mapLine[0] = "00 00 00 00 00 00 00 00 00 00";
		mapLine[1] = "00 00 84 84 84 84 84 84 00 00";
		mapLine[2] = "00 00 86 86 65 68 61 86 00 00";
		mapLine[3] = "00 00 83 83 83 69 62 83 00 00";
		mapLine[4] = "00 00 83 83 83 83 83 83 00 00";
		mapLine[5] = "00 00 66 83 83 83 83 83 00 00";
		mapLine[6] = "00 00 67 83 87 83 83 83 00 00";
		mapLine[7] = "00 00 00 00 00 00 00 00 00 00";
		mapLine[8] = "00 00 00 00 00 00 00 00 00 00";

		collisionLine[0] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[1] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[2] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[3] = "01 01 00 00 01 01 00 00 01 01";
		collisionLine[4] = "01 01 00 00 00 00 00 00 01 01";
		collisionLine[5] = "01 01 01 00 00 00 00 00 01 01";
		collisionLine[6] = "01 01 01 00 00 00 00 00 01 01";
		collisionLine[7] = "01 01 01 00 00 00 01 01 01 01";
		collisionLine[8] = "01 01 01 00 00 00 01 01 01 01";

		eventTop = 0;
		eventBottom = 0;
		eventLeft = 0;
		eventRight = 0;

		exitCount = 4;
		exitX[0] = 3;
		exitY[0] = 7;
		exitDestination[0] = 16;
		exitPlayerX[0] = 16 * 5;
		exitPlayerY[0] = 16 * 3;
		exitX[1] = 4;
		exitY[1] = 7;
		exitDestination[1] = 16;
		exitPlayerX[1] = 16 * 5;
		exitPlayerY[1] = 16 * 3;
		exitX[2] = 5;
		exitY[2] = 7;
		exitDestination[2] = 16;
		exitPlayerX[2] = 16 * 5;
		exitPlayerY[2] = 16 * 3;
		exitX[3] = 6;
		exitY[3] = 2;
		exitDestination[3] = 1;
		exitPlayerX[3] = 16 * 6;
		exitPlayerY[3] = 16 * 2 + 8;


		npcCount = 1;
		npcX[0] = 4;
		npcY[0] = 3;
		npcDialog[0] = 10;
		npcSpriteIndex[0] = 1;
		npcRadius[0] = 20;

		enemyCount = 0;

		if (act == 1) {
			
		} else if (act == 2) {
			
		} else if (act == 3) {
			
		}

		foxBlock = true;
		noRain = true;

		loadMapData();
	}
//Map 3 - Games Exchange
	if (index == 3) {
	

		mapLine[0] = "00 00 00 00 00 00 00 00 00 00";
		mapLine[1] = "00 84 84 56 56 56 56 84 84 00";
		mapLine[2] = "00 85 85 57 57 57 57 85 85 00";
		mapLine[3] = "00 83 90 83 83 83 83 90 83 00";
		mapLine[4] = "00 83 91 92 92 92 92 95 83 00";
		mapLine[5] = "00 83 83 83 83 83 83 83 83 00";
		mapLine[6] = "00 00 83 83 87 83 58 58 83 00";
		mapLine[7] = "00 00 00 00 00 00 00 00 00 00";
		mapLine[8] = "00 00 00 00 00 00 00 00 00 00";

		collisionLine[0] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[1] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[2] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[3] = "01 00 01 01 01 01 01 01 00 01";
		collisionLine[4] = "01 00 01 01 01 01 01 01 00 01";
		collisionLine[5] = "01 00 00 00 00 00 00 00 00 01";
		collisionLine[6] = "01 01 00 00 00 00 01 01 00 01";
		collisionLine[7] = "01 01 01 00 00 00 01 01 01 01";
		collisionLine[8] = "01 01 01 00 00 00 01 01 01 01";

		eventTop = 0;
		eventBottom = 10;
		eventLeft = 0;
		eventRight = 0;

		exitCount = 3;
		exitX[0] = 3;
		exitY[0] = 7;
		exitDestination[0] = 10;
		exitPlayerX[0] = 16 * 3;
		exitPlayerY[0] = 16 * 3;
		exitX[1] = 4;
		exitY[1] = 7;
		exitDestination[1] = 10;
		exitPlayerX[1] = 16 * 3;
		exitPlayerY[1] = 16 * 3;
		exitX[2] = 5;
		exitY[2] = 7;
		exitDestination[2] = 10;
		exitPlayerX[2] = 16 * 3;
		exitPlayerY[2] = 16 * 3;

		npcCount = 4;
		npcX[0] = 4;
		npcY[0] = 3;
		npcDialog[0] = 18;
		npcSpriteIndex[0] = 13;
		npcRadius[0] = 24;
		npcX[1] = 7;
		npcY[1] = 6;
		npcDialog[1] = 20;
		npcSpriteIndex[1] = 0;
		npcRadius[1] = 20;
		npcX[2] = 6;
		npcY[2] = 6;
		npcDialog[2] = 19;
		npcSpriteIndex[2] = 0;
		npcRadius[2] = 25;
		npcX[3] = 8;
		npcY[3] = 6;
		npcDialog[3] = 27;
		npcSpriteIndex[3] = 4;
		npcRadius[3] = 20;

		enemyCount = 0;

		if (act == 1) {
			
		} else if (act == 2) {
			
		} else if (act == 3) {
			
		}
		
		foxBlock = true;
		noRain = true;

		loadMapData();
	}
//Map 4 - Interior - Other House A
	if (index == 4) {

		mapLine[0] = "00 00 00 00 00 00 00 00 00 00";
		mapLine[1] = "00 00 84 84 84 84 84 84 00 00";
		mapLine[2] = "00 00 68 86 65 85 86 66 00 00";
		mapLine[3] = "00 00 69 83 64 83 83 67 00 00";
		mapLine[4] = "00 00 83 83 83 83 83 83 00 00";
		mapLine[5] = "00 00 83 83 83 83 83 83 00 00";
		mapLine[6] = "00 00 83 83 87 83 83 83 00 00";
		mapLine[7] = "00 00 00 00 00 00 00 00 00 00";
		mapLine[8] = "00 00 00 00 00 00 00 00 00 00";

		collisionLine[0] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[1] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[2] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[3] = "01 01 01 00 01 00 00 01 01 01";
		collisionLine[4] = "01 01 00 00 00 00 00 00 01 01";
		collisionLine[5] = "01 01 00 00 00 00 00 00 01 01";
		collisionLine[6] = "01 01 00 00 00 00 00 00 01 01";
		collisionLine[7] = "01 01 01 00 00 00 01 01 01 01";
		collisionLine[8] = "01 01 01 00 00 00 01 01 01 01";

		eventTop = 0;
		eventBottom = 0;
		eventLeft = 0;
		eventRight = 0;

		exitCount = 3;
		exitX[0] = 3;
		exitY[0] = 7;
		exitDestination[0] = 15;
		exitPlayerX[0] = 16 * 2;
		exitPlayerY[0] = 16 * 3;
		exitX[1] = 4;
		exitY[1] = 7;
		exitDestination[1] = 15;
		exitPlayerX[1] = 16 * 2;
		exitPlayerY[1] = 16 * 3;
		exitX[2] = 5;
		exitY[2] = 7;
		exitDestination[2] = 15;
		exitPlayerX[2] = 16 * 2;
		exitPlayerY[2] = 16 * 3;

		if (raining == false) {
			npcCount = 4;
			npcX[0] = 6;
			npcY[0] = 6;
			npcDialog[0] = 30;
			npcSpriteIndex[0] = 6;
			npcRadius[0] = 20;
			npcX[1] = 7;
			npcY[1] = 4;
			npcDialog[1] = 29;
			npcSpriteIndex[1] = 4;
			npcRadius[1] = 20;
			npcX[2] = 2;
			npcY[2] = 2;
			npcDialog[2] = 33;
			npcSpriteIndex[2] = 0;
			npcRadius[2] = 20;
			npcX[3] = 4;
			npcY[3] = 2;
			npcDialog[3] = 34;
			npcSpriteIndex[3] = 0;
			npcRadius[3] = 20;
		} else {
			npcCount = 2;
			npcX[0] = 7;
			npcY[0] = 4;
			npcDialog[0] = 29;
			npcSpriteIndex[0] = 2;
			npcRadius[0] = 20;
			npcX[1] = 2;
			npcY[1] = 2;
			npcDialog[1] = 33;
			npcSpriteIndex[1] = 0;
			npcRadius[1] = 20;
			npcX[2] = 4;
			npcY[2] = 2;
			npcDialog[2] = 34;
			npcSpriteIndex[2] = 0;
			npcRadius[2] = 20;
		}

		enemyCount = 0;

		if (act == 1) {
			
		} else if (act == 2) {
			
		} else if (act == 3) {
			
		}

		foxBlock = true;
		noRain = true;

		loadMapData();
	}
//Map 5 - Interior - Other House B
	if (index == 5) {

		mapLine[0] = "00 00 00 00 00 00 00 00 00 00";
		mapLine[1] = "00 00 84 84 84 84 84 84 00 00";
		mapLine[2] = "00 00 66 66 66 86 85 68 00 00";
		mapLine[3] = "00 00 67 67 67 83 83 69 00 00";
		mapLine[4] = "00 00 83 83 83 83 83 83 00 00";
		mapLine[5] = "00 00 83 83 83 83 83 66 00 00";
		mapLine[6] = "00 00 83 83 87 83 83 67 00 00";
		mapLine[7] = "00 00 00 00 00 00 00 00 00 00";
		mapLine[8] = "00 00 00 00 00 00 00 00 00 00";

		collisionLine[0] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[1] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[2] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[3] = "01 01 01 01 01 00 00 01 01 01";
		collisionLine[4] = "01 01 00 00 00 00 00 01 01 01";
		collisionLine[5] = "01 01 00 00 00 00 00 01 01 01";
		collisionLine[6] = "01 01 00 00 00 00 00 01 01 01";
		collisionLine[7] = "01 01 01 00 00 00 01 01 01 01";
		collisionLine[8] = "01 01 01 00 00 00 01 01 01 01";

		eventTop = 0;
		eventBottom = 0;
		eventLeft = 0;
		eventRight = 0;

		exitCount = 3;
		exitX[0] = 3;
		exitY[0] = 7;
		exitDestination[0] = 15;
		exitPlayerX[0] = 16 * 7;
		exitPlayerY[0] = 16 * 3;
		exitX[1] = 4;
		exitY[1] = 7;
		exitDestination[1] = 15;
		exitPlayerX[1] = 16 * 7;
		exitPlayerY[1] = 16 * 3;
		exitX[2] = 5;
		exitY[2] = 7;
		exitDestination[2] = 15;
		exitPlayerX[2] = 16 * 7;
		exitPlayerY[2] = 16 * 3;

		if (raining == true && defeatedWolf == true) {
			npcCount = 4;
			npcX[0] = 6;
			npcY[0] = 4;
			npcDialog[0] = 21;
			npcSpriteIndex[0] = 1;
			npcRadius[0] = 20;
			npcX[1] = 3;
			npcY[1] = 4;
			npcDialog[1] = 22;
			npcSpriteIndex[1] = 19;
			npcRadius[1] = 20;
			npcX[2] = 2;
			npcY[2] = 5;
			npcDialog[2] = 23;
			npcSpriteIndex[2] = 19;
			npcRadius[2] = 20;
			npcX[3] = 2;
			npcY[3] = 6;
			npcDialog[3] = 24;
			npcSpriteIndex[3] = 18;
			npcRadius[3] = 20;
			npcX[4] = 7;
			npcY[4] = 2;
			npcDialog[4] = 35;
			npcSpriteIndex[4] = 0;
			npcRadius[4] = 20;
		} else if (raining == true && defeatedWolf == false) {
			npcCount = 1;
			npcX[0] = 7;
			npcY[0] = 2;
			npcDialog[0] = 35;
			npcSpriteIndex[0] = 0;
			npcRadius[0] = 20;
		} else {
			npcCount = 2;
			npcX[0] = 6;
			npcY[0] = 4;
			npcDialog[0] = 21;
			npcSpriteIndex[0] = 1;
			npcRadius[0] = 20;
			npcX[1] = 7;
			npcY[1] = 2;
			npcDialog[1] = 35;
			npcSpriteIndex[1] = 0;
			npcRadius[1] = 20;
		}
		
		enemyCount = 0;

		if (act == 1) {
			
		} else if (act == 2) {
			
		} else if (act == 3) {
			
		}

		foxBlock = true;
		noRain = true;

		loadMapData();
	}
//Map 6 - Interior - Bus Terminal
	if (index == 6) {

		mapLine[0] = "00 00 00 00 00 00 00 00 00 00";
		mapLine[1] = "00 00 84 84 84 84 84 84 00 00";
		mapLine[2] = "00 00 85 85 85 85 85 85 00 00";
		mapLine[3] = "00 00 83 83 83 83 83 83 00 00";
		mapLine[4] = "00 00 83 83 83 83 83 83 00 00";
		mapLine[5] = "00 00 83 83 83 83 83 83 00 00";
		mapLine[6] = "00 00 83 83 83 83 83 83 00 00";
		mapLine[7] = "00 00 00 00 00 00 00 00 00 00";
		mapLine[8] = "00 00 00 00 00 00 00 00 00 00";

		collisionLine[0] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[1] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[2] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[3] = "01 01 00 00 00 00 00 00 01 01";
		collisionLine[4] = "01 01 00 00 00 00 00 00 01 01";
		collisionLine[5] = "01 01 00 00 00 00 00 00 01 01";
		collisionLine[6] = "01 01 00 00 00 00 00 00 01 01";
		collisionLine[7] = "01 01 01 00 00 00 01 01 01 01";
		collisionLine[8] = "01 01 01 00 00 00 01 01 01 01";

		eventTop = 0;
		eventBottom = 0;
		eventLeft = 0;
		eventRight = 0;

		exitCount = 3;
		exitX[0] = 3;
		exitY[0] = 7;
		exitDestination[0] = 12;
		exitPlayerX[0] = 16 * 7;
		exitPlayerY[0] = 16 * 3;
		exitX[1] = 4;
		exitY[1] = 7;
		exitDestination[1] = 12;
		exitPlayerX[1] = 16 * 7;
		exitPlayerY[1] = 16 * 3;
		exitX[2] = 5;
		exitY[2] = 7;
		exitDestination[2] = 12;
		exitPlayerX[2] = 16 * 7;
		exitPlayerY[2] = 16 * 3;

		npcCount = 0;
		npcX[0] = 2;
		npcY[0] = 5;
		npcDialog[0] = 10;
		npcSpriteIndex[0] = 0;
		npcRadius[0] = 20;

		enemyCount = 0;

		if (act == 1) {
			
		} else if (act == 2) {
			
		} else if (act == 3) {
			
		}

		foxBlock = true;
		noRain = true;

		loadMapData();
	}
//Map 7 - Interior - Pyrus
	if (index == 7) {

		mapLine[0] = "00 00 00 00 00 00 00 00 00 00";
		mapLine[1] = "00 00 00 00 00 00 00 00 00 00";
		mapLine[2] = "00 56 84 84 84 84 56 56 84 00";
		mapLine[3] = "00 57 65 85 85 85 57 57 85 00";
		mapLine[4] = "00 83 83 83 83 90 83 83 90 00";
		mapLine[5] = "00 83 83 83 83 91 92 92 95 00";
		mapLine[6] = "00 83 83 83 87 83 83 83 83 00";
		mapLine[7] = "00 00 00 00 00 00 00 00 00 00";
		mapLine[8] = "00 00 00 00 00 00 00 00 00 00";

		collisionLine[0] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[1] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[2] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[3] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[4] = "01 00 00 00 00 01 01 01 01 01";
		collisionLine[5] = "01 00 00 00 00 01 01 01 01 01";
		collisionLine[6] = "01 00 00 00 00 00 00 00 00 01";
		collisionLine[7] = "01 01 01 00 00 00 01 01 01 01";
		collisionLine[8] = "01 01 01 00 00 00 01 01 01 01";

		eventTop = 0;
		eventBottom = 0;
		eventLeft = 0;
		eventRight = 0;

		exitCount = 3;
		exitX[0] = 3;
		exitY[0] = 7;
		exitDestination[0] = 11;
		exitPlayerX[0] = 16 * 7;
		exitPlayerY[0] = 16 * 3;
		exitX[1] = 4;
		exitY[1] = 7;
		exitDestination[1] = 11;
		exitPlayerX[1] = 16 * 7;
		exitPlayerY[1] = 16 * 3;
		exitX[2] = 5;
		exitY[2] = 7;
		exitDestination[2] = 11;
		exitPlayerX[2] = 16 * 7;
		exitPlayerY[2] = 16 * 3;

		npcCount = 2;
		npcX[0] = 6;
		npcY[0] = 4;
		npcDialog[0] = 17;
		npcSpriteIndex[0] = 13;
		npcRadius[0] = 28;
		npcX[1] = 2;
		npcY[1] = 4;
		npcDialog[1] = 31;
		npcSpriteIndex[1] = 4;
		npcRadius[1] = 20;


		enemyCount = 0;

		if (act == 1) {
			
		} else if (act == 2) {
			
		} else if (act == 3) {
			
		}

		foxBlock = true;
		noRain = true;

		loadMapData();
	}
//Map 8 - Interior - Looking For Heroes
	if (index == 8) {

		mapLine[0] = "00 00 00 56 56 56 56 00 00 00";
		mapLine[1] = "00 00 00 57 57 57 57 00 00 00";
		mapLine[2] = "00 00 00 83 83 83 83 00 00 00";
		mapLine[3] = "00 00 00 83 83 90 83 00 00 00";
		mapLine[4] = "00 00 00 83 83 91 92 00 00 00";
		mapLine[5] = "00 00 00 83 83 83 83 00 00 00";
		mapLine[6] = "00 00 00 83 87 83 58 00 00 00";
		mapLine[7] = "00 00 00 00 00 00 00 00 00 00";
		mapLine[8] = "00 00 00 00 00 00 00 00 00 00";

		collisionLine[0] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[1] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[2] = "01 01 01 00 00 00 00 01 01 01";
		collisionLine[3] = "01 01 01 00 00 01 00 01 01 01";
		collisionLine[4] = "01 01 01 00 00 01 01 01 01 01";
		collisionLine[5] = "01 01 01 00 00 00 00 01 01 01";
		collisionLine[6] = "01 01 01 00 00 00 01 01 01 01";
		collisionLine[7] = "01 01 01 00 00 00 01 01 01 01";
		collisionLine[8] = "01 01 01 00 00 00 01 01 01 01";

		eventTop = 0;
		eventBottom = 0;
		eventLeft = 0;
		eventRight = 0;

		exitCount = 3;
		exitX[0] = 3;
		exitY[0] = 7;
		exitDestination[0] = 11;
		exitPlayerX[0] = 16 * 2;
		exitPlayerY[0] = 16 * 3;
		exitX[1] = 4;
		exitY[1] = 7;
		exitDestination[1] = 11;
		exitPlayerX[1] = 16 * 2;
		exitPlayerY[1] = 16 * 3;
		exitX[2] = 5;
		exitY[2] = 7;
		exitDestination[2] = 11;
		exitPlayerX[2] = 16 * 2;
		exitPlayerY[2] = 16 * 3;

		npcCount = 2;
		npcX[0] = 6;
		npcY[0] = 3;
		npcDialog[0] = 26;
		npcSpriteIndex[0] = 13;
		npcRadius[0] = 24;
		npcX[1] = 3;
		npcY[1] = 2;
		npcDialog[1] = 32;
		npcSpriteIndex[1] = 2;
		npcRadius[1] = 20;
		
		enemyCount = 0;

		if (act == 1) {
			
		} else if (act == 2) {
			
		} else if (act == 3) {
			
		}
		
		foxBlock = true;
		noRain = true;

		loadMapData();
	}
//Map 9 - Interior - Candy Candy Candy
	if (index == 9) {

		mapLine[0] = "00 00 00 84 56 56 84 00 00 00";
		mapLine[1] = "00 00 00 85 57 57 85 00 00 00";
		mapLine[2] = "00 00 00 58 83 83 58 00 00 00";
		mapLine[3] = "00 00 00 83 83 83 58 00 00 00";
		mapLine[4] = "00 00 00 83 90 83 83 00 00 00";
		mapLine[5] = "00 00 00 92 95 83 83 00 00 00";
		mapLine[6] = "00 00 00 83 87 83 83 00 00 00";
		mapLine[7] = "00 00 00 00 00 00 00 00 00 00";
		mapLine[8] = "00 00 00 00 00 00 00 00 00 00";

		collisionLine[0] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[1] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[2] = "01 01 01 01 00 00 01 01 01 01";
		collisionLine[3] = "01 01 01 00 00 00 01 01 01 01";
		collisionLine[4] = "01 01 01 00 01 00 00 01 01 01";
		collisionLine[5] = "01 01 01 01 01 00 00 01 01 01";
		collisionLine[6] = "01 01 01 00 00 00 00 01 01 01";
		collisionLine[7] = "01 01 01 00 00 00 01 01 01 01";
		collisionLine[8] = "01 01 01 00 00 00 01 01 01 01";

		eventTop = 0;
		eventBottom = 0;
		eventLeft = 0;
		eventRight = 0;

		exitCount = 3;
		exitX[0] = 3;
		exitY[0] = 7;
		exitDestination[0] = 10;
		exitPlayerX[0] = 16 * 7;
		exitPlayerY[0] = 16 * 3;
		exitX[1] = 4;
		exitY[1] = 7;
		exitDestination[1] = 10;
		exitPlayerX[1] = 16 * 7;
		exitPlayerY[1] = 16 * 3;
		exitX[2] = 5;
		exitY[2] = 7;
		exitDestination[2] = 10;
		exitPlayerX[2] = 16 * 7;
		exitPlayerY[2] = 16 * 3;

		npcCount = 2;
		npcX[0] = 3;
		npcY[0] = 4;
		npcDialog[0] = 25;
		npcSpriteIndex[0] = 13;
		npcRadius[0] = 24;
		npcX[1] = 4;
		npcY[1] = 2;
		npcDialog[1] = 28;
		npcSpriteIndex[1] = 2;
		npcRadius[1] = 20;
		
		enemyCount = 0;

		if (act == 1) {
			
		} else if (act == 2) {
			
		} else if (act == 3) {
			
		}

		foxBlock = true;
		noRain = true;
		
		loadMapData();
	}




//Map 10 - Exterior - (1/8) - Downtown - Games Exchange
	if (index == 10) {


		mapLine[0] = "11 11 11 11 11 11 11 11 11 11";
		mapLine[1] = "11 40 41 41 42 12 40 41 42 12";
		mapLine[2] = "12 25 26 27 29 02 80 81 82 02";
		mapLine[3] = "01 38 37 23 36 01 38 23 36 01";
		mapLine[4] = "02 02 01 01 01 01 01 01 01 01";
		mapLine[5] = "02 01 01 01 01 01 01 01 01 01";
		mapLine[6] = "28 28 28 28 28 28 28 28 28 28";
		mapLine[7] = "01 01 01 01 01 01 01 01 01 01";
		mapLine[8] = "11 11 11 11 11 11 11 11 11 11";

		collisionLine[0] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[1] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[2] = "01 01 01 01 01 00 01 01 01 00";
		collisionLine[3] = "01 01 01 00 01 00 01 00 01 00";
		collisionLine[4] = "01 00 00 00 00 00 00 00 00 00";
		collisionLine[5] = "01 00 00 00 00 00 00 00 00 00";
		collisionLine[6] = "01 00 00 00 00 00 00 00 00 00";
		collisionLine[7] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[8] = "01 01 01 01 01 01 01 01 01 01";
		
		eventTop = 0;
		eventBottom = 0;
		eventLeft = 0;
		eventRight = 11;

		exitCount = 2;
		exitX[0] = 3;
		exitY[0] = 2;
		exitDestination[0] = 3;
		exitPlayerX[0] = 16 * 4;
		exitPlayerY[0] = 16 * 6;
		exitX[1] = 7;
		exitY[1] = 2;
		exitDestination[1] = 9;
		exitPlayerX[1] = 16 * 4;
		exitPlayerY[1] = 16 * 6;

		npcCount = 0;
		enemyCount = 0;

		if (raining == true) {
			enemyCount = 3;
			enemyNumber[0] = 3;
			enemyChance[0] = 150;		
			enemyNumber[1] = 8;
			enemyChance[1] = 150;		
			enemyNumber[2] = 10;
			enemyChance[2] = 150;		
		}

		if (act == 1) {
			
		} else if (act == 2) {
			
		} else if (act == 3) {
			
		}

		loadMapData();
	}
//Map 11 - Exterior - (2/8) - Downtown - Shops
	if (index == 11) {


		mapLine[0] = "11 11 11 11 11 11 11 11 11 11";
		mapLine[1] = "12 40 41 42 12 40 41 41 42 12";
		mapLine[2] = "02 76 77 78 02 74 75 88 89 02";
		mapLine[3] = "02 38 23 36 02 38 37 23 36 02";
		mapLine[4] = "01 01 01 01 01 01 01 01 01 01";
		mapLine[5] = "01 01 01 02 01 01 02 01 01 01";
		mapLine[6] = "28 28 28 28 28 28 28 28 28 28";
		mapLine[7] = "01 01 01 01 01 01 01 01 01 01";
		mapLine[8] = "11 11 11 11 11 11 11 11 11 11";

		collisionLine[0] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[1] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[2] = "00 01 01 01 00 01 01 01 01 00";
		collisionLine[3] = "00 01 00 01 00 01 01 00 01 00";
		collisionLine[4] = "00 00 00 00 00 00 00 00 00 00";
		collisionLine[5] = "00 00 00 00 00 00 00 00 00 00";
		collisionLine[6] = "00 00 00 00 00 00 00 00 00 00";
		collisionLine[7] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[8] = "01 01 01 01 01 01 01 01 01 01";

		eventTop = 0;
		eventBottom = 0;
		eventLeft = 10;
		eventRight = 12;

		exitCount = 2;
		exitX[0] = 2;
		exitY[0] = 2;
		exitDestination[0] = 8;
		exitPlayerX[0] = 16 * 4;
		exitPlayerY[0] = 16 * 6;
		exitX[1] = 7;
		exitY[1] = 2;
		exitDestination[1] = 7;
		exitPlayerX[1] = 16 * 4;
		exitPlayerY[1] = 16 * 6;

		npcCount = 0;
		enemyCount = 0;
		
		if (raining == true) {
			enemyCount = 3;
			enemyNumber[0] = 3;
			enemyChance[0] = 150;		
			enemyNumber[1] = 8;
			enemyChance[1] = 150;		
			enemyNumber[2] = 10;
			enemyChance[2] = 150;		
		}
		
		if (act == 1) {
			
		} else if (act == 2) {
			
		} else if (act == 3) {
			
		}

		loadMapData();
	}
//Map 12 - Exterior - (3/8) - Downtown - Bus Terminal
	if (index == 12) {


		mapLine[0] = "09 28 45 46 28 13 11 11 11 11";
		mapLine[1] = "10 28 47 48 28 40 41 41 42 11";
		mapLine[2] = "01 28 49 50 28 39 01 01 43 11";
		mapLine[3] = "02 28 01 01 28 38 23 23 36 12";
		mapLine[4] = "01 28 01 01 28 01 01 01 01 02";
		mapLine[5] = "02 28 01 01 28 02 01 01 02 01";
		mapLine[6] = "28 28 01 01 28 28 28 28 28 28";
		mapLine[7] = "01 01 01 01 01 01 01 01 01 01";
		mapLine[8] = "09 01 01 01 01 13 11 11 11 11";

		collisionLine[0] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[1] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[2] = "00 00 01 01 00 01 01 01 01 01";
		collisionLine[3] = "00 00 00 00 00 01 01 01 01 01";
		collisionLine[4] = "00 00 00 00 00 00 00 00 00 00";
		collisionLine[5] = "00 00 00 00 00 00 00 00 00 00";
		collisionLine[6] = "00 00 00 00 00 00 00 00 00 00";
		collisionLine[7] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[8] = "01 01 01 01 01 01 01 01 01 01";

		eventTop = 0;
		eventBottom = 0;
		eventLeft = 11;
		eventRight = 13;

		exitCount = 0;
		npcCount = 0;
		enemyCount = 0;

		if (raining == true) {
			enemyCount = 3;
			enemyNumber[0] = 3;
			enemyChance[0] = 150;		
			enemyNumber[1] = 8;
			enemyChance[1] = 150;		
			enemyNumber[2] = 10;
			enemyChance[2] = 150;		
		}

		if (act == 1) {
			
		} else if (act == 2) {
			
		} else if (act == 3) {
			
		}

		loadMapData();
	}

//Map 13 - Exterior - (4/8) - Victoria Park - Boat House
	if (index == 13) {


		mapLine[0] = "11 11 11 09 04 04 13 11 11 11";
		mapLine[1] = "12 12 12 10 04 04 14 12 12 12";
		mapLine[2] = "09 01 01 01 51 51 01 02 02 01";
		mapLine[3] = "10 02 01 01 52 52 01 01 02 01";
		mapLine[4] = "02 01 02 01 04 04 01 01 01 01";
		mapLine[5] = "01 01 01 01 04 04 79 79 79 79";
		mapLine[6] = "28 28 28 28 28 28 28 28 28 28";
		mapLine[7] = "01 01 01 01 01 01 01 01 01 01";
		mapLine[8] = "11 11 11 11 11 11 11 11 11 11";

		collisionLine[0] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[1] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[2] = "01 00 00 00 00 00 00 00 00 00";
		collisionLine[3] = "01 00 00 00 00 00 00 00 00 00";
		collisionLine[4] = "00 00 00 00 01 01 00 00 00 00";
		collisionLine[5] = "00 00 00 00 01 01 01 01 01 01";
		collisionLine[6] = "00 00 00 00 00 00 00 00 00 00";
		collisionLine[7] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[8] = "01 01 01 01 01 01 01 01 01 01";

		eventTop = 0;
		eventBottom = 0;
		eventLeft = 12;
		eventRight = 14;

		exitCount = 0;
		
		if (raining == true) {
			npcCount = 1;
			npcX[0] = 7;
			npcY[0] = 4;
			npcDialog[0] = 30;
			npcSpriteIndex[0] = 6;
			npcRadius[0] = 30;
		} else {
			npcCount = 0;
		}

		if (raining == true) {
			enemyCount = 3;
			enemyNumber[0] = 3;
			enemyChance[0] = 150;		
			enemyNumber[1] = 8;
			enemyChance[1] = 150;		
			enemyNumber[2] = 10;
			enemyChance[2] = 150;		
		} else {
			enemyCount = 1;
			enemyNumber[0] = 3;
			enemyChance[0] = 50;		
		}

		if (act == 1) {
			
		} else if (act == 2) {
			
		} else if (act == 3) {
			
		}

		loadMapData();
	}

//Map 14 - Exterior - (5/8) - Victoria Park - Bridge
	if (index == 14) {


		mapLine[0] = "11 11 11 11 11 11 09 04 13 11";
		mapLine[1] = "12 12 12 12 12 12 10 04 14 12";
		mapLine[2] = "02 02 02 01 02 01 02 04 02 02";
		mapLine[3] = "02 02 01 79 79 32 33 04 02 02";
		mapLine[4] = "01 01 01 04 02 01 02 02 01 01";
		mapLine[5] = "79 79 79 04 02 01 01 01 02 02";
		mapLine[6] = "28 28 28 28 28 28 28 28 28 28";
		mapLine[7] = "01 01 01 01 01 01 01 01 01 01";
		mapLine[8] = "11 11 11 11 11 11 11 11 11 11";

		collisionLine[0] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[1] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[2] = "00 00 00 00 00 00 00 01 00 00";
		collisionLine[3] = "00 00 00 01 01 00 00 01 00 00";
		collisionLine[4] = "00 00 00 01 00 00 00 00 00 00";
		collisionLine[5] = "01 01 01 01 00 00 00 00 00 00";
		collisionLine[6] = "00 00 00 00 00 00 00 00 00 00";
		collisionLine[7] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[8] = "01 01 01 01 01 01 01 01 01 01";

		eventTop = 0;
		eventBottom = 0;
		eventLeft = 13;
		eventRight = 15;

		exitCount = 0;
		npcCount = 0;
		
		if (raining == true) {
			enemyCount = 3;
			enemyNumber[0] = 3;
			enemyChance[0] = 150;		
			enemyNumber[1] = 8;
			enemyChance[1] = 150;		
			enemyNumber[2] = 10;
			enemyChance[2] = 150;		
		} else {
			enemyCount = 1;
			enemyNumber[0] = 3;
			enemyChance[0] = 50;		
		}
				
		if (raining == true && sawMomOnce == false) {
			npcCount = 1;
			npcX[0] = 9;
			npcY[0] = 5;
			npcDialog[0] = 0;
			npcSpriteIndex[0] = 1;
			npcRadius[0] = 20;
			specialAnimation = 1;
			sawMomOnce = true;
		}

		if (act == 1) {
			
		} else if (act == 2) {
			
		} else if (act == 3) {
			
		}

		loadMapData();
	}

//Map 15 - Exterior - (6/8) - Your Street - Houses
	if (index == 15) {


		mapLine[0] = "11 11 11 11 11 11 11 11 11 11";
		mapLine[1] = "12 12 16 12 12 12 12 16 12 12";
		mapLine[2] = "01 18 19 20 01 02 18 19 20 02";
		mapLine[3] = "02 21 23 24 01 02 21 23 24 01";
		mapLine[4] = "02 02 01 02 02 02 01 01 01 01";
		mapLine[5] = "01 02 01 01 01 01 01 01 01 01";
		mapLine[6] = "28 28 28 28 28 28 28 28 28 28";
		mapLine[7] = "01 01 01 01 01 01 01 01 01 01";
		mapLine[8] = "11 11 11 11 11 11 11 11 11 11";

		collisionLine[0] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[1] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[2] = "00 01 01 01 00 00 01 01 01 00";
		collisionLine[3] = "00 01 00 01 00 00 01 00 01 00";
		collisionLine[4] = "00 00 00 00 00 00 00 00 00 00";
		collisionLine[5] = "00 00 00 00 00 00 00 00 00 00";
		collisionLine[6] = "00 00 00 00 00 00 00 00 00 00";
		collisionLine[7] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[8] = "01 01 01 01 01 01 01 01 01 01";

		eventTop = 0;
		eventBottom = 0;
		eventLeft = 14;
		eventRight = 16;

		exitCount = 2;
		exitX[0] = 2;
		exitY[0] = 2;
		exitDestination[0] = 4;
		exitPlayerX[0] = 16 * 4;
		exitPlayerY[0] = 16 * 6;
		exitX[1] = 7;
		exitY[1] = 2;
		exitDestination[1] = 5;
		exitPlayerX[1] = 16 * 4;
		exitPlayerY[1] = 16 * 6;
		
		npcCount = 0;
		enemyCount = 0;

		//if (raining == true) {
		//	enemyCount = 3;
		//	enemyNumber[0] = 3;
		//	enemyChance[0] = 150;		
		//	enemyNumber[1] = 8;
		//	enemyChance[1] = 150;		
		//	enemyNumber[2] = 10;
		//	enemyChance[2] = 150;		
		//}
		
		if (raining == true && sawMomTwice == false) {
			npcCount = 1;
			npcX[0] = 5;
			npcY[0] = 5;
			npcDialog[0] = 0;
			npcSpriteIndex[0] = 1;
			npcRadius[0] = 20;
			specialAnimation = 3;
			sawMomTwice = true;
		}
		
		if (act == 1) {
			
		} else if (act == 2) {
			
		} else if (act == 3) {
			
		}

		loadMapData();
	}

//Map 16 - Exterior - (7/8) - Your Street - Your House
	if (index == 16) {
	

		mapLine[0] = "11 11 11 11 11 11 11 11 11 11";
		mapLine[1] = "12 12 12 12 12 16 12 12 12 12";
		mapLine[2] = "01 01 01 01 18 19 20 71 01 01";
		mapLine[3] = "01 02 01 02 21 23 24 72 01 01";
		mapLine[4] = "01 02 02 01 01 01 01 02 01 01";
		mapLine[5] = "01 01 01 01 01 01 01 01 02 01";
		mapLine[6] = "28 28 28 28 28 28 28 02 02 02";
		mapLine[7] = "01 01 01 01 01 01 28 02 02 01";
		mapLine[8] = "11 11 11 11 11 11 11 11 11 11";

		collisionLine[0] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[1] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[2] = "00 00 00 00 01 01 01 01 00 00";
		collisionLine[3] = "00 00 00 00 01 00 01 01 00 00";
		collisionLine[4] = "00 00 00 00 00 00 00 00 00 00";
		collisionLine[5] = "00 00 00 00 00 00 00 00 00 00";
		collisionLine[6] = "00 00 00 00 00 00 00 00 00 00";
		collisionLine[7] = "01 01 01 01 01 01 00 00 00 00";
		collisionLine[8] = "01 01 01 01 01 01 01 01 01 01";

		eventTop = 0;
		eventBottom = 0;
		eventLeft = 15;
		eventRight = 17;

		exitCount = 1;
		exitX[0] = 5;
		exitY[0] = 2;
		exitDestination[0] = 2;
		exitPlayerX[0] = 16 * 4;
		exitPlayerY[0] = 16 * 6;

		npcCount = 0;
		enemyCount = 0;

		if (raining == true && sawMomThrice == false) {
			npcCount = 1;
			npcX[0] = 5;
			npcY[0] = 5;
			npcDialog[0] = 0;
			npcSpriteIndex[0] = 1;
			npcRadius[0] = 20;
			specialAnimation = 3;
			sawMomThrice = true;
			if (partyFox == false) {
				npcCount = 2;
				npcX[1] = 7;
				npcY[1] = 2;
				npcDialog[1] = 39;
				npcSpriteIndex[1] = 0;
				npcRadius[1] = 20;
			}
		} else if (raining == false && partyFox == false) {
			npcCount = 1;
			npcX[0] = 7;
			npcY[0] = 3;
			npcDialog[0] = 14;
			npcSpriteIndex[0] = 33;
			npcRadius[0] = 20;
		}
		
		if (act == 1) {
			
		} else if (act == 2) {
			
		} else if (act == 3) {
			
		}

		loadMapData();
	}

//Map 17 - Exterior - (8/8) - Your Street - Park
	if (index == 17) {


		mapLine[0] = "11 11 11 11 11 11 11 11 11 11";
		mapLine[1] = "12 12 12 12 12 12 12 12 12 12";
		mapLine[2] = "02 01 01 02 01 01 01 01 01 13";
		mapLine[3] = "01 01 01 01 01 01 01 02 01 14";
		mapLine[4] = "01 02 02 01 01 01 01 02 01 13";
		mapLine[5] = "01 01 01 02 01 01 01 01 01 14";
		mapLine[6] = "01 01 01 01 01 01 01 01 01 13";
		mapLine[7] = "01 01 01 01 01 01 01 01 01 14";
		mapLine[8] = "11 11 11 11 11 11 11 11 11 11";

		collisionLine[0] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[1] = "01 01 01 01 01 01 01 01 01 01";
		collisionLine[2] = "00 00 00 00 00 00 00 00 00 01";
		collisionLine[3] = "00 00 00 00 00 00 00 00 00 01";
		collisionLine[4] = "00 00 00 00 00 00 00 00 00 01";
		collisionLine[5] = "00 00 00 00 00 00 00 00 00 01";
		collisionLine[6] = "00 00 00 00 00 00 00 00 00 01";
		collisionLine[7] = "00 00 00 00 00 00 00 00 00 01";
		collisionLine[8] = "01 01 01 01 01 01 01 01 01 01";

		eventTop = 0;
		eventBottom = 0;
		eventLeft = 16;
		eventRight = 0;

		npcCount = 0;
		exitCount = 0;

		if (raining == false) {
			npcCount = 3;
			npcX[0] = 6;
			npcY[0] = 2;
			npcDialog[0] = 22;
			npcSpriteIndex[0] = 7;
			npcRadius[0] = 20;
			
			npcX[1] = 7;
			npcY[1] = 2;
			npcDialog[1] = 22;
			npcSpriteIndex[1] = 8;
			npcRadius[1] = 0;
			
			npcX[2] = 8;
			npcY[2] = 2;
			npcDialog[2] = 22;
			npcSpriteIndex[2] = 9;
			npcRadius[2] = 0;
		} else { //its raining
			if (defeatedWolf == false) {
				npcCount = 5;
				npcX[0] = 4;			//sister
				npcY[0] = 3;
				npcDialog[0] = 22;
				npcSpriteIndex[0] = 14;
				npcRadius[0] = 20;
				
				npcX[1] = 5;			//sister
				npcY[1] = 2;
				npcDialog[1] = 23;
				npcSpriteIndex[1] = 14;
				npcRadius[1] = 20;
				
				npcX[2] = 8;			//sister in trouble
				npcY[2] = 2;
				npcDialog[2] = 24;
				npcSpriteIndex[2] = 9;
				npcRadius[2] = 20;
						
				npcX[3] = 3;			//mom
				npcY[3] = 5;
				npcDialog[3] = 21;
				npcSpriteIndex[3] = 1;
				npcRadius[3] = 20;
						
				npcX[4] = 7;			//wolf
				npcY[4] = 2;
				npcDialog[4] = 37;
				npcSpriteIndex[4] = 16;
				npcRadius[4] = 20;
			} else {
				if (thankYou == false) {
					npcCount = 4;
					npcX[0] = 4;			//sister
					npcY[0] = 4;
					npcDialog[0] = 22;
					npcSpriteIndex[0] = 14;
					npcRadius[0] = 20;
					
					npcX[1] = 5;			//sister
					npcY[1] = 2;
					npcDialog[1] = 23;
					npcSpriteIndex[1] = 14;
					npcRadius[1] = 20;
					
					npcX[2] = 8;			//sister in trouble
					npcY[2] = 2;
					npcDialog[2] = 24;
					npcSpriteIndex[2] = 9;
					npcRadius[2] = 20;
							
					npcX[3] = 6;			//mom
					npcY[3] = 5;
					npcDialog[3] = 21;
					npcSpriteIndex[3] = 1;
					npcRadius[3] = 20;
					
					//loadDialog(38);
					
					specialAnimation = 4;
					thankYou = true;
				}
			}
		}
		
		enemyCount = 0;

		if (act == 1) {
			
		} else if (act == 2) {
			
		} else if (act == 3) {
			
		}

		loadMapData();
	}

}

//---------------------------------------------------------------- Dialog
function loadDialog(index) {
	// Must have an even number of lines to work, two lines per box.
	inputMode = "textbox";
	question = false;
	initBattleFromText = 0;
	menuSelection = 0;
	pos1 = 0;
	pos2 = 0;
	line1 = 0;
	line2 = 1;
	
	//Item Dialog
	if (index == 0) { //Use Health Item Dialog
		lines = 1;
		dialog[0] = "You used "+items[selectedItem][0]+".";
		if (selectedItem == 0) { dialog[0] = "You ate an Apple."; }
		if (selectedItem == 1) { dialog[0] = "You ate some Crab Meat."; }
		if (selectedItem == 2) { dialog[0] = "You used a Potion."; }
		dialog[1] = "Regained "+items[selectedItem][3]+" health!";
	}
	if (index == 1) { //Item Info Dialog
		lines = 1;
		dialog[0] = items[selectedItem][0];
		dialog[1] = items[selectedItem][1];
	}	
	if (index == 2) { //Use Health Item Dialog
		lines = 1;
		dialog[0] = "Your health is full.";
		dialog[1] = "You saved your "+items[selectedItem][0]+".";
	}
	if (index == 3) { //Golden Claw, Golden Wings, Jewelry
		lines = 1;
		dialog[0] = "You can't really use this.";
		dialog[1] = "";
	}	
	if (index == 4) { //Use Status Item
		lines = 1;
		dialog[0] = "You used the "+items[selectedItem][0]+".";
		dialog[1] = "You are no longer "+items[selectedItem][2]+"!";
	}
	if (index == 5) { //Unused Status Item
		lines = 1;
		dialog[0] = "You are not "+items[selectedItem][2]+".";
		dialog[1] = "You saved your "+items[selectedItem][0]+".";
	}
	if (index == 9) { //Error
		lines = 1;
		dialog[0] = "I am Error.";
		dialog[1] = "";
	}
	
	// NPC Dialog
	if (index == 10) { //Mom
		if (defeatedWolf == true) {
			lines = 4;
			dialog[0] = "Lyn just told me the news!";
			dialog[1] = "";
			dialog[2] = "You saved Lyne and beat";
			dialog[3] = "up that Wolf all by yourself!";
			dialog[4] = "You're so brave!";
			dialog[5] = "";
			if (items[8][4] >= 1) {
				lines = 12;
				dialog[6] = "Oh, you brought me a";
				dialog[7] = "Coffee too!";
				dialog[8] = "Thank you!";
				dialog[9] = "";
				dialog[10] = "It's been a long day.";
				dialog[11] = "";
				dialog[12] = "You shoud go upstairs and";
				dialog[13] = "play that new game you got.";
				items[8][4] = 0;
				questCoffee = false;
				questcompleteCoffee = false;
			} else {
				lines = 8;
				dialog[6] = "It's been a long day.";
				dialog[7] = "";
				dialog[8] = "You shoud go upstairs and";
				dialog[9] = "play that new game you got.";
			}
		} else if (introMom == false) {
			lines = 8;
			dialog[0] = "Todays the big day, huh?";
			dialog[1] = "";
			dialog[2] = "You're going Downtown";
			dialog[3] = "all by yourself!";
			dialog[4] = "I bet you get the coolest";
			dialog[5] = "game at the Game Store.";
			dialog[6] = "Since you'll be in the area..";
			dialog[7] = "";
			dialog[8] = "Could you pick me up";
			dialog[9] = "a Coffee too?";
			introMom = true;
			questCoffee = true;
		} else if (playerStatus == "Stung") {
			lines = 2;
			dialog[0] = "Oh no, you're Stung.";
			dialog[1] = "Here, lets just...";
			dialog[2] = "Mom used a Herb!";
			dialog[3] = "You are no longer Stung!";
			playerStatus = "Healthy";
		} else if (playerStatus == "Poisoned") {
			lines = 2;
			dialog[0] = "Oh no, you're Poisoned!";
			dialog[1] = "Here, quick, drink this...";
			dialog[2] = "Mom used an Antidote!";
			dialog[3] = "You are no longer Poisoned!";
			playerStatus = "Healthy";
		} else if (items[0][4] == 0) {
			lines = 2;
			dialog[0] = "Oh, you ran out of Apples?";
			dialog[1] = "Here, have some more.";
			dialog[2] = "Recieved three Apples!";
			dialog[3] = "";
			items[0][4] = 3;
		} else if (items[2][4] == 0) {
			lines = 2;
			dialog[0] = "You don't have your Potion?";
			dialog[1] = "Here, take another.";
			dialog[2] = "Recieved Potion!";
			dialog[3] = "";
			items[2][4]++;
		} else if (items[3][4] == 0) {
			lines = 4;
			dialog[0] = "Here, take this herb with";
			dialog[1] = "you. Use it when you're";
			dialog[2] = "Stung.";
			dialog[3] = "";
			dialog[4] = "Recieved Herb!";
			dialog[5] = "";
			items[3][4]++;
		} else if (items[4][4] == 0) {
			lines = 4;
			dialog[0] = "Here, take this Antidote";
			dialog[1] = "with you.  Use it when";
			dialog[2] = "You're Poisoned";
			dialog[3] = "";
			dialog[4] = "Recieved Antidote!";
			dialog[5] = "";
			items[4][4]++;
		} else if (introMom == true) {
			if (questcompleteCoffee == false) {
				if (items[8][4] == 0) {
					if (items[6][4] >= 1) {
						lines = 6;
						dialog[0] = "You went all the way";
						dialog[1] = "Downtown to get a new";
						dialog[2] = "game and you didn\'t even";
						dialog[3] = "stop to get me a Coffee?";
						dialog[4] = "It\'s on your way there and";
						dialog[5] = "back.";
						dialog[6] = "You pass it twice!";
						dialog[7] = "";
					} else {
						lines = 2;
						dialog[0] = "All boys leave home one";
						dialog[1] = "day.";
						dialog[2] = "It said so on TV.";
						dialog[3] = "";
					}
				} else {
					lines = 4;
					dialog[0] = "Oh!";
					dialog[1] = "Thank you so much!";
					dialog[2] = "Quest Complete!";
					dialog[3] = "";
					dialog[4] = "Gave Mom Coffee!";
					dialog[5] = "";
					items[8][4] -= 1;
					questcompleteCoffee = true;
					questCoffee = false;
				}
			} else {
				lines = 1;
				dialog[0] = "How is it going?";
				dialog[1] = "";
			}
		}
	}
	if (index == 11) {
		lines = 2;
		dialog[0] = "You are playing SNES!";
		dialog[1] = "";
		if (items[5][4] == 1) {
			dialog[2] = "The game is really bad,";
			dialog[3] = "though.";
		} else if (items[6][4] == 1) {
			lines = 14;
			dialog[0] = "As you sit down to play";
			dialog[1] = "Best Game, you are";
			dialog[2] = "reminded of all the";
			dialog[3] = "awesome adventures";
			dialog[4] = "you had today.";
			dialog[5] = "";
			dialog[6] = "Basking in the glow of";
			dialog[7] = "your television set,";
			dialog[8] = "you feel complete.";
			dialog[9] = "";
			dialog[10] = "You are more than just a";
			dialog[11] = "small boy.";
			dialog[12] = "You, my friend..";
			dialog[13] = "";
			dialog[14] = "You are a true hero.";
			dialog[15] = "";
			theEnd = true;			
		} else {
			dialog[2] = "You don't have any games,";
			dialog[3] = "though.";
		}

	}
	if (index == 12) { // Your computer
		lines = 2;
		dialog[0] = "Beep, beep..";
		dialog[1] = "";
		dialog[2] = "Boop, Boop..";
		dialog[3] = "";
	}
	if (index == 13) { // Your bed
		lines = 2;
		dialog[0] = "Action Face Man (tm)";
		dialog[1] = "Action Bed Sheets!";
		dialog[2] = "So AWESOME!";
		dialog[3] = "Yeeeah!";
	}
	if (index == 14) { // Your dog
		lines = 2;
		dialog[0] = "Bark bark!";
		dialog[1] = "Do you want your pup";
		dialog[2] = "to come with you?";
		dialog[3] = "   Yes    No";
		question = true;
		questionMode = "Dog";
	}
	if (index == 15) { // Your Trash Can
		lines = 4;
		dialog[0] = "You dug around in the";
		dialog[1] = "trash can.";
		dialog[2] = "Well, let\'s see here..";
		dialog[3] = "";
		dialog[4] = "Its just garbage.";
		dialog[5] = "";
	}
	if (index == 16) { // Your Pillow Case
		lines = 2;
		dialog[0] = "Action Face Man (tm)";
		dialog[1] = "Action Bed Set!";
		dialog[2] = "Awesome!";
		dialog[3] = "";
	}
	if (index == 17) { // Coffee Shop Clerk
		if (questCoffee == false) {
			lines = 2;
			dialog[0] = "Welcome to Pyrus!";
			dialog[1] = "";
			dialog[2] = "Grab a Coffee and";
			dialog[3] = "stay a while.";
		} else {
			if (items[8][4] == 1) {
				lines = 2;
				dialog[0] = "You better get that";
				dialog[1] = "home quick.";
				dialog[2] = "Before it gets cold.";
				dialog[3] = "";
			} else {
				lines = 8;
				dialog[0] = "Welcome to Pyrus,";
				dialog[1] = "";
				dialog[2] = "Coffee for your Mom?";
				dialog[3] = "";
				dialog[4] = "Coming right up!";
				dialog[5] = "";
				dialog[6] = "Here you go.";
				dialog[7] = "";
				dialog[8] = "Recieved Coffee!";
				dialog[9] = "";
				
				items[8][4] += 1;
			}
		}
	}
	if (index == 18) { // Games Exchange Clerk
		if (questcompleteBestGame == false) {
			if (questBestGame == false) {
				lines = 14;
				dialog[0] = "Oh, hi!";
				dialog[1] = "";
				dialog[2] = "Welcome to the";
				dialog[3] = "Games Exchange!";
				dialog[4] = "Do you want to trade in";
				dialog[5] = "\'Terrible Game\'?";
				dialog[6] = "Yeah?";
				dialog[7] = "";
				dialog[8] = "Cool, let me check real";
				dialog[9] = "quick...";
				dialog[10] = "Okay,";
				dialog[11] = "take a look around.";
				dialog[12] = "You can get anything";
				dialog[13] = "worth one monies.";
				dialog[14] = "Give or take.";
				dialog[15] = "";
				items[5][4] -= 1;
				questBestGame = true;
			} else {
				if (holdingBestGame == false) {
					lines = 4;
					dialog[0] = "Take a look around.";
					dialog[1] = "";
					dialog[2] = "We just got in Best Game.";
					dialog[3] = "It\'s brand new.";
					dialog[4] = "It\'s in the bin over there.";
					dialog[5] = "";
				} else {
					lines = 24;
					dialog[0] = "Awesome!";
					dialog[1] = "";
					dialog[2] = "That game is so good!";
					dialog[3] = "You\'re going to love it!";
					dialog[4] = "Quest Complete!";
					dialog[5] = "";
					dialog[6] = "Recieved Best Game!";
					dialog[7] = "";
					dialog[8] = "Better hurry home.";
					dialog[9] = "Looks like it started to rain.";
					
					dialog[10] = "...  ";
					dialog[11] = "";
					dialog[12] = "Oh, hold on a second.";
					dialog[13] = "";
					dialog[14] = "All the toughest bad guys";
					dialog[15] = "come out when it\'s raining.";
					dialog[16] = "It\'s dangerous to go alone!";
					dialog[17] = "";
					dialog[18] = "Take this.";
					dialog[19] = "";
					dialog[20] = "Recieved Master Sword!";
					dialog[21] = "";
					dialog[22] = "It\'s made of plastic..";
					dialog[23] = "but, whatever.";
					dialog[24] = "Don't forget to equip it";
					dialog[25] = "before you go.";
					
					equipment[1][4] = 1;
					items[6][4] += 1;
					
					raining = true;
					questBestGame = false;
					holdingBestGame = false;
					questcompleteBestGame = true;
				}
			}
		} else {
			lines = 8;
			dialog[0] = "Oh, hey!";
			dialog[1] = "";
			dialog[2] = "How do you like your";
			dialog[3] = "new game?";
			dialog[4] = "You should check out the";
			dialog[5] = "comic book shop.";
			dialog[6] = "They just got in Action Face";
			dialog[7] = "Man (tm) Action Comic #7.";
			dialog[8] = "dudes my hero.";
			dialog[9] = "";
			
		}
	}
	if (index == 19) { // Games Exchange Bin
		if (questBestGame == true) {
			if (holdingBestGame == false) {
				lines = 6;
				dialog[0] = "No way!";
				dialog[1] = "This game is amazing!";
				dialog[2] = "Picked Up Best Game!";
				dialog[3] = "";
				dialog[4] = "Aw, yiss!";
				dialog[5] = "";
				dialog[6] = "I should take it to";
				dialog[7] = "the counter before I leave.";
				holdingBestGame = true;
				//alert("BEST GAME");
			} else {
				lines = 2;
				dialog[0] = "I can't believe they had";
				dialog[1] = "this.";
				dialog[2] = "Best Game is the best!";
				dialog[3] = "";
			}
		} else {
			lines = 1;
			dialog[0] = "Woah, look at all the";
			dialog[1] = "awesome games!";
		}

	}
	if (index == 20) { //Other Bin at the Games Exchange
		lines = 1;
		dialog[0] = "This bin is full of old";
		dialog[1] = "sports games.";
	}
	if (index == 21) { //Triplet's Mom
		if (defeatedWolf == false && raining == true) {
			lines = 2;
			dialog[0] = "You need to punch that";
			dialog[1] = "thing out or something.";
			dialog[2] = "Use that wicked sword";
			dialog[3] = "you got to beat it up!";
		} else if (questCottonCandy == true) {
			if (items[9][4] >= 1) {
				//have candy havent given it to girls
				lines  = 2;
				dialog[0] = "Perfect! You got some";
				dialog[1] = "Cotton Candy.";
				dialog[2] = "They will be so happy!";
				dialog[3] = "";
				if (raining == false) {
					lines = 4;
					dialog[4] = "You can find the girls in";
					dialog[5] = "the park to the right.";
				}
			} else {
				lines = 6;
				dialog[0] = "I always get the girls";
				dialog[1] = "Cotton Candy from ";
				dialog[2] = "Candy Candy Candy";
				dialog[3] = "(I Can\'t let you go)";
				dialog[4] = "It\'s a block away from the";
				dialog[5] = "Bus Terminal.";
				dialog[6] = "Can't miss it.";
				dialog[7] = "     ";
			}
		} else {
			if (questcompleteCottonCandy == true) {
				lines  = 2;
				dialog[0] = "Thank you for bringing my";
				dialog[1] = "girls some Cotton Candy.";
				dialog[2] = "They absolutely loved it!";
				dialog[3] = "";
			} else {
				lines  = 6;
				dialog[0] = "Hi! I'm Lyn.";
				dialog[1] = "The triplets mom.";
				dialog[2] = "Since you're out and";
				dialog[3] = "about..";
				dialog[4] = "Would you kindly fetch my";
				dialog[5] = "girls some Cotton Candy?";
				if (raining == true) {
					dialog[6] = "Since it\'s raining I";
					dialog[7] = "would like to treat them.";
				} else {
					dialog[6] = "They're just jumping rope";
					dialog[7] = "in the park to the right.";
				}
				questCottonCandy = true;
			}
		}
	}
	if (index == 22) { //Lynn
		if (defeatedWolf == false && raining == true) {
			lines = 2;
			dialog[0] = "Help us!";
			dialog[1] = "";
			dialog[2] = "Help us!";
			dialog[3] = "";
		} else if (items[9][4] >= 1 && questCottonCandy == true) {
			lines = 8;
			dialog[0] = "Cotton Candy!!!!";
			dialog[1] = "";
			dialog[2] = "Thank you so much!";
			dialog[3] = "";
			dialog[4] = "We loooove Cotton Candy!";
			dialog[5] = "";
			dialog[6] = "Quest Complete!";
			dialog[7] = "";
			dialog[8] = "Gave Triplets Cotton";
			dialog[9] = "Candy.";
			items[9][4] = 0;
			questCottonCandy = false;
			questcompleteCottonCandy = true;
		} else {
			lines = 2;
			dialog[0] = "Hi! We're jumping rope!";
			dialog[1] = "";
			dialog[2] = "You're cute!";
			dialog[3] = "";
		}
	}
	if (index == 23) { //Lynne
		if (defeatedWolf == false && raining == true) {
			lines = 2;
			dialog[0] = "Lyne needs help!";
			dialog[1] = "";
			dialog[2] = "You're our only hope!";
			dialog[3] = "";
		} else if (items[9][4] >= 1 && questCottonCandy == true) {
			lines = 8;
			dialog[0] = "Cotton Candy!!!!";
			dialog[1] = "";
			dialog[2] = "Thank you so much!";
			dialog[3] = "";
			dialog[4] = "We loooove Cotton Candy!";
			dialog[5] = "";
			dialog[6] = "Quest Complete!";
			dialog[7] = "";
			dialog[8] = "Gave Triplets Some";
			dialog[9] = "Cotton Candy.";
			items[9][4] = 0;
			questCottonCandy = false;
			questcompleteCottonCandy = true;
		} else {
			lines = 4;
			dialog[0] = "I'm Lynne!";
			dialog[1] = "";
			dialog[2] = "Sugar and spice..";
			dialog[3] = "";
			dialog[4] = "and everything nice..";
			dialog[5] = "";
		}
	}
	if (index == 24) { //Lyne
		if (defeatedWolf == false && raining == true) {
			lines = 1;
			dialog[0] = "Help me!";
			dialog[1] = "Help me!";
			initBattleFromText = 7;
		} else if (items[9][4] >= 1 && questCottonCandy == true) {
			lines = 8;
			dialog[0] = "Cotton Candy!!!!";
			dialog[1] = "";
			dialog[2] = "Thank you so much!";
			dialog[3] = "";
			dialog[4] = "We loooove Cotton Candy!";
			dialog[5] = "";
			dialog[6] = "Quest Complete!";
			dialog[7] = "";
			dialog[8] = "Gave Triplets Some";
			dialog[9] = "Cotton Candy.";
			items[9][4] = 0;
			questCottonCandy = false;
			questcompleteCottonCandy = true;
		} else {
			lines = 4;
			dialog[0] = "I'm Lyne!";
			dialog[1] = "";
			dialog[2] = "snips and snails..";
			dialog[3] = "";
			dialog[4] = "and puppy dog tails!";
			dialog[5] = "";
		}
	}
	if (index == 25) { //Candy Man
		if (questCottonCandy == true && questcompleteCottonCandy == false) {
			if (items[9][4] >= 1) {
				if (questGummyWorms == true && questcompleteGummyWorms == false) {
					if (items[7][4] >= 1) {
						lines = 6;
						dialog[0] = "Welcome to Candy Candy";
						dialog[1] = "Candy!";
						dialog[2] = "Take a look around.";
						dialog[3] = "We have Cotton Candy";
						dialog[4] = "AND Gummy Worms!";
						dialog[5] = "";
						dialog[6] = "Fine treats abounds.";
						dialog[7] = "";
					} else {
						lines = 6;
						dialog[0] = "Welcome to Candy Candy";
						dialog[1] = "Candy!";
						dialog[2] = "Oh, you want to pick up";
						dialog[3] = "a few Gummy Worms?";
						dialog[4] = "Coming right up!";
						dialog[5] = "";
						dialog[6] = "Recieved Gummy Worms!";
						dialog[7] = "";
						items[7][4] += 1;
					}
				} else {
					lines = 4;
					dialog[0] = "Welcome to Candy Candy";
					dialog[1] = "Candy!";
					dialog[2] = "Take a look around.";
					dialog[3] = "";
					dialog[4] = "We just got some fresh";
					dialog[5] = "Gummy Worms in.";
				}
			} else {
				lines = 8;
				dialog[0] = "Welcome to Candy Candy";
				dialog[1] = "Candy!";
				dialog[2] = "Oh, are you here to get";
				dialog[3] = "some Cotton Candy for the";
				dialog[4] = "triplets?";
				dialog[5] = "";
				dialog[6] = "Here ya go!";
				dialog[7] = "";
				dialog[8] = "Recieved Cotton Candy!";
				dialog[9] = "";
				items[9][4] += 1;
			}
		} else if (questGummyWorms == true && questcompleteGummyWorms == false) {
			if (items[7][4] >= 1) {
				lines = 6;
				dialog[0] = "Welcome to Candy Candy";
				dialog[1] = "Candy!";
				dialog[2] = "Take a look around.";
				dialog[3] = "We have Cotton Candy";
				dialog[4] = "AND Gummy Worms!";
				dialog[5] = "";
				dialog[6] = "Fine treats abounds.";
				dialog[7] = "";
			} else {
				lines = 6;
				dialog[0] = "Welcome to Candy Candy";
				dialog[1] = "Candy!";
				dialog[2] = "Oh, you want pick up a";
				dialog[3] = "few Gummy Worms?";
				dialog[4] = "Coming right up!";
				dialog[5] = "";
				dialog[6] = "Recieved Gummy Worms!";
				dialog[7] = "";
				items[7][4] += 1;
			}
		} else if (questcompleteCottonCandy == true && questcompleteGummyWorms == true) {
			if (equipment[4][4] >= 1) { //already have a rain coat
				lines = 2;
				dialog[0] = "Welcome to Candy Candy";
				dialog[1] = "Candy!";
				dialog[2] = "Take a look around.";
				dialog[3] = "";
			} else {
				lines = 14;
				dialog[0] = "Welcome to Candy Candy";
				dialog[1] = "Candy!";
				dialog[2] = "It\'s really coming down";
				dialog[3] = "out there.";
				dialog[4] = "Here, take this tunic.";
				dialog[5] = "";
				dialog[6] = "It has awesome Defence";
				dialog[7] = "and the magical ability";
				dialog[8] = "to keep you dry.";
				dialog[9] = "";
				dialog[10] = "Plus it\'s green!";
				dialog[11] = "";
				dialog[12] = "Recieved Green Tunic!";
				dialog[13] = "";
				dialog[14] = "Don\'t forget to equip it";
				dialog[15] = "in the menu.";
				equipment[4][4] = 1; 
			}
		} else {
			lines = 6;
			dialog[0] = "Welcome to Candy Candy";
			dialog[1] = "Candy!";
			dialog[2] = "Take a look around.";
			dialog[3] = "We have Cotton Candy";
			dialog[4] = "AND Gummy Worms!";
			dialog[5] = "";
			dialog[6] = "Fine treats abounds.";
			dialog[7] = "";
		}
	}
	if (index == 26) { //Comic Guy
		if (questComicBook == true) {
			if (items[10][4] >= 1) {
				lines = 2;
				dialog[0] = "Welcome to Lookin\' for ";
				dialog[1] = "Heroes!";
				dialog[2] = "Let me know what you";
				dialog[3] = "guys thought of #7.";
			} else {
				lines = 6;
				dialog[0] = "Welcome to Lookin\' for ";
				dialog[1] = "Heroes!";
				dialog[2] = "Did that boy down the";
				dialog[3] = "street ask you to pick this";
				dialog[4] = "up for him?";
				dialog[5] = "";
				dialog[6] = "Recieved Action Face Man";
				dialog[7] = "(tm) Action Comic #7!";
				items[10][4] += 1;
			}
		} else {
			lines = 6;
			dialog[0] = "Welcome to Lookin\' for ";
			dialog[1] = "Heroes!";
			dialog[2] = "Action Face Man (tm) #7";
			dialog[3] = "is out.";
			dialog[4] = "We have #1 in the back..";
			dialog[5] = "";
			dialog[6] = "It\'s super expensive,";
			dialog[7] = "though.";
		}
	}
	if (index == 27) { //Kid in Games Exchange
		lines = 2;
		dialog[0] = "#COD #BF4 #L4D #SMB";
		dialog[1] = "#KOTOR #IDK #WUT2GET";
		dialog[2] = "#LOL #YOLO";
		dialog[3] = "#GETALLTHEGAMES!";
		dialog[4] = "#HASHTAG";
		dialog[5] = "";
	}

	if (index == 28) { //Kid in Candy shop
		lines = 4;
		dialog[0] = "Look at all this candy!";
		dialog[1] = "";
		dialog[2] = "I\'m in Heaven!";
		dialog[3] = "";
		dialog[4] = "Woop, woop.";
		dialog[5] = "";
	}
	if (index == 29) { //Comic Book Kid (Kid in the house)
		if (raining == false) {
			if (questComicBook == false) {
				if (questcompleteComicBook == true) {
					lines = 4;
					dialog[0] = "Thanks for picking";
					dialog[1] = "this up for me.";
					dialog[2] = "It was super cool of";
					dialog[3] = "you to do.";
					dialog[4] = "Bros for life.";
					dialog[5] = "";
				} else {
					lines = 8;
					dialog[0] = "Hey!";
					dialog[1] = "";
					dialog[2] = "Are you going Downtown?";
					dialog[3] = "";
					dialog[4] = "Action Face Man (tm)";
					dialog[5] = "Action Comic #7 is out!";
					dialog[6] = "Can you bring me back a";
					dialog[7] = "copy?";
					dialog[8] = "It HAS to be in mint";
					dialog[9] = "conditon, though.";
					questComicBook = true;
				}
			} else {
				if (items[10][4] >= 1) {
					//Have comic
					lines = 12;
					dialog[0] = "OH! NO WAY!";
					dialog[1] = "";
					dialog[2] = "You got a copy!";
					dialog[3] = "";
					dialog[4] = "Oh man, oh man, oh man!";
					dialog[5] = "It's perfect!";
					dialog[6] = "Thank you so much!!";
					dialog[7] = "Gaaahhhh!";
					dialog[8] = "I'm so excited!!";
					dialog[9] = "";
					dialog[10] = "Quest Complete!";
					dialog[11] = "";
					dialog[12] = "Gave Kid Comic.";
					dialog[13] = "";
					items[10][4] = 0;
					questComicBook = false;
					questcompleteComicBook = true;
				} else {
					//Don't have comic
					lines = 2;
					dialog[0] = "You can pick up a copy";
					dialog[1] = "at Lookin\' for Heroes.";
					dialog[2] = "It's right beside the";
					dialog[3] = "Bus Terminal.";
				}
			}
			
		} else {
			if (questComicBook == true && questcompleteComicBook == false) {
				if (items[10][4] == 0) {
					lines = 4;	
					dialog[0] = "Oh, don\'t worry about";
					dialog[1] = "getting that comic anymore.";
					dialog[2] = "It'\s raining really hard";
					dialog[3] = "and I don\'t want it to get";
					dialog[4] = "wrecked.";
					dialog[5] = "";
				} else {
					lines = 4;	
					dialog[0] = "Oh no!  It'\s all wet!";
					dialog[1] = "";
					dialog[2] = "Uh, I don\'t want this";
					dialog[3] = "anymore.";
					dialog[4] = "It\'s completley runied!";
					dialog[5] = "";
				}
			} else {
				lines = 8;
				dialog[0] = "Is my Brother still fishing";
				dialog[1] = "in the park?";
				dialog[2] = "It's funny.";
				dialog[3] = "";
				dialog[4] = "He hates getting a shower..";
				dialog[5] = "";
				dialog[6] = "But he will stand in the rain";
				dialog[7] = "all day.";
				dialog[8] = "What a weirdo.";
				dialog[9] = "";
			}
		}
	}
	if (index == 30) { //Fishing Kid
		if (raining == false) {
			lines = 4;
			dialog[0] = "The weather man said it";
			dialog[1] = "might rain today!";
			dialog[2] = "I can\'t wait!";
			dialog[3] = "";
			dialog[4] = "All the best fish come out";
			dialog[5] = "when it\'s raining!";
		} else {
			if (questcompleteGummyWorms == true) {
				lines = 6;
				dialog[0] = "They're biting!";
				dialog[1] = "";
				dialog[2] = "It\'s working!";
				dialog[3] = "";
				dialog[4] = "Thank you for finding";
				dialog[5] = "me these Gummy Worms!";
				dialog[6] = "They're perfect!";
				dialog[7] = "";
				
			} else {
				if (questGummyWorms == true) {
					if (items[7][4] >= 1) {
						lines = 8;
						dialog[0] = "Gummy Worms?";
						dialog[1] = "";
						dialog[2] = "Perfect!  I read in";
						dialog[3] = "Awesome Fishing that";
						dialog[4] = "this is THE best bait";
						dialog[5] = "for catching HUGE fish!";
						dialog[6] = "Quest Complete!";
						dialog[7] = "";
						dialog[8] = "Gave Kid Gummy Worms.";
						dialog[9] = "";
						items[7][4] = 0;
						questGummyWorms = false;
						questcompleteGummyWorms = true;
					} else {
						lines = 6;
						dialog[0] = "Did you find something?";
						dialog[1] = "";
						dialog[2] = "I\'ve tried Regular";
						dialog[3] = "Worms.";
						dialog[4] = "Nothing.";
						dialog[5] = "";
						dialog[6] = "I need something else.";
						dialog[7] = "";					}
				} else {
					lines = 4;
					dialog[0] = "Huh, I'm not getting";
					dialog[1] = "many bites.";
					dialog[2] = "I think I need some better";
					dialog[3] = "bait.";
					dialog[4] = "Can you find me";
					dialog[5] = "something?";
					questGummyWorms = true;
				}
			}
		}
	}
	if (index == 31) { //Person in Pyrus
		lines = 12;
		dialog[0] = "Coffee, coffee, coffee.";
		dialog[1] = "";
		dialog[2] = "I drank, like, ninety nine";
		dialog[3] = "coffees.";
		dialog[4] = "Pretty sure I can see";
		dialog[5] = "the future..";
		dialog[6] = "let me try real quick..";
		dialog[7] = "";
		dialog[8] = "..wait a sec..";
		dialog[9] = "";
		if (raining == false) {
			dialog[10] = "..it\'s..";
			dialog[11] = "";
			dialog[12] = "..it\'s going to rain.";
			dialog[13] = "";
		} else {
			dialog[10] = "..this story of yours";
			dialog[11] = "is almost complete.";
			dialog[12] = "Defeat the fiend at";
			dialog[13] = "the end of your street.";
		}
	}
	if (index == 32) { //Kid in Comic Book Shop
		lines = 18;
		dialog[0] = "Oh man!  These guys have";
		dialog[1] = "Action Face Man (tm) #1!!";
		dialog[2] = "Gasp..";
		dialog[3] = "";
		dialog[4] = "No discolouration.";
		dialog[5] = "No page creases.";
		dialog[6] = "No tears.";
		dialog[7] = "No blemishes.";
		dialog[8] = "OH MY..";
		dialog[9] = "";
		dialog[10] = "Two hundred monies!?";
		dialog[11] = "";
		dialog[12] = "I can't even..";
		dialog[13] = "";
		dialog[14] = "I..";
		dialog[15] = "           ";
		dialog[16] = "can't..";
		dialog[17] = "";
		dialog[18] = "even!";
		dialog[19] = "";
	}
	if (index == 33) {
		lines = 6;
		dialog[0] = "I\'m a Computer.";
		dialog[1] = "";
		dialog[2] = "Stop all the downloading.";
		dialog[3] = "";
		dialog[4] = "..     ";
		dialog[5] = "";
		dialog[6] = "Help Computer.";
		dialog[7] = "";
	}
	if (index == 34) {
		lines = 2;
		dialog[0] = "These kids have Action";
		dialog[1] = "Face Man (tm) THE GAME!";
		dialog[2] = "I thought this only came";
		dialog[3] = "out in Japan!";
	}
	if (index == 35) { 
		lines = 2;
		dialog[0] = "Huh, weird.";
		dialog[1] = "She's played 700 games";
		dialog[2] = "of Mine Sweeper and";
		dialog[3] = "hasn\'t lost once.";
	}
	if (index == 36) { 
		lines = 8;
		dialog[0] = "HELP!";
		dialog[1] = "";
		dialog[2] = "Lyne!";
		dialog[3] = "";
		dialog[4] = "She's being attacked by";
		dialog[5] = "a Wolf!";
		dialog[6] = "Hurry!";
		dialog[7] = "";
		dialog[8] = "Follow me.";
		dialog[9] = "";
	}
	if (index == 37) { //Wolf
		lines = 2;
		dialog[0] = "Woof";
		dialog[1] = "Woof";
		dialog[2] = "Grrrrr";
		dialog[3] = "    ";
		initBattleFromText = 7;
	}
	if (index == 38) {
		lines = 8;
		dialog[0] = "Thank you!";
		dialog[1] = "";
		dialog[2] = "You defeated the Wolf";
		dialog[3] = "and saved Lyne. ";
		dialog[4] = "You're a hero!";
		dialog[5] = "";
		dialog[6] = "It\'s getting pretty late.";
		dialog[7] = "You should hurry home.";
		dialog[8] = "Don\'t you have a new";
		dialog[9] = "game to play?";
	}
	if (index == 39) {
		lines = 1;
		dialog[0] = "Your pup is sound asleep";
		dialog[1] = "in her little house.";
		
	}
	
	
	
	
	//Battle Dialog
	if (index == 300) { //Run Away - Success
		lines = 1;
		dialog[0] = "You ran away!";
		dialog[1] = "";
	}
	if (index == 301) { //Run Away - Failure
		lines = 1;
		dialog[0] = "You tried to run away.";
		dialog[1] = "It didn't work.";
	}
	
	if (index == 302) { //Attack 1
		lines = 1;
		if (playerEquipment[0] == 0) { dialog[0] = "You Poked the "+enemyName+"."; }
		if (playerEquipment[0] == 1) { dialog[0] = "You Stabbed the "+enemyName+"."; }
		if (playerEquipment[0] == 2) { dialog[0] = "You Stabbed the "+enemyName+"."; }
		dialog[1] = ""+hitValue+" damage!";
	}
	if (index == 303) { //Attack 2
		lines = 1;
		if (playerEquipment[0] == 0) { dialog[0] = "You Swat at the "+enemyName+"."; }
		if (playerEquipment[0] == 1) { dialog[0] = "You Slashed the "+enemyName+"."; }
		if (playerEquipment[0] == 2) { dialog[0] = "You Slashed the "+enemyName+"."; }
		dialog[1] = ""+hitValue+" damage!";
	}
	if (index == 304) { //Attack Missed
		lines = 1;
		dialog[0] = "Your attack missed!";
		dialog[1] = "";
	}
	if (index == 305) { //Battle Results - Default
		lines = 1;
		dialog[0] = "You defeated the "+enemyName+"!";
		dialog[1] = "Gained "+enemyExp+" experience.";
	}	
	if (index == 306) { //Battle Results - Item Drop
		lines = 2;
		dialog[0] = "You defeated the "+enemyName+"!";
		dialog[1] = "Gained "+enemyExp+" experience.";
		dialog[2] = "The "+enemyName+" dropped an item!";
		dialog[3] = "Recieved "+items[enemyItemDrop][0]+".";
	}	
	if (index == 307) { //Battle Results - Level Up
		lines = 4;
		dialog[0] = "You defeated the "+enemyName+"!";
		dialog[1] = "Gained "+enemyExp+" experience.";
		dialog[2] = "You gained a level!";
		dialog[3] = "";
		dialog[4] = "You are now Level "+playerLevel+"!";
		dialog[5] = "Max Health "+playerMaxHealth+"!";
	}
	if (index == 308) { //Battle Results - Level Up and Item Drop
		lines = 6;
		dialog[0] = "You defeated the "+enemyName+"!";
		dialog[1] = "Gained "+enemyExp+" experience.";
		dialog[2] = "The "+enemyName+" dropped an item!";
		dialog[3] = "Recieved "+items[enemyItemDrop][0]+".";
		dialog[4] = "You gained a level!";
		dialog[5] = "";
		dialog[6] = "You are now Level "+playerLevel+"!";
		dialog[7] = "Max Health "+playerMaxHealth+"!";
	}	
	if (index == 309) { //Battle Result - Game Over
		lines = 2;
		dialog[0] = "You feel weak...";
		dialog[1] = "...       ";
		dialog[2] = "Everything is fading...";
		dialog[3] = "...       ";
	}	



	//Crab - Battle
	if (index == 400) { //Crab - Intro
		lines = 1;
		dialog[0] = "A wild Crab attacks!";
		dialog[1] = "";
	}
	if (index == 401) { //Crab - Attack 1
		lines = 2;
		dialog[0] = "The Crab gets ready to";
		dialog[1] = "attack.";		
		dialog[2] = "The Crab Scuttles around.";
		dialog[3] = "";
	}
	if (index == 402) { //Crab - Attack 2
		lines = 2;
		dialog[0] = "The Crab gets ready to";
		dialog[1] = "attack.";		
		dialog[2] = "The Crab Pinches you!";
		dialog[3] = hitValue+" damage.";
	}
	if (index == 403) { //Crab - Attack 3
		lines = 2;
		dialog[0] = "The Crab gets ready to";
		dialog[1] = "attack.";		
		dialog[2] = "The Crab Claws you!";
		dialog[3] = hitValue+" damage.";
	}
	if (index == 404) { //Crab - Defeated
		lines = 1;
		dialog[0] = "Defeated.";
		dialog[1] = "Defeated.";		
	}

	//Golden Crab - Battle
	if (index == 405) { //Golden Crab - Intro
		lines = 1;
		dialog[0] = "A Golden Crab attacks!";
		dialog[1] = "";
	}
	if (index == 406) { //Golden Crab - Attack 1
		lines = 2;
		dialog[0] = "The Crab gets ready";
		dialog[1] = "to attack.";		
		dialog[2] = "The Crab Scuttles";
		dialog[3] = "around.";
	}
	if (index == 407) { //Golden Crab - Attack 2
		lines = 2;
		dialog[0] = "The Crab gets ready";
		dialog[1] = "to attack.";		
		dialog[2] = "The Crab Pinches you!";
		dialog[3] = hitValue+" damage.";
	}
	if (index == 408) { //Golden Crab - Attack 3
		lines = 2;
		dialog[0] = "The Crab gets ready";
		dialog[1] = "to attack.";		
		dialog[2] = "The Crab Claws you!";
		dialog[3] = hitValue+" damage.";
	}	
	if (index == 409) { //Golden Crab - Defeated
		lines = 1;
		dialog[0] = "Defeated.";
		dialog[1] = "Defeated.";		
	}

	//Bees - Battle
	if (index == 410) { //Bees - Intro
		lines = 1;
		dialog[0] = "A Bee attack!";
		dialog[1] = "";
	}
	if (index == 411) { //Bees - Attack 1
		lines = 2;
		dialog[0] = "The Bee gets ready";
		dialog[1] = "to attack.";		
		dialog[2] = "The Bee Bites you!";
		dialog[3] = hitValue+" damage.";
	}
	if (index == 412) { //Bees - Attack 2
		lines = 2;
		dialog[0] = "The Bee gets ready";
		dialog[1] = "to attack.";		
		dialog[2] = "The Bee Pokes you!";
		dialog[3] = hitValue+" damage.";
	}
	if (index == 413) { //Bees - Attack 3
		if (playerStatus == "Stung") {
			lines = 2;
			dialog[0] = "The Bee gets ready";
			dialog[1] = "to attack.";		
			dialog[2] = "The Bee Stings you!";
			dialog[3] = hitValue+" damage.";
		} else {
			lines = 4;
			dialog[0] = "The Bee gets ready";
			dialog[1] = "to attack.";		
			dialog[2] = "The Bee Stings you!";
			dialog[3] = hitValue+" damage.";
			dialog[4] = "You are now Stung!";
			dialog[5] = "";
			playerStatus = "Stung";
		}
	}	
	if (index == 414) { //Bees - Defeated
		lines = 1;
		dialog[0] = "Defeated.";
		dialog[1] = "Defeated.";		
	}

	//Wasp - Battle
	if (index == 415) { //Wasp - Intro
		lines = 1;
		dialog[0] = "A Wasp attacks!";
		dialog[1] = "";
	}
	if (index == 416) { //Wasp - Attack 1
		lines = 2;
		dialog[0] = "The Wasp gets ready";
		dialog[1] = "to attack.";		
		dialog[2] = "The Wasp Bites you!";
		dialog[3] = hitValue+" damage.";
	}
	if (index == 417) { //Wasp - Attack 2
		lines = 2;
		dialog[0] = "The Wasp gets ready";
		dialog[1] = "to attack.";		
		dialog[2] = "The Wasp Pokes you!";
		dialog[3] = hitValue+" damage.";
	}
	if (index == 418) { //Wasp - Attack 3
		if (playerStatus == "Stung") {
			lines = 2;
			dialog[0] = "The Wasp gets ready";
			dialog[1] = "to attack.";		
			dialog[2] = "The Wasp Stings you!";
			dialog[3] = hitValue+" damage.";
		} else {
			lines = 4;
			dialog[0] = "The Wasp gets ready";
			dialog[1] = "to attack.";		
			dialog[2] = "The Wasp Stings you!";
			dialog[3] = hitValue+" damage.";
			dialog[4] = "You are now Stung!";
			dialog[5] = "";
			playerStatus = "Stung";
		}
	}	
	if (index == 419) { //Wasp - Defeated
		lines = 1;
		dialog[0] = "Defeated.";
		dialog[1] = "Defeated.";		
	}
	
	//Beetle - Battle
	if (index == 420) { //Beetle - Intro
		lines = 1;
		dialog[0] = "A wild Beetle attacks!";
		dialog[1] = "";
	}
	if (index == 421) { //Beetle - Attack 1
		lines = 2;
		dialog[0] = "The Beetle gets ready";
		dialog[1] = "to attack.";		
		dialog[2] = "The Beetle Pokes you!";
		dialog[3] = hitValue+" damage.";
	}
	if (index == 422) { //Beetle - Attack 2
		lines = 2;
		dialog[0] = "The Beetle gets ready";
		dialog[1] = "to attack.";		
		dialog[2] = "The Beetle Bites you!";
		dialog[3] = hitValue+" damage.";
	}
	if (index == 423) { //Beetle - Attack 3
		lines = 2;
		dialog[0] = "The Beetle gets ready";
		dialog[1] = "to attack.";		
		dialog[2] = "The Beetle Chomps you!";
		dialog[3] = hitValue+" damage.";

	}	
	if (index == 424) { //Beetle - Defeated
		lines = 1;
		dialog[0] = "Defeated.";
		dialog[1] = "Defeated.";		
	}
	
	//Golden Beetle - Battle
	if (index == 425) { //Golden Beetle - Intro
		lines = 1;
		dialog[0] = "A Golden Beetle attacks!";
		dialog[1] = "";
	}
	if (index == 426) { //Golden Beetle - Attack 1
		lines = 2;
		dialog[0] = "The Beetle gets ready";
		dialog[1] = "to attack.";		
		dialog[2] = "The Beetle Pokes you!";
		dialog[3] = hitValue+" damage.";
	}
	if (index == 427) { //Golden Beetle - Attack 2
		lines = 2;
		dialog[0] = "The Beetle gets ready";
		dialog[1] = "to attack.";		
		dialog[2] = "The Beetle Bites you!";
		dialog[3] = hitValue+" damage.";
	}
	if (index == 428) { //Golden Beetle - Attack 3
		lines = 2;
		dialog[0] = "The Beetle gets ready";
		dialog[1] = "to attack.";		
		dialog[2] = "The Beetle Chomps you!";
		dialog[3] = hitValue+" damage.";

	}	
	if (index == 429) { //Golden Beetle - Defeated
		lines = 1;
		dialog[0] = "Defeated.";
		dialog[1] = "Defeated.";		
	}

	//Crow - Battle
	if (index == 430) { //Crow - Intro
		lines = 1;
		dialog[0] = "A wild Crow attacks!";
		dialog[1] = "";
	}
	if (index == 431) { //Crow - Attack 1
		lines = 2;
		dialog[0] = "The Crow gets ready";
		dialog[1] = "to attack.";		
		dialog[2] = "The Crow Pecks you!";
		dialog[3] = hitValue+" damage.";
	}
	if (index == 432) { //Crow - Attack 2
		lines = 2;
		dialog[0] = "The Crow gets ready";
		dialog[1] = "to attack.";		
		dialog[2] = "The Crow Claws you!";
		dialog[3] = hitValue+" damage.";
	}
	if (index == 433) { //Crow - Attack 3
		lines = 2;
		dialog[0] = "The Crow gets ready";
		dialog[1] = "to attack.";		
		dialog[2] = "The Crow Bites you!";
		dialog[3] = hitValue+" damage.";

	}	
	if (index == 434) { //Crow - Defeated
		lines = 1;
		dialog[0] = "Defeated.";
		dialog[1] = "Defeated.";		
	}
	
	//Wolf - Battle
	if (index == 435) { //Wolf - Intro
		lines = 1;
		dialog[0] = "A wild Wolf attacks!";
		dialog[1] = "";
	}
	if (index == 436) { //Wolf - Attack 1
		lines = 2;
		dialog[0] = "The Wolf gets ready";
		dialog[1] = "to attack.";		
		dialog[2] = "The Wolf Scratches you!";
		dialog[3] = hitValue+" damage.";
	}
	if (index == 437) { //Wolf - Attack 2
		lines = 2;
		dialog[0] = "The Wolf gets ready";
		dialog[1] = "to attack.";		
		dialog[2] = "The Wolf Claws you!";
		dialog[3] = hitValue+" damage.";
	}
	if (index == 438) { //Wolf - Attack 3
		lines = 2;
		dialog[0] = "The Wolf gets ready";
		dialog[1] = "to attack.";		
		dialog[2] = "The Wolf Bites you!";
		dialog[3] = hitValue+" damage.";

	}	
	if (index == 439) { //Wolf - Defeated
		lines = 1;
		dialog[0] = "Defeated.";
		dialog[1] = "Defeated.";		
	}

	//Bat - Battle
	if (index == 440) { //Bat - Intro
		lines = 1;
		dialog[0] = "A wild Bat attacks!";
		dialog[1] = "";
	}
	if (index == 441) { //Bat - Attack 1
		lines = 2;
		dialog[0] = "The Bat gets ready";
		dialog[1] = "to attack.";		
		dialog[2] = "The Bat Nips you!";
		dialog[3] = hitValue+" damage.";
	}
	if (index == 442) { //Bat - Attack 2
		lines = 2;
		dialog[0] = "The Bat gets ready";
		dialog[1] = "to attack.";		
		dialog[2] = "The Bat Bites you!";
		dialog[3] = hitValue+" damage.";
	}
	if (index == 443) { //Bat - Attack 3
		lines = 2;
		dialog[0] = "The Bat gets ready";
		dialog[1] = "to attack.";		
		dialog[2] = "The Bat Fangs you!";
		dialog[3] = hitValue+" damage.";

	}	
	if (index == 444) { //Bat - Defeated
		lines = 1;
		dialog[0] = "Defeated.";
		dialog[1] = "Defeated.";		
	}

	//Rat - Battle
	if (index == 445) { //Rat - Intro
		lines = 1;
		dialog[0] = "A wild Rat attacks!";
		dialog[1] = "";
	}
	if (index == 446) { //Rat - Attack 1
		lines = 2;
		dialog[0] = "The Rat gets ready";
		dialog[1] = "to attack.";		
		dialog[2] = "The Rat Scratches you!";
		dialog[3] = hitValue+" damage.";
	}
	if (index == 447) { //Rat - Attack 2
		lines = 2;
		dialog[0] = "The Rat gets ready";
		dialog[1] = "to attack.";		
		dialog[2] = "The Rat Slashes you!";
		dialog[3] = hitValue+" damage.";
	}
	if (index == 448) { //Rat - Attack 3
		lines = 2;
		dialog[0] = "The Rat gets ready";
		dialog[1] = "to attack.";		
		dialog[2] = "The Rat Bites you!";
		dialog[3] = hitValue+" damage.";

	}	
	if (index == 449) { //Rat - Defeated
		lines = 1;
		dialog[0] = "Defeated.";
		dialog[1] = "Defeated.";		
	}
	
	//Snake - Battle
	if (index == 450) { //Snake - Intro
		lines = 1;
		dialog[0] = "A wild Snake attacks!";
		dialog[1] = "";
	}
	if (index == 451) { //Snake - Attack 1
		lines = 2;
		dialog[0] = "The Snake gets ready";
		dialog[1] = "to attack.";		
		dialog[2] = "The Snake Whips you!";
		dialog[3] = hitValue+" damage.";
	}
	if (index == 452) { //Snake - Attack 2
		lines = 2;
		dialog[0] = "The Snake gets ready";
		dialog[1] = "to attack.";		
		dialog[2] = "The Snake Bites you!";
		dialog[3] = hitValue+" damage.";
	}
	if (index == 453) { //Snake - Attack 3
		lines = 2;
		dialog[0] = "The Snake gets ready";
		dialog[1] = "to attack.";		
		dialog[2] = "The Snake Fangs you!";
		dialog[3] = hitValue+" damage.";

	}	
	if (index == 454) { //Snake - Defeated
		lines = 1;
		dialog[0] = "Defeated.";
		dialog[1] = "Defeated.";		
	}
	
	//Night Crawler - Battle
	if (index == 455) { //Night Crawler - Intro
		lines = 1;
		dialog[0] = "A wild Night Crawler";
		dialog[1] =  "attacks!";
	}
	if (index == 456) { //Night Crawler - Attack 1
		lines = 2;
		dialog[0] = "The Night Crawler gets";
		dialog[1] = "ready to attack.";		
		dialog[2] = "The Night Crawler Creeps";
		dialog[3] = "around.";
	}
	if (index == 457) { //Night Crawler - Attack 2
		lines = 2;
		dialog[0] = "The Night Crawler gets";
		dialog[1] = "ready to attack.";		
		dialog[2] = "The Night Crawler Crawls";
		dialog[3] = "around.";
	}
	if (index == 458) { //Night Crawler - Attack 3
		lines = 2;
		dialog[0] = "The Night Crawler gets";
		dialog[1] = "ready to attack.";		
		dialog[2] = "The Night Crawler Stings you!";
		dialog[3] = hitValue+" damage.";

	}	
	if (index == 459) { //Night Crawler - Defeated
		lines = 1;
		dialog[0] = "Defeated.";
		dialog[1] = "Defeated.";		
	}
	
	//Bandit - Battle
	if (index == 460) { //Bandit - Intro
		lines = 1;
		dialog[0] = "A Bandit attacks!";
		dialog[1] =  "";
	}
	if (index == 461) { //Bandit - Attack 1
		lines = 2;
		dialog[0] = "The Bandit gets ready";
		dialog[1] = "to attack.";		
		dialog[2] = "The Bandit Punches you!";
		dialog[3] = hitValue+" damage.";
	}
	if (index == 462) { //Bandit - Attack 2
		lines = 2;
		dialog[0] = "The Bandit gets ready";
		dialog[1] = "to attack.";		
		dialog[2] = "The Bandit Slashes you!";
		dialog[3] = hitValue+" damage.";
	}
	if (index == 463) { //Bandit - Attack 3
		lines = 2;
		dialog[0] = "The Bandit gets ready";
		dialog[1] = "to attack.";		
		dialog[2] = "The Bandit Stabs you!";
		dialog[3] = hitValue+" damage.";

	}	
	if (index == 464) { //Bandit - Defeated
		lines = 1;
		dialog[0] = "Defeated.";
		dialog[1] = "Defeated.";		
	}
	
	//Bandit Boss - Battle
	if (index == 465) { //Bandit Boss - Intro
		lines = 1;
		dialog[0] = "The Bandit Boss attacks!";
		dialog[1] =  "";
	}
	if (index == 466) { //Bandit Boss - Attack 1
		lines = 2;
		dialog[0] = "The Bandit gets ready";
		dialog[1] = "to attack.";		
		dialog[2] = "The Bandit Punches you!";
		dialog[3] = hitValue+" damage.";
	}
	if (index == 467) { //Bandit Boss - Attack 2
		lines = 2;
		dialog[0] = "The Bandit gets ready";
		dialog[1] = "to attack.";		
		dialog[2] = "The Bandit Slashes you!";
		dialog[3] = hitValue+" damage.";
	}
	if (index == 468) { //Bandit Boss - Attack 3
		lines = 2;
		dialog[0] = "The Bandit gets ready";
		dialog[1] = "to attack.";		
		dialog[2] = "The Bandit Stabs you!";
		dialog[3] = hitValue+" damage.";

	}	
	if (index == 469) { //Bandit Boss - Defeated
		lines = 1;
		dialog[0] = "Defeated.";
		dialog[1] = "Defeated.";		
	}

	//Bandit Boss - Battle
	if (index == 470) { //Bandit Boss - Intro
		lines = 1;
		dialog[0] = "The Bandit Boss attacks!";
		dialog[1] =  "";
	}
	if (index == 471) { //Bandit Boss - Attack 1
		lines = 2;
		dialog[0] = "The Bandit gets ready";
		dialog[1] = "to attack.";		
		dialog[2] = "The Bandit Punches you!";
		dialog[3] = hitValue+" damage.";
	}
	if (index == 472) { //Bandit Boss - Attack 2
		lines = 2;
		dialog[0] = "The Bandit gets ready";
		dialog[1] = "to attack.";		
		dialog[2] = "The Bandit Slashes you!";
		dialog[3] = hitValue+" damage.";
	}
	if (index == 473) { //Bandit Boss - Attack 3
		lines = 2;
		dialog[0] = "The Bandit gets ready";
		dialog[1] = "to attack.";		
		dialog[2] = "The Bandit Stabs you!";
		dialog[3] = hitValue+" damage.";

	}	
	if (index == 474) { //Bandit Boss - Defeated
		lines = 1;
		dialog[0] = "Defeated.";
		dialog[1] = "Defeated.";		
	}
	
	//Sorcerer - Battle
	if (index == 475) { //Sorcerer - Intro
		lines = 1;
		dialog[0] = "The Sorcerer attacks!";
		dialog[1] =  "";
	}
	if (index == 476) { //Sorcerer - Attack 1
		lines = 2;
		dialog[0] = "The Sorcerer gets ready";
		dialog[1] = "to attack.";		
		dialog[2] = "The Sorcerer casts Fire!";
		dialog[3] = hitValue+" damage.";
	}
	if (index == 477) { //Sorcerer - Attack 2
		lines = 2;
		dialog[0] = "The Sorcerer gets ready";
		dialog[1] = "to attack.";		
		dialog[2] = "The Sorcerer casts Lightning!";
		dialog[3] = hitValue+" damage.";
	}
	if (index == 478) { //Sorcerer - Attack 3
		lines = 2;
		dialog[0] = "The Sorcerer gets ready";
		dialog[1] = "to attack.";		
		dialog[2] = "The Sorcerer casts Poison!";
		dialog[3] = hitValue+" damage.";

	}	
	if (index == 479) { //Sorcerer - Defeated
		lines = 1;
		dialog[0] = "Defeated.";
		dialog[1] = "Defeated.";		
	}
}

//---------------------------------------------------------------- Items
var inventoryItemsCount = 0;
var selectedItem = 0;
var items = new Array();
var itemsCount = 15;
for (i = 0; i <= itemsCount; i++) {
	items[i] = new Array();
}
items[0][0] = "Apples"; // Name
items[0][1] = "Are delicious. +50 Hp."; // Description
items[0][2] = ""; // Effect to Remove
items[0][3] = "50"; // Effect on HP
items[0][4] = "0"; // Qty

items[1][0] = "Crab Meat"; // Name
items[1][1] = "It's kind of gross. +25 Hp."; // Description
items[1][2] = ""; // Effect to Remove
items[1][3] = "25"; // Effect on HP
items[1][4] = "0"; // Qty

items[2][0] = "Potion"; // Name
items[2][1] = "Health +100 Hp."; // Description
items[2][2] = ""; // Effect to Remove
items[2][3] = "100"; // Effect on HP
items[2][4] = "0"; // Qty

items[3][0] = "Herb"; // Name
items[3][1] = "Relieves bee stings."; // Description
items[3][2] = "Stung"; // Effect to Remove
items[3][3] = "0"; // Effect on HP
items[3][4] = "0"; // Qty

items[4][0] = "Antidote"; // Name
items[4][1] = "Cures any Poison."; // Description
items[4][2] = "Poisoned"; // Effect to Remove
items[4][3] = "0"; // Effect on HP
items[4][4] = "0"; // Qty

items[5][0] = "Terrible Game"; // Name
items[5][1] = "Ugh, why do I have this?"; // Description
items[5][2] = ""; // Effect to Remove
items[5][3] = "0"; // Effect on HP
items[5][4] = "0"; // Qty

items[6][0] = "Best Game"; // Name
items[6][1] = "Ever."; // Description
items[6][2] = ""; // Effect to Remove
items[6][3] = "0"; // Effect on HP
items[6][4] = "0"; // Qty

items[7][0] = "Gummy Worms"; // Name
items[7][1] = "They look delicious!"; // Description
items[7][2] = ""; // Effect to Remove
items[7][3] = "0"; // Effect on HP
items[7][4] = "0"; // Qty

items[8][0] = "Coffee"; // Name
items[8][1] = "Fresh from Pyrus Cafe!"; // Description
items[8][2] = ""; // Effect to Remove
items[8][3] = "0"; // Effect on HP
items[8][4] = "0"; // Qty

items[9][0] = "Cotton Candy"; // Name
items[9][1] = "It\'s so fluffy."; // Description
items[9][2] = ""; // Effect to Remove
items[9][3] = "0"; // Effect on HP
items[9][4] = "0"; // Qty

items[10][0] = "Comic Book"; // Name
items[10][1] = "Action Face Man (tm) #7"; // Description
items[10][2] = ""; // Effect to Remove
items[10][3] = "0"; // Effect on HP
items[10][4] = "0"; // Qty

items[11][0] = "Item"; // Name
items[11][1] = ""; // Description
items[11][2] = ""; // Effect to Remove
items[11][3] = "0"; // Effect on HP
items[11][4] = "0"; // Qty

items[12][0] = "Item"; // Name
items[12][1] = ""; // Description
items[12][2] = ""; // Effect to Remove
items[12][3] = "0"; // Effect on HP
items[12][4] = "0"; // Qty

items[13][0] = "Item"; // Name
items[13][1] = ""; // Description
items[13][2] = ""; // Effect to Remove
items[13][3] = "0"; // Effect on HP
items[13][4] = "0"; // Qty

items[14][0] = "Item"; // Name
items[14][1] = ""; // Description
items[14][2] = ""; // Effect to Remove
items[14][3] = "0"; // Effect on HP
items[14][4] = "0"; // Qty

items[15][0] = "Item"; // Name
items[15][1] = ""; // Description
items[15][2] = ""; // Effect to Remove
items[15][3] = "0"; // Effect on HP
items[15][4] = "0"; // Qty

//---------------------------------------------------------------- Equipment
var equipment = new Array();
var equipmentCount = 5;
for (i = 0; i <= equipmentCount; i++) {
	equipment[i] = new Array();
}

equipment[0][0] = "Cracked Bat";		// Name
equipment[0][1] = ""; 					// Description
equipment[0][2] = ""; 					// 
equipment[0][3] = "0"; 					// Def
equipment[0][4] = "1"; 					// Qty
equipment[0][5] = "Poke"; 				// Attack 1 - Name
equipment[0][6] = "5"; 					// Attack 1 - Hit
equipment[0][7] = "Swat"; 				// Attack 2 - Name
equipment[0][8] = "10"; 				// Attack 2 - Hit

equipment[1][0] = "Master Sword";		// Name
equipment[1][1] = "";					// Description
equipment[1][2] = "";					// 
equipment[1][3] = "0";					// Def
equipment[1][4] = "0";					// Qty
equipment[1][5] = "Stab"; 				// Attack 1 - Name
equipment[1][6] = "15"; 				// Attack 1 - Hit
equipment[1][7] = "Slash"; 				// Attack 2 - Name
equipment[1][8] = "40"; 				// Attack 2 - Hit

equipment[2][0] = "Cool Sword";		// Name
equipment[2][1] = "";					// Description
equipment[2][2] = "";					// 
equipment[2][3] = "0";					// Def
equipment[2][4] = "0";					// Qty
equipment[2][5] = "Stab"; 				// Attack 1 - Name
equipment[2][6] = "1000"; 				// Attack 1 - Hit
equipment[2][7] = "Slash"; 				// Attack 2 - Name
equipment[2][8] = "9999"; 				// Attack 2 - Hit

equipment[3][0] = "Baseball Cap";		// Name
equipment[3][1] = "";					// Description
equipment[3][2] = "0";					// Atk
equipment[3][3] = "2";					// Def
equipment[3][4] = "1";					// Qty

equipment[4][0] = "Green Tunic";		// Name
equipment[4][1] = "";					// Description
equipment[4][2] = "0";					// Atk
equipment[4][3] = "10";					// Def
equipment[4][4] = "0";					// Qty

equipment[5][0] = "Cool Shirt";			// Name
equipment[5][1] = "";					// Description
equipment[5][2] = "0";					// Atk
equipment[5][3] = "100";				// Def
equipment[5][4] = "0";					// Qty

//---------------------------------------------------------------- Enemy
var enemy = new Array();
var enemyCount = 3;
for (i = 0; i <= 19; i++) {
	enemy[i] = new Array();	
}

enemy[0][0] = "Crab"; 					//Name
enemy[0][1] = "0"; 						//Image
enemy[0][2] = "15"; 					//Max HP
enemy[0][3] = "15"; 					//HP
enemy[0][4] = "10";						//Exp
enemy[0][5] = "Scuttle"; 				//Attack 1 - Name
enemy[0][6] = "401";					//Attack 1 - Dialog
enemy[0][7] = "0"; 						//Attack 1 - Hit
enemy[0][8] = "1"; 						//Attack 1 - Accuracy
enemy[0][9] = ""; 						//Attack 1 - Status Change 
enemy[0][10] = "Pinch";					//Attack 2 - Name
enemy[0][11] = "402";					//Attack 2 - Dialog
enemy[0][12] = "5"; 					//Attack 2 - Hit
enemy[0][13] = "3"; 					//Attack 2 - Accuracy
enemy[0][14] = ""; 						//Attack 2 - Status Change 
enemy[0][15] = "Claw"; 					//Attack 3 - Name
enemy[0][16] = "403";					//Attack 3 - Dialog
enemy[0][17] = "10"; 					//Attack 3 - Hit
enemy[0][18] = "0"; 					//Attack 3 - Accuracy
enemy[0][19] = "";	 					//Attack 3 - Status Change 
enemy[0][20] = "1"; 					//Item Drop A
enemy[0][21] = "1";						//Item Drop B
enemy[0][22] = "5"; 					//Item Chance
enemy[0][23] = "400";					//Dialog 1
enemy[0][24] = "404";					//Dialog 2

enemy[1][0] = "Crab"; 					//Name - Golden Crab, called Crab in battle text
enemy[1][1] = "1"; 						//Image
enemy[1][2] = "500"; 					//Max HP
enemy[1][3] = "500"; 					//HP
enemy[1][4] = "50";						//Exp
enemy[1][5] = "Scuttle"; 				//Attack 1 - Name
enemy[1][6] = "406";					//Attack 1 - Dialog
enemy[1][7] = "0"; 						//Attack 1 - Hit
enemy[1][8] = "1"; 						//Attack 1 - Accuracy
enemy[1][9] = ""; 						//Attack 1 - Status Change 
enemy[1][10] = "Pinch";					//Attack 2 - Name
enemy[1][11] = "407";					//Attack 2 - Dialog
enemy[1][12] = "15"; 					//Attack 2 - Hit
enemy[1][13] = "3"; 					//Attack 2 - Accuracy
enemy[1][14] = "";	 					//Attack 2 - Status Change 
enemy[1][15] = "Claw"; 					//Attack 3 - Name
enemy[1][16] = "408";					//Attack 3 - Dialog
enemy[1][17] = "30"; 					//Attack 3 - Hit
enemy[1][18] = "0"; 					//Attack 3 - Accuracy
enemy[1][19] = "";	 					//Attack 3 - Status Change 
enemy[1][20] = "12"; 					//Item Drop A
enemy[1][21] = "12";					//Item Drop B
enemy[1][22] = "2"; 					//Item Chance
enemy[1][23] = "405";					//Dialog 1
enemy[1][24] = "409";					//Dialog 2

enemy[2][0] = "Bee";		 			//Name
enemy[2][1] = "2"; 						//Image
enemy[2][2] = "15"; 					//Max HP
enemy[2][3] = "15"; 					//HP
enemy[2][4] = "25";						//Exp
enemy[2][5] = "Bite"; 					//Attack 1 - Name
enemy[2][6] = "411";					//Attack 1 - Dialog
enemy[2][7] = "5"; 						//Attack 1 - Hit
enemy[2][8] = "1"; 						//Attack 1 - Accuracy
enemy[2][9] = ""; 						//Attack 1 - Status Change 
enemy[2][10] = "Poke";					//Attack 2 - Name
enemy[2][11] = "412";					//Attack 2 - Dialog
enemy[2][12] = "5"; 					//Attack 2 - Hit
enemy[2][13] = "3"; 					//Attack 2 - Accuracy
enemy[2][14] = "";	 					//Attack 2 - Status Change 
enemy[2][15] = "Sting"; 				//Attack 3 - Name
enemy[2][16] = "413";					//Attack 3 - Dialog
enemy[2][17] = "10"; 					//Attack 3 - Hit
enemy[2][18] = "0"; 					//Attack 3 - Accuracy
enemy[2][19] = "Stung";	 				//Attack 3 - Status Change 
enemy[2][20] = ""; 						//Item Drop A
enemy[2][21] = "";						//Item Drop B
enemy[2][22] = "0"; 					//Item Chance
enemy[2][23] = "410";					//Dialog 1
enemy[2][24] = "414";					//Dialog 2

enemy[3][0] = "Wasp";		 			//Name
enemy[3][1] = "3"; 						//Image
enemy[3][2] = "15"; 					//Max HP
enemy[3][3] = "15"; 					//HP
enemy[3][4] = "100";					//Exp
enemy[3][5] = "Bite"; 					//Attack 1 - Name
enemy[3][6] = "416";					//Attack 1 - Dialog
enemy[3][7] = "5"; 					//Attack 1 - Hit
enemy[3][8] = "1"; 						//Attack 1 - Accuracy
enemy[3][9] = ""; 						//Attack 1 - Status Change 
enemy[3][10] = "Poke";					//Attack 2 - Name
enemy[3][11] = "417";					//Attack 2 - Dialog
enemy[3][12] = "5"; 					//Attack 2 - Hit
enemy[3][13] = "3"; 					//Attack 2 - Accuracy
enemy[3][14] = "";	 					//Attack 2 - Status Change 
enemy[3][15] = "Sting"; 				//Attack 3 - Name
enemy[3][16] = "418";					//Attack 3 - Dialog
enemy[3][17] = "10"; 					//Attack 3 - Hit
enemy[3][18] = "0"; 					//Attack 3 - Accuracy
enemy[3][19] = "Stung";	 				//Attack 3 - Status Change 
enemy[3][20] = ""; 						//Item Drop A
enemy[3][21] = "";						//Item Drop B
enemy[3][22] = "0"; 					//Item Chance
enemy[3][23] = "415";					//Dialog 1
enemy[3][24] = "419";					//Dialog 2

enemy[4][0] = "Beetle";		 			//Name
enemy[4][1] = "4"; 						//Image
enemy[4][2] = "25"; 					//Max HP
enemy[4][3] = "25"; 					//HP
enemy[4][4] = "30";						//Exp
enemy[4][5] = "Poke"; 					//Attack 1 - Name
enemy[4][6] = "421";					//Attack 1 - Dialog
enemy[4][7] = "5"; 					//Attack 1 - Hit
enemy[4][8] = "1"; 						//Attack 1 - Accuracy
enemy[4][9] = ""; 						//Attack 1 - Status Change 
enemy[4][10] = "Bite";					//Attack 2 - Name
enemy[4][11] = "422";					//Attack 2 - Dialog
enemy[4][12] = "10"; 					//Attack 2 - Hit
enemy[4][13] = "3"; 					//Attack 2 - Accuracy
enemy[4][14] = "";	 					//Attack 2 - Status Change 
enemy[4][15] = "Chomp"; 				//Attack 3 - Name
enemy[4][16] = "423";					//Attack 3 - Dialog
enemy[4][17] = "15"; 					//Attack 3 - Hit
enemy[4][18] = "0"; 					//Attack 3 - Accuracy
enemy[4][19] = "";	 					//Attack 3 - Status Change 
enemy[4][20] = ""; 						//Item Drop A
enemy[4][21] = "";						//Item Drop B
enemy[4][22] = "0"; 					//Item Chance
enemy[4][23] = "420";					//Dialog 1
enemy[4][24] = "424";					//Dialog 2

enemy[5][0] = "Golden Beetle";		 			//Name
enemy[5][1] = "5"; 						//Image
enemy[5][2] = "100"; 					//Max HP
enemy[5][3] = "100"; 					//HP
enemy[5][4] = "50";						//Exp
enemy[5][5] = "Bite"; 					//Attack 1 - Name
enemy[5][6] = "426";					//Attack 1 - Dialog
enemy[5][7] = "15"; 					//Attack 1 - Hit
enemy[5][8] = "1"; 						//Attack 1 - Accuracy
enemy[5][9] = ""; 						//Attack 1 - Status Change 
enemy[5][10] = "Poke";					//Attack 2 - Name
enemy[5][11] = "427";					//Attack 2 - Dialog
enemy[5][12] = "20"; 					//Attack 2 - Hit
enemy[5][13] = "3"; 					//Attack 2 - Accuracy
enemy[5][14] = "";	 					//Attack 2 - Status Change 
enemy[5][15] = "Chomp"; 				//Attack 3 - Name
enemy[5][16] = "428";					//Attack 3 - Dialog
enemy[5][17] = "30"; 					//Attack 3 - Hit
enemy[5][18] = "0"; 					//Attack 3 - Accuracy
enemy[5][19] = "";	 					//Attack 3 - Status Change 
enemy[5][20] = "12"; 					//Item Drop A
enemy[5][21] = "12";					//Item Drop B
enemy[5][22] = "2"; 					//Item Chance
enemy[5][23] = "425";					//Dialog 1
enemy[5][24] = "429";					//Dialog 2

enemy[6][0] = "Crow";		 			//Name
enemy[6][1] = "6"; 						//Image
enemy[6][2] = "50"; 					//Max HP
enemy[6][3] = "50"; 					//HP
enemy[6][4] = "40";						//Exp
enemy[6][5] = "Peck"; 					//Attack 1 - Name
enemy[6][6] = "431";					//Attack 1 - Dialog
enemy[6][7] = "10"; 					//Attack 1 - Hit
enemy[6][8] = "1"; 						//Attack 1 - Accuracy
enemy[6][9] = ""; 						//Attack 1 - Status Change 
enemy[6][10] = "Claw";					//Attack 2 - Name
enemy[6][11] = "432";					//Attack 2 - Dialog
enemy[6][12] = "15"; 					//Attack 2 - Hit
enemy[6][13] = "3"; 					//Attack 2 - Accuracy
enemy[6][14] = "";	 					//Attack 2 - Status Change 
enemy[6][15] = "Bite"; 					//Attack 3 - Name
enemy[6][16] = "433";					//Attack 3 - Dialog
enemy[6][17] = "25"; 					//Attack 3 - Hit
enemy[6][18] = "0"; 					//Attack 3 - Accuracy
enemy[6][19] = "";	 					//Attack 3 - Status Change 
enemy[6][20] = ""; 						//Item Drop A
enemy[6][21] = "";						//Item Drop B
enemy[6][22] = "0"; 					//Item Chance
enemy[6][23] = "430";					//Dialog 1
enemy[6][24] = "434";					//Dialog 2

enemy[7][0] = "Wolf";		 			//Name
enemy[7][1] = "7"; 						//Image
enemy[7][2] = "120"; 					//Max HP
enemy[7][3] = "120"; 					//HP
enemy[7][4] = "12000";						//Exp
enemy[7][5] = "Scratch"; 				//Attack 1 - Name
enemy[7][6] = "436";					//Attack 1 - Dialog
enemy[7][7] = "10"; 					//Attack 1 - Hit
enemy[7][8] = "1"; 						//Attack 1 - Accuracy
enemy[7][9] = ""; 						//Attack 1 - Status Change 
enemy[7][10] = "Claw";					//Attack 2 - Name
enemy[7][11] = "437";					//Attack 2 - Dialog
enemy[7][12] = "15"; 					//Attack 2 - Hit
enemy[7][13] = "3"; 					//Attack 2 - Accuracy
enemy[7][14] = "";	 					//Attack 2 - Status Change 
enemy[7][15] = "Bite"; 					//Attack 3 - Name
enemy[7][16] = "438";					//Attack 3 - Dialog
enemy[7][17] = "25"; 					//Attack 3 - Hit
enemy[7][18] = "0"; 					//Attack 3 - Accuracy
enemy[7][19] = "";	 					//Attack 3 - Status Change 
enemy[7][20] = ""; 						//Item Drop A
enemy[7][21] = "";						//Item Drop B
enemy[7][22] = "0"; 					//Item Chance
enemy[7][23] = "435";					//Dialog 1
enemy[7][24] = "439";					//Dialog 2

enemy[8][0] = "Bat";		 			//Name
enemy[8][1] = "8"; 						//Image
enemy[8][2] = "50"; 					//Max HP
enemy[8][3] = "50"; 					//HP
enemy[8][4] = "400";						//Exp
enemy[8][5] = "Nip"; 					//Attack 1 - Name
enemy[8][6] = "441";					//Attack 1 - Dialog
enemy[8][7] = "15"; 					//Attack 1 - Hit
enemy[8][8] = "1"; 						//Attack 1 - Accuracy
enemy[8][9] = ""; 						//Attack 1 - Status Change 
enemy[8][10] = "Bite";					//Attack 2 - Name
enemy[8][11] = "442";					//Attack 2 - Dialog
enemy[8][12] = "25"; 					//Attack 2 - Hit
enemy[8][13] = "3"; 					//Attack 2 - Accuracy
enemy[8][14] = "";	 					//Attack 2 - Status Change 
enemy[8][15] = "Fang"; 					//Attack 3 - Name
enemy[8][16] = "443";					//Attack 3 - Dialog
enemy[8][17] = "35"; 					//Attack 3 - Hit
enemy[8][18] = "0"; 					//Attack 3 - Accuracy
enemy[8][19] = "";	 					//Attack 3 - Status Change 
enemy[8][20] = ""; 						//Item Drop A
enemy[8][21] = "";						//Item Drop B
enemy[8][22] = "0"; 					//Item Chance
enemy[8][23] = "440";					//Dialog 1
enemy[8][24] = "444";					//Dialog 2

enemy[9][0] = "Rat";		 			//Name
enemy[9][1] = "9"; 						//Image
enemy[9][2] = "100"; 					//Max HP
enemy[9][3] = "100"; 					//HP
enemy[9][4] = "50";						//Exp
enemy[9][5] = "Scratch"; 				//Attack 1 - Name
enemy[9][6] = "446";					//Attack 1 - Dialog
enemy[9][7] = "5"; 						//Attack 1 - Hit
enemy[9][8] = "1"; 						//Attack 1 - Accuracy
enemy[9][9] = ""; 						//Attack 1 - Status Change 
enemy[9][10] = "Slash";					//Attack 2 - Name
enemy[9][11] = "447";					//Attack 2 - Dialog
enemy[9][12] = "10"; 					//Attack 2 - Hit
enemy[9][13] = "3"; 					//Attack 2 - Accuracy
enemy[9][14] = "";	 					//Attack 2 - Status Change 
enemy[9][15] = "Bite"; 					//Attack 3 - Name
enemy[9][16] = "448";					//Attack 3 - Dialog
enemy[9][17] = "15"; 					//Attack 3 - Hit
enemy[9][18] = "0"; 					//Attack 3 - Accuracy
enemy[9][19] = "";	 					//Attack 3 - Status Change 
enemy[9][20] = ""; 						//Item Drop A
enemy[9][21] = "";						//Item Drop B
enemy[9][22] = "0"; 					//Item Chance
enemy[9][23] = "445";					//Dialog 1
enemy[9][24] = "449";					//Dialog 2

enemy[10][0] = "Snake";		 			//Name
enemy[10][1] = "10"; 					//Image
enemy[10][2] = "70"; 					//Max HP
enemy[10][3] = "70"; 					//HP
enemy[10][4] = "500";					//Exp
enemy[10][5] = "Whip"; 					//Attack 1 - Name
enemy[10][6] = "451";					//Attack 1 - Dialog
enemy[10][7] = "10"; 					//Attack 1 - Hit
enemy[10][8] = "1"; 					//Attack 1 - Accuracy
enemy[10][9] = ""; 						//Attack 1 - Status Change 
enemy[10][10] = "Bite";					//Attack 2 - Name
enemy[10][11] = "452";					//Attack 2 - Dialog
enemy[10][12] = "15"; 					//Attack 2 - Hit
enemy[10][13] = "3"; 					//Attack 2 - Accuracy
enemy[10][14] = "";	 					//Attack 2 - Status Change 
enemy[10][15] = "Fang"; 				//Attack 3 - Name
enemy[10][16] = "453";					//Attack 3 - Dialog
enemy[10][17] = "25"; 					//Attack 3 - Hit
enemy[10][18] = "0"; 					//Attack 3 - Accuracy
enemy[10][19] = "Poisoned";	 		//Attack 3 - Status Change 
enemy[10][20] = ""; 					//Item Drop A
enemy[10][21] = "";						//Item Drop B
enemy[10][22] = "0"; 					//Item Chance
enemy[10][23] = "450";					//Dialog 1
enemy[10][24] = "454";					//Dialog 2

enemy[11][0] = "Crawler";				//Name
enemy[11][1] = "11"; 					//Image
enemy[11][2] = "100"; 					//Max HP
enemy[11][3] = "100"; 					//HP
enemy[11][4] = "50";					//Exp
enemy[11][5] = "Creep";					//Attack 1 - Name
enemy[11][6] = "456";					//Attack 1 - Dialog
enemy[11][7] = "0"; 					//Attack 1 - Hit
enemy[11][8] = "1"; 					//Attack 1 - Accuracy
enemy[11][9] = ""; 						//Attack 1 - Status Change 
enemy[11][10] = "Crawl";				//Attack 2 - Name
enemy[11][11] = "457";					//Attack 2 - Dialog
enemy[11][12] = "0"; 					//Attack 2 - Hit
enemy[11][13] = "3"; 					//Attack 2 - Accuracy
enemy[11][14] = "";	 					//Attack 2 - Status Change 
enemy[11][15] = "Sting"; 				//Attack 3 - Name
enemy[11][16] = "458";					//Attack 3 - Dialog
enemy[11][17] = "50"; 					//Attack 3 - Hit
enemy[11][18] = "0"; 					//Attack 3 - Accuracy
enemy[11][19] = "Poisoned"; 			//Attack 3 - Status Change 
enemy[11][20] = ""; 					//Item Drop A
enemy[11][21] = "";						//Item Drop B
enemy[11][22] = "0"; 					//Item Chance
enemy[11][23] = "455";					//Dialog 1
enemy[11][24] = "459";					//Dialog 2

enemy[12][0] = "Bandit";	 			//Name
enemy[12][1] = "12"; 					//Image
enemy[12][2] = "100"; 					//Max HP
enemy[12][3] = "100"; 					//HP
enemy[12][4] = "50";					//Exp
enemy[12][5] = "Punch";					//Attack 1 - Name
enemy[12][6] = "461";					//Attack 1 - Dialog
enemy[12][7] = "5"; 					//Attack 1 - Hit
enemy[12][8] = "1"; 					//Attack 1 - Accuracy
enemy[12][9] = ""; 						//Attack 1 - Status Change 
enemy[12][10] = "Slash";				//Attack 2 - Name
enemy[12][11] = "462";					//Attack 2 - Dialog
enemy[12][12] = "10"; 					//Attack 2 - Hit
enemy[12][13] = "3"; 					//Attack 2 - Accuracy
enemy[12][14] = "";	 					//Attack 2 - Status Change 
enemy[12][15] = "Stab"; 				//Attack 3 - Name
enemy[12][16] = "463";					//Attack 3 - Dialog
enemy[12][17] = "15"; 					//Attack 3 - Hit
enemy[12][18] = "0"; 					//Attack 3 - Accuracy
enemy[12][19] = "";						//Attack 3 - Status Change 
enemy[12][20] = ""; 					//Item Drop A
enemy[12][21] = "";						//Item Drop B
enemy[12][22] = "0"; 					//Item Chance
enemy[12][23] = "460";					//Dialog 1
enemy[12][24] = "464";					//Dialog 2

enemy[13][0] = "Bandit Boss"; 			//Name
enemy[13][1] = "13"; 					//Image
enemy[13][2] = "100"; 					//Max HP
enemy[13][3] = "100"; 					//HP
enemy[13][4] = "50";					//Exp
enemy[13][5] = "Punch"; 				//Attack 1 - Name
enemy[13][6] = "466";					//Attack 1 - Dialog
enemy[13][7] = "5"; 					//Attack 1 - Hit
enemy[13][8] = "1"; 					//Attack 1 - Accuracy
enemy[13][9] = ""; 						//Attack 1 - Status Change 
enemy[13][10] = "Stomp";				//Attack 2 - Name
enemy[13][11] = "467";					//Attack 2 - Dialog
enemy[13][12] = "10"; 					//Attack 2 - Hit
enemy[13][13] = "3"; 					//Attack 2 - Accuracy
enemy[13][14] = "";	 					//Attack 2 - Status Change 
enemy[13][15] = "Slash"; 				//Attack 3 - Name
enemy[13][16] = "468";					//Attack 3 - Dialog
enemy[13][17] = "15"; 					//Attack 3 - Hit
enemy[13][18] = "0"; 					//Attack 3 - Accuracy
enemy[13][19] = "";	 					//Attack 3 - Status Change 
enemy[13][20] = ""; 					//Item Drop A
enemy[13][21] = "";						//Item Drop B
enemy[13][22] = "0"; 					//Item Chance
enemy[13][23] = "465";					//Dialog 1
enemy[13][24] = "469";					//Dialog 2

enemy[14][0] = "Bandit Boss";	 		//Name
enemy[14][1] = "14"; 					//Image
enemy[14][2] = "100"; 					//Max HP
enemy[14][3] = "100"; 					//HP
enemy[14][4] = "50";					//Exp
enemy[14][5] = "Punch"; 				//Attack 1 - Name
enemy[14][6] = "471";					//Attack 1 - Dialog
enemy[14][7] = "5"; 					//Attack 1 - Hit
enemy[14][8] = "1"; 					//Attack 1 - Accuracy
enemy[14][9] = ""; 						//Attack 1 - Status Change 
enemy[14][10] = "Stomp";				//Attack 2 - Name
enemy[14][11] = "472";					//Attack 2 - Dialog
enemy[14][12] = "10"; 					//Attack 2 - Hit
enemy[14][13] = "3"; 					//Attack 2 - Accuracy
enemy[14][14] = "";	 					//Attack 2 - Status Change 
enemy[14][15] = "Slash"; 				//Attack 3 - Name
enemy[14][16] = "473";					//Attack 3 - Dialog
enemy[14][17] = "15"; 					//Attack 3 - Hit
enemy[14][18] = "0"; 					//Attack 3 - Accuracy
enemy[14][19] = "";	 					//Attack 3 - Status Change 
enemy[14][20] = ""; 					//Item Drop A
enemy[14][21] = "";						//Item Drop B
enemy[14][22] = "0"; 					//Item Chance
enemy[14][23] = "470";					//Dialog 1
enemy[14][24] = "474";					//Dialog 2

enemy[15][0] = "Sorcerer";		 		//Name
enemy[15][1] = "15"; 					//Image
enemy[15][2] = "100"; 					//Max HP
enemy[15][3] = "100"; 					//HP
enemy[15][4] = "50";					//Exp
enemy[15][5] = "Fire"; 					//Attack 1 - Name
enemy[15][6] = "476";					//Attack 1 - Dialog
enemy[15][7] = "5"; 					//Attack 1 - Hit
enemy[15][8] = "1"; 					//Attack 1 - Accuracy
enemy[15][9] = ""; 						//Attack 1 - Status Change 
enemy[15][10] = "Lightning";			//Attack 2 - Name
enemy[15][11] = "477";					//Attack 2 - Dialog
enemy[15][12] = "10"; 					//Attack 2 - Hit
enemy[15][13] = "3"; 					//Attack 2 - Accuracy
enemy[15][14] = "";	 					//Attack 2 - Status Change 
enemy[15][15] = "Poison"; 				//Attack 3 - Name
enemy[15][16] = "478";					//Attack 3 - Dialog
enemy[15][17] = "15"; 					//Attack 3 - Hit
enemy[15][18] = "0"; 					//Attack 3 - Accuracy
enemy[15][19] = "Poisoned";	 		//Attack 3 - Status Change 
enemy[15][20] = ""; 					//Item Drop A
enemy[15][21] = "";						//Item Drop B
enemy[15][22] = "0"; 					//Item Chance
enemy[15][23] = "475";					//Dialog 1
enemy[15][24] = "479";					//Dialog 2
