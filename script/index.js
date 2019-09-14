var mymaze;
var change=true;

var Cf = {
  S:30,
  W:15,
}

function setup(){
  if(windowWidth<=600){
    Cf.S = (windowWidth-20)/Cf.W;
  }
  mymaze = new Maze(Cf.W);
  createCanvas(Cf.W*Cf.S+10,Cf.W*Cf.S+10).parent("mzdisp");
}

function draw(){
  if(!change) return;
  background(0);
  for(var i=0;i<Cf.W;++i){
    for(var j=0;j<Cf.W;++j){
      if(mymaze.cellAt(i,j,0)>0){
        fill(255);
      } else {
        fill(0);
      }
      rect(i*Cf.S+5,j*Cf.S+5,Cf.S,Cf.S);
    }
  }
  change=false;
}
