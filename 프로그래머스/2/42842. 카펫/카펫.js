function solution(brown, yellow) {
    var answer = [];
    const sum = brown + yellow;
    
    for(let x = 1; x <= sum; x++) {
        let y = Math.floor(sum / x);
        if(yellow === (x-2)*(y-2)) {
            return answer = [y, x];
        }
    }
    return answer;
}