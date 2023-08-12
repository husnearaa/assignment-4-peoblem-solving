
function findAddress(obj) {
    if (typeof obj !== 'object') {
        return 'Provide a valid object.' ;
    }
    else {
        const result = (obj.street || "_") +","+(obj.house || "_")+","+(obj.society || "_");
  
        return result;
    }
  }
  
  
  // console.log(findAddress({street: 10 , house: "15A", society: "Earth Perfect"}));
  
  // console.log(findAddress({street: 10 , society: "Earth Perfect"}));
  
  // console.log(findAddress({street: 10}));
  





