// const strarr=(x)=>{
//   return  x.split(" ").reverse().join(" ");
// }

// console.log(strarr("how are you"));

// ----------------------optimize----------------
const reverseStr=(str)=>{
    const arrStr= str.split(" ");
    const newArr= [];
    for(i= arrStr.length-1; i >=0; i-- ){
        newArr.push(arrStr[i])
    };
    return newArr.join(" ");
};

console.log(reverseSt("I am Fine "));


// --------------------without repeating------------

const arr1= ["hat", "rat", "mat"];
const arr1= ["bat", "fat", "mbat"];
const arr1= ["hat", "rat", "mat"];

const joinArr = [...arr1, ...arr2, ...arr3];

const 