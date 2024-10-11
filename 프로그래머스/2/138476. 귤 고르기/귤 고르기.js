function solution(k, tangerine) {
    let sum = 0;
    let arr = new Array(Math.max(...tangerine) + 1).fill(0);

    for(let i = 0; i < tangerine.length; i++) {
        arr[tangerine[i]] += 1;
    }
    
    arr = arr.filter((item) => item !== 0).sort((a, b) => {
        if(a > b) return -1;
        else return 1;
    });
    
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
        
        if(sum >= k) return i + 1;
    }
    
    return 1;
}