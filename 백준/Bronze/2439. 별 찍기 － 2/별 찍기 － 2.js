const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const splitKeyword = process.platform === "linux" ? '\n' : '\r\n';
const fs = require('fs');

// 1. 입력값이 한 개일 때(한 줄)
const input = fs.readFileSync(filePath).toString().trim();
// 2. 입력값이 여러 개일 때(한 줄에 공백으로 구분)
// const [A, B] = fs.readFileSync(filePath).toString().trim().split(" ").map((item) => Number(item));
// 3. 입력값이 여러 줄일 때
// const input = fs.readFileSync(filePath).toString().trim().split(splitKeyword);
// 4. 입력값이 첫 번째 줄에는 입력 값의 길이(n), 두 번째 줄에 공백으로 구분된 입력값이 주어질 때
// const [n, input] = fs.readFileSync(filePath).toString().trim().split(splitKeyword);
// const inputArr = input.trim().split(" ")
// 5. 입력값이 첫 번째 줄에는 입력 값의 길이(n), n개의 줄에 걸쳐서 한 줄에 하나의 입력값이 주어질 때
// const input = fs.readFileSync(filePath).toString().trim().split(splitKeyword);
// const N = input[0];
// const array = input.slice(1).map((item) => Number(item));

const solution = () => {
	const N = Number(input);
	for(let i = 0; i < N; i++) {
		let arr = [];
		for(let j = 0; j < N; j++) {
			if (j < N-i-1) {
				arr.push(' ');
			} else {
				arr.push('*');
			}
		}
		console.log(arr.join(''));
	}
}

solution();