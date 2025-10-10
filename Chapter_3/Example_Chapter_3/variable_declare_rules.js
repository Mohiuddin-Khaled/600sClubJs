// Variables declare rules

// #1 Don't use javascript reserve keyword
// const false = 45; // incorrect
// const const = 45; // incorrect

// #2 Don't use space or gap in variable's name
// const is happy = false; // incorrect
const isHappy = true; // correct

// #3 Don't use quotation in variable's name
// const "address" = xyz; // incorrect

// #4 Don't use number in first character of a variable
// const 3money = 45; // incorrect
const money3 = 45; // correct
const men3ey = 45; // correct

// #5 variable name are case sensitive and different
const address = "xyz"; // correct
const Address = "abc"; // correct
const AddresS = "abc"; // correct

// #6 Large variable name using many different character or word
// way1: snake case (underscore)
// way2: camel case (lowerCase or UpperCase)
// const mycurrenthomeaddress = "kana goli"; // Not Recommended
const My_current_home_address = "kana goli"; // (snake case) try to avoid
const myCurrentHomeAddress = "kana goli"; // (camel case) Recommended

// #7 Don't use special character in variable except underscore _ or Dollar Sign $
// const my@name = "Hanks"; // incorrect
// const price#tag = 999; // incorrect;
const user$name = "Fahim"; // correct
const _secretCode = 123345; // correct