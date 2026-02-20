const nums = [2, 8, 4, 7, 12, 87];




//USANDO FILTER


const evenNumbs = nums.filter(numb => {
    //console.log(numb);

    if(numb % 2 === 0) {
        return true
    }

    return false
    
})

console.log(evenNumbs);

//USANDO FOR EACH

const even = []

nums.forEach(numb => {
    if(numb % 2 === 0) {
        even.push(numb)
    }
    
})

console.log(even);



// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]