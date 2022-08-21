function sum(arr) {//O(1)의 공간 차지
  let total = 0;
  for (let i = 0; i <= arr.length; i++) {
      total += arr[i];
  }
  return total;
}

function double(arr) {//O(n)의 공간 차지
  let newArr = [];
  for (let i = 0; i <= arr.length; i++) {
      newArr.push(2 * arr[i]);
  }
  return newArr;
}