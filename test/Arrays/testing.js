
const numbers = [ 1, -1, 2, 3];

//every()
//some()

const atLeastOnePositive = numbers.every(function(value){
    return value >= 0;
});

console.log(atLeastOnePositive);