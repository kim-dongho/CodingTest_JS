function solution(k, dungeons) {
    var answer = -1;
    const check = new Array(dungeons.length).fill(false);

    const dfs = (p, depth) => {
       for (const [index, dungeon] of dungeons.entries()) {
           const [min, consume] = dungeon;
            
           if(p >= min && !check[index]) {
               check[index] = true;
               dfs(p - consume, depth+1);
               check[index] = false;
           }
       } 
    
        if(depth > answer) answer = depth;
    }
    
    dfs(k, 0);
    return answer;
}