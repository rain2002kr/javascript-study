window.addEventListener("load",function()
{
  
var main = document.querySelector(".main");
var inputs = main.querySelectorAll("input");

inputs[0].onclick = function (){
  location.href = '../PAGE/nuddle.html';
}
inputs[1].onclick = function (){
  location.href = '../PAGE/rice.html';
}
inputs[2].onclick = function (){
  location.href = '../PAGE/set.html';
}
inputs[3].onclick = function (){
  location.href = '../PAGE/side.html';
}
inputs[4].onclick = function (){
  location.href = '../PAGE/beverage.html';
}
inputs[5].onclick = function (){
  location.href = '../PAGE/special1.html';
}
inputs[6].onclick = function (){
  location.href = '../PAGE/special2.html';
}
inputs[7].onclick = function (){
  location.href = '../PAGE/season1.html';
}
inputs[8].onclick = function (){
  location.href = '../PAGE/season2.html';
}









});



// var menus = ['짜장','짬뽕','해물짬뽕','낙지짬뽕','해물낙지짬뽕','해물짜장면'];
// var menus = ['짜장','짬뽕','해물짬뽕','낙지짬뽕','해물낙지짬뽕','해물짜장면'];
{/* <input type="button" class="nuddle-button" value="면" onclick="location.href='../PAGE/nuddle.html'"/> */}