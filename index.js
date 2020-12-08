// Module Wrapper Function
// (function (exports, require, module, __filename, __dirname) {})

console.log(__dirname, __filename);

//console.log('Hello from Node.js...');

const Person = require('./person');
// import Person from './person'; // not implemented yet

const person1 = new Person('John Doe', 30);

person1.greeting();

//console.log(person);