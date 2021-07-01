let image=["./images/angry 1.png", "./images/crying 1.png", "./images/exploding 1.png", "./images/hearts 1.png", "./images/horns 1.png", "./images/joy 1.png", "./images/party 1.png", "./images/poop 1.png"];
let backFace = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/209/cross-mark_274c.png";
image=[...image, ...image];

let cardContainer=document.querySelector('.card-container');
let end = document.querySelector('.end');
let restartbtn = document.querySelector('.restart');

restartbtn.onclick = ()=>{
    window.location.reload();
}

for(i=0;i<16;i++) {
    let cardBox = document.querySelector(".card-container");
    let div = document.createElement("div");
    div.classList.add("card");
    let img1 = document.createElement("img");
    img1.classList.add("front-face");
    img1.src= image[i];
    let img2 = document.createElement("img");
    img2.classList.add("back-face");
    img2.src= backFace;
    div.appendChild(img1);
    div.appendChild(img2);
    cardBox.appendChild(div);
}

let cardSelector=document.querySelectorAll('.card');    

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let noOfMoves=0, bestMoves=0;

function flipCard() {
    if(lockBoard) return;
    if(this==firstCard) return;

    this.classList.add("card-flip")

    
    if(hasFlippedCard==false) {
        hasFlippedCard=true;
        firstCard=this;
        return;
    }

    secondCard=this;
    lockBoard=true;
    noOfMoves++;
    document.getElementById("number").innerHTML=noOfMoves;

    matchingCards();
}

function matchingCards() {
    let isMatch = (firstCard.getElementsByTagName('img')[0].src)==(secondCard.getElementsByTagName('img')[0].src);
    isMatch ? blockCards() : unflipCards();
}

function blockCards() {
    let flag = 0;
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    firstCard.classList.add('blocked');
    secondCard.classList.add('blocked');
    resetBoard();
    cardSelector.forEach(card => {
        if(!(card.classList.contains("blocked"))) {
            flag = 1;
            return;
        }
    });
    setTimeout(() => {
        if(flag==0)
        end.style.transform='scale(1)';
    }, 800);
}
  
function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove('card-flip');
        secondCard.classList.remove('card-flip');
  
        resetBoard();
    }, 400);
}
  
function resetBoard() {
    hasFlippedCard = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
}
  

function set() {
    cardSelector.forEach(card => {
        let randomizer=Math.ceil(Math.random()*16);
        card.style.order = randomizer;
        card.addEventListener('click', flipCard);
    })
}
set();

function reset() {
    cardSelector.forEach(card => {
        let randomizer=Math.ceil(Math.random()*16);
        card.style.order = randomizer;
        card.addEventListener('click', flipCard);
        card.classList.remove("card-flip");
        resetBoard();
        noOfMoves=0;
        document.getElementById("number").innerHTML=noOfMoves;
    })
}