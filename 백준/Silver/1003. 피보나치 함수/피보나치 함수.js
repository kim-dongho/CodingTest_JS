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
// const input = fs.readFileSync(filePath).toString().trim().split(splitKeyword);
// 4. 입력값이 첫 번째 줄에는 입력 값의 길이(n), 두 번째 줄에 공백으로 구분된 입력값이 주어질 때
// const fs = require('fs');
// const [n, input] = fs.readFileSync(filePath).toString().trim().split(splitKeyword);
// const inputArr = input.trim().split(" ")
// 5. 입력값이 첫 번째 줄에는 입력 값의 길이(n), n개의 줄에 걸쳐서 한 줄에 하나의 입력값이 주어질 때
const fs = require('fs');
const input = fs.readFileSync(filePath).toString().trim().split(splitKeyword);
// const input = fs.readFileSync(0, 'utf-8').toString().trim().split(splitKeyword);
const n = input[0];
const array = input.slice(1);

const map = new Map();

const fibonacci = (num) => {
    if (num === 0) { 
        map.set(num, 1);
        return 0;
    }
    if (num === 1) { 
        map.set(num, 1);
        return 1;
    }

	if (map.has(num)) return map.get(num);

	const value = fibonacci(num - 1) + fibonacci(num - 2);
	map.set(num, value);
	return value;

}

const solution = () => {
	for(let i = 0; i < array.length; i++) {
		const num = Number(array[i]);
		if(num === 1) {
			console.log(0, 1);
			continue;
		} else if(num === 0) {
			console.log(1, 0);
			continue;
		}

		fibonacci(Number(array[i]));
		console.log(map.get(num-1), map.get(num));
		map.clear();
	}
}

solution();