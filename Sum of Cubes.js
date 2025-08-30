
let tableau=[2, 7, 4, 9, 6, 1, 6, 3]

function sumOfCubes(nums){
    let sommes = 0
    for(let item of nums){
          sommes  += item**3     
    }
    return sommes
    
}

console.log(sumOfCubes(tableau))