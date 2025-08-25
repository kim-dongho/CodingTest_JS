const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const splitKeyword = process.platform === "linux" ? '\n' : '\r\n';
const fs = require('fs');
const testcase = [0, 'utf-8'];

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
const input = fs.readFileSync(filePath).toString().trim().split(splitKeyword);

const solution = () => {
	const arr = input.map((v) => v.split(' '));
	const map1 = new Map();
	const map2 = new Map();
	const ans = [];
	
	arr.forEach((v) => {
		const [w, h] = v.map((n) => Number(n));

		if(map1.has(w)) {
			let value = map1.get(w);
			map1.set(w, value+1);
		} else {
			map1.set(w, 1);
		}

		if(map2.has(h)) {
			let value = map2.get(w);
			map2.set(h, value+1);
		} else {
			map2.set(h, 1);
		}
	})

	map1.forEach((v, k) => {
		if(v === 1) ans.push(k);
	})
	
	map2.forEach((v, k) => {
		if(v === 1) ans.push(k);
	})

	console.log(...ans);
}

solution();