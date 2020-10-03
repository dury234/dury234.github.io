$("#one").click(() => {
    console.log("Yeah, you clicked me");
})

$("#two").click(() => {
    $("#one").text("Changed");
})

$("#three").click(() => {
    $("button").css("background-color","#584563");
})