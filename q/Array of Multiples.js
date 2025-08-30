let a = []
let i = 0
function arrayOfMultiples (num, length) {

	while(i<length){
		let multiplication = num*i
			a.push(multiplication)
		i++
		
	}
	return console.log(a)
}
arrayOfMultiples(2,20)