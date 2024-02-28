let circle = document.querySelector(".circle");
let innerShape = document.querySelector(".shape");
let btnColor = document.querySelector("#changeColor");
let btnShape = document.querySelector("#changeShape");

btnColor.addEventListener("click", (e) => {
    e.preventDefault();
    circle.style.backgroundColor = changingColor();
})

function changingColor(){
 let str="0123456789abcdef";
 let color="#";

 for (let index = 0; index < 6; index++) {
    color+=str.charAt(Math.floor(Math.random()*str.length)); 
 }
 return color;
}
let arr=["square","rect","diamond"];
function changingShape(){
   
    let idx=Math.floor(Math.random()*arr.length);
    innerShape.id=arr[idx];
    console.log(idx);
}

btnShape.addEventListener("click",changingShape);
