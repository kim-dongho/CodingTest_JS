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
const M = Number(input[1]);
const str = input[2].split('');

const solution = () => {
  const length = (N*2+1);
  let io = '';
  let cnt = 0;

  for(let i = 1; i <= length; i++) {
    if(i % 2 === 0) {
      io += 'O';
    } else {
      io += 'I';
    }
  }

  for(let i = 0; i < M-length+1; i++) {
    const chk = str.slice(i, i+length);
    if(chk.join('') === io) {
      cnt++;
    }
  }

  console.log(cnt);
}

solution();
