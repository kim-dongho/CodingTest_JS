const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const splitKeyword = process.platform === "linux" ? '\n' : '\r\n';
const fs = require('fs');
// const testcase = [0, 'utf-8'];

// 1. 입력값이 한 개일 때(한 줄)
// const input = fs.readFileSync(filePath).toString().trim();
// 2. 입력값이 여러 개일 때(한 줄에 공백으로 구분)
// const input = fs.readFileSync(filePath).toString().trim().split(" ").map((v) => Number(v));
// 3. 입력값이 여러 줄일 때
// const input = fs.readFileSync(filePath).toString().trim().split(splitKeyword);
// 4. 입력값이 첫 번째 줄에는 입력 값의 길이(n), 두 번째 줄에 공백으로 구분된 입력값이 주어질 때
// const [n, input] = fs.readFileSync(filePath).toString().trim().split(splitKeyword);
// const inputArr = input.trim().split(" ")
// 5. 입력값이 첫 번째 줄에는 입력 값의 길이(n), n개의 줄에 걸쳐서 한 줄에 하나의 입력값이 주어질 때
const input = fs.readFileSync(filePath).toString().trim().split(splitKeyword);
const dice = input[0].split(' ').map((v) => Number(v));

const solution = () => {
	const map = new Map();
	let price = 0;

	dice.forEach((v) => {
		if(map.has(v)) {
			let value = map.get(v);
			map.set(v, value + 1);
		} else {
			map.set(v, 1);
		}
	})

	map.forEach((v, k) => {
		if(v === 3) {
			price = 10000 + (k * 1000);
		}	else if(v === 2) {
			price = 1000 + (k * 100);
		}
	})

	if(price === 0) {
		price = Math.max(...dice) * 100;
	}

	console.log(price);
}

solution();