/**
 * @param {string} s
 * @return {character}
 */
 var firstUniqChar = function(s) {
    if(s.length === 0) return ' ';
    for(let char of s) {
        if(s.indexOf(char) === s.lastIndexOf(char)){
            return char;
        }
    }
    return ' ';
};

/**
 * @param {string} s
 * @return {character}
 */
 var firstUniqChar2 = function(s) {
    if(s.length === 0) return ' ';
    const map = new Map();
    for(let char of s) {
        if(map.has(char)){
            map.set(char, map.get(char) + 1);
        }else{
            map.set(char, 1);
        }
    }

    for(let [key, val] of map.entries()){
        if(val === 1){
            return key
        }
    }
    return ' ';
};

// map的遍历方法

