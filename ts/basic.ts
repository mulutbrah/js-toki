// explicit
const firstName: string = "Peter";
const age: number = 27;

// implicit
const firstNameImplicit = "Peter";
const ageImplicit = 27;

// literal
const firstNameLiteral: "Peter" = "Peter";
const ageLiteral: 27 = 27;

// union
const firstNameUnion: "Peter" | "Peter2" = "Peter";
const ageUnion: 27 | 28 = 27;

// union <- to give a label to the type
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const role: Role = Role.ADMIN;

// tuple
const person: [string, number] = ["Peter", 27];

// function
const add = (a: number, b: number): number => {
  return a + b;
};

// void
const log = (message: string): void => {
  console.log(message);
};

// never
const throwError = (message: string): never => {
  throw new Error(message);
};

// generic
const echo = <T>(data: T): T => {
  return data;
};

// type alias <- use alias for certain type (union, tuple, enum)
type Point = {
  x: number;
  y: number;
};

const point: Point = {
  x: 10,
  y: 20,
};

const xPoint: { x: number } = {
  x: 10,
};

// interface <- type data when needed objects data type or class blueprint
interface IMarvelHeroes {
  name: string;
  age: number;
  relationship?: string;
  log: () => void;
  superpower: {
    name: string;
  }[];
}

const spiderman: IMarvelHeroes = {
  name: "Spiderman",
  age: 27,
  relationship: "best friend",
  log: () => {
    console.log("this is your friendly neighborhood spiderman!");
  },
  superpower: [{ name: "super strength" }, { name: "webbing" }],
};

const ironman: IMarvelHeroes = {
  name: "Iron-man",
  age: 45,
  log: () => {
    console.log("I love you 3000");
  },
  superpower: [{ name: "laser" }, { name: "rich" }],
};

// alias
