const percentage=(x)=>{
    let sum = 0;
    for(i=0; i<x.length; i++ ) {
        sum=sum+x[i];
    }
    return (sum/(x.length));
}
console.log(percentage([47,43,50,75,80,65]));
console.log(percentage([95,90,87,94,87,86,80]));
console.log(percentage([78,89,35,68,99,95,97,98,69]));

const arr=(num)=>(num.reduce((a , b) => a + b)) / num.length;

console.log(arr([47,43,50,75,80,65]));
