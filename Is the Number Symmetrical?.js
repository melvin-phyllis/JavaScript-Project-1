
let a= 2922;
let b= 2222;

function isSymmetrical(num) {
    let n=0
    num = Array.from(num.toString(),Number)
	for(let i=num.length-1;i>-1;i--){
            
            if(num[n]!==num[i]){
                
                    return false
            
            }else{
                console.log(`${num[n]}=${num[i]}`)
            }
            n++
        }return true
}

console.log(isSymmetrical(a))