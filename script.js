// Define the Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Define the greet method
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Define the Employee class that extends Person
class Employee extends Person {
  constructor(name, age, jobTitle) {
    // Call the parent class's constructor
    super(name, age);
    this.jobTitle = jobTitle;
  }

  // Define the jobGreet method
  jobGreet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
  }
}

// Attach classes to the window for Cypress testing
window.Person = Person;
window.Employee = Employee;

// Test Case Example

// Create an instance of Person
const person = new Person("Alice", 25);
person.greet();  // Output: Hello, my name is Alice and I am 25 years old.

// Create an instance of Employee
const employee = new Employee("Bob", 30, "Manager");
employee.jobGreet();  // Output: Hello, my name is Bob, I am 30 years old, and my job title is Manager.
