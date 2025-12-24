// create a function that return true or false depending on whether string1 is greater than or less than string2

function str1ToStr2(str1, str2) {
    const len1 = str1.length;
    const len2 = str2.length;
    if (len1 > len2) {
        return true;
    }
    return false;
};

const str1 = "David Alex";
const str2 = "Warner";
// call the function by passing the strings as parameters
const isLargeOrSmall = str1ToStr2(str1, str2);
console.log(isLargeOrSmall); 