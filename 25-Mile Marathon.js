let array = [1, 9, 5, 8, 2];
let array1 = [9, 5, 8,1, 9, 5, 8, 2];
let somme = 0;

function marathonDistance(d) {
  //boucle qui permettra de parcourir le tableau tout en fesant la somme de c'est composant 
    for (let i = 0; i < d.length; i++) {
        somme += d[i];
    }
//condition qui verifie si le total du tableau est = 25 
    if (somme === 25) {
        return console.log(true);
    } 
        return console.log(false);
    
}

marathonDistance(array);
marathonDistance(array1);
