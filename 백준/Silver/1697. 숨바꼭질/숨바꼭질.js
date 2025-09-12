const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const splitKeyword = process.platform === "linux" ? '\n' : '\r\n';
const fs = require('fs');
const isTest = true;

const input = fs
  .readFileSync(isTest ? 0 : filePath, 'utf-8')
  .toString()
  .trim()
  .split(splitKeyword);

const [N, M] = input[0].split(' ').map((v) => Number(v));

const MAX_SIZE = 100001;
const operator = ['+', '-', '*'];
const queue = [];
const chk = Array(MAX_SIZE).fill(false);

const bfs = () => {
  while(queue.length) {
    const [n, d] = queue.shift();

    if(n === M) {
      console.log(d);
      break;
    }
    
    for(let i = 0; i < operator.length; i++) {
      const oper = operator[i];
      let value;
      
      if(oper === '+') {
        value = n + 1;
      } else if(oper === '-') {
        value = n - 1;
      } else if(oper === '*') {
        value = n * 2;
      }
      
      if(0 <= value && value < MAX_SIZE && !chk[value]) {
        queue.push([value, d+1]);
        chk[value] = true;
      }
    }
  }
}

const solution = () => {
  queue.push([N, 0]);
  bfs();  
}

solution();
