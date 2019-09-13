class Maze{
  constructor(W,H) {
    this.width = W;
    this.height = H;
    this.maze = [];
    this.clear(0);
    this.genMaze(0,0);
  }


  cellAt(x,y){
    if(this.maze[x])
      if(this.maze[x][y])
        return this.maze[x][y]
    return 0;
  }
  
  print(){
    for(var i=0;i<this.width;++i){
      for(var j=0,s="";j<this.height;++j)
        s=s+(this.maze[i][j]>0?'#':'[]')
      console.log(s);
    }
  }
  
  pprint(){
    var s="";
    for(var i=0;i<this.width;++i){
      s=s+"<p>"
      for(var j=0;j<this.height;++j)
        s=s+(this.maze[i][j]>0?'#':'[]')
      s=s+"</p>";
    }
    return s;
  }
  
  genMaze(x, y){
    this.maze[x][y]=1;
    var dir=randomDir(),w,z;
    for(var i=0;i<4;++i){
      w=x,z=y;
      switch(dir%10){
        case 0:z--;break;
        case 1:w++;break;
        case 2:z++;break;
        case 3:w--;break;
      }
      dir=Math.floor(dir/10);
      if(bound(w,z,this.width,this.height) && this.maze[w][z]===0 && open(this.maze,w,z))
        this.genMaze(w,z);
    }
  }
  
  clear(v){
    for(var i=0;i<this.width;++i){
      this.maze[i]=[];
      for(var j=0;j<this.height;++j)
        this.maze[i][j]=v;
    }
  }
}

function randomDir(){
  l=[1,2,3,0];
  var t=0,i=0;
  for(var j=3;j>0;--j){
    i=Math.floor(Math.random()*(j+1));
    t=l[i];l[i]=l[j];l[j]=t;
  }
  t=0;
  for(var j=0;j<4;++j)
    t=t*10+l[j];
  return t;
}

function bound(x,y,w,h){
  return ((x>=0)&&(x<w)&&(y>=0)&&(y<h));
}

function open(maze,x,y){
  var r=0;
  if(maze[x+1]&&maze[x+1][y])r+=(maze[x+1][y]);
  if(maze[x-1]&&maze[x-1][y])r+=(maze[x-1][y]);
  if(maze[x]&&maze[x][y+1])r+=(maze[x][y+1]);
  if(maze[x]&&maze[x][y-1])r+=(maze[x][y-1]);
  if(r<=1) return true;
  return false;
}

