let image=["https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/face-with-tears-of-joy_1f602.png", "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/smiling-face-with-heart-eyes_1f60d.png", "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/exploding-head_1f92f.png", "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/partying-face_1f973.png", "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/pouting-face_1f621.png", "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/smiling-face-with-horns_1f608.png", "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/loudly-crying-face_1f62d.png", "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/pile-of-poo_1f4a9.png"];
let backFace = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/209/cross-mark_274c.png";
image=[...image, ...image];

let cardContainer=document.querySelector('.card-container');

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
let noOfMoves, bestMoves;

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

    matchingCards();
}

function matchingCards() {
    let isMatch = (firstCard.getElementsByTagName('img')[0].src)==(secondCard.getElementsByTagName('img')[0].src);
    isMatch ? blockCards() : unflipCards();
}

function blockCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
  
    resetBoard();
}
  
function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove('card-flip');
        secondCard.classList.remove('card-flip');
  
        resetBoard();
    }, 500);
}
  
function resetBoard() {
    hasFlippedCard = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
}
  

cardSelector.forEach(card => {
    let randomizer=Math.ceil(Math.random()*16);
    card.style.order = randomizer;
    card.addEventListener('click', flipCard);
})