var wins = 0;
var losses = 0;
var purp = 0;
var green = 0;
var blue = 0;
var red = 0;
var payment = 0;
var itemPrice = 0;
var currentPrice = 0;

function resetGame() {
    assignValues();
    payment = 0;
    $("#total").text("Payment: " + payment + " rupees");
}

function getRandom(max, min) {
    return [Math.floor(Math.random() * (max - min) + min)];
}

function assignValues() {
    purp = getRandom(13, 1);
    blue = getRandom(13, 1);
    red = getRandom(13, 1);
    green = getRandom(13, 1);
    itemPrice = getRandom(121, 19);
    $("#purp").attr("value", purp);
    $("#blue").attr("value", blue);
    $("#red").attr("value", red);
    $("#green").attr("value", green);
    $("#itemPrice").text("Price: " + itemPrice + " rupees");
    console.log("Purp: " + purp, "Blue: " + blue, "Red: " + red, "Green: " + green);
}

function startGame() {
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
    $("#total").text("Payment: " + payment + " rupees");
}
$("button").click(function () {
    payment = Number(payment) + Number($(this).val());
    currentPrice = parseInt(itemPrice);
    $("#total").text("Payment: " + payment + " rupees");
    evaluateTotal();
})

function evaluateTotal() {
        if ((payment > currentPrice)) {
            losses++;
            console.log(losses);
            $("#losses").text("Losses: " + losses);
            $("#total").text("Payment: " + payment + " rupees");
            resetGame();
        }
        else if ((payment === currentPrice)) {
            wins++;
            $("#wins").text("Wins: " + wins);
            resetGame();
    }
    else {
        $("#total").text("Payment: " + payment + " rupees");
    }
}

startGame();
resetGame();
