function addUpToClear(n) {//3번의 연산(덧셈 1, 곱하기 1, 나누기 1) 
  return n * (n + 1) / 2;
}

function addUpTo(n) {//셀 수 없는 연산
  let total = 0;//= 도 연산(비교, comparisons)
  for (let i = 1; i <= n; i++) {
      total += i;
  }
  return total;
}