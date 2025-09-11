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
const arr = input.slice(1);
const dp = Array.from(({length: N}), () => Array(3).fill(0));

const solution = () => {
  for(let i = 0; i < arr.length; i++) {
    const value = arr[i].split(' ').map((v) => Number(v));
    
    if(i === 0) {
      dp[i][0] = value[0];
      dp[i][1] = value[1];
      dp[i][2] = value[2];
    } else {
      dp[i][0] = Math.min(dp[i-1][1], dp[i-1][2]) + value[0];
      dp[i][1] = Math.min(dp[i-1][0], dp[i-1][2]) + value[1];
      dp[i][2] = Math.min(dp[i-1][0], dp[i-1][1]) + value[2];
    }
  }

  console.log(Math.min(...dp[N-1]));
}

solution();
