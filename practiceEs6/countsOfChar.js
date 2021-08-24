const countsOfChar=(str)=>{
    const arrStr= str.split("");
    const newObj={};

    arrStr.forEach(element => {
        newObj[element] === undefined ? newObj[element]=1 : newObj[element]++;
        
    });
  
    return newObj;
};

console.log(countsOfChar("mine success depends on your success"));











// newObj["a"] = 7;