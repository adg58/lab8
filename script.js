//question 1
let age=18;
console.log(age);

let FirstName= "Ana";
let LastName="Gonzalez";
console.log(FirstName+ "" + LastName)

//question 2

let String = "Hello";
let Number = 10;
let Boolean = true;
let Undefined;

console.log(String);
console.log(Number);
console.log(Boolean);
console.log(Undefined);

//question 3
let rollnumber=15
if (rollnumber > 10){
console.log("the roll number is greter than 10")
}

//question 4
let isMember = true;

if (isMember) {
    console.log("Member discount applied.");
}

//question 5
let startValue = 50; 
let house; 

if (startValue > 0) {
    house = "The startValue is positive.";
} else if (startValue < 0) {
    house = "The startValue is negative.";
} else {
    house = "The startValue is zero.";
}
console.log(house);

//question 6
let a = 5;
let b = '5';


console.log("a == b:", a == b);  
console.log("a === b:", a === b); 
console.log("a != b:", a != b);   
console.log("a !== b:", a !== b); 
console.log("a > b:", a > b);  
console.log("a < b:", a < b);     
console.log("a >= b:", a >= b);   
console.log("a <= b:", a <= b);   


//question 7
let firstName = "ana";  
let lastName = "gonzalez";    
let number = 18;            

let message = "Hello, " + firstName + " " + lastName + ", you are " + number + " years old.";
console.log(message);



//question 8
let num = 50;

if (num > 0 && num < 100) {
    console.log("The number is within range.");
}

//question 9
let hasCar = true;
let hasLicense = true;
let hasInsurance = true;

if (hasCar && hasLicense && hasInsurance) {
    console.log("You can drive legally.");
} else {
    console.log("Check your driving eligibility.");}

//question 10
    let numbers = 21;

if (numbers % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

//question 11
let score = 85;

if (score >= 90) {
    console.log("Grade A.");
} else if (score >= 80 && score < 90) {
    console.log("Grade B.");
} else {
    console.log("Grade C.");
}