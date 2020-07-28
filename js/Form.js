class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.reset = createButton('Reset');
    this.accept = createP('Player Accepted'); 
    this.title = createElement('h2'); 
    this.greeting = createElement('h2'); 
  }
  
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Hurdles Game");
    this.title.position(displayWidth/2 - 50,0);
    this.input.position (displayWidth/2 - 40,displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30,displayHeight/2);
    this.reset.position(3,3);
    this.accept.position(-30,-30);
    //button.mousePressed(game.play());
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      var name = this.input.value();
      player.name = this.input.value(); 
      //this.accept.position(200,200);
      playerCount+=1;
      player.index = playerCount; 
      player.update();
     // console.log(runners.index);
      
      player.updateCount(playerCount);
      this.greeting.html("Hello "+name);
      this.greeting.position(displayWidth/2 - 70,displayHeight/4);
    });
    this.reset.mousePressed(function(){
      game.update(0);
      //this.accept.position(-200,-200);
      //co  nsole.log("game0");
      player.updateCount(0);
      //console.log("player0");
      player.removeall();
      //console.log("player");
      //this.input.value(name);
      
    });
  }
}