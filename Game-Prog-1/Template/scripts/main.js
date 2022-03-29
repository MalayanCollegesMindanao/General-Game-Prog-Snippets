import BootScene from './scenes/BootScene.js';
import PreloadScene from './scenes/PreloadScene.js';
import TitleScene from './scenes/TitleScene.js';
import InstructionScene from './scenes/InstructionScene.js';
import GameScene from './scenes/GameScene.js';
import EndScene from './scenes/EndScene.js';

// Load our scenes
let bootScene = new BootScene();
let preloadScene = new PreloadScene();
let titleScene = new TitleScene();
let instructionScene = new InstructionScene();
let gameScene = new GameScene();
let endScene = new EndScene();

//* Game scene */
let config = {
  type: Phaser.AUTO,
  width: 1800,
  height: 1300,
};
let game = new Phaser.Game(config);

// load scenes
game.scene.add('BootScene', bootScene);
game.scene.add('PreloadScene', preloadScene);
game.scene.add('TitleScene', titleScene);
game.scene.add('InstructionScene', instructionScene);
game.scene.add("GameScene", gameScene);
game.scene.add("EndScene", endScene);


// start title
game.scene.start('BootScene');