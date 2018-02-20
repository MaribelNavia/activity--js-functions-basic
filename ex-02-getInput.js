//Warmup - JS Drills - Basic Functions & Data Types

//------------------------------------------------------------------
// TASK 1 : sumMinZero()
//  Write a function called sumMinZero that returns zero
//  if the sum of two numbers is negative
//
//------------------------------------------------------------------
//function sumMinZero(num1, num2){
	//if ((num1 + num2) < 0){
//		return 0
//	}
//}
//console.assert(sumMinZero(10, 10) === 20)
//console.assert(sumMinZero(30, 10) === 40)
//console.assert(sumMinZero(-30, 10) === 0)
//console.assert(sumMinZero(-9893, -8839) === 0)
//console.assert(sumMinZero(1848, -4124) === 0)

//Warmup - JS Drills - Basic Functions & Data Types

//------------------------------------------------------------------
// TASK 2 : getInput()
//  Write a function called getInput that checks to make sure that
//  the user is submitting a string as input.
//
//  Examine the functionality of `getInput` in the function below
//------------------------------------------------------------------

function getInput(input){
	if (typeof input === "undefined"){
		return "Please provide string input."	
	} else if (typeof input === "number"){
		return "Please provide a string input, NOT a number"
	} else{
		return "DATA_RECEIVED: " + input 
	}
}



console.assert(getInput() === "Please provide string input.")
console.assert(getInput(333) === "Please provide a string input, NOT a number")
console.assert(getInput('Mister Teatime') === "DATA_RECEIVED: Mister Teatime")
console.assert(getInput('Charlotte') === "DATA_RECEIVED: Charlotte")
