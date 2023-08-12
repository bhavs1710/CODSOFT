function clr(){
document.getElementById("text").value="";


}
function func(value){
document.getElementById("text").value+=value;
}

function equal(){
let a=document.getElementById("text").value;
let b= eval(a);
document.getElementById("text").value=b;


}