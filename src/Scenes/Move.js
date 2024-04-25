class Move extends Phaser.Scene {
    constructor() {
        super("moveScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        
        this.bodyX = 300;
        this.bodyY = 570;

        this.shootX = this.bodyX;
        this.shootY = this.bodyY;
        
    }

    
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("platformParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Move.js<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;  

        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "platformParts", "character_squareRed.png");
        my.sprite.projectile = this.add.sprite(this.shootX, this.shootY, "platformParts", "character_handYellow.png");

        my.sprite.projectile.visible = false;

        this.DKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        this.AKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

        this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    }

    update() {
        let my = this.my;    
        
        if (Phaser.Input.Keyboard.JustDown(this.spaceKey)){
            my.sprite.projectile.x = my.sprite.body.x;
            my.sprite.projectile.y = my.sprite.body.y;
            my.sprite.projectile.visible = true;
        }

        if (my.sprite.projectile.visible == true){
            my.sprite.projectile.y -= 5;
        }



        if (this.DKey.isDown){     
            my.sprite.body.x += 3;
            if (my.sprite.body.x >= 800) { 
                my.sprite.body.x = 800;
            }

        }
        if (this.AKey.isDown) {
            my.sprite.body.x -= 3;
            if (my.sprite.body.x <= 0) { 
                my.sprite.body.x = 0;
            }

        }
    


    }
       


}