const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const splitKeyword = process.platform === "linux" ? '\n' : '\r\n';
const fs = require('fs');
// const testcase = [0, 'utf-8'];

// 1. 입력값이 한 개일 때(한 줄)
// const input = fs.readFileSync(filePath).toString().trim();
// 2. 입력값이 여러 개일 때(한 줄에 공백으로 구분)
// const input = fs.readFileSync(filePath).toString().trim().split(" ").map((v) => Number(v));
// 3. 입력값이 여러 줄일 때
// const input = fs.readFileSync(filePath).toString().trim().split(splitKeyword);
// 4. 입력값이 첫 번째 줄에는 입력 값의 길이(n), 두 번째 줄에 공백으로 구분된 입력값이 주어질 때
// const [n, input] = fs.readFileSync(filePath).toString().trim().split(splitKeyword);
// const inputArr = input.trim().split(" ")
// 5. 입력값이 첫 번째 줄에는 입력 값의 길이(n), n개의 줄에 걸쳐서 한 줄에 하나의 입력값이 주어질 때
const input = fs.readFileSync(filePath).toString().trim().split(splitKeyword);

const calcScore = (credit, grade) => {
	let score;

	switch(grade) {
		case 'A+':
			score = 4.5;
			break;
		case 'A0':
			score = 4.0;
			break;
		case 'B+':
			score = 3.5;
			break;
		case 'B0':
			score = 3.0;
			break;
		case 'C+':
			score = 2.5;
			break;
		case 'C0':
			score = 2.0;
			break;
		case 'D+':
			score = 1.5;
			break;
		case 'D0':
			score = 1.0;
			break;
		default:
			score = 0.0;
	}

	return score * credit;
}

const solution = () => {
	let sum = 0, creditSum = 0;

	input.some((v) => {
		const [subject, credit, grade] = v.split(' ');
		
		if(grade === 'P') return false;

		const score = calcScore(Number(credit), grade);
		sum += score;
		creditSum += Number(credit);
	})

	console.log((sum / creditSum).toFixed(6));
}

solution();