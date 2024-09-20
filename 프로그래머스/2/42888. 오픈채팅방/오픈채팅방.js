function solution(record) {
    var answer = [];
    const map = new Map();
    for (const r of record) {
        const [state, id, name] = r.split(" ");    
        if(state === "Change" && map.get(id)) {
            map.set(id, name);
        }
        
        if(state === "Enter") {
            map.set(id, name);
        }
    }
    
    
     for (const r of record) {
        const [state, id, name] = r.split(" ");
        
        if(state === "Leave") {
            answer.push(`${map.get(id)}님이 나갔습니다.`);
        }

        if(state === "Enter") {
            answer.push(`${map.get(id)}님이 들어왔습니다.`);
        }
    }
    return answer;
}