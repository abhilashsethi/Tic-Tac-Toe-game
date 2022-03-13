let turn = "X";
let gameOver = false;
// change turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

// Player winner
const checkWin = () => {
    let boxtexts = document.getElementsByClassName("boxtext");
    let wins= [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e =>{
         if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !== "") ) {
            document.querySelector(".info").innerText = boxtexts[e[0]].innerText + " Won" 
            gameOver = true
          
        }
    })
}

// Game logic
const boxes = document.querySelectorAll(".box");
Array.from(boxes).forEach((box) => {
   let boxText = box.querySelector(".boxtext");
    box.addEventListener("click", () => {
        if(boxText.innerText === ""){
            boxText.innerText = turn;
            turn = changeTurn();
           
            checkWin();
            
            if(!gameOver){
                document.querySelector(".info").innerText = "Turn for " + turn;
            }
            

        }
    })
})

// Reset game
let reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(boxtext =>{
        boxtext.innerText = ""
        turn = "X"
        document.querySelector(".info").innerText = "Turn for " + turn;
        gameOver = false
    })
})