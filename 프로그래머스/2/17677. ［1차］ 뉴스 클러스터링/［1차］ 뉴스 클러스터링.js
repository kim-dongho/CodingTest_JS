function solution(str1, str2) {
    const regex = new RegExp("^[A-Z]*$");
    const str1Map = new Map();
    const str2Map = new Map();
    const set = new Set();
    let answer = [0, 0];
    
    str1 = str1.toUpperCase();
    str2 = str2.toUpperCase();
    
    for(let i = 0; i < str1.length-1; i++) {
        let str = str1[i] + str1[i+1];
        if(regex.test(str)) {
            str1Map.has(str) ? str1Map.set(str, str1Map.get(str) + 1) : str1Map.set(str, 1);
            set.add(str);
        }
    }
    
    for(let i = 0; i < str2.length-1; i++) {
        let str = str2[i] + str2[i+1];
        if(regex.test(str)) {
            str2Map.has(str) ? str2Map.set(str, str2Map.get(str) + 1) : str2Map.set(str, 1);
            set.add(str);
        }
    }
 
    [...set].map((item) => {
        let value1 = str1Map.get(item);
        let value2 = str2Map.get(item);
        
        if(value1 && value2) {
            answer[0] += Math.min(value1, value2);
            answer[1] += Math.max(value1, value2);
        } else if(value1) {
            answer[1] += value1;
        } else if(value2) {
            answer[1] += value2;
        }
    })
    
    if(answer[0] === 0 && answer[1] === 0) return 65536;
    
    return Math.floor(answer[0] / answer[1] * 65536);
}