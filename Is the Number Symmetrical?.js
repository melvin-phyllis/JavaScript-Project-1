
let a= 45654;
let b= 2222;
let c= 198537;
//fonction qui verifie la symetrie d'un nombre
function isSymmetrical(num) {
    let n=0
    //convertir le nombre en tableau 
    num = Array.from(num.toString(),Number)
//boucle qui parrcoure le tableau tout en verifiant la symetrie du nombre 
	for(let i=num.length-1;i>-1;i--){
            
            if(num[n]!==num[i]){
                
                    return console.log(false)
            }
            n++
        }return console.log(true) 
}

isSymmetrical(a)
isSymmetrical(b)
isSymmetrical(c)
