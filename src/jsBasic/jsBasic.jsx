const person = {
  name: "Mosh",
  walk() {
    console.log(this);
  }
};

const walk = person.walk.bind(person); // change to  func

console.log(walk);

// 16

const address = {
  street: "",
  city: "",
  country: ""
};

// const street = address.street;
const country = address.country;
const { street } = address;
const { city: ct } = address;

//17

const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = [...first, ...second];
const combined2 = [...first, "a", ...second, "b"];
