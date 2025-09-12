const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const splitKeyword = process.platform === "linux" ? '\n' : '\r\n';
const fs = require('fs');
const isTest = false;

const input = fs
  .readFileSync(isTest ? 0 : filePath, 'utf-8')
  .toString()
  .trim()
  .split(splitKeyword);

const [N, M] = input[0].split(' ').map((v) => Number(v));
const arr = input.slice(1).map((v) => v.split('').map((n) => Number(n)));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];
const queue = [];

const chk = Array.from({length: N}, () => Array(M).fill(false));

const bfs = () => {
  while(queue.length) {
    const [x, y, d] = queue.shift();

    if(x === N-1 && y === M-1) {
      console.log(d);
      break;
    }

    for(let i = 0; i < dx.length; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];

      if(0 <= nx && nx < N && 0 <= ny && ny < M && arr[nx][ny] === 1 && !chk[nx][ny]) {
        chk[nx][ny] = true;
        queue.push([nx, ny, d+1]);
      }
    }
  }
}

const solution = () => {
  queue.push([0, 0, 1]);
  bfs();  
}

solution();
