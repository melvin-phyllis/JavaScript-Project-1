let array = {
  D: 1,
  B: 2,
  C: 3
}

let array2 = {
  AD: 12,
  AB: 22,
  AC: 32
}
//fonction qui transforme les information d'un objet en tableau 
function objectToArray(obj) {
	let b = Object.entries(obj)
    return console.log(b)
}
objectToArray(array)  
objectToArray(array2)  
