


function add(){

 var num1=document.getElementById("myInput").value;
num1=parseFloat(num1);

var num2=document.getElementById("myInput2").value;
num2=parseFloat(num2);

var result = num1+num2;
document.querySelector("h2").innerHTML=result;
}


function substraction(){

var num1=document.getElementById("myInput").value;
num1=parseFloat(num1);

var num2=document.getElementById("myInput2").value;
num2=parseFloat(num2);

var result = num1-num2;
document.querySelector("h2").innerHTML=result;
}


function multiplication(){

var num1=document.getElementById("myInput").value;
num1=parseFloat(num1);

var num2=document.getElementById("myInput2").value;
num2=parseFloat(num2);

var result = num1*num2;
document.querySelector("h2").innerHTML=result;
}


function division(){

var num1=document.getElementById("myInput").value;
num1=parseFloat(num1);

var num2=document.getElementById("myInput2").value;
num2=parseFloat(num2);

var result = num1/num2;
document.querySelector("h2").innerHTML=result;
}


function modulo(){

var num1=document.getElementById("myInput").value;
num1=parseFloat(num1);

var num2=document.getElementById("myInput2").value;
num2=parseFloat(num2);

    var result = num1 % num2;
    document.querySelector("h2").innerHTML=result;
}
