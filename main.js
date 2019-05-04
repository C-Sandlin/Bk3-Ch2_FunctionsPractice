// Lightning Exercise 1: Write a factory function that creates an object that represents a doctor. The function should accept three arguments.

// Doctor's name
// Specialty (Oncologist, pediatrician, etc...)
// Address of practice

const doctorVisit = (name, specialty, address) => {
  return {
    name: name,
    specialty: specialty,
    address: address
  };
};

console.log(doctorVisit("Frank", "Gastroenterology", "401 Bowling Avenue"));

// Lightning Exercise 2: Write a factory function that creates an object that represents a pet. The function should accept two arguments.

// Pet name
// Pet breed
// Invoke the factory function 3 times and place each animal in an array stored in a variable named BowWowKennels

const BowWowKennels = [];

const pet = (name, breed) => {
  return {
    name: name,
    breed: breed
  };
};

console.log(pet("Rusty", "Golden Retriever"));
console.log(pet("Messi", "Australian Shepherd"));
console.log(pet("Daisy", "Black Lab"));

function addToArray(name, breed) {
  BowWowKennels.push(pet(name, breed));
}

addToArray("Rusty", "Golden Retriever");
addToArray("Messi", "Australian Shepherd");
addToArray("Daisy", "Black Lab");
console.table(BowWowKennels);

// Practice: Music Row
// Your job is to sign each of these promising young music stars to the appropriate label.

// JumpStop Records works with Funk and Rap artists.
// Chatten Records works with Country and Bluegrass artists.
// Polar Records works with Pop artists.
// Create an array for each of these record labels.

// Create a factory function for each possible genre (e.g. createBluegrassArtist()). Then invoke the appropriate function for each of the following artists and place the resulting object in the corresponding label array.

// Bruce Atikins is a Country artist and is 23 years old
// Jensen Brown is a Pop artist and is 20 years old
// Dre Funkz is a Funk artist and is 25 years old
// Dusta Grimes is a Rap artist and is 21 years old
// Bartholomew Danielson is a Bluegrass artist and is 23 years old
// Avilee Dallas is a Country artist and is 19 years old
// Austin Kinkaid is a Pop artist and is 22 years old
// Loyoncé Branis is a Rap artist and is 27 years old

const JumpStopRecords = [];
const ChattenRecords = [];
const PolarRecords = [];
const dudes = [];

const createBluegrassArtist = (artistName, artistAge) => {
  return {
    name: artistName,
    age: artistAge,
    genre: "Bluegrass"
  };
};

const createFunkArtist = (artistName, artistAge) => {
  return {
    name: artistName,
    age: artistAge,
    genre: "Funk"
  };
};

const createRapArtist = (artistName, artistAge) => {
  return {
    name: artistName,
    age: artistAge,
    genre: "Rap"
  };
};

const createCountryArtist = (artistName, artistAge) => {
  return {
    name: artistName,
    age: artistAge,
    genre: "Country"
  };
};

const createPopArtist = (artistName, artistAge) => {
  return {
    name: artistName,
    age: artistAge,
    genre: "Pop"
  };
};

let newArtist = createCountryArtist("Bruce Atikins", 23);
let newArtist2 = createPopArtist("Jensen Brown", 20);

function makeThis(input) {
  if (input.genre === "Rap" || "Funk") {
    JumpStopRecords.push(input);
    console.table(JumpStopRecords);
  }

  if (input.genre === "Pop") {
    PolarRecords.push(input);
    console.table(PolarRecords);
  }
}

makeThis(newArtist);
makeThis(newArtist2);
