function solution(money) {
    const money_front = [0, ...money.slice(0, -1)];
    const money_back = [0, ...money.slice(1)];
    let max_front = -1;
    let max_back = -1;
    
    if(money.length === 3) return Math.max(...money);
    
    for (let i = 0; i < money_front.length; i++) {
        if(i < 2) {
            max_front = Math.max(max_front, money_front[i]);
        } else {
            max_front = Math.max(max_front, money_front[i-2] + money_front[i]);
        }
        money_front[i] = max_front;
    }

    for (let i = 0; i < money_back.length; i++) {
        if(i < 2) {
            max_back = Math.max(max_back, money_back[i]);
        } else {
            max_back = Math.max(max_back, money_back[i-2] + money_back[i]);
        }
        money_back[i] = max_back;
    }
    
    return Math.max(max_front, max_back);
}