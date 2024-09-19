function solution(today, terms, privacies) {
    var answer = [];
    const day = new Date(today);
    const map = new Map();
    day.setDate(day.getDate() + 1);
    
    for (const term of terms) {
        const [type, month] = term.split(" ");
        map.set(type, Number(month))
    }

    for (const [index, privacy] of privacies.entries()) {
        let [privacyDate, termsType] = privacy.split(" ");
        privacyDate = new Date(privacyDate);
        let calDate = new Date(privacyDate.setMonth(privacyDate.getMonth() + map.get(termsType)));

        if(day.getTime() > calDate.getTime()) {
            answer.push(index+1);
        }
    }
    return answer;
}