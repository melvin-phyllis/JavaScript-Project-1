let tableau=[2, 1, 4, 9, 6, 1, 6, 3]
let tableau2=[2, 2, 4, 9, 6, 1, 6, 3]

function isSpecialArray(arr) {
	for(let i=0; i<arr.length;i++){
        
        if(i%2==0){
            if((arr[i])%2 !== 0){
                return false
            }
        }
        if(i%2!==0){
            if((arr[i])%2 === 0){
                return false
            }
        }
    }return true
}

console.log(isSpecialArray(tableau)) 
console.log(isSpecialArray(tableau2))
