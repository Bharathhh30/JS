let btn = document.querySelector('button');

let mode = "light";

btn.addEventListener('click',()=>{
    if (mode === "light"){
        document.body.style.backgroundColor = "#212121";
        document.body.style.color = "white";
        mode = "dark";
    }else{
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        mode = "light";
    }
});