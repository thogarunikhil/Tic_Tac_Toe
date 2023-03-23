let boxes = Array.from(document.getElementsByClassName('box'));
console.log(boxes);
let audioMove = new Audio('music/ting.mp3');
let values = Array.from(document.getElementsByClassName('boxText'));
let temp = 0;
let infoText = document.getElementById('infoText');
let resetBtn = document.getElementById('reset');
let turn = 'X';
let winStatus = 0;
let gameoverAudio = new Audio('music/gameover.mp3');
function changeTurn(){
    if (turn === 'X'){
        turn = 'O';
        infoText.textContent = 'Turn for O';
    }
    else {
        turn = 'X';
        infoText.textContent = 'Turn for X';
    }
}

function checkwin(){
    let wins = [
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
    ]
    wins.forEach((e)=>{
       /*  console.log(values[e[0].textContent]);
        console.log(values[e[0]].value); */
       /*  console.log(values[e[0]].innerText); */
        if ((values[e[0]].innerText == values[e[1]].innerText) && (values[e[1]].innerText == values[e[2]].innerText) && (values[e[0]].innerText !== '')){
              infoText.innerText = values[e[0]].innerText+ " Won";
              document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "200px";
              gameoverAudio.play();
              winStatus = 1;
              document.querySelector('.line').style.width = "20vw";
              document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        }
    })
    }
boxes.forEach((element,i)=>{
    element.addEventListener('click',()=>{
        if (winStatus === 1){
            document.querySelector('.line').style.width = "0vw";
            values.forEach((element)=>{
                element.textContent = '';
            })
            infoText.textContent = 'Turn for X';
            turn = 'X';
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px";
            winStatus = 0;
        }
        if (values[i].textContent == ''){
            values[i].textContent = turn;
            changeTurn();
         /*  if (temp == 0){
              values[i].textContent = 'X';
              temp = 1;
              infoText.textContent = 'Turn for O';
          } 
          else{
              values[i].textContent = 'O';
              temp = 0;
              infoText.textContent = 'Turn for X';
          } */
          audioMove.play();
          checkwin();
        }
    })
})

resetBtn.addEventListener('click',()=>{
    document.querySelector('.line').style.width = "0vw";
    values.forEach((element)=>{
        element.textContent = '';
    })
    infoText.textContent = 'Turn for X';
    turn = 'X';
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px";
})