var wins = 0;
var losses = 0;
var purp = 0;
var green = 0;
var blue = 0;
var red = 0;
var payment = 0;
var count = [];

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
    $("#green").attr("value", green);console.log("Purp: " + purp, "Blue: " + blue, "Red: " + red, "Green: " + green);
}

function assignValues () {
    var randomNumber = getRandom(121, 19);
    $("#randomNumber").text("Price: " + randomNumber + " rupees");
    
}

function startGame() {
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
    $("#total").text("Payment: " + payment + " rupees");
}
$("button").click(function () {
    payment = Number(payment) + Number($(this).val());
    $("#total").text("Payment: " + payment + " rupees");
    console.log(payment);
    evaluateTotal();
})

function evaluateTotal() {
    if (payment > randomNumber) {
        losses = losses++;
        $("#losses").text("Losses: " + losses);
        randomNumber = getRandom(121, 19);
        assignRupeeValues();
        payment = 0;
        $("#total").text("Payment: " + payment + " rupees");
    }
    else if (payment === randomNumber) {
        wins = wins++;
        $("#wins").text("Wins: " + wins)
    }
    else if (payment < randomNumber) {
        console.log(payment);
    }
}




startGame();
assignValues();
assignRupeeValues();
