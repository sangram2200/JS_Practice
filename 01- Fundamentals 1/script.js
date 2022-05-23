/*
let js = 'amazing';
console.log(48 + 8 + 23 - 10);

console.log('Jonas');
let firstName = "Matilda";

console.log(firstName);

//Variable Naming Conventions
let jonas_matilda = 'JM';
let $function = 27;

let person = 'jonas';
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';


let javaScriptIsFun = true;
console.log(javaScriptIsFun);

//console.log(typeof true);
console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javaScriptIsFun = 'YES!';
console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
//const job;

var job = 'programmer';
job = 'teacher';

lastName = "shinde";
console.log(lastName);

const now = 2037;
const ageJonas = now - 1991;
const ageSara = now - 2018;
console.log(ageJonas, ageSara);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

//2**3 means 2 to the power 3 = 2*2*2;

const firstName = 'Jonas';
const lastName = 'Shinde';
console.log(firstName + ' ' + lastName);

//assignment operators
let x = 10 + 5; //15
x += 10; // x=x+10=25;
x *= 4; //x=x*4=100
x++; //x=x+1=101;
x--;
x--;
console.log(x);

//comparion operator
console.log(ageJonas > ageSara);
console.log(ageSara >= 18);

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSara = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;//subtraction higher precedence than equal to , right to left for equal to

console.log(x, y);

const averageAge = (ageJonas + ageSara) / 2;
console.log(ageJonas, ageSara, averageAge);


//Coding Challenge-1

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / (markHeight ** 2);
const johnBMI = johnMass / (johnHeight ** 2);

console.log(markBMI, johnBMI);

const markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);


const firstName = 'Sangram';
const job = 'programmer';
const birthYear = '2000';
const currentYear = 2037;

const sangram = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' years old ' + job;

console.log(sangram);

const sangramNew = `I'm ${firstName}, a ${currentYear - birthYear} year old ${job}!`;
console.log(sangramNew);

console.log(`Just a regular string...`);

console.log('String with \nmultiple \nlines');

console.log(`String
multiple
lines`);


const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license 🚗');
} else {
    console.log(`Sarah can start driving after ${18 - age} years`);
}

const birthYear = 2001;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(`Person was born in ${century}th century`);


// Coding Challenge - 2

const markMass = 95;
const markHeight = 1.87;
const johnMass = 85;
const johnHeight = 1.72;

const markBMI = markMass / (markHeight ** 2);
const johnBMI = johnMass / (johnHeight ** 2);

console.log(markBMI, johnBMI);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
}


//conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

//coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' > '18');

let n = '1' + 1;
n = n - 1;
console.log(n);


console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log(`Don't spend it all ;)`);
} else {
    console.log(`You should get a job!`);
}

let height = 0;
if (height) {
    console.log("YAY! Height is defined");
} else {
    console.log("Height is undefined");
}


const age = '18';

if (age === 18) console.log(`You just became an adult :D (strict)`);

if (age == 18) console.log(`You just became an adult :D (loose)`);

const favourite = Number(prompt("What's your favourite number"));
console.log(favourite);
console.log(typeof (favourite));

if (favourite === 23) {
    console.log(`Cool! 23 is an amazing number`);
} else if (favourite === 7) {
    console.log(`7 is also a cool number`);
} else {
    console.log(`Number is not 23 or 7`);
}

if (favourite !== 23) {
    console.log(`Why not 23?`);
}


const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
    console.log(`Sarah is able to drive!`);
} else console.log(`Someone else should drive....`);

const isTired = true;
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasGoodVision && hasDriversLicense && !isTired) {
    console.log(`Sarah is able to drive!`);
} else console.log(`Someone else should drive....`);


// Coding Challenge 3

const scoreOneDolphins = 96;
const scoreTwoDophins = 108;
const scoreThreeDolphins = 89;

const scoreOneKoalas = 88;
const scoreTwoKoalas = 92;
const scoreThreeKoalas = 110;

const averageScoreDolphins = (scoreOneDolphins + scoreTwoDophins + scoreThreeDolphins) / 3;
const averageScoreKoalas = (scoreOneKoalas + scoreTwoKoalas + scoreThreeKoalas) / 3;

console.log(averageScoreDolphins, averageScoreKoalas);

if (averageScoreDolphins > averageScoreKoalas) {
    console.log(`Dolphins are the winners`);
} else if (averageScoreKoalas > averageScoreDolphins) {
    console.log(`Koalas are winners`);
} else {
    console.log(`Its a Draw`);
}

if (averageScoreDolphins >= 100 && averageScoreDolphins > averageScoreKoalas) {
    console.log(`Dolphins are the Winners!!`);
} else if (averageScoreKoalas >= 100 && averageScoreDolphins < averageScoreKoalas) {
    console.log(`Koalas are the Winners!!`);
} else if (averageScoreDolphins >= 100 && averageScoreKoalas >= 100 && averageScoreKoalas === averageScoreDolphins) {
    console.log(`Its a Draw ;)`);
} else {
    console.log(`No winner`);
}


const day = 'saturday';

switch (day) {
    case 'monday':
        console.log(`Plan course structure`);
        console.log(`Go to coding meetup`);
        break;
    case 'tuesday':
        console.log(`Theory course structure`);
        break;
    case 'wednesday':
        console.log(`write code examples`);
        break;
    case 'thursday':
    case 'friday':
        console.log(`Record Videos`);
        break;
    case 'saturday':
    case 'sunday':
        console.log(`Enjoy Weekend`);
        break;
    default:
        console.log(`Not a valid day`);

}


const age = 17;
age >= 18 ? console.log(`I like to drink wine`) : console.log(`I like to drink water`);

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

console.log(`I like to dring ${age >= 18 ? 'wine' : 'water'}`);


// conding challenge 4

const billValue = 275;

const tip = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;

console.log(`The bill was ${billValue},  the tip was ${tip}, and the total value ${billValue + tip} `);
*/

