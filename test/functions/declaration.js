
// Function Declaration
function walk(){
   console.log('walk'); 
}

// Anonymous Function Expresion
const run = function() {
 console.log('run');
};
let move = run;
run();
move();