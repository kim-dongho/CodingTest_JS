function solution(maps) {
    let answer = 0;
    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];
    const queue = [[0, 0, 1]];
    
    while(queue.length) {
        const [x, y, cnt] = queue.shift();

        if(x === maps.length - 1 && y === maps[0].length - 1) {
            return cnt;
        };
        
        for(let i = 0; i < dx.length; i++) {
            let cx = x + dx[i];
            let cy = y + dy[i];
            
            if(cx >= 0 && cx < maps.length && cy >= 0 && cy < maps[0].length && maps[cx][cy] === 1) {
                queue.push([cx, cy, cnt+1]);
                maps[cx][cy] = 0;
            }
        }
    }

    return -1;
}