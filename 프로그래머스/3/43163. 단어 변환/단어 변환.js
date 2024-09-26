function solution(begin, target, words) {
    const wordLen = words[0].length;
    let answer = words.length;
    const visited = new Set();
    
    if(!words.includes(target)) return 0;

    const dfs = (depth, str) => {
        if(str === target) {
            if(answer > depth) {
                answer = depth;
            }
        }
        
        if(depth === words.length) {
            return answer;
        };

        for (const word of words) {
            let count = 0;
            if(!visited.has(word)) {
                [...word].map((item, index) => {
                    if(item === str[index]) count++;
                })
            }
            
            if(count === wordLen - 1) {
                visited.add(word);
                dfs(depth+1, word);
                visited.delete(word);
            }
        }
    }
    
    dfs(0, begin);
    
    return answer;
}