const p = require('perf_hooks')


function count(n) {
	for (let i = 0; i < n; i++) {
		console.log(i);
	}
}

const initialTime = p.performance.now();
count(5);
let finalTime = p.performance.now();
let duration = finalTime - initialTime

console.log('The algorithm count has lasted ' + duration + ' ms')
