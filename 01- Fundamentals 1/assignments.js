
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

