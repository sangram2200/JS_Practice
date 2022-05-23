'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;

if (hasDriversLicense) console.log(`I can drive :D`);

//const interface = `Audio`;
//const private = 534;


function logger() {
    console.log(`My name is Sangram`);
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges!!`;

    return juice;
}

const appleJuice = fruitProcessor(5, 0);

console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


// function declaration
const age1 = calcAge1(2000);

function calcAge1(birthYear) {
    return 2037 - birthYear;
}

//console.log(age1);

//Function Expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

console.log(calcAge2);
const age2 = calcAge2(2000);

console.log(age1, age2);




//Function Expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}


//Arrow Function

const calAge3 = birthYear => 2037 - birthYear;
console.log(calAge3(1991));

const yearsUntilRetirment = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirment(1991, 'Jonas'));
console.log(yearsUntilRetirment(1911, 'Bob'));


function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {

    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    // console.log(apples, oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange!!`;

    return juice;
}

console.log(fruitProcessor(2, 3));



const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirment = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }
    else
        return `Already retired!!`

}

console.log(yearsUntilRetirment(1991, 'Jonas'));



//Coding Challenge #1

const firstScoreDolphins = 85;
const secondScoreDolphins = 54;
const thirdScoreDolphins = 41;

const firstScoreKoalas = 23;
const secondScoreKoalas = 34;
const thirdScoreKoalas = 27;

const calcAverage = (valueOne, valueTwo, valueThree) => (valueOne + valueTwo + valueThree) / 3;

const avgDolphins = calcAverage(firstScoreDolphins, secondScoreDolphins, thirdScoreDolphins);

const avgKoalas = calcAverage(firstScoreKoalas, secondScoreKoalas, thirdScoreKoalas);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas} 🎉`);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win ${avgKoalas} vs ${avgDolphins} 🎉`);
    } else {
        console.log(`No teams wins );`);
    }
}
console.log(avgDolphins, avgKoalas);
checkWinner(avgDolphins, avgKoalas);




const friend1 = 'Michael';
const friend2 = 'Bob';
const friend3 = 'Peter';

const friends = ['Michael', 'Bob', 'Peter'];

console.log(friends)

const years = new Array(1991, 1984, 2008, 2020);

console.log(years);

console.log(friends[0], friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Sangram';
const sangram = [firstName, 'Shinde', 2037 - 2000, 'Student', friends];

console.log(sangram);


//Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

console.log(calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1]));

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

console.log(ages);


const friends = ['Michael', 'Bob', 'Peter'];

//add
friends.push('Jay');
console.log(friends);
console.log(friends.push('test'));

friends.unshift('John');
console.log(friends);

//remove

friends.pop();
friends.pop();
console.log(friends.pop());
console.log(friends);

friends.shift()
console.log(friends)

friends.push(23);

console.log(friends.indexOf('Bob'));
console.log(friends.indexOf('Steven'));

console.log(friends.includes('Bob'));
console.log(friends.includes('Steven'));
console.log(friends.includes(23));

if (friends.includes('Bob')) {
    console.log("Present");
}



//Coding Challenge-2

function calcTip(bill) {

    if (bill >= 50 && bill <= 300) {
        return (bill * 0.15);
    } else {
        return (bill * 0.20);
    }

}

console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(totals);


const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Micheal', 'Peter', 'Steven']
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';

console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// let interestedIn = prompt('What do you want know about Jonas? Choose between firstName, lastName, age, job, friends');


// if (jonas[interestedIn]) {
    //     console.log(jonas[interestedIn]);
    // } else {
        //     interestedIn = prompt(`Wrong request! Choose between firstName, lastName, age, job, friends`);
        //     console.log(jonas[interestedIn]);
        // }

        jonas.location = 'Portugal';
        jonas['twitter'] = '@jonasschmedtman';

        console.log(jonas);

        //challenge

        console.log(`${jonas.firstName} has ${jonas['friends'].length} friends, and his best friend is called ${jonas.friends[0]}`);


const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Micheal', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        // console.log(this);
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
    }
};

// console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);

//challenge
console.log(jonas.getSummary());



//challenge-3

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
}

console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is ${(john.BMI > mark.calcBMI()) ? 'higher than' : 'less than'} ${mark.fullName}'s (${mark.BMI})!`);


for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}



const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Micheal', 'Peter', 'Steven'],
    true
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {

    //reading jonas array
    console.log(jonasArray[i]);

    //filling types array
    // types[i] = typeof jonasArray[i];

    types.push(typeof jonasArray[i]);
}

console.log(types);


const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);



//continue and break

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Micheal', 'Peter', 'Steven'],
    true
];

console.log(`--- ONLY STRINGS ---`);
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') continue;

    console.log(jonasArray[i], typeof jonasArray[i]);

}

console.log(`--- BREAK WITH NUMBER ---`);
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === 'number') break;

    console.log(jonasArray[i], typeof jonasArray[i]);

}




const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Micheal', 'Peter', 'Steven'],
    true
];

// loop backwards

// for (let i = jonasArray.length - 1; i >= 0; i--) {
//     console.log(i, jonasArray[i]);
// }

//loops in loop

for (let exercise = 1; exercise <= 3; exercise++) {

    console.log(`-------- Starting Exercise ${exercise} ----------`);

    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Exercise ${exercise}: Lifting weights repetition ${rep} 🏋️‍♀️`);
    }
}



//while loop

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}




console.log(`-------with while loop-------`)
let rep = 1;
while (rep <= 10) {
    //console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
    rep++;
}

let rolledDice = Math.trunc(Math.random() * 6) + 1;
//console.log(rolledDice);

while (rolledDice != 6) {
    console.log(`You rolled a ${rolledDice}`);
    rolledDice = Math.trunc(Math.random() * 6) + 1;
    if (rolledDice === 6) console.log(`Loop is about to end....`);
}
*/


//challenge 4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(bill) {

    if (bill >= 50 && bill <= 300) {
        return (bill * 0.15);
    } else {
        return (bill * 0.20);
    }

}

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));

    totals.push(bills[i] + tips[i])
}

console.log(bills, tips, totals);


function calcAverage(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    return (sum / arr.length);
}

console.log(`Average of Totals is ` + calcAverage(totals));
