var hball,database,position;

function setup(){
    database=firebase.database()
    createCanvas(500,500);
   hball = createSprite(250,250,10,10);
    hball.shapeColor = "red";

    hballpos=database.ref('ball/position')
    hballpos.on("value",readpos)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref("ball/position").set({
      'x'  :position.x+x,
      'y'  :position.y+y
    })
}
function readpos(data){
position=data.val()
hball.x=position.x;
hball.y=position.y;
}
