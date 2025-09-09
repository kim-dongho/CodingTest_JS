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
  let cnt = 0, ans = 0;

  for(let i = 0; i + 2 < M; i++) {
    if(str[i] === 'I' && str[i+1] === 'O' && str[i+2] === 'I') {
      cnt++;
      i++;
    } else {
      cnt = 0;
    }
    if(cnt === N) {
      ans++;
      cnt--;
    }
  }

  console.log(ans);
}

solution();
