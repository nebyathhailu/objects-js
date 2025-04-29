/*1.  Create a function constructor called Employee that accepts a name, position, and salary.
 Create an array of 5 employees. Write a program that increases the salary by 10% for employees 
 who have the position "developer" and print the updated employee list. */

function Employee(name, position, salary){
    this.name = name;
    this.position = position;
    this.salary = salary;
}

const employeeList = (arrayOfEmployees) => {
  let updatedSalary =  employees.map(employee => {
        let position = employee.position.toLowerCase();
        if (position == "developer"){
          return  {...employee, salary:employee.salary+0.1*employee.salary};
        }
        else{
            return {employee};
        }
    })
    return updatedSalary;
    }

let employees = [
        new Employee("Mark", "Developer", 20000), 
        new Employee("Jane", "HR", 15000), 
        new Employee("Alice", "PM", 30000),
        new Employee("john", "Developer", 25000), 
        new Employee("Sylvia", "Developer", 26000)];

console.log(employeeList(employees));


/*2. Given an array of product objects (each with name, price, and inStock properties),
 write a function that returns a new array containing only the products that are inStock: true,
  and sort the available products by price in ascending order. */

  function Products(name,price,inStockProperty){
    this.name = name;
    this.price = price;
    this.inStockProperty = inStockProperty;
  }

const productInStock = (arrayOfProducts) => {
    let availableProduct = arrayOfProducts.filter(product => product.inStockProperty == true);
    return availableProduct.sort((a,b) => a.price - b.price);
}

let furniture = [
        new Products("Table",500,true),
        new Products("Chair",300,false),
        new Products("Bed", 500, true),
        new Products("Shoe rack", 150,false),
        new Products("Wardrobe", 400, true)
]

console.log(productInStock(furniture));


/*3. Create an object called grades where the keys are student names and the values are arrays of their scores.
 Write a function that calculates and prints each student's average score, and
  if the average is above 70, print "Pass"; otherwise, print "Fail" next to their name.*/


function evaluateGrades(studentGrades) {
    for (let student in studentGrades) {
      let scores = grades[student];
      let studentAverage = scores.reduce((sum, score) => sum + score, 0) / scores.length;
      let grading = studentAverage > 70 ? "Pass" : "Fail";
      console.log(`${student}: Average = ${studentAverage.toFixed(2)} - ${grading}`);
    }
  }

const grades = {
    Mark:[47,46,78,59,98], Jane:[98,67,45,98], Alice:[54,67,98,97,50], John:[89,87,76,96], Tom:[48,56,54,67,87]
}

evaluateGrades(grades);


/*4. Write a function constructor called User that takes username, email, and isActive (boolean).
 Create an array of users. Write a program that loops through the array and deactivates 
 users who have not logged in recently (simulate this with a random isActive:
 false assignment) and print out the usernames of active users. */

 function User(username, email,isActive){
    this.username = username;
    this.email = email;
    this.isActive = isActive;
 }

function activeUsers(users){
    users.forEach(user => {
        if(user.isActive == true){
            console.log(user.username);
        }
    })
}

let users = [new User("Mark", "mark@gmail.com", true), 
            new User("Jane", "jane@gmail.com", false), 
            new User("Alice", "alice.gmail.com", true),
            new User("john", "john@gmail.com", true), 
            new User("Sylvia", "sylvia@gmail.com",false)
]

activeUsers(users);
/*5. You have an array of destination objects, each with name, distance (in km), and budgetRequired (in dollars). Write a function that accepts a maximum distance and a budget and returns all destinations the user can afford and reach within that distance. If none are found, return "No destinations available under your budget and distance */

function Destination(name, distance, budgetRequired){
    this.name = name;
    this.distance = distance;
    this.distance = budgetRequired;
}

  function findDestinations(maxDistance, maxBudget) {
    let available = destinations.filter(dest => dest.distance <= maxDistance && dest.budgetRequired <= maxBudget);
    if (available.length === 0) {
      return "No destinations available under your budget and distance.";
    } else {
      return available;
    }
  }

  let destinations = [ new Destination("Addis Ababa", 2000, 500),
                new Destination("Nairobi", 50,200),
                new Destination("Mekelle",2500,600 ),
                new Destination("Mombasa",450,700),
                new Destination("kigali",500,800)
  ];
  console.log(findDestinations(500, 300));



