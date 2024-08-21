const container = document.querySelector("#container");
let widthNum = 960;
const button1 = document.querySelector("#button1");

function createDiv(meme){
    if(meme > 100){
        alert("You cannot enter a number above 100")
    }
    else{
    for(i = 0; i < meme*meme ; i++){
        let div = document.createElement("div");
        div.className = "test"
        div.style.width = widthNum /meme - 1.4 +"px";
        div.style.height = widthNum /meme - 2 +"px";
        div.style.border = "1px, solid";

        const colors = ["white", "red", "blue", "pink", "green", "purple", "orange"]
        let colorNum = Math.floor(Math.random()*colors.length);
        let colorNum2 = Math.floor(Math.random()*colors.length);

        div.addEventListener("mouseover", ()=>{
            div.style.background = colors[colorNum];
        })
    
        container.appendChild(div)      
    }
}
}

createDiv(16)

function userChoice(){
    let userNum = prompt("Enter desired pixel");
    createDiv(userNum);
}

function clearAll(){
    container.textContent = "";
};

button1.addEventListener("click", userChoice);
button1.addEventListener("mousedown", clearAll)