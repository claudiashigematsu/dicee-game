//Player 1
var randomNumber1 = Math.ceil(Math.random() * 6);

var dice1 = document.querySelector(".img1");
dice1.src = "images/dice"+ randomNumber1 + ".png";

//Player 2
var randomNumber2 = Math.ceil(Math.random() * 6);

var dice2 = document.querySelector(".img2");
dice2.src = "images/dice"+ randomNumber2 + ".png";

//Heading
var heading = document.querySelector("h1");

if(randomNumber1 > randomNumber2){
    heading.innerHTML = "Player 1 Wins!"
} else if(randomNumber1 < randomNumber2){
    heading.innerHTML = "Player 2 Wins!"
} else {
    heading.innerHTML = "Draw!"
}