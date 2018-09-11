var wins = 0;
var losses = 0;
var purp = 0;
var green = 0;
var blue = 0;
var red = 0;
var count = 0;

function getRandom(max, min) {
    return [Math.floor(Math.random() * (max - min) + min)];
}

function assignRupeeValues() {
    purp = getRandom(13, 1);
    console.log(purp);
    green = getRandom(13, 1);
    console.log(green);
    red = getRandom(13, 1);
    console.log(red);
    blue = getRandom(13, 1);
    console.log(blue);
}

function assignValueAttr () {
    $("#purp").attr("value", purp);
}

function startGame() {
    var randomNumber = getRandom(120, 19);
    $("#randomNumber").text("Random Number: " + randomNumber);
    assignRupeeValues();
    console.log(purp, red, green, blue);
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
    assignValueAttr();

    
    
}


startGame();


