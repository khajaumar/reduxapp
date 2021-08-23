const FindAllDuplicate=(arr)=>{
    const newArr=[];
    arr.forEach((element, index) => {
        arr.indexOf(element) !== index && newArr.push(element);
        
    });
    return newArr;
}

console.log(FindAllDuplicate([1,5,2,6,2,7, 9, 1,7,9, 70, 45, 2, 89]));