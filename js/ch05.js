// function InitPerson(id, name, surname, age ){
//     let suffix = "name";


//     const o1 = {
//         id,
//         name,
//         surname,
//         age,
//         sayHi(){
    
//         },
//         anotherMethod(){
    
//         },
//         anotherProperty : "",
//         ["first" + suffix] : "Simona",
//         ["last" + suffix] : "Colapicchioni",
//     }
//     return o1;
// }

// var a = NaN;
// var b = NaN;

// if(a===NaN){

// }

function Person(name){
    this.name = name;
}
Person.prototype.say = function(){}

let p1 = new Person();

function Employee(name){
    Person.call(this,name);

}

Employee.prototype = Object.create(Person.prototype);

Employee.prototype.work = function(){

}
var e1 = new Employee();



let o1 = {

}

o1.__prototype__ = Object.create(Person.prototype);



