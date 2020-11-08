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
      var i =await database.ref('PlayerCount').once("value")
      if(i.exists()){
       playerCount= i.val();
       player.getCount();
      }
      form = new Form()
      form.display();
    }
  }

  play()
  {
    var dist=100
    form.hide();
    Player.getPlayerInfo();
          if(allPD!=undefined)
          {
                  for(var abd in allPD)
                  {
                            if(abd == "player"+player.index)
                            {
                              fill("red")
                            }
                      else{
                        fill("black")
                      }
text(allPD[abd].name+":"+allPD[abd].distance,500,dist)
dist+=50
                    }
        }
        if(keyDown(UP_ARROW) && player.index!=null)
        {
          player.distance+=50
          player.update()

        }
  }
}
