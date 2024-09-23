function solution(s) {
    let answer = 0;
    let cnt = 1;
    let n_cnt = 0;
    let x = s[0];
    let index = 1;
    while(s.length) {
        if(x === s[index]) {
            cnt++;
        }
        
        if(x !== s[index]) {
            n_cnt++;
        }
        
        if(cnt === n_cnt) {
            s = s.slice(index+1);
            x = s[0];
            index = 0;
            cnt = 1;
            n_cnt = 0;
            answer++;
        }
        
        index++;
    }
    
    return answer;
}