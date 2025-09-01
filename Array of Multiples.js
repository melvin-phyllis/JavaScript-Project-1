

function arrayOfMultiples (num, length) {
let a = []
let i = 0
	while(i<length){
		let multiplication = num*i
			a.push(multiplication)
		i++
		
	}
	return console.log(a)
}
arrayOfMultiples(2,20)
arrayOfMultiples(3,10)
