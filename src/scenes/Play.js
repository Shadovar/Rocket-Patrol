class Play extends Phaser.Scene {
    constructor(){
        super("playScene");
    }

    preload() {
        //Load images and tile sprite
        this.load.image('rocket', "./assets/rocket.png");
        this.load.image('spaceship',"./assets/spaceship.png");
        this.load.image('starfield',"./assets/starfield.png");
    }

    create() {
        //Display scene text
        console.log(this);
        this.add.text(20,20,"Rocket Patrol Play");

        //Place tile sprite
        this.starfield = this.add.tileSprite(0,0,640,480,'starfield').setOrigin(0,0);

        //Create white rectangle border
        //SetOrigin is relative to object, not scene
        this.add.rectangle(5,5,630,32, 0xFFFFFF).setOrigin(0,0);
        this.add.rectangle(5,443,630,32, 0xFFFFFF).setOrigin(0,0);
        this.add.rectangle(5,5,32,455, 0xFFFFFF).setOrigin(0,0);
        this.add.rectangle(603,5,32,455, 0xFFFFFF).setOrigin(0,0);

        //Create Green UI background
        this.add.rectangle(37,42,566,64, 0x00FF00).setOrigin(0,0);

        //Add rocket player one
        this.p1Rocket = new Rocket(this, game.config.width/2, 431, 'rocket').setScale(0.5,0.5).setOrigin(0,0);

        //Add starships
        this.ship01 = new Starship(this, game.config.width + 192, 132, 'spaceship', 0, 30).setOrigin(0,0);
        this.ship02 = new Starship(this, game.config.width + 121, 232, 'spaceship', 0, 20).setOrigin(0,0);
        this.ship03 = new Starship(this, game.config.width + 35, 332, 'spaceship', 0, 10).setOrigin(0,0);


        //Define keyboard inputs
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

    }

    update() {
        //scroll starfield
        this.starfield.tilePositionX -= 3.5;
        this.starfield.tilePositionY += 1.25;

        //Update rocket
        this.p1Rocket.update();

        //Update starships
        this.ship01.update();
        this.ship02.update();
        this.ship03.update();
    }
}