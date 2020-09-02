let imgArray = ['img/aigle.png', 'img/canard.png', 'img/flammand.png', 'img/fly.png', 'img/penguin.png', 'img/singer.png',
                'img/aigle.png', 'img/canard.png', 'img/flammand.png', 'img/fly.png', 'img/penguin.png', 'img/singer.png'
];

//Empty cardArray
let cardArray = [];
// create twelve cards and images in cardArray
// function to show cards or images
function showCard() {
    for(let i = 0; i < imgArray.length; i++) {  
        let card = document.createElement("img");
        document.getElementById("cardDiv").appendChild(card);
        card.classList.add("col-3", "m-2");
        card.style.width = "15%";
        card.style.height = "15vh";
        card.src = imgArray[i];
        card.style.backgroundColor = "black";
        cardArray.push(card);
    }
}
showCard();
console.log(cardArray);

let pairCard = [];
function playTheGame() {
    for(let k = 0; k < cardArray.length; k++) {
        cardArray[k].addEventListener("click", function clique(){
            if(cardArray[k].style.backgroundColor === "black") {
                cardArray[k].style.backgroundColor = "transparent"; 
                pairCard.push(cardArray[k]);
                console.log(pairCard);     
                if(pairCard.length === 2) {
                    if(pairCard[0].src === pairCard[1].src) {
                        console.log(cardArray);
                        pairCard.splice(0,2);
                        console.log(pairCard);
                    }
                    else {
                        pairCard[0].style.backgroundColor = "black";
                        pairCard[1].style.backgroundColor = "black";
                        pairCard.splice(0,2);
                        console.log(pairCard);
                    }
                }
            }
            else if(cardArray[k].style.backgroundColor === "transparent") {
                cardArray[k].removeEventListener("click", clique);
            }
        });
    }
}
playTheGame();

let toto = [];
//random choice
function randomImg(tableau) {
    for( j = 0; j < tableau.length; j++) {
        let imgRandom = tableau[Math.floor(Math.random() * j)];
        console.log(imgRandom);
        toto.push(imgRandom);
        console.log(toto);
        tableau.splice(tableau.indexOf(imgRandom,0),1);   
     }   
}
randomImg(imgArray);