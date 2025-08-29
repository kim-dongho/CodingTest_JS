const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const splitKeyword = process.platform === "linux" ? '\n' : '\r\n';
const fs = require('fs');
const isTest = false;

const input = fs
  .readFileSync(isTest ? 0 : filePath, 'utf-8')
  .toString()
  .trim()
  .split(splitKeyword);

const N = Number(input[0]);

const solution = () => {
	for(let i = 1; i < N; i++) {
		const ans = [];
		for(let j = 0; j < N-i; j++) {
			ans.push(' ');
		}
		for(let k = 0; k < i+(i-1); k++) {
			ans.push('*');
		}
		console.log(ans.join(''));
	}

	for(let i = N; i > 0; i--) {
		const ans = [];
		for(let j = 0; j < N-i; j++) {
			ans.push(' ');
		}
		for(let k = 0; k < i+(i-1); k++) {
			ans.push('*');
		}
		console.log(ans.join(''));
	}
}

solution();
