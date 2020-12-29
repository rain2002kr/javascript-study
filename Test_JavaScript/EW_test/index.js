      
//window.onload = function()
window.addEventListener ("load",function()
{
    var btnPrint = document.getElementById("btn-print");
    var add = function(x,y){return x+y;};
    //익명함수.
    btnPrint.onclick = function() {
        var btnPrint = document.getElementById("btn-print");
        var x = prompt("x 값 입력 ",0);
        var y = prompt("y 값 입력 ",0);
        x = parseInt(x);
        y = parseInt(y);
        btnPrint.value = x+y;
    };
});


