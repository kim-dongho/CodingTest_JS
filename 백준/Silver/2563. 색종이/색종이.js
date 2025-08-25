const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const splitKeyword = process.platform === "linux" ? '\n' : '\r\n';
const fs = require('fs');
const testcase = [0, 'utf-8'];

// 1. 입력값이 한 개일 때(한 줄)
// const input = fs.readFileSync(filePath).toString().trim();
// 2. 입력값이 여러 개일 때(한 줄에 공백으로 구분)
// const input = fs.readFileSync(filePath).toString().trim().split(" ").map((v) => Number(v));
// 3. 입력값이 여러 줄일 때
// const input = fs.readFileSync(filePath).toString().trim().split(splitKeyword);
// 4. 입력값이 첫 번째 줄에는 입력 값의 길이(n), 두 번째 줄에 공백으로 구분된 입력값이 주어질 때
// const [n, input] = fs.readFileSync(filePath).toString().trim().split(splitKeyword);
// const inputArr = input.trim().split(" ")
// 5. 입력값이 첫 번째 줄에는 입력 값의 길이(n), n개의 줄에 걸쳐서 한 줄에 하나의 입력값이 주어질 때
const input = fs.readFileSync(filePath).toString().trim().split(splitKeyword);
const N = input[0];
const arr = input.slice(1);

const solution = () => {
	const array = Array(101).fill(0).map(() => Array(101).fill(0));
	let ans = 0;
	arr.forEach((value) => {
		let [w, h] = value.split(' ').map((v) => Number(v));
		for(let i = w; i < w+10; i++) {
			for(let j = h; j < h+10; j++) {
				if(array[i][j] === 0) {
					array[i][j] = 1;
				}
			}
		}
	})

	array.forEach((v) => {
		v.forEach((s) => {
			if(s === 1) ans++;
		})
	})

	console.log(ans);
}

solution();