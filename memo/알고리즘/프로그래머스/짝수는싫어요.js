function solution(n) {
  var answer = [];
  for (let i = 1; i < n + 1; i += 2) {
    answer.push(i);
  }
  return answer;
}

console.log(solution(10));
