// create a template string that display the mean and properties of an object

const student = {
    name: "David",
    age: 26,
    marks: [13, 23, 45]
};

let sum = 0;
for (const num of student.marks) {
    sum += num;
}
mean = sum / student.marks.length;

console.log(`Name: ${student.name}, Age: ${student.age}, Average Marks: ${mean}`);
