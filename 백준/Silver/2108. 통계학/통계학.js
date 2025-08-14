const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const splitKeyword = process.platform === "linux" ? '\n' : '\r\n';

// 1. 입력값이 한 개일 때(한 줄)
// const fs = require('fs');
// const input = fs.readFileSync(filePath).toString().trim();
// 2. 입력값이 여러 개일 때(한 줄에 공백으로 구분)
// const fs = require('fs');
// const [M, N] = fs.readFileSync(filePath).toString().trim().split(" ").map((item) => Number(item));
// 3. 입력값이 여러 줄일 때
// const fs = require('fs');
// const input = fs.readFileSync(filePath).toString().trim().split(splitKeyword);
// 4. 입력값이 첫 번째 줄에는 입력 값의 길이(n), 두 번째 줄에 공백으로 구분된 입력값이 주어질 때
// const fs = require('fs');
// const [n, input] = fs.readFileSync(filePath).toString().trim().split(splitKeyword);
// const inputArr = input.trim().split(" ")
// 5. 입력값이 첫 번째 줄에는 입력 값의 길이(n), n개의 줄에 걸쳐서 한 줄에 하나의 입력값이 주어질 때
const fs = require('fs');
const input = fs.readFileSync(filePath).toString().trim().split(splitKeyword);
const N = input[0];
const array = input.slice(1).map((item) => Number(item)).sort((a, b) => {return a - b});

const solution = () => {
	const map = new Map();
	const length = array.length;

	// AVG
	let sum = 0;
	array.forEach((num) => {
		sum += num;
	});
	if(Math.round(sum / N) === -0) console.log(0);
	else console.log(Math.round(sum / N));

	// MID
	console.log(array[Math.floor(length / 2)]);

	// MODE
	array.forEach((num) => {
		if(map.has(num)) {
			let value = map.get(num);
			map.set(num, value+1);
		} else map.set(num, 1);
	})

	let max = 0, arr = [];
	map.forEach((value) => {
		if(value > max) {
			max = value;
		}
	})

	map.forEach((value, key) => {
		if(value === max) {
			arr.push(key);
		}
	})

	arr = arr.sort((a, b) => {return a - b})
	if(arr.length > 1) {
		console.log(arr[1]);
	} else console.log(arr[0]);
	
	// RANGE
	const range = Math.max(...array) - Math.min(...array);
	console.log(range);
}

solution();