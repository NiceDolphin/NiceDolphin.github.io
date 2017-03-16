var numberofships = 0;
function makeMove(id,player) {
 if(player=="player"){
  if(numberofships < 10){
     document.getElementById(id).innerHTML="#";
    numberofships++; 
  }
 }
  else{
    if(document.getElementById(id).innerHTML=="x"){
      document.getElementById(id).style.color="red";
    }
    else{
      document.getElementById(id).innerHTML="O";
      alert("You failed to hit the boat")

     }
    }
    
}