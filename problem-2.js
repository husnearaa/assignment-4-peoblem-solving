

function matchFinder(string1, string2) {
    if (typeof string1 !== "string" || typeof string2 !== "string") {
        return "Input is invalid";
    }
    else {
        result = string1.includes(string2);
    }
    return result;
}

const string1 = "JavaScript";
const string2 = 8;

const results = matchFinder(string1, string2);
console.log(results);





