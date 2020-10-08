let data = [{
    photo: "./images/coffee-171653_1920.jpg",
    title: "Coffee",
    description: "What a nice photo!"
},

{
    photo: "./images/coffee-983955_1920.jpg",
    title: "Coffee 2",
    description: "What a nice photo 2!"
},

{
    photo: "./images/coffee-1291656_1920.jpg",
    title: "Coffee 3",
    description: "What a nice photo 3!"
},

{
    photo: "./images/coffee-5567269_1920.jpg",
    title: "Coffee 4",
    description: "What a nice photo 4!"
},

{
    photo: "./images/morning-819362_1920.jpg",
    title: "Coffee 5",
    description: "What a nice photo 5!"
},

{
    photo: "./images/technology-792180_1920.jpg",
    title: "Coffee 6",
    description: "What a nice photo 6!"
}];

let currentPhoto = 0;

let loadPhoto = (photoNumber) => {
    $("#photo").attr("src", data[photoNumber].photo);
    $("#photo-title").text(data[photoNumber].title);
    $("#photo-description").text(data[photoNumber].description);
    $("[data-number]").attr("border", "none");
    $(`*[data-number="${currentPhoto}"]`).attr("border", "2px solid black");
}



$(".forward").click(() => {
    if (currentPhoto == data.length -1) {
        currentPhoto = 0;
    } else {
        currentPhoto++;
    }
    
    loadPhoto(currentPhoto);
});

$(".back").click(() => {
    if (currentPhoto == 0) {
        currentPhoto = data.length -1;
    } else {
        currentPhoto--;
    }
    
    loadPhoto(currentPhoto);
});

data.forEach((element, index) => {

    $(".thumbnail").append(`<div class="img"><img src="${element.photo}" width="100%" data-number="${index}"><div class="hover" data-number="${index}">${element.title}</div></div>`);
});

$(".img, .hover").click((event) => {
    let indexclicked = $(event.target).attr("data-number");
    let numberIndex = parseInt(indexclicked);
    currentPhoto = numberIndex;
    loadPhoto(numberIndex);
    
})

loadPhoto(currentPhoto);
