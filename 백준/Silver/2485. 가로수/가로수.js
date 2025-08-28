const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const splitKeyword = process.platform === "linux" ? '\n' : '\r\n';
const fs = require('fs');
const isTest = false;

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
const input = fs
  .readFileSync(isTest ? 0 : filePath, 'utf-8')
  .toString()
  .trim()
  .split(splitKeyword);

const arr = input.slice(1).map((v) => Number(v)); 

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

const solution = () => {
	const ans = arr[arr.length-1] - arr[0];
	let N = 0;
	
	for(let i = 1; i < arr.length; i++) {
		N = gcd(N, arr[i] - arr[i-1]);
		if (N === 1) break;
	}

	console.log(Math.floor((ans / N) - arr.length + 1));
}

solution();
