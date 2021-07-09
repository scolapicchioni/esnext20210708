
// //console.log(somethingthatdoesnotexists);

// var somethingthatdoesnotexists = 4;

//console.log(somethingthatdoesnotexists);

// f1();


// function f1(){
//     for(let i = 0; i < 5; i++)
//     {
//         console.log(i);
//     }
//     console.log(i);
// }

//console.log(somethingthatdoesnotexists);

// somethingthatdoesnotexists = 4;

// console.log(somethingthatdoesnotexists);

// var o1 = new Object();
// o1.somethingcompletelydifferent = "oh hi!";
// o1.nae = "oh hi!";

//name = "somenti";

// const o1 = new Object();

// o1.something = "oh hi";

// o1 = {};

// let a = 5;
// console.log(a);

// a = "rrr";
// console.log(a);


//var a;

// var a = 5;

// var a = 10;

//let a;


// function externalFunction(externalParameter) {
//     var x = 5;
//     console.log("external function");

//     function internalFunction(internalParameter)
//     {
//         console.log("internal function");
//         return externalParameter + internalParameter;
//     }
//     return internalFunction;
// }

// var f = externalFunction(10);

// console.dir(f);

// console.log(f(5));

for(let i = 1; i <= 5; i++){
    var btn = document.getElementById("btn"+i);
    btn.addEventListener("click", function(){
        console.log("You clicked on btn"+i);
    })
}
