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
    blue = getRandom(13, 1);
    red = getRandom(13, 1);
    green = getRandom(13, 1);
    $("#purp").attr("value", purp);
    $("#blue").attr("value", blue);
    $("#red").attr("value", red);
    $("#green").attr("value", green);
}

function assignValues () {
    var randomNumber = getRandom(121, 19);
    $("#randomNumber").text("Random Number: " + randomNumber);
    assignRupeeValues();
    console.log("Purp: " + purp, "Blue: " + blue, "Red: " + red, "Green: " + green);
}

function startGame() {
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
    $("#total").text("Total: " + count);
}
$("button").click(function () {
    count = Number(count) + Number($(this).val());
    $("#total").text("Total: " + count);
})

function evaluateTotal() {
    if (count > randomNumber) {
        losses = losses++;
        $("#losses").text("Losses: " + losses);
        randomNumber = getRandom(121, 19);
        assignRupeeValues();
        count = 0;
    }
    else if (count === randomNumber) {
        wins = wins++;
        $("#wins").text("Wins: " + wins)
    }
    else if (count < randomNumber) {
        console.log(count);
    }
}




startGame();
assignValues();
assignRupeeValues();
