var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["08fa4a01-bd07-4553-9431-dfc219006e4a","8ee8677f-4861-458c-8a83-3d031e6e9c6d","dc0fe6ca-f9b6-4aa5-874b-741f0a56b4e0","30f7857f-f4b7-4288-9547-e061f1524e55"],"propsByKey":{"08fa4a01-bd07-4553-9431-dfc219006e4a":{"name":"sports_tennis_1","sourceUrl":"assets/api/v1/animation-library/gamelab/3AR_728GKF9u7YQEMWKkFiRrNwQ8Q_A7/category_backgrounds/sports_tennis.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"3AR_728GKF9u7YQEMWKkFiRrNwQ8Q_A7","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/3AR_728GKF9u7YQEMWKkFiRrNwQ8Q_A7/category_backgrounds/sports_tennis.png"},"8ee8677f-4861-458c-8a83-3d031e6e9c6d":{"name":"kidportrait_04_1","sourceUrl":null,"frameSize":{"x":900,"y":1203},"frameCount":1,"looping":true,"frameDelay":12,"version":"0buTCS7gaCnP_KeVI_yW2HQaaS38UROT","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":900,"y":1203},"rootRelativePath":"assets/8ee8677f-4861-458c-8a83-3d031e6e9c6d.png"},"dc0fe6ca-f9b6-4aa5-874b-741f0a56b4e0":{"name":"kidportrait_04_1_copy_1","sourceUrl":null,"frameSize":{"x":900,"y":1203},"frameCount":1,"looping":true,"frameDelay":12,"version":"GWkP9SG8wkOePW9K81KRPGOuRiDO8Kep","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":900,"y":1203},"rootRelativePath":"assets/dc0fe6ca-f9b6-4aa5-874b-741f0a56b4e0.png"},"30f7857f-f4b7-4288-9547-e061f1524e55":{"name":"tennisball_1","sourceUrl":null,"frameSize":{"x":320,"y":320},"frameCount":1,"looping":true,"frameDelay":12,"version":"Bqrji3XfhX15LH.uhlOVqaIyLhfNqQkq","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":320},"rootRelativePath":"assets/30f7857f-f4b7-4288-9547-e061f1524e55.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var ball = createSprite(200,200,20,20);
ball.shapeColor = "maroon";
var player = createSprite(200,50,50,10);
player.shapeColor = "skyblue";
var computer = createSprite(200,350,50,10);
computer.shapeColor = "pink";
var goal1=createSprite(200,18,100,20);
goal1.shapeColor=("yellow");
var goal2=createSprite(200,382,100,20);
goal2.shapeColor=("yellow");
var playerScore=0;
var compScore=0;
 var gamestate = "serve";
function draw() {

  background("green");
  
  createEdgeSprites();
  
   textSize(18);
  fill("maroon");
  text(compScore,25,225);
  text(playerScore,25,185);
 
 // when gamestate is serve
  if(gamestate === "serve"){
 textSize(18);
 fill("black");
 text("press enter to start",100,150);

//pressing space to move the ball
  if (keyDown("ENTER")) {
     ball.velocityX = 5;
  ball.velocityY = 5;
  gamestate ="play";
  }

// creat line
 for(var i =0; i<400;i=i+20 ){
  line(i,200,i+10,200);
}
 
  drawSprites();
  }
  
  if (gamestate === "play"){
    player.x=World.mouseX;
    if(ball.isTouching(goal1))
      {
      compScore = compScore+1 ;
     ball.x=200;
     ball.y=200;
    ball.velocityX=4;
    ball.velocityY=5;
      }
       if(ball.isTouching(goal2))
      {
      playerScore = playerScore+1 ;
     ball.x=200;
     ball.y=200;
    ball.velocityX=4;
    ball.velocityY=5;
      }
      
  
      
       ball.bounceOff(edges);
   ball.bounceOff(player);
  ball.bounceOff(computer);
  player.bounceOff(edges);
  computer.bounceOff(edges);
      
    computer.x = ball.x;   
    
     if(playerScore==5 || compScore==5)
      {
        
        gamestate="end";
      }    
      
     
    drawSprites();
  }
  
  if (gamestate==="end"){
    
    if (playerScore==5){
      textSize(18);
      fill("black");
      text("you win",160,200);
    }
    
    if(compScore==5){
      textSize(18);
      fill("black");
      text("you lose",160,200);
    }
    
    
  }
  
  
  
  
  
  
  
  
  
  
  
}  

    
    
    
    
    
    
    
    
    
    
    
    
 
  
  
      
       
      
     
 
 
  
 






 

  
 
  
   
 
  
 
  





// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
