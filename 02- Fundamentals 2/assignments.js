'use strict';
/*
//assignment1-Values & Variables
let country = 'India';
let continent = 'Asia';
let population = 1350;
// console.log(country);
// console.log(continent);
// console.log(population);


//assignment2-Data Types
let isIsland = false;
let language;
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);


//assignment3- let, const and var
language = 'hindi';
// const isIsland = false;
// const country = 'India';


//assignment4- basic operators
//console.log(population / 2);
population++;
//console.log(population);
const finlandPopulation = 6;
//console.log(population > finlandPopulation);
//console.log(population < 33);
// const description =
//     country +
//     ' is in ' +
//     continent +
//     ', and its ' +
//     population +
//     ' million people speak ' +
//     language;

//assignment5- template literals
const description = `${country} is in ${continent}, and its ${population} million people speak ${language} `;
//console.log(description);
//population = 13;
// if (population > 33) {
//     console.log(`${country}'s population is above average`)
// } else {
//     console.log(`${country}'s population is ${33 - population} below average`);
// }

//assignment6- easy

//assignment7 - equality operators
// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

// if (numNeighbours == 1) {
//     console.log(`Only one border!`);
// } else if (numNeighbours > 1) {
//     console.log(`More than one border`);
// } else {
//     console.log(`No Borders!`);
// }

// if (numNeighbours === 1) {
//     console.log(`Only one border!`);
// } else if (numNeighbours > 1) {
//     console.log(`More than one border`);
// } else {
//     console.log(`No Borders!`);
// }


//assignment 8- logical operators
// if (language === 'English' && population < 50 && !isIsland) {
//     console.log(`You should live in ${country}`);
// } else {
//     console.log(`${country} does not meet your criteria :(`);
// }


//assignment 9 - switch

// switch (language) {
//     case 'chinese':
//         console.log(`'MOST number of native speakers!`);
//         break;
//     case 'spanish':
//         console.log(`2nd place in number of native speakers
//         `);
//         break;
//     case 'english':
//         console.log(`3rd place`);
//         break;
//     case 'hindi':
//         console.log(`4th place!!!`);
//         break;
//     default:
//         console.log(`Great language too :D`);
// }

const str = population > 33 ? `${country}'s population is above average` : `${country} population is below average`;
// console.log(str);
*/

function describeountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const inputOne = describeountry('India', 1320, 'Delhi');
const inputTwo = describeountry('Finland', 6, 'Helsinki');

// console.log(inputOne);
// console.log(inputTwo);

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}
const percentageIndia1 = percentageOfWorld1(1320);
const percentageChina1 = percentageOfWorld1(1441);

//console.log(percentageIndia1, percentageChina1);

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

//console.log(percentageOfWorld2(1320), percentageOfWorld2(1441));

const percentageOfWorld3 = population => (population / 7900) * 100;

// console.log(percentageOfWorld2(1320), percentageOfWorld3(1320));

function describePopulation(country, population) {
    return `${country} has ${population} million people which is about ${percentageOfWorld3(population)} of the world`;
}

// console.log(describePopulation('India', 1320))
// console.log(describePopulation('China', 1441))
// console.log(describePopulation('USA', 320))

const populations = [1320, 1441, 320, 12];

// console.log(populations.length == 4);

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];

// console.log(percentages);

const neighbours = ['Pakistan', 'China', 'Nepal', 'Bhutan', 'Afganistan'];

// console.log(neighbours);

neighbours.push('Utopia');
// console.log(neighbours);

neighbours.pop();
// console.log(neighbours);

if (!neighbours.includes('Germany')) {
    // console.log(`Probably not a central European country :D`);
}

neighbours[neighbours.indexOf('China')] = 'Chainai';

// console.log(neighbours);

const myCountry = {
    country: 'India',
    capital: 'Delhi',
    language: 'Hindi',
    population: 1320,
    neighbours: ['Pakistan', 'China', 'Nepal', 'Bhutan', 'Afganistan'],

    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
    },

    checkIsland: function () {
        this.isIsland = (this.neighbours.length === 0) ? true : false;
        return this.isIsland;
    }
}

//console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population += 2;

//console.log(myCountry.population);

myCountry['population'] -= 2;

//console.log(myCountry.population);

// myCountry.describe();
myCountry.checkIsland();

// console.log(myCountry.isIsland);

// for (let vote = 1; vote <= 50; vote++) {
//     console.log(`Voter number ${vote} is currently voting`);

//     if (vote === 50) {
//         console.log(`Voting is over 🎉`)
//     }
// }




const percentages2 = [];

// for (let i = 0; i < populations.length; i++) {
//     percentages2[i] = percentageOfWorld1(populations[i]);
// }

// console.log(percentages2);
// console.log(percentages);

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

// for (let i = 0; i < listOfNeighbours.length; i++) {
//     console.log(`Neighbours of ${i}th country`)
//     for (let j = 0; j < listOfNeighbours[i].length; j++) {
//         console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
//     }
// }

let i = 0;
while (i < populations.length) {
    percentages2[i] = percentageOfWorld1(populations[i]);
    i++;
}

// console.log(percentages2);