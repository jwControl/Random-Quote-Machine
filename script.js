var currentQuote = "", currentAuthor = "";

function getQuote() {

  $.ajax({
     headers: {
      "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V"
     },
    url:"https://andruxnet-random-famous-quotes.p.mashape.com/cat=",
    type:"GET",
    success: function(result){
      //jezeli uda sie zadanie wykona sie ta funkcja, ktora przyjmuje parametr result
     if (typeof result === "string") {
       result = JSON.parse(result); 
      }
      currentQuote = result.quote;
      currentAuthor = result.author; 
      $("#message").html(currentQuote);
      $("#authorInfo").html(currentAuthor);
    }
 
  });
}
function getRandomColor(){
var array = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += array[Math.floor(Math.random() * 16)];
  }
  return color;   
    }
 
function setRandomColor(){
  var c= getRandomColor();
  $("body").css("background-color", c);
$(".button").css("background-color", c);
  $("i").css("background-color", c);
  $("#message").css("color", c);
  $(".well").css("border-color", c);
// $(".well").css("box-shadow", "10px 10px"+ c.toString());

 };

$(document).ready(function(){
    $("#getMessage").click(function(){
        $(".well").fadeOut("3000").fadeIn("slow");
    });
});

function myFunction() {
     window.open("https://twitter.com/intent/tweet?text=" + currentQuote +  currentAuthor);  
}
