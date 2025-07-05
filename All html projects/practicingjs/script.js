/*console.log("Hello, World!");
let x = document.querySelector("h1");
x.style.color = "blue";

let y = document.querySelector("h2");
y.style.backgroundColor = "green";
y.style.color = "white";

setTimeout(function(){
    y.innerHTML = "aur kya haal hai?";
} , 2000);*/
 let x = document.getElementById("ele1");
 x.addEventListener("click", function(){
    x.style.color = "red";
    x.style.backgroundColor = "yellow";                                     
 })     
 let y = document.getElementById("ele2");
 y.addEventListener("mousemove",function(){
    y.style.color = "blue";
    y.style.backgroundColor = "green";                                     
 })
   let z = document.getElementById("ele1");
   y.addEventListener("click",function(){
    z.style.color = "green";
    z.style.backgroundColor = "yellow";
    z.innerHTML = "aur kya haal hai?";
    z.fontSize = "60px";
   })
   // mouseleave function is to change the color when curson is not on the element

