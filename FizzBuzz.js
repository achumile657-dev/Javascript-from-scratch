/*FizzBuzz challenge, let the user input a number of their choice, 
if the number is divisible by 3, print "Fizz", if the number is divisible by 5, print "Buzz", 
if the number is divisible by both 3 and 5, print "FizzBuzz",
 if the number is not divisible by either 3 or 5, print the number itself.*/ 

 let number = parseInt(prompt("Enter a number:"));

 for(let i = 1; i <= number; i++) {
 if(i % 3 == 0){
    console.log("Fizz");
 }
else if( i % 5 == 0){
    console.log("Buzz");
}
else if(i % 3 == 0 && i % 5 == 0){
    console.log("FizzBuzz");
}
else{
    console.log(i);
}
}