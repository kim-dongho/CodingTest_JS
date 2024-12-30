function solution(n, k) {
    var answer = 0;
    return n * 12000 + k * 2000 - Math.floor(n/10) * 2000;
}