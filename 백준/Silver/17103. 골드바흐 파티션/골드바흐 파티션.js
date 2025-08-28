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

const getPrime = (num) => {
	const ans = [2];
	
	for(let i = 3; i <= num; i+=2) {
		if(isPrime(i)) ans.push(i);
	}

	return ans;
}

const isPrime = (num) => {
	for(let i = 2; i <= Math.sqrt(num); i++) {
		if(num % i === 0) return false;
	}
	
	return true;
}
const solution = () => {
	const primes = getPrime(Math.max(...arr));

	arr.forEach((n) => {
		let index = primes.length - 1;
		let count = 0;
		
		for(let i = 0; i < primes.length && primes[i] <= n / 2; i++) {
			if(primes[i] * 2 === n) count++;
			else if(isPrime(n - primes[i])) count++;
		}
		console.log(count);
	})

}

solution();
