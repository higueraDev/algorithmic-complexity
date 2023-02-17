function count(n) {
	for (let i = 0; i < n; i++) {
		console.log(i);
	}
}

console.time('Duration of count');
count(5)
console.timeEnd('Duration of count');