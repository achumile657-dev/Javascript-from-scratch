let firstName = "Achumile";
let age = 12;
console.log(firstName);
console.log(age);
// using the let keyword,a variable can be reassigned multiple times.
let year = 2026;
console.log(year);
year = 2025;
console.log(year);
// using the const keyword,a variable cannot be reassigned after being initialized
const pi = 3.14;
console.log(pi);

// pi = 10 would result in a error

//Numbers or Maths operation
console.log(20 + 20);
console.log((20 + 560)/100);
console.log(20 + 30 + 50 + 40 + 90);

let a = 10;
console.log(a);

a = 20;
console.log(a);

console.log(a + 10);

const max = 57;
const actual = max - 13;
const percentage =  actual / max;
console.log(percentage);

//Functions basics

function favoriteAnimal(animal){
    return animal + " is my favorite animal";
}

const message = favoriteAnimal("Tiger");
console.log(message);