import "phaser";
import Player from "../Objects/Player";
import GameScene from "./GameScene";
let trampolin = false;
let gravityInvert = 1;
let haveGravityChange = false;

export default class GameScene2 extends GameScene {
  constructor() {
    super("Episodio2");
  }

  colliderTrampolin() {
    trampolin = true;
    console.log("Entre");
  }
  
  ColliderYellowTile(hero, tile) {
    gravityInvert = gravityInvert * -1;
    console.log("Anduvo gravedad");
    haveGravityChange = true;
  }

  preload() {
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
  }

  door() {
    console.log ("Funciono");
    this.scene.start('Episodio3');
  }

  create() {
    // create cursors keys.

    this.createMapAndHero("level2");

    this.createCameraMan (0,0);

    this.createIndexCallbacks();
  
  }

  // method to be executed at each frame
  update() {
    this.hero.update(this.gravityInvert);

    this.checkCollidesChanges();
    
  }
}
