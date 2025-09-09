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

const check = (i, j) => {
  while(i > 0 && j > 0) {
    if(i % 3 === 1 && j % 3 === 1) return true;

    i = Math.floor(i/3);
    j = Math.floor(j/3);
  }

  return false;
}
const solution = () => {
  let str = '';
  for(let i = 0; i < N; i++) {
    for(let j = 0; j < N; j++) {
      if(check(i, j)) str += ' ';
      else str += '*';
    }
    str += '\n';
  }
  console.log(str);
}

solution();
