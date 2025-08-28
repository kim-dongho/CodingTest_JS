const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const splitKeyword = process.platform === "linux" ? '\n' : '\r\n';
const fs = require('fs');
const isTest = false;

// 1. 입력값이 한 개일 때(한 줄)
// const input = fs.readFileSync(filePath).toString().trim();
// 2. 입력값이 여러 개일 때(한 줄에 공백으로 구분)
// const input = fs.readFileSync(filePath).toString().trim().split(' ').map((v) => Number(v));
// 3. 입력값이 여러 줄일 때
// const input = fs.readFileSync(filePath).toString().trim().split(splitKeyword);
// 4. 입력값이 첫 번째 줄에는 입력 값의 길이(n), 두 번째 줄에 공백으로 구분된 입력값이 주어질 때
// const [n, input] = fs.readFileSync(filePath).toString().trim().split(splitKeyword);
// const inputArr = input.trim().split(" ")
// 5. 입력값이 첫 번째 줄에는 입력 값의 길이(n), n개의 줄에 걸쳐서 한 줄에 하나의 입력값이 주어질 때
const input = fs
  .readFileSync(isTest ? 0 : filePath, 'utf-8')
  .toString()
  .trim()
  .split(splitKeyword);

const arr = input.slice(1); 

const solution = () => {
	let queue = [];
	let head = 0;
	const ans = [];

	for(let i = 0; i < arr.length; i++) {
		const [order, N] = arr[i].split(' ');
		const length = queue.length-head;

		if(N !== undefined) {
			queue.push(Number(N));
		}

		if(order === 'pop') {
			ans.push(length ? queue[head] : -1);
			if(length) head++;
		} else if(order === 'size') {
			ans.push(length);
		} else if(order === 'empty') {
			ans.push(length ? 0 : 1);
		} else if(order === 'front') {
			ans.push(length ? queue[head] : -1);
		} else if(order === 'back') {
			ans.push(length ? queue[length+head-1] : -1);
		}
	}
	console.log(ans.join('\n'));
}

solution();
