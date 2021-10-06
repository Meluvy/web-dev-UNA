console.log("loading..."); 

var someText ="this is a string";
console.log(someText);


function trashFunction() {
  var trash = document.getElementById('trash');
  trash.parentNode.remove(trash);
}

var i, x = "";
const cont = document.getElementById("colorList");

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://reqres.in/api/products/", true); 
xhr.onload = function() {
    var infor = JSON.parse(xhr.responseText);
    var data = infor.data;


    for (i=0; i < data.length; i++) {
        colors = data[i];
        console.log(colors);
        colorname = JSON.stringify(colors.name);
        colornum = JSON.stringify(colors.color);
        console.log(colornum); 
        const li = document.createElement('li');
        const div = document.createElement('div'); 
        li.appendChild(document.createTextNode(colorname.replace(/['"]+/g, '')));
        cont.appendChild(li);
        li.style.backgroundColor = colornum.replace(/['"]+/g, ''); 
        li.appendChild(div); 
        div.className = "trash"; 
        }
  
    
};

xhr.send();


//infor will have in it an array of data
// these are the steps you need to do 
// 1. get the ul as a variable ( )
// 2. 
// 3. inside loop, make a DOM li with textnode
// 4. using js, set the style (inline style) for the background color



