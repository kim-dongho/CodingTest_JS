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
const listens = input.slice(1, Number(N)+1);
const looks = input.slice(Number(N)+1);

const search = (base, comp) => {
	const ans = [];
	const baseSet = new Set([...base]);
	const compSet = new Set([...comp]);

	baseSet.forEach((value) => {
		if(compSet.has(value)) ans.push(value);
	})

	ans.sort();
	
	console.log(ans.length);
	for(let i = 0; i < ans.length; i++) {
		console.log(ans[i]);
	}
}

const solution = () => {
	if(listens.length >= looks.length) {
		search(looks, listens);
	} else {
		search(listens, looks);
	}
}

solution();