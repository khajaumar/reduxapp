const additionArry=(arr1, arr2)=>
    arr1.map((element, index) => element + arr2[index] !== undefined ? arr2[index] : 0 );

console.log(additionArry([24, 75, 12, 14, 1] , [35, 24, 13, 2, 25]));

 // arr2.forEach((item, index2) => {
        //  arr1.index1==arr2.index2 &&  newArr.push( element + item);
            
      