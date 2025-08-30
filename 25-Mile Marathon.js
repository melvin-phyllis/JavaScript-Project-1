let tableau = [1, 9, 5, 8, 2];
let somme = 0;

function marathonDistance(d) {
    for (let i = 0; i < d.length; i++) {
        somme += d[i];
    }

    if (somme == 25) {
        return true;
    } else {
        return false;
    }
}

console.log(marathonDistance(tableau));
