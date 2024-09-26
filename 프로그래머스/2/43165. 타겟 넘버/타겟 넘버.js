function solution(numbers, target) {
    var answer = 0;
    
    const dfs = (depth, sum) => {
        if(depth === numbers.length) {
            if(sum === target) {
                answer++;
            }
            return;
        }
        
        dfs(depth+1, sum + numbers[depth]);
        dfs(depth+1, sum - numbers[depth]);
    }
    
    dfs(0,0);
    
    return answer;
}