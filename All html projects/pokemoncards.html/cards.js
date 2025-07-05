/*var main =  document.getElementById("main");
main.innerHTML =  "<h1>thisg</h1>"; */ // main.innerHTML changes the content of the main element

        /* 
         <div class="card">
           <img src="" alt="">
         </div>*/
var main = document.getElementById("main");
let images = ["https://m.media-amazon.com/images/M/MV5BOGQ5YWFjYjItODE5OC00ZDQxLTk5ZmYtNzY0YzM4NjIyMWFlXkEyXkFqcGc@._V1_.jpg", "https://i.pinimg.com/736x/a0/53/3d/a0533dfabfaf6173efe629e62e1c98fc.jpg" , "https://i.pinimg.com/736x/c6/70/37/c6703799d501726ac9eb02cb0c068e65.jpg", "https://m.media-amazon.com/images/M/MV5BOGQ5YWFjYjItODE5OC00ZDQxLTk5ZmYtNzY0YzM4NjIyMWFlXkEyXkFqcGc@._V1_.jpg", "https://yt3.googleusercontent.com/ytc/AIdro_k_Zpnf5wj1OQ6qjN2K8Y8NlQk2CncKqk0jvO5iexT3oP4=s900-c-k-c0x00ffffff-no-rj"];
var s = "";
for ( let i = 0;i<36;i++){

  let randomIndex = Math.floor(Math.random() * images.length);

    s+= `<div class="card">
           <img src="${images[randomIndex]}" alt="Image ${i + 1}">
         </div>`;   
}
main.innerHTML = s;
// 
//
// 
//

//