const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const splitKeyword = process.platform === "linux" ? '\n' : '\r\n';
const fs = require('fs');
const isTest = true;

const input = fs
  .readFileSync(isTest ? 0 : filePath, 'utf-8')
  .toString()
  .trim()
  .split(splitKeyword);

const S = input[0]
const arr = input.slice(2);

const solution = () => {
  const map = new Map();

  S.split('').map((v, i) => {
    if(map.has(v)) {
      const value = [...map.get(v), i];
      map.set(v, value);
    } else {
      map.set(v, [i]);
    }
  });

  for(let i = 0; i < arr.length; i++) {
    let count = 0;
    const [ch, start, end] = arr[i].split(' ');
    if(map.has(ch)) {
      for(let j = Number(start); j <= Number(end); j++) {
        const value = map.get(ch);
        if(value.includes(j)) count++;
      }
    }
    console.log(count);
  }
}

solution();

