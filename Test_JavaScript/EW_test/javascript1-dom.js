      
//window.onload = function()
//Ex7 : 노드복제 및 템플릿.
window.addEventListener ("load",function()
{
  var notice = [
    {id:5, title:'파이어!!~~!!', regDate:'2020-05-01', writeId:'이경훈', hit:'3'},
    {id:6, title:'복제하자, 복제하자 복제', regDate:'2020-05-02', writeId:'이경훈', hit:'6'}
  ];  

   var section = document.querySelector('#section7');
   var tableInfo = document.querySelector('.table-info');
   var cloneButton = document.querySelector('.clone-button');
   var templateButton = document.querySelector('.template-button');
   var tbodyNode = tableInfo.querySelector('tbody');

    cloneButton.onclick = function(){
      var trNode = tableInfo.querySelector("tbody tr");
      var cloneNode = trNode.cloneNode(true);
      var tds = cloneNode.querySelectorAll('td');
      tds[0].innerText = notice[0].id;
      //tds[1].innerHTML = '<a href="'+ notice[0].id+'">'+notice[0].title+'</a>';
      //개선된 방법 
      var aNode = tds[1].children[0];
      aNode.href = "";
      aNode.textContent = notice[0].title;


      tds[2].innerText = notice[0].regDate;
      tds[3].innerText = notice[0].writeId;
      tds[4].innerText = notice[0].hit;
      
      tbodyNode.appendChild(cloneNode);  
    }
    templateButton.onclick = function(){
     var template = section.querySelector("template");
     var cloneNode = document.importNode(template.content, true);
     var tds = cloneNode.querySelectorAll('td');
     tds[0].innerText = notice[1].id;
     tds[1].innerHTML = '<a href="'+ notice[1].id+'">'+notice[1].title+'</a>';
     tds[2].innerText = notice[1].regDate;
     tds[3].innerText = notice[1].writeId;
     tds[4].innerText = notice[1].hit;
     
     tbodyNode.appendChild(cloneNode);  


    }
   
});
//Ex6-3 : 엘리먼트 노드의 속성 InnerHTML 개선형 효율적임.
window.addEventListener ("load",function()
{
    var section = document.querySelector("#section6-3"); //id로 가져오기 
    var titleInput = section.querySelector(".title-input");
    var addButton  = section.querySelector(".add-button");
    var delButton  = section.querySelector(".del-button");
    var menuListUl  = section.querySelector(".menu-list");

    addButton.onclick = function(){
      var title = titleInput.value
      var html = '<a href=""> '+ title +' </a>';
      var li = document.createElement('li');
      li.innerHTML = html;
      //menuListUl.appendChild(li);
      menuListUl.append(li); //여러가지 노드가 한번에 들어갈수 있는 개선형
      
    }
    delButton.onclick = function(){
      var liNode = menuListUl.children[0];
      //menuListUl.removeChild(liNode);
      liNode.remove(); //좀더 직관적으로 지울수 있는 방법 
    }
   
});
//Ex6-2 : 엘리먼트 노드의 속성 InnerHTML
window.addEventListener ("load",function()
{
    var section = document.querySelector("#section6-2"); //id로 가져오기 
    var titleInput = section.querySelector(".title-input");
    var addButton  = section.querySelector(".add-button");
    var delButton  = section.querySelector(".del-button");
    var menuListUl  = section.querySelector(".menu-list");

    addButton.onclick = function(){
      var title = titleInput.value
      menuListUl.innerHTML += '<li><a href=""> '+ title +' </a></li>'
    }
    delButton.onclick = function(){
      var liNode = menuListUl.children[0];
      menuListUl.removeChild(liNode);

    }
   
});
//Ex6-1 : 엘리먼트 노드의 속성 createElement
window.addEventListener ("load",function()
{
    var section = document.querySelector("#section6-1"); //id로 가져오기 
    var titleInput = section.querySelector(".title-input");
    var addButton  = section.querySelector(".add-button");
    var delButton  = section.querySelector(".del-button");
    var menuListUl  = section.querySelector(".menu-list");

    addButton.onclick = function(){
      var title = titleInput.value
      var textNode  = document.createTextNode(title);
      var liNode  = document.createElement("li");
      var aNode  = document.createElement("a");
      aNode.href = "";
      aNode.appendChild(textNode);

      liNode.appendChild(aNode);
      menuListUl.appendChild(liNode);
    }
    delButton.onclick = function(){
      var textNode = menuListUl.childNodes[0];
      menuListUl.removeChild(textNode);

    }
   
});
//Ex6 : 엘리먼트 노드의 속성 & CSS 속성 변경 하기 
window.addEventListener ("load",function()
{
    var section = document.querySelector("#section6"); //id로 가져오기 
    var titleInput = section.querySelector(".title-input");
    var addButton  = section.querySelector(".add-button");
    var delButton  = section.querySelector(".del-button");
    var menuList  = section.querySelector(".menu-list");

    addButton.onclick = function(){
      var title = titleInput.value
      var textNode  = document.createTextNode(title);
      menuList.appendChild(textNode);
    }
    delButton.onclick = function(){
      var textNode = menuList.childNodes[0];
      menuList.removeChild(textNode);

    }
   
});
//Ex5 : 엘리먼트 노드의 속성 & CSS 속성 변경 하기 
window.addEventListener ("load",function()
{
    var section = document.querySelector("#section5"); //id로 가져오기 
    var srcInput = section.querySelector(".src-input");
    var imgSelect = section.querySelector(".img-select");
    var colorInput = section.querySelector(".color-input");
    var changeButton = section.querySelector(".change-button");
    var img = section.querySelector(".img");
    
    changeButton.onclick = function(){
        img.src = "images/" + srcInput.value;
        //img.src = "images/" + imgSelect.value;
        
        //color 코드 변경방법 
        //img.style["border-color"] = colorInput.value; //이 방법도 되고
        img.style.borderColor = colorInput.value; //이방법도 됩니다. 
        //img.class 를 쓸수는 없다. img.className 이라는것을 써야 합니다. 
        console.log(img.className);
    }

    
});
//Ex4 : childNodes 를  이용한 노드 선택
window.addEventListener ("load",function()
{
    var section4 = document.querySelector("#section4"); //id로 가져오기 
    var box = section4.querySelector(".box");
    // var input1 = box.childNodes[0]; //tag 형태로 뽑는것, 공백과 comment역시
    // var input2 = box.childNodes[1];
    var input1 = box.children[0]; 
    var input2 = box.children[1];
    input1.value = "hello2";
    input2.value = "okay2";

    
});
//Ex3 : Selectors API Level1 
window.addEventListener ("load",function()
{
    var section3 = document.getElementById("section3");
    var txtX = section3.querySelector("input[name='x']"); //name으로 가져올수도 있습니다.    //class . , id #
    var txtY = section3.querySelector(".txt-y");
    var btnAdd = section3.querySelector(".btn-add");
    var txtSum = section3.querySelector(".txt-sum");

    //익명함수.
    btnAdd.onclick = function() {
      var x = parseInt(txtX.value);
      var y = parseInt(txtY.value);
      txtSum.value  = x +y;
        
    };
});
//Ex2 : 엘리먼트 선택 방법 개선하기 
window.addEventListener ("load",function()
{
    var section2 = document.getElementById("section2");
    var txtX = section2.getElementsByClassName("txt-x")[0];
    var txtY = section2.getElementsByClassName("txt-y")[0];
    var btnAdd = section2.getElementsByClassName("btn-add")[0];
    var txtSum = section2.getElementsByClassName("txt-sum")[0];

    /*
    var inputs = section2.getElementsByTagName("input");

    var txtX = inputs[0];
    var txtY = inputs[1];
    var btnAdd = inputs[2];
    var txtSum = inputs[3];
    */
    //익명함수.
    btnAdd.onclick = function() {
      var x = parseInt(txtX.value);
      var y = parseInt(txtY.value);
      txtSum.value  = x +y;
        
    };
});


window.addEventListener ("load",function()
{
    var txtX = document.getElementById("txt-x");
    var txtY = document.getElementById("txt-y");
    var btnAdd = document.getElementById("btn-add");
    var txtSum = document.getElementById("txt-sum");
    //익명함수.
    btnAdd.onclick = function() {
      var x = parseInt(txtX.value);
      var y = parseInt(txtY.value);
      txtSum.value  = x +y;
        
    };
});


