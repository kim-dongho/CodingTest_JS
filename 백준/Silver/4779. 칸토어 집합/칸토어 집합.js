const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const splitKeyword = process.platform === "linux" ? '\n' : '\r\n';
const fs = require('fs');
const isTest = false;

const input = fs
  .readFileSync(isTest ? 0 : filePath, 'utf-8')
  .toString()
  .trim()
  .split(splitKeyword);

const arr = input.slice(0).map((v) => Number(v));

const divide = (n) => {
  if(n === 0) {
    return '-';
  }

  return divide(n-1) + " ".repeat(Math.pow(3, n-1)) + divide(n-1);
}

const solution = () => {
  let ans = '';
  for(let i = 0; i < arr.length; i++) {
    let str = Array(Math.pow(3, arr[i])).fill(' ');
    str = divide(arr[i]);
    ans += str + '\n';
  }
  console.log(ans);
}

solution();
