const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const splitKeyword = process.platform === "linux" ? '\n' : '\r\n';
const fs = require('fs');
const isTest = false;

const input = fs
  .readFileSync(isTest ? 0 : filePath, 'utf-8')
  .toString()
  .trim()
  .split(splitKeyword);

const array = input[1].split(' ').map((v) => Number(v));

const solution = () => {
    let str = '';
  const setArr = [...new Set(array)].sort((a, b) => { return a-b });
  const map = new Map();

  for(let i = 0; i < setArr.length; i++) {
    map.set(setArr[i], i);
  }

  for(let i = 0; i < array.length; i++) {
    str += map.get(array[i]) + ' ';
  }

  console.log(str.trim());
}

solution();
