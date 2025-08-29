const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const splitKeyword = process.platform === "linux" ? '\n' : '\r\n';
const fs = require('fs');
const isTest = false;

const input = fs
  .readFileSync(isTest ? 0 : filePath, 'utf-8')
  .toString()
  .trim()
  .split(splitKeyword);

const N = BigInt(input[0]);

const solution = () => {
	let ans = ((N ** 3n) + (-3n * (N ** 2n)) + (N * 2n)) / 6n;
	console.log(ans.toString());
	console.log(3);
}

solution();
