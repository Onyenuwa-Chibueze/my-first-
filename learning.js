'use strict';

const person=[
  {
    firstName: "chibueze",
    middleName: "Emmanuel",
    surname: "Onyenuwa",
    age: 27
  }
        ]
console.log(typeof person)

//Arithmethic operators
const now =2037;
const ageEmmanuel = now - 1991
const ageChibueze = now - 2018
console.log(ageEmmanuel, ageChibueze)

//Assignment Operator
let x = 10 +29;  //x at this point is 29
x+= 10; //at this point what we were asked to do is this x = x + 10 = 49
x+= 10; // here the value of x has chnaged and it is now 49+10 = 59
x*= 2; // you get 59*2 which wil give you 118 that is x = x multiply by 2
x/=5; // it is x=x divides by 5 which is 118 divides by 5 and you get 23.6
x**=2; // over here is you saying x raised to the power of 2 that is 23.6 *23.6 which will give you 556.96
x++; //this is saying x=x+1 that is 556.96 + 1 
x--; // the reverse is the case here
console.log(x)

let year; //this is an undefined data 
console.log( typeof year) // this is how to know the kind of data the value is 

//comparison Operator : it is used to give boolean data it is either true or false we have <, >, =, >=, <=
console.log( 20>21)
console.log(ageChibueze >= 19)

//Challenge
// const marksWeight = 78;
// const marksHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;

// const BMIMark = marksWeight / ( marksHeight * marksHeight)
// const BMIJohn = johnWeight / (johnHeight * johnHeight)
// const markHigherBMI = BMIMark > BMIJohn;

// console.log( BMIMark,BMIJohn,markHigherBMI);

//writing multiple string in one line like a sentence using `` t is called backtick
const firstName = 'Emmanuel';
const myAge = 27 ;
const job =  'Programmer';
const company = 'kodex';

const Emmanuel = `i'm ${firstName} a ${myAge} years old ${job} working at ${company}`

console.log(Emmanuel)

const multiple= `string
with multiple
lines learning`

console.log(multiple) 

//taking decision with code using the if and else control structure it is called a control because it gives us control on how we want our code to be like so the name 

const danAge = 15;

if (danAge >= 18) { 
console.log( 'Dan can have a driving license 🚗')
} else{
  const yearsLeft = 18- danAge;
  console.log(`Dan is too young. Wait another ${yearsLeft} years`)
}

const birthYear = 1998;
let century;
if ( birthYear <= 2000) {
  century = 20;
} else{
  century = 21;
}

console.log(century)

const marksWeight = 78;
const marksHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

const BMIMark = marksWeight / ( marksHeight * marksHeight)
const BMIJohn = johnWeight / (johnHeight * johnHeight)
const markHigherBMI = BMIMark > BMIJohn;
console.log( BMIMark,BMIJohn,markHigherBMI);


if(BMIMark > BMIJohn){
  console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}`)
} else{
  console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}`)
}

// type convertion and coercion . Type convertion enables us to change string to number and vice versa. But in type coercion js automatically convert it for us 

const inputYear = '1991';
console.log(Number (inputYear));
console.log(Number (inputYear) + 18)

//in type coercion the moment you use an operator it automatically just convert it example 

console.log('23' - 20 - '1') // if you notice here we use string and number bu then js would covert everything to numvber and do the calculation 

let n = '1' + 1;// over here the answer is the string 11 
n = n - 1;
console.log(n)
console.log( 'i am' + ' a ' + 23 + ' years old boy ')


// const favourite= prompt("what is your favourite number");
// console.log(favourite)


//Equality operators 
// === is strict equality operator, == is called loose equality operator 



//Logical Oprator 
// we have the AND operator which is &&, we also have the OR operator which is ||, and lastly we have the NOT operator which is ! and all this operator has their ddifferent function  

const hasDriverLicense = true; //A
const hasGoodVision = false; //B
const isTired = true;  //C

console.log (hasDriverLicense && hasGoodVision);
console.log (hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);


if(hasDriverLicense && !hasGoodVision && isTired){
  console.log("Someone else should drive...");
} else{
  console.log("sarah is able to drive");
}

//Conditional operator: can be used to do what the If and Else statement can do put it simple it is a simpler way to write the If and Else statement

const age = 18;
age >= 18? console.log("i like to drink wine 🍷"):
console.log("i like to drink water 💧")

// a better way to write this 

const drink = age>= 18? "wine 🍷" : "water 💧";
console.log(drink)

//this onditional operator is not a replacement for the If and Else it is just needed when we want to take a quick decision and then if we have a large chunk of code to make decision for we still need the If and Else statement to come in 

// use of strict mode it help us not to make errors and also helps us to work smoother you use it by doing this in the beginning of your code 'use strict';

//FUNCTION : Function is something we can use as many time as possible anytime we want while coding 
 function logger() {
  console.log('My name is chibueze')
 }
 
 logger(); // this here is calling/running/invoking the Function


function Amad(firstName, middleName, lastName) {
console.log("Hello everyne nice to meet ya'll my name is" + " " + firstName + " "  +  middleName + " " + lastName)
}

Amad("Chibueze", "Emmanuel", "Onyenuwa");