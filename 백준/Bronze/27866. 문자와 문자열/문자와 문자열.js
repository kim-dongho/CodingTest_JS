const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const splitKeyword = process.platform === "linux" ? '\n' : '\r\n';
const fs = require('fs');

// 1. 입력값이 한 개일 때(한 줄)
// const [A, B] = fs.readFileSync(filePath).toString().trim().split(' ');
// 2. 입력값이 여러 개일 때(한 줄에 공백으로 구분)
// const input = fs.readFileSync(filePath).toString().trim().split(" ").map((item) => Number(item));
// 3. 입력값이 여러 줄일 때
const input = fs.readFileSync(filePath).toString().trim().split(splitKeyword);
const str = input[0];
const target = input[1];
// 4. 입력값이 첫 번째 줄에는 입력 값의 길이(n), 두 번째 줄에 공백으로 구분된 입력값이 주어질 때
// const input = fs.readFileSync(filePath).toString().trim().split(splitKeyword);
// const [N, target] = input[0].split(" ");
// const array = input[1].trim().split(" ").map((item) => Number(item));
// 5. 입력값이 첫 번째 줄에는 입력 값의 길이(n), n개의 줄에 걸쳐서 한 줄에 하나의 입력값이 주어질 때
// const input = fs.readFileSync(filePath).toString().trim().split(splitKeyword);
// const N = input[0];
// const array = input.slice(1).map((item) => Number(item));

const solution = () => {
	console.log(str[target-1]);
}

solution();