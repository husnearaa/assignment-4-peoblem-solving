function sortMaker(arr) {
    if (!Array.isArray(arr)) {
        return 'incorrect input';
    }
    else if (arr.length !== 2 || typeof arr[0] !== "number" || typeof arr[1] !== "number") {
        return 'please insert exact value'
    } else if (arr[0] < 0 || arr[1] < 0) {
        return "invalid Input"
    } else {
        if (arr[0] === arr[1]) {
            return 'equal';
        }
        else if(arr[0]>arr[1]){
            return arr=[arr[0],arr[1]]
        }
        else{
            return arr=[arr[1],arr[0]];
        }
    }
}
  
console.log(sortMaker([12,12]));



