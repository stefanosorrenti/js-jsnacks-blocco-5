const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

// log
console.log(students[0].class);



//USANDO IL CICLO EACH
let lanciClass = ''
students.forEach(student => {

  lanciClass = students[0].class

});


console.log(lanciClass);


//USANDO FIND
const classeLanci = students.find(function(student){
  
  if(student.id === 1) {
    return console.log(student.class);
    
  }
  
  return false
})


//USANDO IL FIND

/* const classLanci = students.find(student => {

  if(student.id === 1) {

    return student.class
  }

  return false
  

})

console.log(classLanci.class);
 */


