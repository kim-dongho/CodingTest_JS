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
// const N = input[0];
const array = input.slice(1);

const deleteArray = (arr) => {
	arr.splice(0, 1);
	return arr;
}

const popArray = (arr) => {
	const first = arr.splice(0, 1);
	return arr.push(...first);
}

const solution = () => {
	let arr = [];

	for(let i = 0; i < array.length; i += 2) {
		let init = array.slice(i, i+2);
		init[0] = init[0].split(' ').map((item) => Number(item));
		init[1] = init[1].split(' ').map((item) => Number(item));
		arr.push(init);
	}

	for(let i = 0; i < arr.length; i++) {
		let count = 0;
		const [N, M] = arr[i][0];
		const printer = arr[i][1].map((item, index) => {
			return [index, item];
		});

		if(N === 1) {
			console.log(1);
			continue;
		}

		while(true) {
			const max = Math.max(...printer.map((item) => item[1]));
			const [key, value] = printer[0];

			if(max !== value) {
				popArray(printer);
			} else {
				count++;
				if(Number(key) === M) {
					break;
				}

				deleteArray(printer);
			}
		}
		console.log(count);
	}
}	

solution();