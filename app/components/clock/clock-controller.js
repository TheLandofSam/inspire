function ClockController() {
  function draw(){
  
  var newDate = new Date();
    var hours = newDate.getHours();
    var minutes = newDate.getMinutes();
  
  if (minutes < 10){
    minutes = "0" + minutes
  }

  var clock = document.getElementById("clock")
  clock.innerHTML = hours + ":" + minutes;

  setInterval(function(){
   draw();
  }, 1000);
/*    var seconds = new Date.getSeconds();
//adds leading zero to seconds. The : ? are ternary operators that return the value before the colon if the condition before the ? is true, and the vale after the colon if the condition is false.
 $("#sec").html((seconds < 10 ? "0" : "")+ seconds);
  }, 1000);

  setInterval(function(){

    var minutes = new Date.getMinutes();
    //add a leading zero to the minutes
    $("min").html((minutes < 10 ? "0" : "") + minutes);
  }, 1000);

  setInterval(function(){
    var hours = new Date().getHours();
    //add a leading zero to hour
    $("#hours").html((hours < 10 ? "0" : "") + hours);
  }, 1000);*/
//}, 1000);
  }
draw()
}
//look up set time out, call draw inside of this set time out, will put this set time out inside of draw function. Will need to read on recursion too. 