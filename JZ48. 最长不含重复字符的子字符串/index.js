/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  let l = 0;
  let map = new Map();
  let res = 0;
   for (let r = 0; r < s.length; r++) {
      // 只看滑动窗口里的map里面的字符
      if(map.has(s[r]) && map.get(s[r]) >= l){
          l = map.get(s[r]) + 1;
      }
      res = Math.max(res, r - l + 1)
      map.set(s[r], r);
  }
  return res;
};