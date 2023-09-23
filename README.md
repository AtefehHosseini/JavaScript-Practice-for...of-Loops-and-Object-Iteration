# JavaScript-Practice-for...of-Loops-and-Object-Iteration

This repository contains JavaScript code for practicing the use of for...of loops and iterating over objects using Object.keys(), Object.values(), and Object.entries().

# Practice of for Loop
The code begins with a demonstration of a traditional for loop to iterate through an array of students' names and log each name to the console.

const students = ['Atefeh', 'David', 'Wendy'];

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

# Practice of for...of Loops
Next, the code showcases the use of for...of loops, which provide a more concise and readable way to iterate through arrays. The same array of students' names is used:

for (let student of students) {
    console.log(student);
}

# Practice of for...of with Objects
The code introduces the concept of using for...of loops with objects. It starts with an example object representing an employee:

const employee1 = {
    name: 'Ati',
    dept: 'Engineering',
    salary: 10000,
}
The code demonstrates various methods for iterating over the object's keys, values, and entries:

Object.keys(employee1): //Logs the keys of the object.
Object.values(employee1): //Logs the values of the object.
Object.entries(employee1): //Logs key-value pairs as arrays.

console.log(Object.keys(employee1));     // [ 'name', 'dept', 'salary' ]
console.log(Object.values(employee1));   // [ 'Ati', 'Engineering', 10000 ]
console.log(Object.entries(employee1)); // [ [ 'name', 'Ati' ], [ 'dept', 'Engineering' ], [ 'salary', 10000 ] ]

Finally, the code demonstrates how to loop over the information in an object to access each piece of information as a string:

for (let key of Object.keys(employee1)) {
    console.log(key + ' : ' + employee1[key]);
}
This loop logs the key-value pairs of the employee object to the console.
