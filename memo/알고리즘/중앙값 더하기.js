function solution(array) {
  array.sort(); // 정렬
  let center = parseInt(array.length / 2); //중앙값 인덱스
  let answer = array[center]; //중앙값
  return answer;
}

console.log(solution([1, 3, 2]));
