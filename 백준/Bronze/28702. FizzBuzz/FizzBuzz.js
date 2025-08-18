const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const splitKeyword = process.platform === "linux" ? '\n' : '\r\n';

// 1. 입력값이 한 개일 때(한 줄)
// const fs = require('fs');
// const input = fs.readFileSync(filePath).toString().trim();
// 2. 입력값이 여러 개일 때(한 줄에 공백으로 구분)
// const fs = require('fs');
// const [M, N] = fs.readFileSync(filePath).toString().trim().split(" ").map((item) => Number(item));
// 3. 입력값이 여러 줄일 때
const fs = require('fs');
const input = fs.readFileSync(filePath).toString().trim().split(splitKeyword);
// 4. 입력값이 첫 번째 줄에는 입력 값의 길이(n), 두 번째 줄에 공백으로 구분된 입력값이 주어질 때
// const fs = require('fs');
// const [n, input] = fs.readFileSync(filePath).toString().trim().split(splitKeyword);
// const inputArr = input.trim().split(" ")
// 5. 입력값이 첫 번째 줄에는 입력 값의 길이(n), n개의 줄에 걸쳐서 한 줄에 하나의 입력값이 주어질 때
// const fs = require('fs');
// const input = fs.readFileSync(filePath).toString().trim().split(splitKeyword);
// const N = input[0];
// const array = input.slice(1);

const fizzbuzz = (num) => {
	if(num % 3 === 0 && num % 5 === 0) {
		return "FizzBuzz";
	} else if(num % 3 === 0) {
		return "Fizz";
	} else if(num % 5 === 0) {
		return "Buzz";
	} else return num;
}

const solution = () => {
	let search = 0;
	input.forEach((item, index) => {
		if(item.match(/^[0-9]*$/)) {
			search = Number(item) + (3 - index);
		}
	})

	console.log(fizzbuzz(search))
}	

solution();