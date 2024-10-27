function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old`);
};

function Employee(name, age, jobTitle) {
  Person.call(this, name, age); // Inherit properties from Person
  this.jobTitle = jobTitle;
}

// Inherit the Person prototype
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}`);
};

// Example Test Case
const person = new Person("Alice", 25);
person.greet(); // Output: Hello, my name is Alice, I am 25 years old

const employee = new Employee("Bob", 30, "Manager");
employee.jobGreet(); // Output: Hello, my name is Bob, I am 30 years old, and my job title is Manager

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
