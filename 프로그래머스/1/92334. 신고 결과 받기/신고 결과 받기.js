function solution(id_list, report, k) {
    let answer = new Array(id_list.length).fill(0);
    let check = new Array(id_list.length).fill(0);
    const map = new Map();
    const checkMap = new Map();
    
    for (const [index, id] of id_list.entries()) {
        map.set(id, []);
        checkMap.set(id, index);
    }
    
    for (const rp of report) {
        const [first, second] = rp.split(" ");
        
        if(!map.get(first).includes(second)) {
            map.get(first).push(second); // 신고 한 사람
            check[checkMap.get(second)] += 1; // 신고 당한사람
        }
    }
    
    let index = 0;
    map.forEach((item) => {
        item.forEach((c_item) => {
            if(check[checkMap.get(c_item)] >= k) {
                answer[index] += 1;
            }
        })
        index++;
    })
    
    return answer;
}