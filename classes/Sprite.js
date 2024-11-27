class Sprite {
  constructor({ position, imgSrc, framerate = 1, animations }) {
    this.position = position;
    this.image = new Image();
    this.image.src = imgSrc;
    this.loaded = false;
    this.image.onload = () => {
      this.loaded = true;
      this.width = this.image.width / this.framerate;
      this.height = this.image.height;
    };
    this.framerate = framerate;
    this.framebuffer = 2;
    this.currentFrame = 0;
    this.elapsedframes = 0;
    this.animations = animations;
    if (this.animations) {
      for (let key in this.animations) {
        const image = new Image();
        image.src = this.animations[key].imgSrc;
        this.animations[key].image = image;
      }
    }
  }
  switchSprite(name) {
    if(this.image===this.animations[name].image) return
    this.currentFrame = 0;
    this.image = this.animations[name].image;
    this.framebuffer = this.animations[name].framebuffer;
    this.framerate = this.animations[name].framerate;
  }
  draw() {
    // console.log(this.framerate);

     if (!this.loaded) return;
    //  console.log('draw')

    let cropbox = {
      position: {
        x: this.width * this.currentFrame,
        y: 0,
      },
      width: this.width,
      height: this.height,
    };

    c.drawImage(
      this.image,
      cropbox.position.x,
      cropbox.position.y,
      cropbox.width,
      cropbox.height,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
     this.updateFrame();
  }
  updateFrame() {
     this.elapsedframes++;
    if (this.elapsedframes % this.framebuffer === 0) {

      if (this.currentFrame < this.framerate - 1) {
        this.currentFrame++;
        // console.error("this was called")
      } else this.currentFrame = 0;
    }
  }
}
