const FindSortedUnique = (objArr)=>{
    let mergedArr = [];
    objArr.data.forEach(element => {
        mergedArr= [...mergedArr, ...element];
        
    });
    const uniqArr =[...new Set(mergedArr)].sort((a,b)=> a-b);
    return uniqArr;
}

console.log(FindSortedUnique({
    data:[
        [24, 75, 12, 14, 1],
        [35, 24, 13, 2],
        [7, 1, 75, 24, 15, 7],
    ]
}))