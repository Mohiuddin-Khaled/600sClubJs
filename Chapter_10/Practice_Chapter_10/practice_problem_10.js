// create a function that return the grade based on the marks obtained by a student

function gradeSystem(marks) {
    if (marks >= 80 && marks <= 100) { // marks above 80
        return 'A';
    }
    else if (marks >= 70 && marks <= 79) { // 70 to 79 marks
        return 'B';
    }
    else if (marks >= 60 && marks <= 69) { // 60 to 69 marks
        return 'C';
    }
    else if (marks >= 50 && marks <= 59) { // 50 to 59 marks
        return 'D';
    }
    else if (marks >= 0 && marks < 50) { // 0 to 49 marks
        return 'F';
    }
};
// call the function by passing marks as a parameter
const grade = gradeSystem(44);
console.log("grade: " + grade);
