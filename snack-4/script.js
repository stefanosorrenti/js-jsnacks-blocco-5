const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

//USANDO MAP
const authorNames = posts.map(post => {
  //console.log(post.author);
  return post.author
  
})

console.log(authorNames);


//USANDO FOR EACH

const authorEach = []
posts.forEach(post => {
  authorEach.push(post.author)
});


console.log(authorEach);

// Crea un nuovo array coi nomi di tutti gli autori
// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']