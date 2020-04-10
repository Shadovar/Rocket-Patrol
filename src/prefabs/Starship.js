//Starship prefab
class Starship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue){
        super(scene, x, y, texture, frame);

        //Add object to the existing scene, displayList, updateList
        scene.add.existing(this);

        //Instantiate vars
        this.HorizontalSpeed = 2; //Horizontal speed
        this.points = pointValue;
    }

    update()
    {
        //Horizontal movement
        this.x -= this.HorizontalSpeed;
        if(this.x <= (0-this.width)){
            this.x = game.config.width;
            console.log("should reset");
        }
    }
}