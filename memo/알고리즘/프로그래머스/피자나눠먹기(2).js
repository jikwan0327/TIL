function solution(n) {
  let num = n;
  while (num % 6 != 0) {
    num += n;
  }
  var answer = parseInt(num / 6);
  return answer;
}

console.log(solution(6));
