console.log('hi');

// Challenge #5: Array.diff
// Given two arrays remove all values from array1 that are present in array2. Display the final results of array1

// Example 1:
// var array1 = [1,2];
// var array2 = [1];
// //display = [2]


// Example 2:
// var array1 = [1,2, 4, 7, 5, 9];
// var array2 = [5, 9, 2];
// //display = [1, 4, 7]

// Global Variables  
var result = [];  

var array1 = [1,2];
var array2 = [1];
//display = [2]   (remove 1)

result1 = array1.filter(function (curElem) {
	if (array2.indexOf(curElem) == -1) {
		return curElem;
	}
});

console.log(result1);


var array1 = [1, 2, 4, 7, 5, 9];
var array2 = [5, 9, 2];
//display = [1, 4, 7]   (remove 2, 5, 9)

result2 = array1.filter(function (curElem) {
	if (array2.indexOf(curElem) == -1) {
		return curElem;
	}
});
console.log(result2);

function printToDom(result, divId) {
		// take string and innerHTML to the divID
		var getId = document.getElementById('example2');
		getId.innerHTML += result2;
}


