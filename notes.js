array.slice(0); //copy and array, that is slice from begining (0), to the end(unset)
array.pop(0); //takes and REMOVES the last value from Array
array.push(...); // Append value to Array to last position.
	var _array = [1,2,3];
	_array.push(4); //adds 4 to _array as a last value
	console.log(_array);

//[.split] splits the string into Array. Splitted parts of the String become Array's values.
//Limit is a number of times .split actually makes the split. i.e. number of values
var splittedArray = str.split(separator,[limit]);

//Makes all characters in String  to be UpperCase/LowerCase
string.toUpperCase(); string.toLowerCase();

//Joining elements of Array in a single string, with an optional Separator between them
Array.join(separator);