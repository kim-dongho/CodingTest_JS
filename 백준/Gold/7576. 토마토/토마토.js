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
const arr = input.slice(1).map((v) => v.split(' ').map((n) => Number(n)));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const chk = Array.from({length: M}, () => { return Array(N).fill(false) })
const queue = [];
let head = 0;

const pop = () => {
  return queue[head++];
}

const bfs = () => {
  let lastDay = 1;
  while(head < queue.length) {
    const [x, y, d] = pop();

    lastDay = Math.max(lastDay, d);

    for(let i = 0; i < dx.length; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];

      if(0 <= nx && nx < M && 0 <= ny && ny < N && arr[nx][ny] === 0 && !chk[nx][ny]) {
        queue.push([nx, ny, d+1]);
        chk[nx][ny] = true;
      }
    }
  }
  
  if(chk.flat().includes(false)) {
    console.log(-1);
  } else {
    console.log(lastDay-1);
  }
}

const solution = () => {
  for(let i = 0; i < M; i++) {
    for(let j = 0; j < N; j++) {
      if(arr[i][j] === 1) {
        queue.push([i, j, 1]);
        chk[i][j] = true;
      }
      if(arr[i][j] === -1) {
        chk[i][j] = true;
      }
    }
  }

  bfs();
}

solution();
