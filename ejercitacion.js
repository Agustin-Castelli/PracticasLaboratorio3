// // LAB 3 - PRACTICA 1:

// // Ejercicio 1:

// let personArray = [
//     { name: "John", age: 21, city: "New York" },
//     { name: "Mike", age: 28, city: "Moscow" },
//     { name: "Danny", age: 30, city: "London" },
//     { name: "Lisa", age: 26, city: "Paris" },
//     { name: "Sophie", age: 19, city: "Berlin" },
//     ];

// const nameArray = personArray.map((person) => person.name);

// const nameAndCityArray = personArray.map((person) => (
//     {
//         name: person.name,
//         city: person.city
//     });

// console.log(nameArray);
// console.log(nameAndCityArray);

// // Ejercicio 2:

// const ageFilter = personArray.filter((person) => person.age < 29 && person.age > 20);

// console.log(ageFilter);

// //Ejercicio 3:

// countriesArray = [
//     { name: "Argentina", population: 458100000},
//     { name: "Peru", population: 308100000},
//     { name: "Brasil", population: 1458100000},
//     { name: "Paraguay", population: 138100000},
//     { name: "Bolivia", population: 208100000},
//     { name: "Uruguay", population: 58100000},
//     { name: "Venezuela", population: 388100000}
// ]

// // const funcion = ((a, b) => a - b);  ----> LOGICA PARA METODO .SORT (a - b ordena de menor a mayor, y b - a de mayor a menor).


// const sortByPopulation = countriesArray.sort((country1, country2) => country2.population - country1.population);

// console.log(sortByPopulation);

// //Ejercicio 4:

// function buscarMaximo(arr) {
//     return Math.max(...arr);
// }

// candleArray = [5,2,3,5,1,3,6,4,2,6,2,6]

// const buscarMaxNum = buscarMaximo(candleArray);
// const filterMaxNum = candleArray.filter(num => num == buscarMaxNum);
// console.log(filterMaxNum);
// let number = filterMaxNum.length;
// console.log(number);


// // Ejercicio 5:

// const students = [-1, 0, -0.5, 234, 28, 12, -5, -2, 0];

// const minStudents = 5;

// const studentsOnTime = students.filter((student) => student <= 0);

// console.log(studentsOnTime);

// let numStudents = studentsOnTime.length;

// console.log(numStudents);

// if (numStudents >= minStudents){
//     console.log('NO');
// }
// else{
//     console.log('YES');
// }


// //Ejercicio 7:

// const person = {
//     name: 'Lucas',
//     age: 24,
//     favouriteColour: 'Green'
// };

// const objToArr = (obj) => {
//     return Object.entries(obj);
// }

// console.log(objToArr(person));