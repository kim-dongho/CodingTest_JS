function solution(keymap, targets) {
    var answer = [];
    const map = new Map();
    
    for (const key of keymap) {
        key.split('').map((item, index) => {
            if(map.get(item) >= 0) {
                if (index < map.get(item)) {
                    map.set(item, index);
                }
            } else {
                map.set(item, index);
            }
        })
    }

    for (const target of targets) {
        let count = 0;
        let flag = false;
        for (const item of target.split('')) {
            if(map.get(item) >= 0) {
                count += map.get(item) + 1;
            } else {
                flag = true;
            }
        }
        
        if(flag) answer.push(-1);
        else answer.push(count);
    }
    return answer;
}