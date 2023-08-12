function cubeNumber(number) {
    if (typeof number == "string") {
        return "Invalid input";
    }
    else{
        number = number*number*number;
    }
   
    return number;
    
}

const value = 3;
const cube = cubeNumber(value);  
console.log(cube);

