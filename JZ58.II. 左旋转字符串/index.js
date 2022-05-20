/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
 var reverseLeftWords = function(s, n) {
    if(s === '') return '';

    const left = s.slice(0, n);
    const right = s.slice(n);

    return `${right}${left}`
};

// 三步反转
// 1. 反转区间为前n的子串
// 2. 反转区间为n到末尾的子串
// 3. 反转整个字符串
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
 var reverseLeftWords1 = function(s, n) {
    if(s === '') return '';

    const arr = s.split('');
    reverseArr(arr, 0, n-1);
    reverseArr(arr, n, arr.length-1);
    return arr.reverse().join('');
};

const reverseArr = (arr, l, r) => {
    while(l < r) {
       [arr[l], arr[r]] = [arr[r], arr[l]];
       l++;
       r--;
    }
}