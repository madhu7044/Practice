

const numbers = [1, -1, 2, 3];

const items = numbers
.filter(n => n >= 0)
.map(n => ({ value: n}))
.map(obj => obj.value)



console.log(items);