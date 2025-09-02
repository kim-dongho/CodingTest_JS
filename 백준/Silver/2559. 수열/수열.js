const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const splitKeyword = process.platform === "linux" ? '\n' : '\r\n';
const fs = require('fs');
const isTest = false;

const input = fs
  .readFileSync(isTest ? 0 : filePath, 'utf-8')
  .toString()
  .trim()
  .split(splitKeyword);

const [N, K] = input[0].split(' ').map((v) => Number(v));
const arr = input[1].split(' ').map((v) => Number(v));

const solution = () => {
  let sum = [];

  if(arr.length === 1 || K === 1) {
    console.log(Math.max(...arr));
    return;
  }

  for(let i = K; i <= arr.length; i++) {
    let n = 0;
    for(let j = i; j > i-K; j--) {
      n += arr[j-1];  
    }
    sum.push(n);
  }
  console.log(Math.max(...sum));
}

solution();

