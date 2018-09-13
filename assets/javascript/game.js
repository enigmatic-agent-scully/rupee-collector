var wins = 0;
var losses = 0;
var purp = 0;
var green = 0;
var blue = 0;
var red = 0;
var payment = 0;
var itemPrice = 0;

function resetGame {
    
}

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
    console.log("Purp: " + purp, "Blue: " + blue, "Red: " + red, "Green: " + green);
}

function assignValues() {
    itemPrice = getRandom(121, 19);
    $("#itemPrice").text("Price: " + itemPrice + " rupees");

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
    console.log(itemPrice);
    evaluateTotal();
})

function evaluateTotal() {
    var currentPrice = parseInt(itemPrice);
    if ((payment >= currentPrice)) {
        if ((payment > currentPrice)) {
            losses++;
            console.log(losses);
            $("#losses").text("Losses: " + losses);
            $("#total").text("Payment: " + payment + " rupees");
        }
        else if ((payment === currentPrice)) {
            wins++;
            $("#wins").text("Wins: " + wins);
            itemPrice = getRandom(121, 19);
            assignRupeeValues();
            payment = 0;
            $("#total").text("Payment: " + payment + " rupees");
        }
    }
    else  {
        $("#total").text("Payment: " + payment + " rupees");
    }
    }

    startGame();
    assignValues();
    assignRupeeValues();
