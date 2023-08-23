//class1

/* class Employee {
  constructor(id, firstName, lastName, salary) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
  }

  getId() {
    return this.id;
  }

  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }

  getSalary() {
    return this.salary;
  }

  setId(id) {
    this.id = id;
  }

  setFirstName(firstName) {
    this.firstName = firstName;
  }

  setLastName(lastName) {
    this.lastName = lastName;
  }

  setSalary(salary) {
    this.salary = salary;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  raiseSalary(percent) {
    this.salary += (this.salary * percent) / 100;
  }
}
let emp1 = new Employee("Muharram", "Azatbayeva", 567902568, 35642140);

emp1.setFirstName("Shahzoda");
emp1.setLastName("Ozodboyeva");
emp1.setId(42);
emp1.setSalary(21800);

emp1.fullName = "Shahzoda Ozodboyeva ";

console.log(emp1.getFirstName);
console.log(emp1.getLastName);
console.log(emp1.getId);
console.log(emp1.getSalary);
console.log(emp1.fullName);
console.log(emp1.annualSalary);
console.log(emp1.raiseSalary(20));*/

//class5
/*class Shape {
  constructor(color, filled) {
    this.color = color;
    this.filled = filled;
  }

  getColor() {
    return this.color;
  }

  setColor(color) {
    this.color = color;
  }

  isFilled() {
    return this.filled;
  }

  setFilled(filled) {
    this.filled = filled;
  }
}

class Circle extends Shape {
  constructor(color, filled, radius) {
    super(color, filled);
    this.radius = radius;
  }

  getRadius() {
    return this.radius;
  }

  setRadius(radius) {
    this.radius = radius;
  }
}

const circle = new Circle("red", true, 5);
console.log(circle.getColor());
console.log(circle.isFilled());
console.log(circle.getRadius());

circle.setColor("blue");
circle.setFilled(false);
circle.setRadius(10);

console.log(circle.getColor());
console.log(circle.isFilled());
console.log(circle.getRadius());*/

//class10
/*class Person {
  constructor(housePrice, housesNumber, carPrice, carsNumber, bankAccount) {
    this.housePrice = housePrice;
    this.housesNumber = housesNumber;
    this.carPrice = carPrice;
    this.carsNumber = carsNumber;
    this.bankAccount = bankAccount;
  }

  get getWealth() {
    return (
      this.housePrice * this.housesNumber +
      this.carPrice * this.carsNumber +
      this.bankAccount
    );
  }
}

let p1 = new Person(5678, 2, 2500, 1, 53000);

// console.log(p1.getWealth);

class RichPerson extends Person {
  constructor(
    housePrice,
    housesNumber,
    carPrice,
    carsNumber,
    bankAccount,
    companyPrice,
    companiesNumber,
    investment
  ) {
    super(housePrice, housesNumber, carPrice, carsNumber, bankAccount);
    this.companyPrice = companyPrice;
    this.companiesNumber = companiesNumber;
    this.investment = investment;
  }

  get getWealth () {
    return this.getWealth + this.companyPrice * this.companiesNumber + this.investment;
  }
}


let r1 = new Person(5678, 2, 2500, 1, 53000, 100000, 3, 34000);

console.log(r1.getWealth);
*/

//class9
/*
class Array {
  constructor(...elements) {
    this.elements = elements;
  }

  static isNumberArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== "number") {
        throw new Error("Elements of the array must be numbers");
      }
    }
  }

  static sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }

  static max(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }

  static min(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }
}

const numbers = new Array(1, 2, 3, 4, 5);
Array.isNumberArray(numbers.elements);

const mixedArray = new Array(1, "2", 3, 4, 5);
Array.isNumberArray(mixedArray.elements);

console.log(Array.sum(numbers.elements));
console.log(Array.max(numbers.elements));
console.log(Array.min(numbers.elements));*/
