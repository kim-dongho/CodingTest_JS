const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const splitKeyword = process.platform === "linux" ? '\n' : '\r\n';
const fs = require('fs');
const isTest = true;

const input = fs
  .readFileSync(isTest ? 0 : filePath, 'utf-8')
  .toString()
  .trim()
  .split(splitKeyword);

const N = Number(input[0]);
const dp = [0, 1, 2];

const fibo = () => {
	for(let i = 3; i <= N; i++) {
		dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
	}
	
	return dp[N];
}

const solution = () => {
	console.log(fibo());
}

solution();
