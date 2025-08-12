const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const splitKeyword = process.platform === "linux" ? '\n' : '\r\n';
// 1. 입력값이 한 개일 때(한 줄)
// const fs = require('fs');
// const input = fs.readFileSync(filePath).toString().trim();
// 2. 입력값이 여러 개일 때(한 줄에 공백으로 구분)
// const fs = require('fs');
// const input = fs.readFileSync(filePath).toString().trim().split(" ");
// 3. 입력값이 여러 줄일 때
// const fs = require('fs');
// const input = fs.readFileSync(filePath).toString().trim().split('\n');
// 4. 입력값이 첫 번째 줄에는 입력 값의 길이(n), 두 번째 줄에 공백으로 구분된 입력값이 주어질 때
// const fs = require('fs');
// const [n, input] = fs.readFileSync(filePath).toString().trim().split("\n");
// const inputArr = input.trim().split(" ")
// 5. 입력값이 첫 번째 줄에는 입력 값의 길이(n), n개의 줄에 걸쳐서 한 줄에 하나의 입력값이 주어질 때
const fs = require('fs');
const input = fs.readFileSync(filePath).toString().trim().split(splitKeyword);
const n = Number(input[0]);
const values = input.slice(1).map(Number);


function toBase(num, base) {
	const digits = [];
	while (num > 0) {
		if(num % base === 0) {
			digits.push(num % base);
			num = Math.floor(num / base);
		} else break;
	}
	return digits;
}

values.forEach((value) => {
	let sum = 0;
	if (value === 1) {
		console.log(0);
		return;
	}
	for (let i = 2; i <= value; i++) {
		const baseStr = toBase(value, i);
		baseStr.some((item) => {
			if (item !== 0) return true;
			sum++;
		})
	}
	console.log(sum);
});