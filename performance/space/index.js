function count(n) {
	for (let i = 0; i < n; i++) {
		console.log(i);
	}
}

function repeat(array) {
	let repeated_array = array;
	return repeated_array;
}

function convertToString(array) {
	let result = array.map((e) => e.toString());
	return result;
}

function twoDimensions(value) {
	let x = new Array(value);
	for (let i = 0; i < value; i++) {
		x[i] = new Array(value).fill(0);
	}
	return x;
}

function sumValues(n){
	return n * (n + 1) / 2
}

const output = sumValues(5);
console.log(output);
