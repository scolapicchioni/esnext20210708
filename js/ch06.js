// let colors = [ 'red', 'white', 'blue' ];
// // let color1 = colors[0];
// // let color2 = colors[1];
// // let color3 = colors[2];

// let [, , color3] = colors;


// let node = { type: 'Identifier', name: 'foo' };
// let { type, name } = node;

// let type = node.type;
// let name = node.name;


// let person = {
//     name: 'Mary',
//     sister: 'July'
//   };


// let {brother = "this person actually has no brother"} = person;

// let b = person.brother;

// let {brother : b = "my default value"} = person;

// let person = {
//     name: 'Mary',
//     family: {
//       mother: 'Martha',
//       sister: 'July'
//     }
//   };

// let s = person.family.sister;

// let {family : {sister : s}} = person;

// function setupPage(backgroundColor, foregroundColor, fontFamily, fontSize){


// }

// function setupPage(options){


// }

// function setupPage({backgroundColor = "white", foregroundColor = "black", fontFamily = "Arial", fontSize = 16} = {}){
//     console.log(backgroundColor);

// }

// //setupPage(undefined, undefined,undefined,16);

// setupPage({fontSize : 16, fontFamily : "Times New Roman"});


// function f1(){
//     return {
//         name : "Simona",
//         surname : "Colapicchioni"
//     }
// }

// var o = f1();
// surname = o.surname;

// let {surname} = f1();


let people = [
    { 
      name: 'Simona', 
      age : 46, 
      family: { mother: 'Antonietta', father: 'Maurizio', brother : 'Andrea' }
    },
    {
      name: 'Remko', 
      age: 36, 
      family: { mother: 'Diana', father: 'Harmen', sister: 'Sabine' }
    }
  ];

// let firstPerson = people[0];

// var n = "name";
// firstPerson[n] == firstPerson.name

// for(let propertyName in firstPerson){
//     var propertyValue = firstPerson[propertyName];
// }

// for(let index in people){
//     var item = people[index];
// }


for(let {name, family: {mother = "dead"}} of people){
    console.log(mother);
}







