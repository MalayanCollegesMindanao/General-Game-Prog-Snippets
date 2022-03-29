export default class TitleScene extends Phaser.Scene {

	constructor() {
		super("TitleScene");
	}

	preload() {

	}

	create() {
		 let bg = this.add.sprite(0,0,'background_1');
		 bg.setOrigin(0,0);

		let startText = this.add.text(100,100, 'START NOW');
		startText.setInteractive({ useHandCursor: true });
		startText.on('pointerdown', () => this.startButton());

		let optionText = this.add.text(100,200, 'Instructions');
		optionText.setInteractive({ useHandCursor: true });
		optionText.on('pointerdown', () => this.instructionButton());
	}

	startButton() {
		console.log("starting ...");
		this.scene.start('GameScene');
	}

	instructionButton() {
		console.log("instructions ...");
		this.scene.start('InstructionScene');
	}

}