let gameover=false;
let turn='X';
const ChangeTurn=()=>{
    return turn==='X'?'O':'X';
}
let count=0;
const Checkwin=()=>{
    let text=document.getElementsByClassName('cell');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    count++;
    if(count>8){
        document.getElementById('print').innerHTML='Match Draws';
    }
    console.log(count);
    wins.forEach(e=>{
        if((text[e[0]].innerText===text[e[1]].innerText) &&
            (text[e[2]].innerText===text[e[1]].innerText) && 
            (text[e[0]].innerText!=='')){
                text[e[0]].style.color='green';
                text[e[1]].style.color='green';
                text[e[2]].style.color='green';
                document.getElementById('print').innerHTML=text[e[0]].innerText+' Wins';
                gameover=true;
                if(gameover){
                    let dis=document.querySelectorAll('.cell');
                    dis.forEach(element=>element.disabled=true);
                }
            }
    });
}
const play=()=>{
let box=document.getElementsByClassName('box');
Array.from(box).forEach(element=>{
    let text=element.querySelector('.cell');
    element.addEventListener('click',()=>{
        if(text.innerText==''){
            text.innerText=turn;
            turn=ChangeTurn();
            Checkwin();
            if(!gameover){
                document.getElementById('print').innerHTML= 'Player '+turn+' turn';
            }
        }
    })
});

}
    let reset=document.getElementById('reset');
    reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.cell');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    gameover = false;
    count=0;
    let dis=document.querySelectorAll('.cell');
    dis.forEach(element=>element.disabled=false);
    document.getElementById("print").innerText  = "Turn for " + turn;
})