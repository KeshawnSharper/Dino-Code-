const game = Runner.instance_;

function tick() {
  /* do not do anything if the game is not running */
  if (game.crashed || game.paused) {

      
    return requestAnimationFrame(tick);
  }
    // Plan 

    // 1. Find out how to jump automatically with the dino 
    // 2. Find out how to tell if an obstacle is too close to a dino 
    // 3. Automatically jump when an obstacle is close 

    // action 



	// Key into the 'game' object to find the necessary data
	let obstacles = 0;
	let tRex = game.tRex

    // Jump event - To jump the dino in the game you press spacebar. You can trigger jump(spacebar) trigger with ` document.dispatchEvent(jump)` 
	var jump = new Event('keydown');
	jump.which = jump.keyCode = 32; // 32 is the keycode for the space bar

    // duck Event - same thing as above but the down arrow is how you get the dino to duck
    var duck = new Event('keydown');
	duck.which = duck.keyCode = 40; // 32 is the keycode for the space bar
 
    // Now since I know how to trigger these events I have to set up conditionals to trigger 

    // When an obstacle's Xpos value is less than 100 that means it's very close to the dino 4

    // If an obstacle is close to the dino then decide to jump or duck 
    if (game.horizon.obstacles[0] && game.horizon.obstacles[0].xPos < 100){
    // if an obstacle is above the dino have the dino duck 
        if (game.horizon.obstacles[0].yPos <= 50){
            document.dispatchEvent(duck); 
        }
    // else the obstacle is under which means the dino should jump 
        else{
            document.dispatchEvent(jump); 
        }
        
    }

  requestAnimationFrame(tick)
}
tick()


