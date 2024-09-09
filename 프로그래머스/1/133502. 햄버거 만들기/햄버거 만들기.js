function solution(ingredient) {
    var answer = 0;
    let stack = [];
    
    ingredient.forEach((item, index) => {
        stack.push(item);
        
        if(stack.length >= 4) {
            let tmp = stack.slice(-4);
            
            if(tmp.join('') === '1231') {
                stack.pop();
                stack.pop();
                stack.pop();
                stack.pop();
                answer++;
            }
        }
    })
    return answer;
}