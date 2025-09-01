const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
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
  let sum = 1n;
  for(let i = N; i > 0; i--) {
    sum *= i;
  }

  console.log(sum.toString());
}

solution();
