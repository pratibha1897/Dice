function myFunction() {
var randomDice1 = Math.floor(Math.random()*6)+1;
var randomDiceImage1 = "images/dice" + randomDice1 + ".png"

var randomDice2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2 = "images/dice" + randomDice2 + ".png"

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if(randomDice1>randomDice2){
    document.querySelector("h1").innerHTML="🏆Player 1 Wins!";
}
else if(randomDice2>randomDice1){
    document.querySelector("h1").innerHTML="Player 2 Wins!🏆";
}

else {
    document.querySelector("h1").innerHTML="📍It's a Tie!📍";
}
}