const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const splitKeyword = process.platform === "linux" ? '\n' : '\r\n';
const fs = require('fs');
const isTest = false;

const input = fs
  .readFileSync(isTest ? 0 : filePath, 'utf-8')
  .toString()
  .trim()
  .split(splitKeyword);

const [a1, a2] = input[0].split(' ').map((v) => Number(v));
const c = Number(input[1]);
let n = Number(input[2]);

const solution = () => {
	let chk = true;

	for(; n <= 100; n++) {
		if(a1*n + a2 > c*n) {
			chk = false;
			break;
		}
	}

	console.log(chk ? 1 : 0)
}

solution();
