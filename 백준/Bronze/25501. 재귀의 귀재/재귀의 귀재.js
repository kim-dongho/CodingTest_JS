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
let count = 0;

const recursion = (s, l, r) => {
  count++;
  if(l >= r) return 1;
  else if(s[l] != s[r]) return 0;
  else {
    return recursion(s, l+1, r-1)
  };
}

const isPalindrome = (s) => {
  return recursion(s, 0, s.length-1);
}

const solution = () => {
  for(let i = 0; i < arr.length; i++) {
    count = 0;
    console.log(isPalindrome(arr[i]), count);
  }
}

solution();
