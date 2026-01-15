// create a template string that displays the value from an object's properties

const employee = {
    name: "David",
    age: 21,
    salary: 45000
};

const info = `Name: ${employee.name}, Age: ${employee.age}, Salary: ${employee.salary}`;
console.log(info); 