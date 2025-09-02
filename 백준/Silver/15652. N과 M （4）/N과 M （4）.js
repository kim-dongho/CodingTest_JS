const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const splitKeyword = process.platform === "linux" ? '\n' : '\r\n';
const fs = require('fs');
const isTest = false;

const input = fs
  .readFileSync(isTest ? 0 : filePath, 'utf-8')
  .toString()
  .trim()
  .split(splitKeyword);

const [N, M] = input[0].split(' ').map((v) => Number(v));
let str = '';
const picked = [];

const dfs = (d) => {
  if(d === M) {
    str += picked.join(' ') + '\n';
    return;
  }

  for(let i = 1; i <= N; i++) {
    if(picked[d-1] > i) continue;
    picked[d] = i;
    dfs(d+1);
  }
}
const solution = () => { 
  dfs(0);
  
  console.log(str);
}

solution();
