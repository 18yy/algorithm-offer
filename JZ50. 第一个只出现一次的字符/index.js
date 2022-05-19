// /**
//  * @param {string} s
//  * @return {character}
//  */
//  var firstUniqChar = function(s) {
//     if(s.length === 0) return ' ';
//     for(let char of s) {
//         if(s.indexOf(char) === s.lastIndexOf(char)){
//             return char;
//         }
//     }
//     return ' ';
// };

/**
 * @param {string} s
 * @return {character}
 */
 var firstUniqChar = function(s) {
    if(s.length === 0) return ' ';
    const map = new Map();
    for(let char of s) {
        if(map.has(char)){
            map.set(char, map.get(char) + 1);
        }else{
            map.set(char, 1);
        }
    }

    map.forEach((val, key) => {
        console.log(val, key)
        if(val == 1){
            return key;
        }
    })
    return ' ';
};
firstUniqChar("leetcode")
