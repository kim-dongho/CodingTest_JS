const readline = require("readline");

const heap = [null];

const swap = (i, j) => {
  const t = heap[i]; heap[i] = heap[j]; heap[j] = t;
};

const push = (v) => {
  heap.push(v);
  let i = heap.length - 1;
  while (i > 1) {
    const p = Math.floor(i / 2);
    if (heap[p] <= heap[i]) break;  // min-heap
    swap(i, p);
    i = p;
  }
};

const pop = () => {
  if (heap.length === 1) return null;     // empty
  if (heap.length === 2) return heap.pop();
  const top = heap[1];
  heap[1] = heap.pop();
  let i = 1;
  while (true) {
    const l = i * 2, r = l + 1;
    let smallest = i;
    if (l < heap.length && heap[l] < heap[smallest]) smallest = l;
    if (r < heap.length && heap[r] < heap[smallest]) smallest = r;
    if (smallest === i) break;
    swap(i, smallest);
    i = smallest;
  }
  return top;
};

const peek = () => (heap.length > 1 ? heap[1] : null);
const size = () => heap.length - 1;

let N = null;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const s = line.trim();
  if (!s) return;

  if (N === null) {
    N = Number(s);
    return;
  }

  // 한 줄의 수들을 바로 처리
  const nums = s.split(" ").map(Number);
  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    if (size() < N) {
      push(x);
    } else if (x > peek()) {
      pop();
      push(x);
    }
  }
}).on("close", () => {
  console.log(peek());
});