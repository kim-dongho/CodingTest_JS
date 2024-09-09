function solution(k, m, score) {
    let answer = 0;
    const arr = score.sort((a, b) => a - b);
    const throwLength = score.length % m;
    const sliceArr = throwLength === 0 ? arr : arr.slice(throwLength);
    let index = 0;
    
    while(1) {
        const spliceArr = sliceArr.slice(index, index + m);
        index += m;
        if(spliceArr.length === 0) break;
        else {
            answer += spliceArr[0] * spliceArr.length;
        }
    }
    
    return answer;
}