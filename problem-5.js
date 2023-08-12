function canPay(changeArray, totalDue) {

  if (changeArray.length === 0) {
      return "insert valid value";
  }
  else {
      let totalChangeArray = 0;
      for (var i = 0; i < changeArray.length; i++) {
          totalChangeArray += changeArray[i];
      }
      if (totalChangeArray >= totalDue) {
          return true;
      }
      else{
          return false; 
      }
  }
}
 
var changeArray = [0, 4, 5];
var totalDue = 10;
var result = canPay(changeArray, totalDue);
console.log(result);



