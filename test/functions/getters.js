
const person = {
   firstName: 'Madhu',
   lastname: 'Kiran' ,
   fullName(){
      return '${person.firstName} ${person.lastName}';
   },

set fullName(value) {
   const parts = value.split(' ');
   this.firstName = parts[0];
   this.lastName = parts[1]; 
}

};

person.fullName = ' jaya Manikonda' ;


console.log(person);