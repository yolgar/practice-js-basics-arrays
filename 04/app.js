// solution 1
const years = [1980, 1934, 2002, 2019];

const currYear = (new Date()).getFullYear();
const differenceTable = years.map(x => currYear - x);
console.log(differenceTable);

//solution 2
// const years = [1980, 1934, 2002, 2019];

// const currYear = (new Date()).getFullYear();
// const differenceTable = years.map(function(item){
// return currYear - item;
// });
// console.log(differenceTable);