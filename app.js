var randomNo1 = Math.floor((Math.random()*6)+ 1);
var randomNo2 = Math.floor((Math.random()*6)+ 1);

var imageLink1= document.querySelector(".img1");
var imageLink2 = document.querySelector(".img2");
var headerText = document.querySelector("h1");


if (randomNo1 === 2) {
    imageLink1.setAttribute("src", "/image/dice2.png");
}
else if (randomNo1 === 3) {
    imageLink1.setAttribute("src", "/image/dice3.png");
}
else if (randomNo1 === 4) {
    imageLink1.setAttribute("src", "/image/dice4.png");
}
else if (randomNo1 === 5) {
    imageLink1.setAttribute("src", "/image/dice5.png");
}
else if (randomNo1 === 1) {
    imageLink1.setAttribute("src", "/image/dice1.png");
}
else {
    imageLink1.setAttribute("src", "/image/dice6.png");

}

if (randomNo2 === 2) {
    imageLink2.setAttribute("src", "/image/dice2.png");
}
else if (randomNo2 === 3) {
    imageLink2.setAttribute("src", "/image/dice3.png");
}
else if (randomNo2 === 4) {
    imageLink2.setAttribute("src", "/image/dice4.png");
}
else if (randomNo2 === 5) {
    imageLink2.setAttribute("src", "/image/dice5.png");
}
else if (randomNo2 === 1) {
    imageLink2.setAttribute("src", "/image/dice1.png");
}
else {
    imageLink2.setAttribute("src", "/image/dice6.png");

}

if (randomNo1 > randomNo2) {
    headerText.textContent = "Player 1 Wins";
}
else if (randomNo1 < randomNo2) {
    headerText.textContent = "Player 2 Wins";
}
else {
    headerText.textContent = "Draw";

}
