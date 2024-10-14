function solution(s, skip, index) {
    let answer = '';
    for(let a of s) {
        let chk = 0;
        a = a.charCodeAt(0);
        while(chk < index) {
            a++;
            a = a > 122 ? a - 26 : a;
            if(!skip.includes(String.fromCharCode(a))) {
                chk++;
            }
        } 
        answer += String.fromCharCode(a);
    }
    
    return answer;
}