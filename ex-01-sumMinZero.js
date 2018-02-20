//------------------------------------------------------------------
// sumMinZero()
//   Write a function called sumMinZero that returns zero
//   if the sum of two numbers is negative
//
	function sumMinZero(num1, num2){
		if ((num1 + num2) < 0){
			return 0
		}
	}

//------------------------------------------------------------------

console.assert(sumMinZero(10, 10) === 20)
console.assert(sumMinZero(30, 10) === 40)
console.assert(sumMinZero(-30, 10) === 0)
console.assert(sumMinZero(-9893, -8839) === 0)
console.assert(sumMinZero(1848, -4124) === 0)
