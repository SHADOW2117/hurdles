class Player {
  constructor(){
     this.index = null; 
     this.distance = 0;
     this.name= null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
   // console.log( "distance" + this.distance + "name" +this.name);
    
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance

    });
  }
  removeall(){
    database.ref("players").set({
   
    });
  }

   hide() {
    this.input.hide(); 
    this.greeting.hide();
    this.button.hide();
  }
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    //console.log("playerInfoRef"+playerInfoRef);
    
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
      
    });
    
    
  }

   getRunnerAtEnd(){
    database.ref('playerAtEnd').on("value",(data)=>{
      this.rank = data.val();
    });
  }
    static updateRunnersAtEnd(rank){
      database.ref("/").update({
        playerAtEnd:rank
      });      
    } 
    
  
}
