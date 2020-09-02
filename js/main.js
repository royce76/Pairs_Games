let imgArray = ['img/aigle.png', 'img/canard.png', 'img/flammand.png', 'img/fly.png', 'img/penguin.png', 'img/singer.png',
                'img/aigle.png', 'img/canard.png', 'img/flammand.png', 'img/fly.png', 'img/penguin.png', 'img/singer.png'
];

//Empty cardArray
let cardArray = [];
// create twelve cards and images in cardArray
// function to show cards or images
function showCard() {
    for(let i = 0; i < imgArray.length; i++) {  
        let card = document.createElement("button");
        document.getElementById("cardDiv").appendChild(card);
        card.style.type = "button";
        card.innerText = "cliquer";
        card.classList.add("btn", "btn-primary","col-3", "m-2");
        card.style.width = "15%";
        card.style.height = "20vh";
        /* card.style.backgroundImage = imgArray[i]; */
        cardArray.push(card);
    }
}
showCard();
console.log(cardArray);

for(let k = 0; k < cardArray.length; k++){
    cardArray[k].addEventListener("click", function(){
        let img = document.createElement("img");
        cardArray[k] = img;
        img.style.width = "15%";
        img.style.height = "20vh";
        img.classList.add("col-3", "m-2");
        img.src = imgArray[k];
        console.log(cardArray[k]);
    });
}