const carMaker: string[] = [];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

// Help with inference when extracting values
const car = carMaker[0];

// Prevent incompatible values
// carMaker.push(100);

// help with 'map'
carMaker.map((car: string): string => {
  return car;
});

// Flexible Types
const importantDates = [new Date(), '2030-10-10'];
