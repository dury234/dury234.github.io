let color = "purple";
let number = 10;
let word = "cool";

if (color == "purple") {
    $(".first").css("background-color","purple");
}

if (number > 100) {
    $(".second").text("whoah, that's a big number");
} else {
    $(".second").text("just a regular number, please.");
}

if (word == "cool") {
    $(".third").text("Power of DOM");
} else {
    $(".fourth").text("Power od DOM");
}