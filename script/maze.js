class Maze{
  constructor(S) {
    this.side = S;
    this.maze = [];
    this.clear(0);
    this.print(0);
    this.genMaze(0,0,0);
  }


  cellAt(x,y,z){
    if(this.maze[x] && this.maze[x][y] && this.maze[x][y][z])
          return this.maze[x][y][z]
    return 0;
  }
  
  print(z=0){
    var i,j,s;
    for(i=0;i<this.side;++i){
      for(j=0,s="";j<this.side;++j)
        s=s+(this.maze[i][j][z]>0?'1':'0')
      console.log(s);
    }
  }
  
  genMaze(x,y,z){
    this.maze[x][y][z]=1;
    var dir=randomDir(),u,v,w;
    for(var i=0;i<4;++i){
      u=x;v=y;w=z;
      switch(dir%10){
        case 0:w--;break;
        case 1:u++;break;
        case 2:w++;break;
        case 3:u--;break;
        case 4:v++;break;
        case 5:v--;break;
      }
      dir=Math.floor(dir/10);
      if(bound(u,v,w,this.side) && this.maze[u][v][w]===0 && open(this.maze,u,v,w))
        this.genMaze(u,v,w);
    }
  }
  
  clear(v){
    for(var i=0;i<this.side;++i){
      this.maze[i]=[];
      for(var j=0;j<this.side;++j){
        this.maze[i][j]=[];
        for(var k=0;k<this.side;++k){
          this.maze[i][j][k]=v;
        }
      }
    }
  }
}

function randomDir(){
  l=[1,4,3,5,0,2];
  var t=0,i=0;
  for(var j=5;j>0;--j){
    i=Math.floor(Math.random()*(j+1));
    t=l[i];l[i]=l[j];l[j]=t;
  }
  t=0;
  for(var j=0;j<6;++j)
    t=t*10+l[j];
  return t;
}

function bound(x,y,z,s){
  return ((x>=0)&&(x<s)&&(y>=0)&&(y<s)&&(z>=0)&&(z<s));
}

function open(maze,x,y,z){
  var r=0;
  if(maze[x+1]&&maze[x+1][y]&&maze[x+1][y][z])r+=(maze[x+1][y][z]);
  if(maze[x-1]&&maze[x-1][y]&&maze[x-1][y][z])r+=(maze[x-1][y][z]);
  if(maze[x]  &&maze[x][y]  &&maze[x][y][z+1])r+=(maze[x][y][z+1]);
  if(maze[x]  &&maze[x][y]  &&maze[x][y][z-1])r+=(maze[x][y][z-1]);
  if(maze[x]  &&maze[x][y+1]&&maze[x][y+1][z])r+=(maze[x][y+1][z]);
  if(maze[x]  &&maze[x][y-1]&&maze[x][y-1][z])r+=(maze[x][y-1][z]);
  if(r<=1) return true;
  return false;
}

