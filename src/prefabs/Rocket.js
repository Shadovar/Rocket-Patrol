//Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture , frame)
    {
        super(scene, x, y, texture, frame);

        //Add object to the existing scene, displayList, updateList
        scene.add.existing(this);

        //Instantiate vars
        this.isFiring = false; //Tracks whether rocket is firing
        this.upwardSpeed = 2; //Vertical speed
    }

    update()
    {
        //Horizontal movement
        if(!this.isFiring){
            if(keyLEFT.isDown && this.x >= 47){
                this.x -= 2;
            }
            if(keyRIGHT.isDown && this.x <= game.config.width-62){
                this.x += 2;
            }
        }

        //Firing
        if(Phaser.Input.Keyboard.JustDown(keyF)){
            this.isFiring = true;
        }

        //Vertical movement
        if(this.isFiring){
            if(this.y >= 25){
                this.y -= this.upwardSpeed;
                this.upwardSpeed += 2;
            }
            //reset on miss
            else {
                this.isFiring = false;
                this.upwardSpeed = 10;
                this.y = 431
            }
        }
    }
}