const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const splitKeyword = process.platform === "linux" ? '\n' : '\r\n';
// 1. 입력값이 한 개일 때(한 줄)
// const fs = require('fs');
// const input = fs.readFileSync(filePath).toString().trim();
// 2. 입력값이 여러 개일 때(한 줄에 공백으로 구분)
const fs = require('fs');
const input = fs.readFileSync(filePath).toString().trim().split(" ");
// 3. 입력값이 여러 줄일 때
// const fs = require('fs');
// const input = fs.readFileSync(filePath).toString().trim().split('\n');
// 4. 입력값이 첫 번째 줄에는 입력 값의 길이(n), 두 번째 줄에 공백으로 구분된 입력값이 주어질 때
// const fs = require('fs');
// const [n, input] = fs.readFileSync(filePath).toString().trim().split("\n");
// const inputArr = input.trim().split(" ")
// 5. 입력값이 첫 번째 줄에는 입력 값의 길이(n), n개의 줄에 걸쳐서 한 줄에 하나의 입력값이 주어질 때
// const fs = require('fs');
// const input = fs.readFileSync(filePath).toString().trim().split(splitKeyword);
// const n = Number(input[0]); // 3
// const mapping = input.slice(1, 1 + n).map(line => line.split(' ')); 

const [n, name] = input;
let smupc_name = [];
let trash = 0;

// STEP 1
for(let i = 0; i < name.length; i++) {
	if(!smupc_name.includes(name[i])) {
		smupc_name.push(name[i]);
	} else trash++;
}

// STEP 2
smupc_name = smupc_name.join('') + (trash+4);

// STEP 3
smupc_name = (Number(n)+1906) + smupc_name;

// STEP 4
smupc_name = smupc_name.split('').reverse().join('');

// STEP 5
console.log(`smupc_${smupc_name}`);