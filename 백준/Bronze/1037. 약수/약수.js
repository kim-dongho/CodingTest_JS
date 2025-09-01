const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const splitKeyword = process.platform === "linux" ? '\n' : '\r\n';
const fs = require('fs');
const isTest = false;

const input = fs
  .readFileSync(isTest ? 0 : filePath, 'utf-8')
  .toString()
  .trim()
  .split(splitKeyword);

const N = Number(input[0]);
const array = input[1].split(' ').map((v) => Number(v));

const solution = () => {
  const max = Math.max(...array);
  const min = Math.min(...array);

  console.log(max * min);
}

solution();
