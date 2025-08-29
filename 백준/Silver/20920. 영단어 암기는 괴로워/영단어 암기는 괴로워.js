const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const splitKeyword = process.platform === "linux" ? '\n' : '\r\n';
const fs = require('fs');
const isTest = true;

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

const [N, M] = input[0].split(' ').map((v) => Number(v));

const arr = input.slice(1).filter((v) => v.length >= M).sort((a, b) => a.localeCompare(b));

const solution = () => {
	let countArr = [];
	const map = new Map();
	const ans = [];

	for(let i = 0; i < arr.length; i++) {
		if(map.has(arr[i])) {
			const value = map.get(arr[i]);
			map.set(arr[i], value + 1);
		} else {
			map.set(arr[i], 1);
		}
	}

	map.forEach((v, k) => {
		if (!countArr[v-1]) {
			countArr[v-1] = [];
		}
		countArr[v-1].push(k);
	})

	for(let i = 0; i < countArr.length; i++) {
		if(!countArr[i]) continue;
		
		const sortArr = countArr[i].sort((a, b) => { 
			if(a.length === b.length) {
				return b.localeCompare(a);
			}

			return a.length - b.length;
		});
		ans.push(...sortArr);
	}

	console.log(ans.reverse().join('\n'));
}

solution();
