const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const splitKeyword = process.platform === "linux" ? '\n' : '\r\n';
const fs = require('fs');
const isTest = false;

const input = fs
  .readFileSync(isTest ? 0 : filePath, 'utf-8')
  .toString()
  .trim()
  .split(splitKeyword);

let [A, B, C, D, E, F] = input[0].split(' ').map((v) => Number(v));

const solution = () => {
  for (let i = -999; i <= 999; i++) {
    for (let j = -999; j <= 999; j++) {
      if (A * i + B * j === C && D * i + E * j === F) {
        console.log(i, j);
        return;
      }
    }
  }
}

solution();
