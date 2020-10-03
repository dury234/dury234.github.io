let names = ["Juraj", "Jakub", "Jozef", "Dominik"];

names.forEach(name => {
    if (name == "Juraj") {
        $("ul").append("<li><b>" + name);
    } else {
        $("ul").append("<li>" + name);
    }  
});

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };

$("body").append("<h1>" + additionalBlock.title);

$("body").append("<p>" + additionalBlock.text);