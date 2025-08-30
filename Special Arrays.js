let tableau=[2, 7, 4, 9, 6, 1, 6, 3]

function isSpecialArray(arr) {
	for(let i=0; i<arr.length;i++){
        
        if(i%2==0){
            if((arr[i])%2 == 0){
                return true
            }
        }
        if(i%2 !==0){
            if((arr[i])%2 !== 0){
                return true
            }
        }
    }return true
}

isSpecialArray(tableau)