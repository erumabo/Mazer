var mymaze;

var Cf = {
  S:0,
  H:30,
  W:30,
}

function setup(){
  Cf.S = (windowWidth-20)/Cf.W;
  mymaze = new Maze(Cf.W,Cf.H);
  createCanvas(Cf.W*Cf.S+10,Cf.H*Cf.S+10).parent("mzdisp");
}

function draw(){
  background(0);
  for(var i=0;i<Cf.W;++i){
    for(var j=0;j<Cf.H;++j){
      if(mymaze.cellAt(i,j)>0){
        fill(255);
      } else {
        fill(0);
      }
      rect(i*Cf.S+5,j*Cf.S+5,Cf.S,Cf.S);
    }
  }
}
