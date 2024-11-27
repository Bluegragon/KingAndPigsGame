window.addEventListener("keydown", function (event) {
    switch (event.key) {
      case "w": {
        if (player.velocity.y === 0) {
          player.velocity.y = -20;
        }
        else{

            console.log("w");
        }
        break;
      }
      case "a": {
        // console.log("i pressed s");
      //   player.velocity.x = -6;
      
        keys.a.isPressed=true;
  
  
        break;
      }
      case "d": {
        // player.goForward();
      //   player.velocity.x = 6;
        keys.d.isPressed=true;
  
        break;
      }
    }
  });
  window.addEventListener("keyup", function (event) {
    switch (event.key) {
      case "a": {
        console.log("i pressed s");
      //   player.velocity.x = 0;
        keys.a.isPressed=false;
  
        break;
      }
      case "d": {
        // player.goForward();
      //   player.velocity.x = 0;
        keys.d.isPressed=false;
        break;
      }
    }
  });