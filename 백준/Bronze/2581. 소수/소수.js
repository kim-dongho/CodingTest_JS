const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const splitKeyword = process.platform === "linux" ? '\n' : '\r\n';
const fs = require('fs');
const testcase = [0, 'utf-8'];

// 1. 입력값이 한 개일 때(한 줄)
// const input = fs.readFileSync(0, 'utf-8').toString().trim();
// 2. 입력값이 여러 개일 때(한 줄에 공백으로 구분)
// const input = fs.readFileSync(filePath).toString().trim();
// 3. 입력값이 여러 줄일 때
// const input = fs.readFileSync(filePath).toString().trim().split(splitKeyword);
// 4. 입력값이 첫 번째 줄에는 입력 값의 길이(n), 두 번째 줄에 공백으로 구분된 입력값이 주어질 때
// const [n, input] = fs.readFileSync(filePath).toString().trim().split(splitKeyword);
// const inputArr = input.trim().split(" ")
// 5. 입력값이 첫 번째 줄에는 입력 값의 길이(n), n개의 줄에 걸쳐서 한 줄에 하나의 입력값이 주어질 때
const input = fs.readFileSync(filePath).toString().trim().split(splitKeyword);
const M = Number(input[0]);
const N = Number(input[1]);

const solution = () => {
	let sum = 0, min = N;

	if(N === 1) {
		console.log(-1);
		return 1;
	}

	if(N === 2) {
		console.log(2);
		console.log(2);
		return 1;
	}

	for(let i = M; i <= N; i++) {
		if(i === 1) continue;
		
		let chk = false;
		
		for(let j = 2; j <= Math.sqrt(i); j++) {
			if(i % j === 0) chk = true;
		}

		if(!chk) {
			sum += i;
			if(min > i) min = i;
		};
	}

	if(sum === 0) {
		console.log(-1);
	} else {
		console.log(sum);
		console.log(min);
	}
}

solution();