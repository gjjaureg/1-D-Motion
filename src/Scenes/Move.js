class Move extends Phaser.Scene {
    constructor() {
        super("sceneMove");

        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
    }
    preload() {
        this.load.setPath("./assets/");
        this.load.image('dog', "dog.png")
    }
    create() {
        let my = this.my;
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "dog");

        this.DKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.AKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    }
    update() {
        if (this.DKey.isDown){     
            my.sprite.body.x += 3;
        }
        else if (this.AKey.isDown) {
            my.sprite.body.x -= 3;
        }
    }
}