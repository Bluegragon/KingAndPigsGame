// import { Player } from "./classes/player";

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
canvas.width = 64 * 16;
canvas.height = 64 * 9;
let i = 1;
const collisionblocks = [];
const parsedCollisons = collisionBlock1.parse2D();
parsedCollisons.forEach((element, y) => {
  element.forEach((block, x) => {
    if (block == 292) {
      collisionblocks.push(
        new CollisionBlocks({
          position:{
             x: x * 64,
            y: y * 64,
          } 
        })
      );
    }
  });
});

const background=new Sprite({
    position:{
        x: 0,
        y: 0,
    },
    imgSrc:"../assets/img/backgroundLevel1.png"
});
const player = new Player({collisionblocks,imgSrc:'/assets/img/king/idle.png',framerate:11,animations:{
  idleRight:{
    framerate:11,
    framebuffer:2,
    loop:true,
    imgSrc:'/assets/img/king/idle.png'
  },
  idleLeft:{
    framerate:11,
    framebuffer:2,
    loop:true,
    imgSrc:'/assets/img/king/idleLeft.png'

  },
  runRight:{
    framerate:8,
    framebuffer:4,
    loop:true,
    imgSrc:'/assets/img/king/runRight.png'

  },
  runLeft:{
    framerate:8,
    framebuffer:4,
    loop:true,
    imgSrc:'/assets/img/king/runLeft.png'

  }

}});

const keys={
  w:{
      isPressed:false,
  },
  a:{
      isPressed:false,

  },
  d:{
      isPressed:false,
  }
}
function animate() {
  window.requestAnimationFrame(animate);
  if(keys.a.isPressed) {
    
    player.velocity.x=-5;
    player.switchSprite('runLeft');
  
  }
  else if(keys.d.isPressed) {
    player.velocity.x=5;
    player.switchSprite('runRight')


  }
  else if(!keys.a.isPressed){ player.velocity.x=0;
    // player.switchSprite('idleLeft');

  }
  else if(!keys.d.isPressed) {player.velocity.x=0;
    // player.switchSprite('idleRight');
  
  }
  else{
    player.switchSprite('idleLeft');


  }
  
  
  // else if(keys.w.isPressed) player.velocity.y=-20;
   
  
  // console.log(i+1)
  background.draw();
  // console.log(collisionblocks);
  collisionblocks.forEach((block)=>{
    block.draw();
  })


  player.draw();
  player.update();
}


animate();
