const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const splitKeyword = process.platform === "linux" ? '\n' : '\r\n';
const fs = require('fs');
const isTest = false;

const input = fs
  .readFileSync(isTest ? 0 : filePath, 'utf-8')
  .toString()
  .trim()
  .split(splitKeyword);
  
const [N, K] = input[0].split(' ').map((v) => Number(v));
const arr = input[1].split(' ').map((v) => Number(v));
let cnt = 1, ans = '';

const merge_sort = (arr, p, r) => {
  if(arr.length <= 1) return arr;
 
  if(p < r) {
    let q = Math.floor((p + r) / 2);
    merge_sort(arr, p, q);
    merge_sort(arr, q + 1, r);
    merge(arr, p, q, r);
  }
}

const merge = (arr, p, q, r) => {
  let tmp = [];
  let i = p, j = q + 1, t = 0;

  while(i <= q && j <= r) {
    if(arr[i] <= arr[j]) {
      tmp[t++] = arr[i++];
    } else {
      tmp[t++] = arr[j++];
    }
  }
  
  while(i <= q) {
    tmp[t++] = arr[i++];
  }
  
  while(j <= r) {
    tmp[t++] = arr[j++];
  }
  
  i = p; t = 0;

  while(i <= r) {
    if(cnt === K) {
      ans = tmp[t];
    }
    arr[i++] = tmp[t++];
    cnt++;
  }
}

const solution = () => {
  merge_sort(arr, 0, arr.length-1);
  if(ans) {
    console.log(ans);
  } else {
    console.log(-1);
  }
}

solution();
