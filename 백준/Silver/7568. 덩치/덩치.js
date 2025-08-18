const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const splitKeyword = process.platform === "linux" ? '\n' : '\r\n';

// 1. 입력값이 한 개일 때(한 줄)
// const fs = require('fs');
// const input = fs.readFileSync(filePath).toString().trim().split('');
// 2. 입력값이 여러 개일 때(한 줄에 공백으로 구분)
// const fs = require('fs');
// const [M, N] = fs.readFileSync(filePath).toString().trim().split(" ").map((item) => Number(item));
// 3. 입력값이 여러 줄일 때
// const fs = require('fs');
// const input = fs.readFileSync(filePath).toString().trim().split(splitKeyword);
// 4. 입력값이 첫 번째 줄에는 입력 값의 길이(n), 두 번째 줄에 공백으로 구분된 입력값이 주어질 때
// const fs = require('fs');
// const [n, input] = fs.readFileSync(filePath).toString().trim().split(splitKeyword);
// const inputArr = input.trim().split(" ")
// 5. 입력값이 첫 번째 줄에는 입력 값의 길이(n), n개의 줄에 걸쳐서 한 줄에 하나의 입력값이 주어질 때
const fs = require('fs');
const input = fs.readFileSync(filePath).toString().trim().split(splitKeyword);
const N = input[0];
const array = input.slice(1).map((item) => {
	const [v, h] = item.split(' ');
	return [Number(v), Number(h)];
});

const solution = () => {
	const arr = new Array();

	for(let i = 0; i < array.length; i++) {
		let rank = 1;
		const [baseVolume, baseHeight] = array[i];
		for(let j = 0; j < array.length; j++) {
			const [compVolume, compHeight] = array[j];

			if(baseVolume < compVolume && baseHeight < compHeight) {
				rank++;
			}
		}
		arr.push(rank);
	}
	console.log(...arr);
}	

solution();