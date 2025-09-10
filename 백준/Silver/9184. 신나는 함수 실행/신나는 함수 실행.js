const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const splitKeyword = process.platform === "linux" ? '\n' : '\r\n';
const fs = require('fs');
const isTest = false;

const input = fs
  .readFileSync(isTest ? 0 : filePath, 'utf-8')
  .toString()
  .trim()
  .split(splitKeyword);

const arr = input.slice(0, input.length-1);
const dp = Array.from({ length: 21 }, () =>
  Array.from({ length: 21 }, () =>
    Array(21).fill(0)
  )
);

const init = () => {
	for(let i = 0; i < dp.length; i++) {
		for(let j = 0; j < dp[i].length; j++) {
			for(let k = 0; k < dp[j].length; k++) {
				if(i === 0 || j === 0 || k === 0) {
					dp[i][j][k] = 1;
					continue;
				}

				if(i < j && j < k) {
					dp[i][j][k] = dp[i][j][k-1] + dp[i][j-1][k-1] - dp[i][j-1][k];
					continue;
				}
				
				dp[i][j][k] = dp[i-1][j][k] + dp[i-1][j-1][k] + dp[i-1][j][k-1] - dp[i-1][j-1][k-1];
			}
		}
	}
}

const solution = () => {
	init();

	for(let i = 0; i < arr.length; i++) {
		const [a, b, c] = arr[i].split(' ').map((v) => Number(v));
		let value;
        
		if(a <= 0 || b <= 0 || c <= 0) value = 1;
		else if(a > 20 || b > 20 || c > 20) value = dp[20][20][20];
		else value = dp[a][b][c];

	    console.log(`w(${a}, ${b}, ${c}) = ${value}`);
	}
}

solution();
