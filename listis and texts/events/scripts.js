$("#one").click(() => {
    console.log("Yeah, you clicked me");
})

$("#two").click(() => {
    $("#one").text("Changed");
})
let test = 0;
$("#three").click(() => {
    if (test == 0) {
        let col = document.getElementById("color").value;
        $("button").css("background-color", col);
        
    } else {
        $("body").append("<p> You have already clicked the button " + test + " times!");
    }
    test++;
})