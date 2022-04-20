// 在一个长度为n的数组里的所有数字都在0到n-1的范围内。 数组中某些数字是重复的，但不知道有几个数字是重复的。也不知道每个数字重复几次。请找出数组中任意一个重复的数字。 
// 例如，如果输入长度为7的数组[2, 3, 1, 0, 2, 5, 3]，那么对应的输出是2或者3。存在不合法的输入的话输出 - 1

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param numbers int整型一维数组 
 * @return int整型
 */

// map 时间复杂度O(N),空间复杂度O(N)
function duplicate( numbers ) {
  const map = new Map();
  const len = numbers.length;
  if(len <= 0) return -1;
  for(let i = 0; i < len; i++){
      const number = numbers[i];
      if(number < 0 || number > len-1) return -1;
      if(map.has(number)){
          return number;
      }
      map.set(number, true);
  }
}

// set 时间复杂度O(N),空间复杂度O(N)
function duplicate1( numbers ) {
  const set = new Set();
  const len = numbers.length;
  if(len <= 0) return -1;
  for(let i = 0; i < len; i++){
      const number = numbers[i];
      if(set.has(number)){
          return number;
      }
      set.add(number);
  }
}

// 先排序，判断是否相同 排序时间复杂度nlogn + 循环n => 时间复杂度O(nlog(n)),空间复杂度O(1)
function duplicate2( numbers ) {
  const len = numbers.length;
  if(len <= 0) return -1;
  numbers.sort((a, b) => a - b);
  for(let i = 0; i < len; i++){
     if(numbers[i] === numbers[i - 1]){
         return numbers[i];
     }
  }
}

// 将数值和下标对应起来（numbers[i]不能存起来，因为要使用引用地址 时间复杂度O(N),空间复杂度O(1)
function duplicate3( numbers ) { 
  const len = numbers.length;
  if (len <= 0) return -1;

  for (let i = 0; i < len; i++){
    while (numbers[i] !== i) {
      if (numbers[numbers[i]] === numbers[i]) return numbers[i];
      [numbers[numbers[i]], numbers[i]] = [numbers[i], numbers[numbers[i]]];
    }
  }
}