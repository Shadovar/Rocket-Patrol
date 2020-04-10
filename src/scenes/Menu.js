class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene");
    }

    create() {
        //Display menu text
        console.log(this);
        this.add.text(20,20,"Rocket Patrol Menu");

        //Launch next scene
        this.scene.start("playScene");
    }
}