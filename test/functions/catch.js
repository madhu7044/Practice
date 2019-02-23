
const person = {
   firstName: 'madhu',
   lastName: 'Kiran',
   set fullName(value) { 
     if (typeof value !== 'string') 
       throw new Error(' value is not a string.');

     const parts = value.split(' ');
     if (parts.length !== 2)
       throw new Error('Enter a first and last name.');


     this.firstName = parts[0];
     this.lastname = parts[1];
   } 
};

try {
    person.fullName = ' ';
}
catch (e){
    alert(e);
}

console.log(person);