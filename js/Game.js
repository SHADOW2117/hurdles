class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })


  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    runner1 = createSprite(200,250,20,20);
    runner1.addImage("running_1_1",runner_1);
    runner2 = createSprite(200,390,20,20);
    runner2.addImage("running_2_1",runner_2);
    runner3 = createSprite(200,540,20,20);
    runner3.addImage("running_3_1",runner_3);
    runner4 = createSprite(200,660,20,20);
    runner4.addImage("running_4_1",runner_4);
    // hurdlees1
    hurdle1 = createSprite(800,250,50,30);
    hurdle1.addImage("hurdle_1",hurdle);
    hurdle2 = createSprite(800,390,50,30);
    hurdle2.addImage("hurdle_1",hurdle);
    hurdle3 = createSprite(800,540,50,30);
    hurdle3.addImage("hurdle_1",hurdle);
    hurdle4 = createSprite(800,660,50,30);
    hurdle4.addImage("hurdle_1",hurdle);
    //hurdles2
    hurdle131 = createSprite(1000,250,50,30);
    hurdle131.addImage("hurdle_1",hurdle);
    hurdle231 = createSprite(1000,390,50,30);
    hurdle231.addImage("hurdle_1",hurdle);
    hurdle331 = createSprite(1000,540,50,30);
    hurdle331.addImage("hurdle_1",hurdle);
    hurdle431 = createSprite(1000,660,50,30);
    hurdle431.addImage("hurdle_1",hurdle);
    //hurdles 3
    hurdle13 = createSprite(1500,250,50,30);
    hurdle13.addImage("hurdle_1",hurdle);
    hurdle23 = createSprite(1500,390,50,30);
    hurdle23.addImage("hurdle_1",hurdle);
    hurdle33 = createSprite(1500,540,50,30);
    hurdle33.addImage("hurdle_1",hurdle);
    hurdle43 = createSprite(1500,660,50,30);
    hurdle43.addImage("hurdle_1",hurdle);
    //hurdles4
    hurdle15 = createSprite(1800,250,50,30);
    hurdle15.addImage("hurdle_1",hurdle);
    hurdle25 = createSprite(1800,390,50,30);
    hurdle25.addImage("hurdle_1",hurdle);
    hurdle35 = createSprite(1800,540,50,30);
    hurdle35.addImage("hurdle_1",hurdle);
    hurdle45 = createSprite(1800,660,50,30);
    hurdle45.addImage("hurdle_1",hurdle);

    
    runners = [runner1, runner2, runner3, runner4];
  }

  play(){
    form.hide(); 
    Player.getPlayerInfo();
    if (allPlayers !== undefined) {
      background(rgb(198,135,103));
      image(backgroundImage,0,0,displayWidth*6,displayHeight);
      //console.log(runner3.x);
        var index = 0;
        var y  = 100;
        var x;
        for(var plr in allPlayers){
          index = index + 1 ;
          y = y + 115;
          x = displayWidth/4-200 - allPlayers[plr].distance;
          
         // runners[index-1].x = x;
          //runners[index-1].y = y;
         
         //console.log("index"+index);
         // console.log("player.index"+player.index);
          if (index === player.index){

           // console.log("red");
            stroke(10);
            fill("red");
            ellipse(x,y,60,60);
            runners[index - 1].shapeColor = "red";
            camera.position.y = displayHeight/2;
            camera.position.x = runners[index-1].x;
            if (keyIsDown(32) && player.index !== null) {
                if(isTouchingspace(runners[index-1],hurdle1) || isTouchingspace(runners[index-1],hurdle2) || isTouchingspace(runners[index-1],hurdle3) || isTouchingspace(runners[index-1],hurdle4) ){
                    player.distance=player.distance-200;  
              }
              
            }else{
                  if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    if(isTouching(runners[index-1],hurdle1) || isTouching(runners[index-1],hurdle2) || isTouching(runners[index-1],hurdle3) || isTouching(runners[index-1],hurdle4)){
                      stroke("red");
                     // strokeWeight(4);
                      console.log("position:Die"+runners[index-1].x);
                      text("YOU DIED !!!!!!",runners[index-1].x-150,300);
                    }
                    else{
                    player.distance=player.distance-20;
                    //console.log("is touching hurdle False");
                    player.update(); 
                  }
                }
            }
       
          }
        }
       }
     if (player.distance < -7841) {
      gameState = 2;
      //console.log("you won");
      stroke("red");
      text("You Won",7850,500);
    }
     drawSprites();
  }  
  end(){
    console.log("Game Ended");
 /*   game.update(0);
    
    player.updateCount(0);
    //console.log("player0");
    player.removeall();*/
   
  }
}