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
const arr = input.slice(1);

const gcd = (A, B) => {
	let tmp, n;

	if(A < B) {
		tmp = A;
		A = B;
		B = tmp;
	}

	while(B != 0) {
		n = A % B;
		A = B;
		B = n;
	}

	return A;
}

const lcm = (A, B) => {
	return A * B / gcd(A,B);
}

const solution = () => {
	arr.forEach((v) => {
		const [A, B] = v.split(' ').map((n) => Number(n));
		
		const value = lcm(A, B);
		console.log(value);
	})
}

solution();
