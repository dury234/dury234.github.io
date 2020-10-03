let printNumbersTill = (a) => {
    for (let i = 1; i <= a; i++) {
        console.log(i);
    }
}

let greet = (name) => {
    console.log("Hello " + name + "!");
}

let printout = (array) => {
    array.forEach((word) => {
        console.log(word);
    });
}

let names = ["John", "Ben", "Bill"];
        let trueorfalse = names[2].length > 5;
        names.push("Julia");
        names[0] = "Juraj";
        console.log(trueorfalse);
        console.log(names);

        let trueorfalse1 = names.length > 4;

        let object = {
        colors: ["Red", "Blue", "Black", "Yellow", "Pink"]
        };
         object.hasManyColors = object.colors.length > 3;

        console.log(object);

        for (let i = 2; i <= 20; i = i+2) {
            console.log(i);
        }
        
        let arr = ["hen", "hon", "hin"];

        printNumbersTill(50);
        greet("Juraj");
        printout(arr);


       