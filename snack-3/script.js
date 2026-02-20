const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

//Usando il MAP
const numbersUp = numbers.map(numb => {
    numb++
    return numb
    
})

console.log(numbersUp);


//USANDO IL FOR EACH

const numbEach = []

numbers.forEach(numb => {
    numb++
    numbEach.push(numb)
});

console.log(numbEach);
