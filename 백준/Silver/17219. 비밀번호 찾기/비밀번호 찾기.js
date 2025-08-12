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
let [N, M] = input[0].split(' ');
const sites = input.slice(1, Number(N)+1).map((item) => item.split(' '));
const finds = input.slice(Number(N)+1);

const solution = () => {
	const map = new Map();

	sites.forEach((value) => {
		const [site, password] = value;
		map.set(site, password);
	});

	finds.forEach((value) => {
		if(map.has(value)) {
			console.log(map.get(value));
		}
	})
}

solution();