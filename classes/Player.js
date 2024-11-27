class Player extends Sprite {
  constructor({ collisionblocks = [],imgSrc,framerate,animations}) {
    super({imgSrc,framerate,animations})
    this.position = {
      x: 200,
      y: 200,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    // this.width = 25;
    // this.height = 25;
    this.side = {
      right: 100,
      left: 100,
      top: 100,
      bottom: this.position.y + this.height,
    };
    this.collisionblocks = collisionblocks;
   
  }
//   draw() {
//     // console.log('drawing')
//     c.fillStyle = "red";
//     c.fillRect(this.position.x, this.position.y, this.width, this.height);
//   }
  checkforCollisonsHorizontal = function () {
    for (let i = 0; i < this.collisionblocks.length; i++) {
      if (
        this.hitbox.position.x <=
        this.collisionblocks[i].position.x + this.collisionblocks[i].width &&
      this.hitbox.position.x + this.hitbox.width >= this.collisionblocks[i].position.x &&
      this.hitbox.position.y <=
        this.collisionblocks[i].position.y + this.collisionblocks[i].height &&
      this.hitbox.position.y + this.hitbox.height >= this.collisionblocks[i].position.y
      ) {
        if (this.velocity.x < 0) {
          this.velocity.y = 0;
          const offset=this.hitbox.position.x-this.position.x
          this.position.x =
            this.collisionblocks[i].position.x +
            this.collisionblocks[i].width -offset+
            0.01;
          break;
        }
        if (this.velocity.x > 0) {
          this.velocity.y = 0;
          const offset=this.hitbox.position.x-this.position.x+this.hitbox.width;

          this.position.x =
            this.collisionblocks[i].position.x - offset - 0.01;
          break;
        }
      }
    }
  };
  checkforCollisonsVertical() {
    for (let i = 0; i < this.collisionblocks.length; i++) {
      if (
        this.hitbox.position.x <=
          this.collisionblocks[i].position.x + this.collisionblocks[i].width &&
        this.hitbox.position.x + this.hitbox.width >= this.collisionblocks[i].position.x &&
        this.hitbox.position.y <=
          this.collisionblocks[i].position.y + this.collisionblocks[i].height &&
        this.hitbox.position.y + this.hitbox.height >= this.collisionblocks[i].position.y
      ) {
        if (this.velocity.y < 0) {
          this.velocity.y = 0;

          this.position.y =
            this.collisionblocks[i].position.y +
            this.collisionblocks[i].height +
            0.01;
          break;
        }
        if (this.velocity.y > 0) {
          this.velocity.y = 0;
           const offset=this.hitbox.position.y-this.position.y+this.hitbox.height;
          this.position.y =
            this.collisionblocks[i].position.y - offset - 0.01;
          break;
        }
      }
    }
  }
  applyGravity() {
    this.velocity.y = this.velocity.y + 1;
    this.position.y = this.position.y + this.velocity.y;
  }
  update() {
    this.position.x = this.position.x + this.velocity.x;
    this.hitbox={
        position:{
            x: this.position.x+58,
            y: this.position.y+30
        },
        width:50,
        height:53

    }
    this.checkforCollisonsHorizontal();

    this.applyGravity();
    this.hitbox={
        position:{
            x: this.position.x+58,
            y: this.position.y+30
        },
        width:50,
        height:55

    }
    // c.fillRect(this.hitbox.position.x, this.hitbox.position.y, this.hitbox.width, this.hitbox.height);

    this.checkforCollisonsVertical();

    // if(this.side.bottom+this.velocity.y<canvas.height){
    //     console.log(canvas.height)
    //     this.velocity.y = this.velocity.y +1;
    //     this.side.bottom = this.position.y+this.height;
    // } else{
    //     this.velocity.y = 0;
    //     // this.velocity.x = 0;
    // }

    // if(this.side.right+this.velocity.x<canvas.width-10 && this.side.right+this.velocity.x> this.width+10){
    //     this.side.right = this.position.x+this.width;
    // }
  }
}
