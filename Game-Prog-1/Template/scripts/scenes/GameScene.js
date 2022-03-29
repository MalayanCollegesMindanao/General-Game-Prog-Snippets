export default class GameScene extends Phaser.Scene {
	
	constructor() {
		super("GameScene");
	}

	init() {
		// game letiables
		this.score = 0;
		this.lives = 3;
		this.speed= 1.5;
		this.dragon_move = 1;
		this.score_text;
		this.lives_text;
	};

	preload() {
		// lets preload some images that we can use in our game
		this.load.image('background', 'assets/images/background.png');
		this.load.image('player', 'assets/images/warrior.png');
		this.load.image('dragon', 'assets/images/pet_dragon_new.png');
		this.load.image('gold', 'assets/images/icon.png');
	}

	create() {
		// PLAYGROUND CODE //
		console.log(this.cameras.main);
		
        //  Get a random color
        // let red = Phaser.Math.Between(50, 255);
        // let green = Phaser.Math.Between(50, 255);
        // let blue = Phaser.Math.Between(50, 255);

        // this.cameras.main.fade(2000, red, green, blue);

		this.cameras.main.pan(767, 1096, 10000, 'Power2');


		// this.cameras.main.height = 50;

		// END PLAYGROUND //



	   // add the background
	   let bg = this.add.sprite(0, 0, 'background');
	   bg.setOrigin(0,0);

	   // add score text & game text to screen
	   this.scoreText = this.add.text(100, 16, 'score: ' + this.score, { fontSize: '32px', fill: '#000' });
	   this.liveText = this.add.text(16, this.sys.game.config.height-50, 'Lives: ' + this.lives, {fontSize: '32px', fill: '#000'});

	   // add player
	   this.player = this.add.sprite(100, 150, 'player');
	   this.player.setScale(0.3);

	   // add monster
	   this.dragon = this.add.sprite(350, 150, 'dragon');
	   this.dragon.setScale(0.1);

	   // add gold
	   this.gold = this.add.sprite(650, 150, 'gold');
	   this.gold.setScale(0.5);

	}

	update() {

	  // Is mouse click down?
	  if (this.input.activePointer.isDown) {
	  	// move player along the x-axis at a rate this.speed pixels
		  console.og
	    this.player.x += this.speed;
	  }


	  if(this.dragon.y >= 500) {
	  	// Enemy movement
	  	this.dragon_move = -1;
	  } else if(this.dragon.y <= 100) {
	  	// Enemy movement
	 	 this.dragon_move = 1;
	  }

	  this.dragon.y += this.dragon_move;

	  if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.dragon.getBounds())) {
		  console.log('intersect');
	    this.lives--;
	  	this.liveText.setText("Lives: " + this.lives);
	  	this.end();
	  }

	  if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.gold.getBounds())) {
	    this.score +=50;
	  	this.scoreText.setText("Score: " + this.score);
	  	this.end();
	  }

	}


	end() {
		if(this.lives <= 0) {
			this.scene.start("EndScene");
		} else {
			this.create();
		}
	}

}