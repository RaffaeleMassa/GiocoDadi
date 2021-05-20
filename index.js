var randomNumber1 = Math.floor(Math.random() * 6)+ 1;
var randomDiceImm = "dice" + randomNumber1 + ".png";
var randomSourceImm = "images/" + randomDiceImm ;
var imm = document.querySelectorAll("img")[0];
imm.setAttribute("src", randomSourceImm);

var randomNumber2= Math.floor(Math.random() * 6) +1;
var randomSourceImm2 =  "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomSourceImm2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 WINS";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = " Player 2 WINS";
} else {
    document.querySelector("h1").innerHTML = "DRAW"
}
