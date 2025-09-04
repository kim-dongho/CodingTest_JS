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
const qs = input[1].split(' ').map((v) => Number(v));
const qsArr = input[2].split(' ').map((v) => Number(v));
const M = Number(input[3]);
const mArr = input[4].split(' ').map((v) => Number(v));

const deque = [];
const capacity = N + M + 1;
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
  let str = '';
  for(let i = 0; i < qsArr.length; i++) {
    if(qs[i] === 0) pushRear(qsArr[i]);
  }

  for(let i = 0; i < mArr.length; i++) {
    pushFront(mArr[i]);
    str += removeRear() + ' ';
  }

  console.log(str);
}

solution();
