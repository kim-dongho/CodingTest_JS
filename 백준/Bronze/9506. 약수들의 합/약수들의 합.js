const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const splitKeyword = process.platform === "linux" ? '\n' : '\r\n';
const fs = require('fs');
const testcase = [0, 'utf-8'];

// 1. 입력값이 한 개일 때(한 줄)
// const input = fs.readFileSync(0, 'utf-8').toString().trim();
// 2. 입력값이 여러 개일 때(한 줄에 공백으로 구분)
// const input = fs.readFileSync(filePath).toString().trim();
// 3. 입력값이 여러 줄일 때
// const input = fs.readFileSync(filePath).toString().trim().split(splitKeyword);
// 4. 입력값이 첫 번째 줄에는 입력 값의 길이(n), 두 번째 줄에 공백으로 구분된 입력값이 주어질 때
// const [n, input] = fs.readFileSync(filePath).toString().trim().split(splitKeyword);
// const inputArr = input.trim().split(" ")
// 5. 입력값이 첫 번째 줄에는 입력 값의 길이(n), n개의 줄에 걸쳐서 한 줄에 하나의 입력값이 주어질 때
const input = fs.readFileSync(filePath).toString().trim().split(splitKeyword);
const arr = input.slice(0, input.length-1).map((v) => Number(v));


const solution = () => {

	arr.forEach((v) => {
		let arr = [];
		let sum = 0;
		for(let i = 1; i < v; i++) {
			if(v % i === 0) {
				arr.push(i);
				sum += i;
			}
		}

		if(sum === v) {
			arr = arr.join(' + ');
			console.log(`${v} = ${arr}`);
		} else {
			console.log(`${v} is NOT perfect.`);
		}
	})
}

solution();