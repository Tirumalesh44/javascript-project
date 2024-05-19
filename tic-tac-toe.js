let squares = document.querySelectorAll(".square");
let resetbtn = document.querySelector("#reset-button");
let msgcontainer = document.querySelector(".msg-container");
let newbtn = document.querySelector("#new-button");
let msgg = document.querySelector("#msg");

let turn0 = true;
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

squares.forEach((square) => {
    square.addEventListener("click",()=>{
        console.log("box clicked");
        if(turn0)
        {
            square.innerText="O";
            turn0=false;
        }
        else
        {
            square.innerText="X";
            turn0 = true;
        }
        square.disabled = true;
        checkwinner();
    });
});

const disable=()=>{
    for(let s of squares){
        s.disabled=true;
    }
};
const enable=()=>{
    for(let s of squares){
        s.disabled=false;
        s.innerText="";
    }
    
};
const showwinner = (winner) => {
    msgg.innerText = `Congratulations winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disable();
};

const checkwinner =()=>{
    for(pattern of winPattern){
        let postval1 = squares[pattern[0]].innerText;
        let postval2 = squares[pattern[1]].innerText;
        let postval3 = squares[pattern[2]].innerText;
        if(postval1 !=""&&postval2!=""&&postval3!="")
        {
            if(postval1 === postval2&&postval2 === postval3)
            {
                showwinner(postval1);
            }
        }
    }       
};



const reset=()=>{
    turn0 = true;
    msgcontainer.classList.add("hide");
    enable();
};
const newgame=()=>{
    turn0 = false;
    msgcontainer.classList.add("hide");
    enable();
};
resetbtn.addEventListener("click",reset);
newbtn.addEventListener("click",newgame);