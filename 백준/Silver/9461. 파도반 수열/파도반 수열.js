const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const splitKeyword = process.platform === "linux" ? '\n' : '\r\n';
const fs = require('fs');
const isTest = false;

const input = fs
  .readFileSync(isTest ? 0 : filePath, 'utf-8')
  .toString()
  .trim()
  .split(splitKeyword);

const arr = input.slice(1);
const seq = [1,1,1];

const solution = () => {
  let ans = '';
  for(let i = 0; i < arr.length; i++) {
    const value = Number(arr[i]);
    
    if(value < 4) {
      ans += seq[value-1] + '\n';
      continue;
    }

    for(let j = 3; j < value; j++) {
      seq[j] = seq[j-3] + seq[j-2];
    }

    ans += seq[value-1] + '\n';
  }

  console.log(ans);
}

solution();
