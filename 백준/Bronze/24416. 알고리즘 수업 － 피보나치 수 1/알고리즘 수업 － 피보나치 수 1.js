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
const fibo = [0, 1, 1];
let cnt1 = 0, cnt2 = 0;

const recursion = (n) => {
	if(n === 1 || n === 2) {
		cnt1++;
		return 1;
	}

	return recursion(n-1) + recursion(n-2);
}

const dp = (n) => {
	for(let i = 3; i <= N; i++) {
		cnt2++;
		fibo[i] = fibo[i - 1] + fibo[i - 2];
	}

	return fibo[n];
}
const solution = () => {

	recursion(N);
	dp(N);
	console.log(cnt1, cnt2);
}

solution();
