const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

//USANDO IL CICLO EACH
//RETTIFICO
//Dato che il codice ci sta su una riga posso usare l'arrow function contratta
// Uso la versione contratta quindi: 
// Inserisco =>, posso evitare di mettere le tondo 
// perchè abbiamo solo un parametro e dato che ci sta in un riga 
// posso evitare di scrivere le graffe.
const peopleName = []


people.forEach(person => peopleName.push(person.name));
console.log(peopleName);



//USANDO IL MAP
const nameMap = people.map(person => {
  return person.name
  
})

console.log(nameMap);

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'