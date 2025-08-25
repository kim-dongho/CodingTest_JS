const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const splitKeyword = process.platform === "linux" ? '\n' : '\r\n';
const fs = require('fs');
const testcase = [0, 'utf-8'];

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
const [N, M] = input[0].split(' ').map((v) => Number(v));
const matrix1 = input.slice(1, N+1);
const matrix2 = input.slice(N+1);

const solution = () => {
	for(let i = 0; i < N; i++) {
		const arr = [];
		const row1 = matrix1[i].split(' ').map((v) => Number(v));
		const row2 = matrix2[i].split(' ').map((v) => Number(v));
		for(let j = 0; j < M; j++) {
			arr.push(row1[j]+row2[j]);
		}
		console.log(...arr);
	}
}

solution();