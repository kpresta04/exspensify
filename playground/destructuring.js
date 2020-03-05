// const person = {
//   name: "Kellen",

//   age: 30,
//   location: {
//     city: "Kansas City",
//     temp: 62
//   }
// };

// const { name = "Anonymous", age } = person;

// const { city, temp: temperature } = person.location;
// // const name = person.name
// // const age = person.age
// console.log(`${name} is ${age}`);

// console.log(`It's ${temperature} in ${city}`);

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin"
//   }
// };

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName);

// const address = [
//   "1299 S Juniper Street",
//   "Philadelphia",
//   "Pennsylvania"
//   //   "19147"
// ];

// const [, city, state = "New York"] = address;

// console.log(`You are in ${city}, ${state}`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];

const [itemName, , medium] = item;

console.log(`A medium ${itemName} costs ${medium} `);
