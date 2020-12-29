window.addEventListener("load",function()
{

var header = document.querySelector(".header");
var homeImage = header.querySelectorAll(".imgitem");
homeImage[0].onclick = function(){
    location.href = '../home.html'
}
homeImage[1].onclick = function(){
    location.href = '../index.html'
}


});