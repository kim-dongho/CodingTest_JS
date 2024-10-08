function solution(triangle) {
    var answer = 0;
    const dp = new Array(triangle.length).fill(0);
    
    for(let i = triangle.length - 1; i >= 0; i--) {
        let max_num = -1;
        for(let j = 0; j < triangle[i].length - 1; j++) {
            if(dp[j] + triangle[i][j] > dp[j+1] + triangle[i][j+1]) max_num = dp[j] + triangle[i][j];
            else max_num = dp[j+1] + triangle[i][j+1];
            
            dp[j] = max_num;
        }
    }
    
    return dp[0] + Number(triangle[0]);
}