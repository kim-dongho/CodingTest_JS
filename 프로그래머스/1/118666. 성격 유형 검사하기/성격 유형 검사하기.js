function solution(survey, choices) {
    var answer = '';
    const arr = ["R", "T", "C", "F", "J", "M", "A", "N"];
    const map = new Map();
    
    arr.forEach((item) => {
        map.set(item, 0);
    })

    survey.forEach((item, index) => {
        const [nonAgree, agree] = item.split('');
        let point = choices[index] - 4;
        let calc = 0;
        if(point > 0) {
            calc = map.get(agree) + point;
            map.set(agree, calc);
        } else {
            calc = map.get(nonAgree) + Math.abs(point);
            map.set(nonAgree, calc);
        }
    })

    map.get('R') >= map.get('T') ? answer += "R" : answer += "T";
    map.get('C') >= map.get('F') ? answer += "C" : answer += "F";
    map.get('J') >= map.get('M') ? answer += "J" : answer += "M";
    map.get('A') >= map.get('N') ? answer += "A" : answer += "N";
    
    return answer;
}