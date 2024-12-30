function solution(n) {
    for(let i = 2; i < Math.floor(n/2); i++) {
        if(Number.isInteger(Math.sqrt(n, i))) {
           return 1;
        }
    }
    return 2;
}