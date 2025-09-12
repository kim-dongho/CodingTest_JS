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
const arr = input[1].split(' ').map((v) => Number(v));
const dp = [];

const solution = () => {
  for(let i = 0; i < arr.length; i++) {
    dp[i] = 1;
    for(let j = 0; j < i; j++) {
      if(arr[j] < arr[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  console.log(Math.max(...dp));
}

solution();
