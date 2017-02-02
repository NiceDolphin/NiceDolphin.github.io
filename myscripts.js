var operand1;
var operand2;
function getNumbers(){
  operand1 = Math.floor(Math.random() * 50) + 1;
  operand2 = Math.floor(Math.random() * 50) + 1;
  document.getElementById("operand1").innerHTML=operand1;
  document.getElementById("operand2").innerHTML=operand2;
  document.getElementById("userAnswer").innerHTML="";
}

  function checkAnswer(){
    var userSum = document.getElementById("userAnswer").value;
    var sum = operand1 + operand2;
    if(userSum == sum){
      document.getElementById("results").innerHTML="Correct!";
    }
    else{
      document.getElementById("results").innerHTML="Wrong!";
    }
  }
var pics = ["https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwic9r_zxPDRAhXCrFQKHTkfAnEQjRwIBw&url=http%3A%2F%2Fnintendoenthusiast.com%2Fforums%2Fthreads%2Fidea-for-shrek-dlc-in-pokemon.3919%2F&psig=AFQjCNFRVRgPzB9wWlA3g7lkYh3nLD26_w&ust=1486094738902636
            "https://s-media-cache-ak0.pinimg.com/736x/f5/f7/f2/f5f7f2b5504b10314f5b066084617a5f.jpg"
            "http://img-aws.ehowcdn.com/600x600p/photos.demandstudios.com/getty/article/141/245/stk26105dcs.jpg"