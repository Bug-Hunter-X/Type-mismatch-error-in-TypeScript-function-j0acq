function greeter(person: string): string {
  return "Hello, " + person;
}

let user = "Jane Doe";
console.log(greeter(user)); // Works!

//Alternative solution:
function greeterArray(persons: string[]): string {
  return "Hello, " + persons.join(' ');
}

let userArray = ["Jane", "Doe"];
console.log(greeterArray(userArray)); // Works!