class Maze{
  constructor(W,H) {
    this.width = W;
    this.height = H;
    this.maze = [];
  }

  cellAt(x,y){
    if(this.maze[x]){
      if(this.maze[x][y]){
        return this.maze[x][y]
      }
    }
    return NaN;
  }
  
}
