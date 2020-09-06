//target div of card
let cardDiv = document.getElementById("cardDiv");

//target paragraph score
let scoreText = document.getElementById('score');
let timeText = document.getElementById('timer');

//create button start
let button = document.createElement("button");
cardDiv.appendChild(button);
button.classList.add("btn", "btn-primary", "col-10", "offset-1", "marginRestart");
button.style.height = "20vh";
button.innerText = "Play";
button.style.fontSize = "4em";

//create button restart
let restart = document.createElement("button");
document.getElementById('divUnderMain').appendChild(restart);
restart.classList.add("btn", "btn-success", "col-8", "offset-2", "marginRestart");
restart.style.height = "20vh";
restart.style.fontSize = "4em";
restart.innerText = "Restart";
restart.style.display = "none";


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
        cardDiv.appendChild(card);
        card.classList.add("my-2","offset-1", "col-3","col-md-2", "col-lg-1");
        card.style.width = "30%";
        card.style.height = "15vh";
        card.src = randomImgArray[i];
        card.style.backgroundColor = "black";
        cardArray.push(card);
    }
}

//function to compare two cards in an array
let pairCard = [];
function compare() {
    //after two clicks the pair of clicked images is compared in an array     
    if(pairCard.length === 2) {
        if(pairCard[0].src === pairCard[1].src) {
             //we empty that pair Array
             pairCard.splice(0,2);
        }
        else {
             setTimeout(function() {
                 pairCard[0].style.backgroundColor = "black";
                 pairCard[1].style.backgroundColor = "black";
                 pairCard.splice(0,2);
            },1000);
        }
    }
}

//function to play the game
//first you can only click backgroundColor = "black"
//then image appears
function playTheGame() {
    for(let cardSelect of cardArray) {
        cardSelect.addEventListener("click", function clique() {
            computeClick();
            //to not let user click after two cards appeared
            if(pairCard.length < 2 && cardSelect.style.backgroundColor === "black") {
                cardSelect.style.transitionProperty = "backgroundColor";
                cardSelect.style.transition = "all 0.5s";
                cardSelect.style.backgroundColor = "transparent";
                pairCard.push(cardSelect);
                compare();
            }
        });
    }
}

//function stop click on cards
function stopClickCards () {
    for(cards of cardArray) {
        cards.addEventListener("click", function(data){
            data.preventDefault();
            data.stopPropagation();
        },true);
    }
}

//function time in interval 
let timer = 60;
function timeGame() {
    let interval = setInterval(function(){
        win();
        timer --;
        console.log(timer);
        timeText.innerText = `Left time = ${timer} secondes`
        if(timer === 0) {
            clearInterval(interval);
            stopClickCards;
            timeText.style.display = "none";
            restartGame();
            scoreText.innerText = "YOU LOOSE";
        }
        else if(timer !==0 && k === true ) {
            clearInterval(interval);
            stopClickCards();
            restartGame();
            scoreText.innerText = "YOU WIN";
            timeText.style.display = "none";       
        }
    }, 1000);    
}

//function count click
let score = 30;
function computeClick () {
    win();
    score --;
    scoreText.innerText = `Left click = ${score}`
    if(score === 0) {
        // to stop timegame()
        timer = undefined;
        stopClickCards();
        scoreText.innerText = "YOU LOOSE";
        timeText.style.display = "none";
        restartGame();
    }
    else if(score !==0 && k === true ) {
        timer = undefined;
        stopClickCards();
        scoreText.innerText = "YOU WIN";
        timeText.style.display = "none";
        restartGame();
    }
}

//function to help when user wins ( i did not find working method)
let k = false;
function win() {    
    if( cardArray[0].style.backgroundColor === "transparent" &&
        cardArray[1].style.backgroundColor == "transparent" &&
        cardArray[2].style.backgroundColor === "transparent" &&
        cardArray[3].style.backgroundColor === "transparent" &&
        cardArray[4].style.backgroundColor === "transparent" &&
        cardArray[5].style.backgroundColor === "transparent" &&
        cardArray[6].style.backgroundColor === "transparent" &&
        cardArray[7].style.backgroundColor === "transparent" &&
        cardArray[8].style.backgroundColor === "transparent" &&
        cardArray[9].style.backgroundColor === "transparent"  &&
        cardArray[10].style.backgroundColor === "transparent" &&
        cardArray[11].style.backgroundColor === "transparent" 
    ) {
        return k = true;
    }   
}

//Cancel the double click with preventDefault.
document.addEventListener( 'dblclick', function(event) {   
    event.preventDefault();  
    event.stopPropagation();
  },true //capturing phase!!
);

//we use the button start
function startTheGame() {
    scoreText.innerText = "WELCOME";
    button.addEventListener("click", function() {
        button.style.display = "none";
        randomImg();
        showCard();
        playTheGame();
        timeGame();
        scoreText.innerText = `Left click = ${score}`;
        timeText.innerText = `Left time = ${timer} secondes`;
    });
}

startTheGame();

//at the end of the game we delete cards and create a new button to refresh page.
function restartGame() {
    restart.style.display = "block";
    cardDiv.style.display = "none";
    restart.addEventListener("click", function() {
        location.reload();
    });
    butnRules.classList.add("disabled");
}

//reinventing the wheel a little less well
//btn rules works like an alert
let butnRules = document.getElementById('rules');
cardDiv.style.position = "relative";
cardDiv.style.zIndex = "3000";

butnRules.addEventListener("click", function showRules(){
    let rules = document.createElement('p');
    cardDiv.appendChild(rules);
    rules.classList.add("translateRules")
    rules.style.position = "absolute";
    rules.style.zIndex = "3001";
    rules.style.backgroundColor = "#7FDBFF";
    rules.innerText = "- Quand le joueur clique sur une carte celle-ci se retourne.\n- Quand le joueur clique sur une deuxième carte si elle est identique à la précédente les deux cartes restent faces visibles autrement les cartes sont à nouveau masquées.\n- Quand toutes les paires sont trouvées et donc que toutes les cartes sont face visible le jeu est terminé.\n- Attention je ne permet pas les doubles clics.";
    let okayBtn = document.createElement('button');
    cardDiv.appendChild(okayBtn);
    okayBtn.classList.add("translateOkay")
    okayBtn.style.position = "absolute";
    okayBtn.innerText = "OK";
    okayBtn.style.zIndex = "3001";
    okayBtn.classList.add("btn-success");
    okayBtn.addEventListener("click",function okay(){
        rules.style.display = "none";
        okayBtn.style.display = "none";
    });
});