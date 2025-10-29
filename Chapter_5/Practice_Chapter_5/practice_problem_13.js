// Permission to take the exam depends on students' attendance

const attendancePercentage = 85;
const isSubmitHomework = true;

if (attendancePercentage > 80 && isSubmitHomework) {
    console.log("Permission to take the exam is granted!");
}
else {
    console.log("Eliminated from taking the exam!");
}
