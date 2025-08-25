const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const splitKeyword = process.platform === "linux" ? '\n' : '\r\n';
const fs = require('fs');
const testcase = [0, 'utf-8'];

// 1. 입력값이 한 개일 때(한 줄)
// const input = fs.readFileSync(0, 'utf-8').toString().trim();
// 2. 입력값이 여러 개일 때(한 줄에 공백으로 구분)
// const input = fs.readFileSync(filePath).toString().trim().split(" ");
// 3. 입력값이 여러 줄일 때
// const input = fs.readFileSync(filePath).toString().trim().split(splitKeyword);
// 4. 입력값이 첫 번째 줄에는 입력 값의 길이(n), 두 번째 줄에 공백으로 구분된 입력값이 주어질 때
// const [n, input] = fs.readFileSync(filePath).toString().trim().split(splitKeyword);
// const inputArr = input.trim().split(" ")
// 5. 입력값이 첫 번째 줄에는 입력 값의 길이(n), n개의 줄에 걸쳐서 한 줄에 하나의 입력값이 주어질 때
const input = fs.readFileSync(filePath).toString().trim().split(splitKeyword);
const array = input.slice(0, input.length-1).map((v) => {
	const [N, M] = v.split(' ').map((item) => Number(item));
	return [N, M];
});

const solution = () => {
	array.forEach((v) => {
		const [N, M] = v;

		if(N > M) {
			console.log(N % M === 0 ? 'multiple' : 'neither');
		} else {
			console.log(M % N === 0 ? 'factor' : 'neither')
		}
	})
}

solution();