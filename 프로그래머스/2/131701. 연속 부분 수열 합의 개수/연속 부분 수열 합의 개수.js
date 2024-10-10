function solution(elements) {
    const answer = [];
    const arr = [...elements, ...elements.slice(0, -1)];
    
    console.log(arr);
    
    for(let i = 0; i < elements.length; i++) {
        for(let j = 0; j < elements.length; j++) {
            let temp = arr.slice(i, j+i);
            if(temp.length) {
                let num = temp.reduce((acc, cur) => acc + cur);
                answer.push(num);
            }
        }
    }
    
    return new Set(answer).size + 1; 
}