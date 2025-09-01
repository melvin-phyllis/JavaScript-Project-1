
let tableau=[2, 7, 4, 9, 6, 1, 6, 3]
let tableau2=[3,4,9,4,9]

function sumOfCubes(nums){
    let sommes = 0
    for(let item of nums){
          sommes  += item**3     
    }
    return console.log(sommes)
    
}

sumOfCubes(tableau)
sumOfCubes(tableau2)
