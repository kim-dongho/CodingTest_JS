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

const getPermutations = (arr, selectNum) => {
  const results = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index+1)];
    const permutations = getPermutations(rest, selectNum - 1);
    const attached = permutations.map((el) => [fixed, ...el]);
    results.push(...attached);
  })

  return results;
}

const solution = () => { 
  const arr = Array.from({length: N}, (_, i) => i+1);
  const ans = getPermutations(arr, M);

  for(let i = 0; i < ans.length; i++) {
    console.log(...ans[i]);
  }
}

solution();
