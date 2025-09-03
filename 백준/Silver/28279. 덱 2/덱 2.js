const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const splitKeyword = process.platform === "linux" ? '\n' : '\r\n';
const fs = require('fs');
const isTest = false;

const input = fs
  .readFileSync(isTest ? 0 : filePath, 'utf-8')
  .toString()
  .trim()
  .split(splitKeyword);

const N = Number(input[0]);
const arr = input.slice(1);
const capacity = N + 1;
const deque = [];
let head = 0, tail = 0;

const pushFront = (n) => {
  head = (head - 1 + capacity) % capacity;
  deque[head] = n;
}

const pushRear = (n) => {
  deque[tail] = n;
  tail = (tail + 1) % capacity;
}

const removeFront = () => {
  if(isEmpty()) return -1;
  let x = deque[head];
  head = (head + 1) % capacity;
  return x;
}

const removeRear = () => {
  if(isEmpty()) return -1;
  tail = (tail - 1 + capacity) % capacity;
  return deque[tail];
}

const printFront = () => {
  if(isEmpty()) return -1;
  return deque[head];
}

const printRear = () => {
  if(isEmpty()) return -1;
  return deque[(tail - 1 + capacity) % capacity];
}

const getSize = () => {
  return (tail - head + capacity) % capacity;
}

const isEmpty = () => {
  if(head === tail) return 1;
  else return 0;
}

const solution = () => {
  const ans = [];
  for(let i = 0; i < arr.length; i++) {
    const [order, n] = arr[i].split(' ').map((v) => Number(v));
    
    if(order === 1) {
      pushFront(n);
    } else if(order === 2) {
      pushRear(n);
    } else if(order === 3) {
      ans.push(removeFront());
    } else if(order === 4) {
      ans.push(removeRear());
    } else if(order === 5) {
      ans.push(getSize());
    } else if(order === 6) {
      ans.push(isEmpty());
    } else if(order === 7) {
      ans.push(printFront());
    } else if(order === 8) {
      ans.push(printRear());
    }
  }
  console.log(ans.join('\n'));
}

solution();

