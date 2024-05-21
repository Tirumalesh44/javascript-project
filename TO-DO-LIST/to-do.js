let container = document.querySelector(".container");
let todolist = document.getElementsByClassName("to-do-list");
let inputbox = document.getElementById("input-box");
let button = document.querySelector("#button1");
let ullists = document.querySelector(".lists");

const additem= ()=>{
    let inputval = inputbox.value.trim();
    if(inputval.length ===0)
    {
        alert("enter the tasks");
    }
    else
    {
        let newele = document.createElement("li");
        newele.innerHTML = inputval;
        ullists.appendChild(newele);
        let newspan = document.createElement("span");
        newspan.innerHTML="\u00d7";
        newele.appendChild(newspan);
        
        
    }
    inputbox.value="";
    savedata();

};
button.addEventListener("click",additem);
ullists.addEventListener("click",function(e){
    if(e.target.tagName=== "LI" ){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false)

function savedata(){
    localStorage.setItem("data",ullists.innerHTML);
}
function showtask(){
    ullists.innerHTML = localStorage.getItem("data");
}
showtask();