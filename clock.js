function clock() {
  var hour = document.getElementById("hours");
  var minute = document.getElementById("minute");
  var secs = document.getElementById("secs");

  var time = new Date();
  var a = time.getHours();
  var b = time.getMinutes();
  var c = time.getSeconds();

  if (a > 11) {
    a = a - 12;
    clock5.innerHTML = "PM";
  }
  hour.innerHTML = a;
  minute.innerHTML = b;
  secs.innerHTML = c;
}
setInterval(clock, 1000);
function settime() {
  var i = document.getElementById("wakeuptimeSelector").value;
  var j=document.getElementById("lunchtimeSelector").value;
  var k=document.getElementById("snaptimeSelector").value;

  var hourr = new Date().getHours();
  

  if (i == hourr) {
    document.getElementById("text-container").innerHTML =
      "lets have some breakfast !!!" ;
      document.getElementById("img-container").style.backgroundImage="url(./wakeupimage.jpg)";
  }
  if(j==hourr){
      document.getElementById("text-container").innerHTML="Lets have some Lunch !!!";
      document.getElementById("img-container").style.backgroundImage="url(./lunchtimeimage.jpg)";
  }
  if(k==hourr){
      document.getElementById("text-container").innerHTML="Lets get some Nap !!!";
      document.getElementById("img-container").style.backgroundImage="url(./nappingimage.jpg)";
  }
  document.getElementById("dynamic-block").style.visibility="visible";
  var invalue1=document.getElementById("wakeuptimeSelector");
var value1 =invalue1.options[invalue1.selectedIndex].text;
document.getElementById("first").innerHTML="wake up time :" + value1;

var invalue2=document.getElementById("lunchtimeSelector");
var value2 =invalue2.options[invalue2.selectedIndex].text;
document.getElementById("second").innerHTML="lunch time :" + value2;

var invalue3=document.getElementById("snaptimeSelector");
var value3 =invalue3.options[invalue3.selectedIndex].text;
document.getElementById("third").innerHTML="snap time :" + value3;



}
// function Makediv(){
// var container= document.createElement('div');
// container.className="grid-item";    
// container.id="dynamic-block";
// // var upperclass=document.getElementsByClassName("grid-container1");
// document.getElementById('grid-container1').appendChild(container);
// var invalue1=document.getElementById("wakeuptimeSelector");
// var value1 =invalue1.options[invalue1.selectedIndex].text;
// document.getElementById("dynamic-block").innerHTML="wake up time" + value1;



// }
// Makediv();
// function Makediv(){
//   var container =document.createElement("div");
// }



// Makediv();