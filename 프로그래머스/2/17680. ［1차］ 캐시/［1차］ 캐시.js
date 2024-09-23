function solution(cacheSize, cities) {
    var answer = 0;
    let arr = [];
    
    if (cacheSize === 0) return cities.length * 5;
    
    for (let city of cities) {
        city = city.toUpperCase();
        
        if(arr.includes(city)) {
            let index = arr.indexOf(city);
            arr.splice(index, 1);
            arr.unshift(city);
            answer += 1;
        } else {
            if(arr.length === cacheSize) {
                arr.pop();
            }
            arr.unshift(city);
            answer += 5;
        }
    }
    return answer;
}