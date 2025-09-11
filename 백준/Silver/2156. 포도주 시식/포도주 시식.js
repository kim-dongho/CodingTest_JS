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
const arr = input.slice(1).map((v) => Number(v));
const dp = [arr[0], arr[0]+arr[1], Math.max(arr[0]+arr[2], arr[0]+arr[1], arr[1]+arr[2])];

const solution = () => {
  for(let i = 3; i < arr.length; i++) {
    dp[i] = Math.max(dp[i-3]+arr[i-1]+arr[i], dp[i-2]+arr[i], dp[i-1]);
  }

  if(N <= 3) {
    console.log(dp[N-1])
  } else console.log(Math.max(...dp));
}

solution();
