var mmaze = new Maze(20,20);
console.log(mmaze.height);
mmaze.print();

function tableSet(){
  var tabla=document.getElementById("matriz");
  var tr,td;
  if(tabla){
    for(i=0;i<mmaze.height;++i){
      tr=tabla.insertRow();
      for(j=0;j<mmaze.width;++j){
        td=tr.insertCell();
        console.log(mmaze.cellAt(i,j))
        td.innerHTML=
        '<div class="cell" style="background-color:'
        +(mmaze.cellAt(i,j)===0?"black":"white")
        +'"></div>';
      }
    }
  }
}

function tableFill(){
  mmaze.clear(0);
  mmaze.genMaze(0,0);
  var tabla=document.getElementById("matriz");
  var tr,td;
  if(tabla){
    for(i=0;i<mmaze.height;++i){
      for(j=0;j<mmaze.width;++j){
        td=tabla.rows[i].cells[j];
        td.innerHTML=
          '<div class="cell" style="background-color:'
         +(mmaze.cellAt(i,j)===0?"black":"white")
         +'"></div>';
      }
    }
  }
}