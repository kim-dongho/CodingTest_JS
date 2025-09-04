const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const splitKeyword = process.platform === "linux" ? '\n' : '\r\n';
const fs = require('fs');
const isTest = false;

const input = fs
  .readFileSync(isTest ? 0 : filePath, 'utf-8')
  .toString()
  .trim()
  .split(splitKeyword);

const arr = input.slice(1);


const getCombination = (n, r) => {
  return (factorial(n) / (factorial(r) * factorial(n-r)));
}

const factorial = (num) => {
  if(num <= 1) return 1;
  return num * factorial(num-1);
}

const solution = () => {
  let str = '';
  for(let i = 0; i < arr.length; i++) {
    const [N, M] = arr[i].split(' ').map((v) => Number(v));

    str += Math.round(getCombination(M, N)) + '\n';
  }  

  console.log(str);
}

solution();

