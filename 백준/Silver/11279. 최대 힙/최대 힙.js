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

const heap = [null];

const swap = (i, j) => {
  [heap[i], heap[j]] = [heap[j], heap[i]];
};

const push = (value) => {
  heap.push(value);
  let i = heap.length - 1;

  while (i > 1) {
    const p = Math.floor(i / 2);
    // 최대 힙
    if (heap[p] >= heap[i]) break;
    // 최소 힙
    // if (heap[p] <= heap[i]) break;
    swap(i, p);
    i = p;
  }
};

const pop = () => {
  if (heap.length === 1) return null; // 비어있음
  if (heap.length === 2) return heap.pop(); // 원소 1개

  const top = heap[1];
  heap[1] = heap.pop(); // 마지막 원소를 루트로
  let i = 1;

  while (true) {
    const left = i * 2;
    const right = i * 2 + 1;
    // 최대 힙
    let biggist = i;
    
    if (left < heap.length && heap[left] > heap[biggist]) biggist = left;
    if (right < heap.length && heap[right] > heap[biggist]) biggist = right;

    if (biggist === i) break;
    swap(i, biggist);
    i = biggist;
    
    // 최소 힙
    // let smallest = i;

    // if (left < heap.length && heap[left] < heap[smallest]) smallest = left;
    // if (right < heap.length && heap[right] < heap[smallest]) smallest = right;

    // if (smallest === i) break;
    // swap(i, smallest);
    // i = smallest;
  }
  return top;
};

const peek = () => (heap.length > 1 ? heap[1] : null);
const size = () => heap.length - 1;

const solution = () => {
  let str = ''
  for(let i = 0; i < arr.length; i++) {
    const num = Number(arr[i]);
    push(num);
    if(num === 0) {
      str += pop() + '\n';
    }
  }
  console.log(str);
}

solution();
