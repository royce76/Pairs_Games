document.getElementById("cardDiv").style.height = "75vh";

//main array of sources images 
let imgArray = ['img/aigle.png', 'img/canard.png', 'img/flammand.png', 'img/fly.png', 'img/penguin.png', 'img/singer.png',
                'img/aigle.png', 'img/canard.png', 'img/flammand.png', 'img/fly.png', 'img/penguin.png', 'img/singer.png'
];

let randomImgArray = [];
//random choice img
//we empty imgArray to create randomImgArray
function randomImg() {
    while(imgArray.length !== 0) {
        let imgRandom = imgArray[Math.floor(Math.random() * Math.floor(4))];
        //function callback in findIndex method
        const findImgIndex = (element) => element === imgRandom;
        let indexImg = imgArray.findIndex(findImgIndex);
        if(indexImg !== -1){
            randomImgArray.push(imgRandom);
            imgArray.splice(indexImg,1);
        }
    }   
}


//Empty cardArray
let cardArray = [];
// create twelve cards and images in cardArray
// function to display images
function showCard() {
    for(let i = 0; i < randomImgArray.length; i++) {  
        let card = document.createElement("img");
        document.getElementById("cardDiv").appendChild(card);
        card.classList.add("d-flex", "flex-column", "mx-auto", "my-2");
        card.style.width = "30%";
        card.style.height = "15vh";
        card.src = randomImgArray[i];
        card.style.backgroundColor = "black";
        cardArray.push(card);
    }
}


//function to play the game
//first you can only click backgroundColor = "black"
//then image appears
let pairCard = [];
function playTheGame() {
    for(let k = 0; k < cardArray.length; k++) {
        cardArray[k].classList.add("pointerEventsAuto");
        cardArray[k].addEventListener("click", function clique(){
            if(cardArray[k].style.backgroundColor === "black") {
                cardArray[k].style.backgroundColor = "transparent"; 
                pairCard.push(cardArray[k]);
                //after two clicks the pair of clicked images is compared in a table     
                if(pairCard.length <= 2) {
                    console.log(pairCard);
                    cardArray[k].classList.add("pointerEventsNone");
                    if(pairCard[0].src === pairCard[1].src) {
                        //we empty that pair Array
                        pairCard.splice(0,2);
                        cardArray[k].classList.add("pointerEventsAuto");
                    }
                    else {
                        setTimeout(function(){
                            pairCard[0].style.backgroundColor = "black";
                            pairCard[1].style.backgroundColor = "black";
                            pairCard.splice(0,2);
                            cardArray[k].classList.add("pointerEventsAuto");
                        },2000);
                    }
                }
            }
        });
    }
}

//we create a button and add a event click on
function startTheGame(){
    let button = document.createElement("button");
    document.getElementById("cardDiv").appendChild(button);
    button.classList.add("btn", "btn-primary", "col-10", "offset-1","my-auto");
    button.style.height = "20%";
    button.innerText = "Démarrer";
    button.addEventListener("click", function(){
        button.style.display = "none";
        randomImg();
        showCard();
        playTheGame();
    });
}

startTheGame();