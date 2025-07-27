/**
 * Basic variables and types:
 */

let name: string;
let age: number | string; //union is for making age to hold number or string
let isStudent: boolean;
let hobbies: string[]; //array of string.
let rolls: [number, string, boolean]; //tuple
let anyVariable: any; //any is for stornig any type Not recommended. .
let unknownVariable: unknown; //recommended instead of any, and use when we don't know type its gonna hold.

// type object:
// type Person = {
//   name: string;
//   age?: number; //making age optional.
// };
//type: and how to extend types and what are issue comes with type?
type X = {
  a: string;
  b: number;
};

//extending X
type Y = X & {
  c: string;
  d: number;
};

let y: Y = {
  a: "abd",
  b: 32,
  c: "effs",
  d: 42,
  //if we don't define variable of X type then it will give error.
};

// let person: Person = {
//   name: "Ankush",
//   age: 25,
// };

// let lotsOfPeople: Person[];

//####### Interface

interface Person {
  name: string;
  age?: number;
}
interface Guy extends Person {
  profession: string;
}

//interface can extends type and type can extend interface.

interface Person extends X {
  name: string;
  age?: number;
}

type Z = Person & {
  ab: string;
  ba: number;
};

//functions:
//void vs never: in ts void returns undefined, but never doesn't return anything.

// let printAllPeople = Function;
//or:
let printName: (name: string) => number;

// const printName = (name: string) => {
//   console.log(name);
// };
