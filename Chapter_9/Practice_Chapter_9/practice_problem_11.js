// create age calculation function
const prompt = require("prompt-sync")();

function ageCalculator(birthDate) {
    const date = birthDate.split("-");
    const Year = Number(date[0]);
    const Month = Number(date[1]);
    const Day = Number(date[2]);

    const today = new Date();
    const birthDay = new Date(Year, Month - 1, Day); // month index start form 0 to 11

    let ageYear = today.getFullYear() - birthDay.getFullYear();
    let ageMonth = today.getMonth() - birthDay.getMonth();
    let ageDay = today.getDate() - birthDay.getDate();

    if (ageDay < 0) {
        const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        ageDay += previousMonth.getDate();
        ageMonth--;
    }

    if (ageMonth < 0) {
        ageMonth += 12;
        ageYear--;
    }

    console.log(`Age: ${ageYear} years ${ageMonth} months ${ageDay} days`);
};

// get input from user
const birthDate = prompt("Enter date of birth(YYYY-MM-DD): ");

// call the function
ageCalculator(birthDate);