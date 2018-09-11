var wins = 0;
var losses = 0;
var purp = 0;
var green = 0;
var blue = 0;
var red = 0;
var score = 0;

function getRandom(max, min) {
    return [Math.floor(Math.random() * (max - min) + min)];
}

function assignRupeeValues() {
    purp = getRandom(12, 1);
    console.log(purp);
    green = getRandom(12, 1);
    console.log(green);
    red = getRandom(12, 1);
    console.log(red);
    blue = getRandom(12, 1);
    console.log(blue);
}

function startGame() {
    var randomNumber = getRandom(120, 19);
    console.log(randomNumber);
    assignRupeeValues();
    $("purp").attr("value", purp);
}

$("button").on("click", adder());


function adder() {
    
}

startGame();


