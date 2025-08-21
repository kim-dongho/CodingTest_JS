const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const splitKeyword = process.platform === "linux" ? '\n' : '\r\n';
const fs = require('fs');

// 1. 입력값이 한 개일 때(한 줄)
// const input = fs.readFileSync(filePath).toString().trim();
// 2. 입력값이 여러 개일 때(한 줄에 공백으로 구분)
// const input = fs.readFileSync(filePath).toString().trim().split(" ");
// 3. 입력값이 여러 줄일 때
// const input = fs.readFileSync(filePath).toString().trim().split(splitKeyword);
// 4. 입력값이 첫 번째 줄에는 입력 값의 길이(n), 두 번째 줄에 공백으로 구분된 입력값이 주어질 때
// const [n, input] = fs.readFileSync(filePath).toString().trim().split(splitKeyword);
// const inputArr = input.trim().split(" ")
// 5. 입력값이 첫 번째 줄에는 입력 값의 길이(n), n개의 줄에 걸쳐서 한 줄에 하나의 입력값이 주어질 때
const input = fs.readFileSync(filePath).toString().trim().split(splitKeyword);
const N = input[0];
const array = input[1].split(' ').map((item) => Number(item));
const target = input.slice(2);

const prefix = () => {
	const arr = [];
	for(let i = 0; i < array.length; i++) {
		if (i === 0) {
			arr.push(array[i]);
			continue;
		}

		arr.push(arr[i-1] + array[i]);
	}

	return arr;
}
const solution = () => {
	const arr = prefix();
	target.map((item) => {
		const [i, j] = item.split(' ');
		let ni = Number(i-1);
		let nj = Number(j-1);

		if(ni === 0) {
			console.log(arr[nj]);
		} else {
			console.log(arr[nj] - arr[ni-1]);
		}
	})
}

solution();