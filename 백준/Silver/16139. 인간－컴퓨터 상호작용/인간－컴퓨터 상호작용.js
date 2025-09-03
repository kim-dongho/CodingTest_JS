const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const splitKeyword = process.platform === "linux" ? '\n' : '\r\n';
const fs = require('fs');
const isTest = false;

const input = fs
  .readFileSync(isTest ? 0 : filePath, 'utf-8')
  .toString()
  .trim()
  .split(splitKeyword);

const S = input[0].split('');
const arr = input.slice(2);

const solution = () => {
  let str = '';
  const alpha = Array.from(Array(26), () => new Array(S.length).fill(0));

  for(let i = 0; i < S.length; i++) {
    const c = S[i].charCodeAt(0) - 97;
    
    if(i === 0) {
      alpha[c][i] = 1;
      continue;
    }

    for(let j = 0; j < alpha.length; j++) {
      if(c === j) {
        alpha[j][i] = alpha[j][i-1] + 1; 
      } else {
        alpha[j][i] = alpha[j][i-1];
      }
    }
  }

  for(let i = 0; i < arr.length; i++) {
    let [ch, start, end] = arr[i].split(' ').map((v, idx) => {
      if (idx === 0) return v; 
      return Number(v); 
    });
    ch = ch.charCodeAt(0) - 97;
    if(start === 0) {
      str += alpha[ch][end]; 
    } else {
      str += alpha[ch][end] - alpha[ch][start-1];
    }
    str += '\n';
  }

  console.log(str);
}

solution();

