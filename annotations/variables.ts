const apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects

let now: Date = new Date();


// array

const colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let myBools: boolean[] = [true, false, true];


// classes

class Car {

}

let car: Car = new Car();


// Object literal -- WITH SEMICOLON inbetween!

let point: { x: number; y: number } = {
  x: 10,
  y: 20
};


//  Functions (what is input and output?)
// takes a number i and returns nothing (void)

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}

//When to use type annotation?

// 1) Function that returns the 'any' type

const json = '{"x": 10, "y": 20}';

const coordinates: { x: number, y: number } = JSON.parse(json);
console.log(coordinates);

// 2) when we declare a variable on one line and init it later

let words = ['red', 'green'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}


// 3) variable whose type can't be inferred
// | here signifies 'or'

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number  = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}




